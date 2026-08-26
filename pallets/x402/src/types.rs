//! Data types for pallet-gono-x402 (HTTP 402 State Channel Micropayments)
//!
//! Defines the on-chain representation of payment channels, balances,
//! and voucher verification helpers.

use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
use frame_support::pallet_prelude::*;
use frame_support::traits::fungible;
use frame_system::pallet_prelude::BlockNumberFor;
use sp_runtime::Vec;

/// Balance type alias extracted from the NativeBalance fungible configuration.
pub type BalanceOf<T> = <<T as crate::pallet::Config>::NativeBalance as fungible::Inspect<
	<T as frame_system::Config>::AccountId,
>>::Balance;

/// Channel ID type alias derived from the system hasher.
pub type ChannelIdOf<T> = <T as frame_system::Config>::Hash;

/// Details of an on-chain state payment channel for HTTP 402 machine commerce.
#[derive(
	Encode, Decode, DecodeWithMemTracking, Clone, PartialEq, Eq, Debug, TypeInfo, MaxEncodedLen,
)]
#[scale_info(skip_type_params(T))]
pub struct ChannelDetails<T: crate::pallet::Config> {
	/// The account funding the channel (AI Agent / Payer 310).
	pub sender: T::AccountId,
	/// The account receiving payments (Service Provider 330).
	pub recipient: T::AccountId,
	/// Total amount deposited and held in reserve on-chain.
	pub deposit_amount: BalanceOf<T>,
	/// Cumulative amount already settled to the recipient.
	pub settled_amount: BalanceOf<T>,
	/// Block number at which the channel expires.
	pub expiration_block: BlockNumberFor<T>,
	/// Flag indicating whether the channel has been finalized/closed.
	pub closed: bool,
}

/// Helper function to construct the deterministic voucher message payload
/// signed off-chain by payment channel senders.
pub fn construct_voucher_payload<Hash: Encode, Balance: Encode>(
	channel_id: &Hash,
	cumulative_amount: &Balance,
	nonce: u64,
) -> Vec<u8> {
	(b"gono-x402-voucher", channel_id, cumulative_amount, nonce).encode()
}
