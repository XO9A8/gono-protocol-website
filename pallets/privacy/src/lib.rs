#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono Privacy Pallet — ZK-SNARK Attestation & Proof Verifier
//!
//! Implements Section 8.3 of the Gono Protocol Whitepaper (Zero-Knowledge Proof Circuits).
//!
//! ## Overview
//!
//! - **Humanity Proof**: Sybil resistance via verified human registry membership.
//! - **Credential Verification**: Anonymous journalist credential verification (press pass, whistleblower protection).
//! - **Jurisdiction Proof**: Attribute verification without revealing specific PII.
//! - **Modular ZK Verifier**: Generic `ZkVerifier<ProofType>` trait supporting Groth16, PLONK, STARKs.
//! - **Replay Protection**: `NullifierRegistry` map prevents proof double-spending and replay attacks.
//! - **Attestation Lifecycle**: Verifiable attestations tied to accounts, with self-revocation support.

pub mod types;
pub mod verifier;

#[cfg(test)]
mod mock;
#[cfg(test)]
mod tests;

pub use types::*;
pub use verifier::*;

#[frame_support::pallet]
pub mod pallet {
	use super::types::*;
	use super::verifier::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;
	use sp_core::H256;

	// ─── Configuration Trait ───────────────────────────────────────────

	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Pluggable Zero-Knowledge proof verifier engine.
		type Verifier: ZkVerifier<ProofType>;

		/// Maximum size of proof bytes in an extrinsic call.
		#[pallet::constant]
		type MaxProofSize: Get<u32>;

		/// Maximum size of public inputs in an extrinsic call.
		#[pallet::constant]
		type MaxPublicInputsSize: Get<u32>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	// ─── Storage ───────────────────────────────────────────────────────

	/// Registry of consumed nullifiers to prevent proof double-spending/replay: NullifierHash -> bool.
	#[pallet::storage]
	#[pallet::getter(fn nullifier_registry)]
	pub type NullifierRegistry<T: Config> = StorageMap<_, Blake2_128Concat, H256, bool, ValueQuery>;

	/// On-chain verified attestations: (AccountId, ProofType) -> Attestation<T>.
	#[pallet::storage]
	#[pallet::getter(fn verified_attestations)]
	pub type VerifiedAttestations<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		T::AccountId,
		Blake2_128Concat,
		ProofType,
		Attestation<T>,
		OptionQuery,
	>;

	// ─── Events ────────────────────────────────────────────────────────

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A zero-knowledge proof was successfully verified and registered as an on-chain attestation.
		AttestationVerified {
			who: T::AccountId,
			proof_type: ProofType,
			nullifier_hash: H256,
			block_number: BlockNumberFor<T>,
		},
		/// An attestation was successfully revoked by its owner.
		AttestationRevoked {
			who: T::AccountId,
			proof_type: ProofType,
			nullifier_hash: H256,
		},
	}

	// ─── Errors ────────────────────────────────────────────────────────

	#[pallet::error]
	pub enum Error<T> {
		/// The supplied zero-knowledge proof failed verification against public inputs.
		ProofVerificationFailed,
		/// The nullifier has already been consumed (replay attack prevention).
		NullifierAlreadyUsed,
		/// No active attestation of this proof type found for the caller.
		AttestationNotFound,
		/// The provided nullifier does not match the registered attestation.
		InvalidNullifier,
		/// The proof bytes payload exceeds the maximum allowed size.
		ProofTooLarge,
		/// The public inputs payload exceeds the maximum allowed size.
		PublicInputsTooLarge,
	}

	// ─── Extrinsics ────────────────────────────────────────────────────

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Verify a zero-knowledge proof and register an on-chain attestation.
		///
		/// - `proof_type`: Type of proof being attested (Humanity, Credential, or Jurisdiction).
		/// - `proof_bytes`: Serialized ZK proof payload.
		/// - `public_inputs`: Serialized public inputs matching the circuit definition.
		/// - `nullifier_hash`: 32-byte cryptographic nullifier preventing proof replay.
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(25_000, 0) + T::DbWeight::get().reads_writes(2, 2))]
		pub fn verify_and_attest(
			origin: OriginFor<T>,
			proof_type: ProofType,
			proof_bytes: sp_runtime::sp_std::vec::Vec<u8>,
			public_inputs: sp_runtime::sp_std::vec::Vec<u8>,
			nullifier_hash: H256,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;

			// Validate size bounds
			ensure!(
				proof_bytes.len() as u32 <= T::MaxProofSize::get(),
				Error::<T>::ProofTooLarge
			);
			ensure!(
				public_inputs.len() as u32 <= T::MaxPublicInputsSize::get(),
				Error::<T>::PublicInputsTooLarge
			);

			// Replay protection: check nullifier
			ensure!(
				!NullifierRegistry::<T>::contains_key(nullifier_hash),
				Error::<T>::NullifierAlreadyUsed
			);

			// Verify ZK proof via the configured verifier hook
			ensure!(
				T::Verifier::verify(&proof_type, &proof_bytes, &public_inputs),
				Error::<T>::ProofVerificationFailed
			);

			let now = frame_system::Pallet::<T>::block_number();

			// Mark nullifier as spent
			NullifierRegistry::<T>::insert(nullifier_hash, true);

			// Record attestation
			let attestation = Attestation::<T> {
				proof_type,
				attester: who.clone(),
				verified_at: now,
				nullifier_hash,
			};

			VerifiedAttestations::<T>::insert(&who, proof_type, &attestation);

			Self::deposit_event(Event::AttestationVerified {
				who,
				proof_type,
				nullifier_hash,
				block_number: now,
			});

			Ok(())
		}

		/// Revoke an active attestation owned by the caller.
		///
		/// - `proof_type`: Type of attestation to revoke.
		/// - `nullifier_hash`: Nullifier hash of the attestation to verify ownership and identity.
		#[pallet::call_index(1)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().reads_writes(1, 1))]
		pub fn revoke_attestation(
			origin: OriginFor<T>,
			proof_type: ProofType,
			nullifier_hash: H256,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;

			let attestation = VerifiedAttestations::<T>::get(&who, proof_type)
				.ok_or(Error::<T>::AttestationNotFound)?;

			ensure!(
				attestation.nullifier_hash == nullifier_hash,
				Error::<T>::InvalidNullifier
			);

			// Remove attestation from storage (nullifier remains spent in NullifierRegistry)
			VerifiedAttestations::<T>::remove(&who, proof_type);

			Self::deposit_event(Event::AttestationRevoked {
				who,
				proof_type,
				nullifier_hash,
			});

			Ok(())
		}
	}
}

pub use pallet::*;
