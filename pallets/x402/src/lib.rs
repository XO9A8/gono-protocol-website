#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono x402 Pallet — HTTP 402 State Channel Micropayments
//!
//! Implements state channels for machine-to-machine micropayments per Whitepaper
//! Sections 5.4 and 10.2 (x402 Open Standard).
//!
//! ## Overview
//!
//! - **Open** state payment channels with native token deposits held via `fungible::hold`.
//! - **Top Up** existing open channels before expiration.
//! - **Settle** payments using off-chain signed cryptographic vouchers (sr25519/ed25519/ecdsa).
//! - **Replay Protection** prevents reusing vouchers through an on-chain `NonceRegistry`.
//! - **Dispute Grace Period** ensures recipients have a settlement window before timeouts.
//! - **Claim Timeout** allows senders to reclaim unspent deposits after channel expiration.
//!
//! ## Off-Chain Voucher Mechanism
//!
//! 1. AI Agent (Sender 310) opens a channel locking deposits on-chain.
//! 2. AI Agent streams off-chain vouchers signed over `(b"gono-x402-voucher", channel_id, cumulative_amount, nonce)`.
//! 3. Service Provider (Recipient 330) submits the latest voucher to `settle_channel`.
//! 4. Pallet validates the signature, distributes the payout diff, and updates state.

pub mod types;

#[cfg(test)]
mod mock;
#[cfg(test)]
mod tests;

pub use types::*;

#[frame_support::pallet]
pub mod pallet {
	use super::types::*;
	use frame_support::pallet_prelude::*;
	use frame_support::traits::fungible::{
		self, hold::Mutate as HoldMutate, Mutate as FungibleMutate,
	};
	use frame_support::traits::tokens::{Precision, Preservation};
	use frame_system::pallet_prelude::*;
	use sp_runtime::traits::{Hash, IdentifyAccount, Saturating, Verify, Zero};

	// ─── Hold Reason Enum ────────────────────────────────────────────────

	#[pallet::composite_enum]
	pub enum HoldReason {
		/// Funds held as deposit for a payment channel.
		ChannelDeposit,
	}

	// ─── Configuration Trait ───────────────────────────────────────────

	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Native token ledger supporting inspection, mutation, and holds.
		type NativeBalance: fungible::Inspect<Self::AccountId>
			+ FungibleMutate<Self::AccountId>
			+ fungible::hold::Inspect<Self::AccountId, Reason = Self::RuntimeHoldReason>
			+ HoldMutate<Self::AccountId, Reason = Self::RuntimeHoldReason>;

		/// The overarching hold reason enum.
		type RuntimeHoldReason: From<HoldReason>;

		/// Cryptographic signature type used to verify off-chain vouchers.
		type Signature: Parameter + Verify<Signer = Self::Signer>;

		/// Signer public key type corresponding to the signature.
		type Signer: Parameter + IdentifyAccount<AccountId = Self::AccountId>;

		/// Maximum duration for a payment channel in blocks.
		#[pallet::constant]
		type MaxChannelDuration: Get<BlockNumberFor<Self>>;

		/// Dispute grace period in blocks after channel expiration.
		#[pallet::constant]
		type DisputePeriod: Get<BlockNumberFor<Self>>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	// ─── Storage ───────────────────────────────────────────────────────

	/// Payment channels by ChannelId: ChannelId -> ChannelDetails.
	#[pallet::storage]
	#[pallet::getter(fn channels)]
	pub type Channels<T: Config> =
		StorageMap<_, Blake2_128Concat, ChannelIdOf<T>, ChannelDetails<T>, OptionQuery>;

	/// Double-map preventing replay attacks for off-chain vouchers: (ChannelId, Nonce) -> bool.
	#[pallet::storage]
	#[pallet::getter(fn nonce_registry)]
	pub type NonceRegistry<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		ChannelIdOf<T>,
		Blake2_128Concat,
		u64,
		bool,
		ValueQuery,
	>;

	/// Number of channels opened by each sender account (used for deterministic ChannelId generation).
	#[pallet::storage]
	#[pallet::getter(fn sender_channel_count)]
	pub type SenderChannelCount<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, u64, ValueQuery>;

	/// Total count of active payment channels on the protocol.
	#[pallet::storage]
	#[pallet::getter(fn channel_count)]
	pub type ChannelCount<T: Config> = StorageValue<_, u32, ValueQuery>;

	// ─── Events ────────────────────────────────────────────────────────

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A new micropayment state channel was opened.
		ChannelOpened {
			channel_id: ChannelIdOf<T>,
			sender: T::AccountId,
			recipient: T::AccountId,
			deposit: BalanceOf<T>,
			expiration: BlockNumberFor<T>,
		},

		/// An existing channel received an additional deposit top-up.
		ChannelToppedUp {
			channel_id: ChannelIdOf<T>,
			additional_deposit: BalanceOf<T>,
			total_deposit: BalanceOf<T>,
		},

		/// A voucher was settled and funds transferred to recipient.
		ChannelSettled {
			channel_id: ChannelIdOf<T>,
			cumulative_amount: BalanceOf<T>,
			payout_amount: BalanceOf<T>,
			nonce: u64,
			is_closed: bool,
		},

		/// An expired channel timed out and remaining deposit was refunded.
		ChannelTimedOut {
			channel_id: ChannelIdOf<T>,
			sender: T::AccountId,
			refund_amount: BalanceOf<T>,
		},
	}

	// ─── Errors ────────────────────────────────────────────────────────

	#[pallet::error]
	pub enum Error<T> {
		/// The specified channel ID does not exist in storage.
		ChannelNotFound,
		/// A channel with this ID already exists.
		ChannelAlreadyExists,
		/// The caller is not the sender of the channel.
		NotChannelSender,
		/// The caller is not the recipient of the channel.
		NotChannelRecipient,
		/// The channel has already expired past the settlement deadline.
		ChannelExpired,
		/// The channel has not yet reached its expiration block.
		ChannelNotExpired,
		/// The channel is in its dispute grace period; timeout claim blocked.
		DisputePeriodActive,
		/// The voucher nonce has already been used (replay attack prevention).
		NonceAlreadyUsed,
		/// The cryptographic signature on the voucher is invalid.
		InvalidSignature,
		/// The settlement amount is not greater than the previous settlement.
		InvalidSettlementAmount,
		/// The cumulative settlement amount exceeds the total deposited funds.
		SettlementExceedsDeposit,
		/// Requested channel duration exceeds the protocol maximum.
		DurationExceedsMax,
		/// Channel duration must be strictly greater than zero.
		InvalidDuration,
		/// The channel has already been closed.
		ChannelAlreadyClosed,
		/// Initial deposit must be strictly greater than zero.
		ZeroDeposit,
		/// Operation amount must be strictly greater than zero.
		ZeroAmount,
	}

	// ─── Extrinsics ────────────────────────────────────────────────────

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Open a new payment state channel and lock the initial deposit on hold.
		///
		/// - `recipient`: The account authorized to settle payment vouchers.
		/// - `initial_deposit`: The amount of native GONO tokens to fund into the channel.
		/// - `duration`: Lifetime of the channel in blocks (must be <= `MaxChannelDuration`).
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(15_000, 0) + T::DbWeight::get().reads_writes(2, 3))]
		pub fn open_channel(
			origin: OriginFor<T>,
			recipient: T::AccountId,
			initial_deposit: BalanceOf<T>,
			duration: BlockNumberFor<T>,
		) -> DispatchResult {
			let sender = ensure_signed(origin)?;

			ensure!(!initial_deposit.is_zero(), Error::<T>::ZeroDeposit);
			ensure!(!duration.is_zero(), Error::<T>::InvalidDuration);
			ensure!(
				duration <= T::MaxChannelDuration::get(),
				Error::<T>::DurationExceedsMax
			);

			// Compute deterministic ChannelId based on sender, recipient, and sender nonce
			let sender_nonce = SenderChannelCount::<T>::get(&sender);
			let channel_id =
				T::Hashing::hash_of(&(b"gono-x402-channel", &sender, &recipient, sender_nonce));

			ensure!(
				!Channels::<T>::contains_key(channel_id),
				Error::<T>::ChannelAlreadyExists
			);

			// Lock deposit on hold
			T::NativeBalance::hold(&HoldReason::ChannelDeposit.into(), &sender, initial_deposit)?;

			let now = frame_system::Pallet::<T>::block_number();
			let expiration_block = now.saturating_add(duration);

			let channel = ChannelDetails::<T> {
				sender: sender.clone(),
				recipient: recipient.clone(),
				deposit_amount: initial_deposit,
				settled_amount: Zero::zero(),
				expiration_block,
				closed: false,
			};

			Channels::<T>::insert(channel_id, &channel);
			SenderChannelCount::<T>::insert(&sender, sender_nonce.saturating_add(1));
			ChannelCount::<T>::mutate(|count| *count = count.saturating_add(1));

			Self::deposit_event(Event::ChannelOpened {
				channel_id,
				sender,
				recipient,
				deposit: initial_deposit,
				expiration: expiration_block,
			});

			Ok(())
		}

		/// Top up an active channel with additional funds before expiration.
		///
		/// - `channel_id`: The ID of the channel to fund.
		/// - `additional_deposit`: Additional native tokens to lock into the channel.
		#[pallet::call_index(1)]
		#[pallet::weight(Weight::from_parts(15_000, 0) + T::DbWeight::get().reads_writes(1, 2))]
		pub fn top_up_channel(
			origin: OriginFor<T>,
			channel_id: ChannelIdOf<T>,
			additional_deposit: BalanceOf<T>,
		) -> DispatchResult {
			let sender = ensure_signed(origin)?;

			ensure!(!additional_deposit.is_zero(), Error::<T>::ZeroAmount);

			Channels::<T>::try_mutate(channel_id, |maybe_channel| -> DispatchResult {
				let channel = maybe_channel.as_mut().ok_or(Error::<T>::ChannelNotFound)?;

				ensure!(!channel.closed, Error::<T>::ChannelAlreadyClosed);
				ensure!(channel.sender == sender, Error::<T>::NotChannelSender);

				let now = frame_system::Pallet::<T>::block_number();
				ensure!(now < channel.expiration_block, Error::<T>::ChannelExpired);

				// Lock additional funds on hold
				T::NativeBalance::hold(
					&HoldReason::ChannelDeposit.into(),
					&sender,
					additional_deposit,
				)?;

				channel.deposit_amount = channel.deposit_amount.saturating_add(additional_deposit);

				Self::deposit_event(Event::ChannelToppedUp {
					channel_id,
					additional_deposit,
					total_deposit: channel.deposit_amount,
				});

				Ok(())
			})
		}

		/// Settle payment vouchers and transfer funds to the channel recipient.
		///
		/// - `channel_id`: Target payment channel ID.
		/// - `cumulative_amount`: Total cumulative payment authorized by the voucher.
		/// - `nonce`: Unique voucher sequence number (replay protected).
		/// - `signature`: Cryptographic signature over the voucher payload.
		/// - `close_channel`: If true, closes the channel and returns any remaining deposit to sender.
		#[pallet::call_index(2)]
		#[pallet::weight(Weight::from_parts(25_000, 0) + T::DbWeight::get().reads_writes(2, 3))]
		pub fn settle_channel(
			origin: OriginFor<T>,
			channel_id: ChannelIdOf<T>,
			cumulative_amount: BalanceOf<T>,
			nonce: u64,
			signature: T::Signature,
			close_channel: bool,
		) -> DispatchResult {
			let caller = ensure_signed(origin)?;

			Channels::<T>::try_mutate(channel_id, |maybe_channel| -> DispatchResult {
				let channel = maybe_channel.as_mut().ok_or(Error::<T>::ChannelNotFound)?;

				ensure!(!channel.closed, Error::<T>::ChannelAlreadyClosed);
				ensure!(channel.recipient == caller, Error::<T>::NotChannelRecipient);

				let now = frame_system::Pallet::<T>::block_number();
				let settlement_deadline = channel
					.expiration_block
					.saturating_add(T::DisputePeriod::get());
				ensure!(now < settlement_deadline, Error::<T>::ChannelExpired);

				ensure!(
					cumulative_amount > channel.settled_amount,
					Error::<T>::InvalidSettlementAmount
				);
				ensure!(
					cumulative_amount <= channel.deposit_amount,
					Error::<T>::SettlementExceedsDeposit
				);

				// Check replay protection
				ensure!(
					!NonceRegistry::<T>::contains_key(channel_id, nonce),
					Error::<T>::NonceAlreadyUsed
				);

				// Verify cryptographic signature over standard voucher payload against channel.sender
				let payload = construct_voucher_payload(&channel_id, &cumulative_amount, nonce);
				ensure!(
					signature.verify(&payload[..], &channel.sender),
					Error::<T>::InvalidSignature
				);

				// Compute payout delta
				let payout_amount = cumulative_amount.saturating_sub(channel.settled_amount);

				// Release payout from sender hold and transfer to recipient
				T::NativeBalance::release(
					&HoldReason::ChannelDeposit.into(),
					&channel.sender,
					payout_amount,
					Precision::Exact,
				)?;

				T::NativeBalance::transfer(
					&channel.sender,
					&channel.recipient,
					payout_amount,
					Preservation::Expendable,
				)?;

				channel.settled_amount = cumulative_amount;
				NonceRegistry::<T>::insert(channel_id, nonce, true);

				if close_channel {
					channel.closed = true;
					let unspent = channel
						.deposit_amount
						.saturating_sub(channel.settled_amount);
					if !unspent.is_zero() {
						T::NativeBalance::release(
							&HoldReason::ChannelDeposit.into(),
							&channel.sender,
							unspent,
							Precision::Exact,
						)?;
					}
					ChannelCount::<T>::mutate(|count| *count = count.saturating_sub(1));
				}

				Self::deposit_event(Event::ChannelSettled {
					channel_id,
					cumulative_amount,
					payout_amount,
					nonce,
					is_closed: channel.closed,
				});

				Ok(())
			})
		}

		/// Claim timeout refund of unspent channel deposit after expiration and dispute period.
		///
		/// - `channel_id`: Target payment channel ID.
		#[pallet::call_index(3)]
		#[pallet::weight(Weight::from_parts(15_000, 0) + T::DbWeight::get().reads_writes(1, 2))]
		pub fn claim_channel_timeout(
			origin: OriginFor<T>,
			channel_id: ChannelIdOf<T>,
		) -> DispatchResult {
			let caller = ensure_signed(origin)?;

			Channels::<T>::try_mutate(channel_id, |maybe_channel| -> DispatchResult {
				let channel = maybe_channel.as_mut().ok_or(Error::<T>::ChannelNotFound)?;

				ensure!(!channel.closed, Error::<T>::ChannelAlreadyClosed);
				ensure!(channel.sender == caller, Error::<T>::NotChannelSender);

				let now = frame_system::Pallet::<T>::block_number();
				ensure!(
					now >= channel.expiration_block,
					Error::<T>::ChannelNotExpired
				);

				let dispute_deadline = channel
					.expiration_block
					.saturating_add(T::DisputePeriod::get());
				ensure!(now >= dispute_deadline, Error::<T>::DisputePeriodActive);

				let unspent = channel
					.deposit_amount
					.saturating_sub(channel.settled_amount);
				if !unspent.is_zero() {
					T::NativeBalance::release(
						&HoldReason::ChannelDeposit.into(),
						&channel.sender,
						unspent,
						Precision::Exact,
					)?;
				}

				channel.closed = true;
				ChannelCount::<T>::mutate(|count| *count = count.saturating_sub(1));

				Self::deposit_event(Event::ChannelTimedOut {
					channel_id,
					sender: caller,
					refund_amount: unspent,
				});

				Ok(())
			})
		}
	}
}

pub use pallet::*;
