use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
use frame_support::pallet_prelude::*;
use frame_system::pallet_prelude::BlockNumberFor;
use sp_core::H256;

/// Nullifier hash type alias (32-byte cryptographic nullifier).
pub type NullifierHash = H256;

/// Proof types supported by the Gono Protocol Privacy Pallet per Whitepaper Section 8.3.
#[derive(
	Encode,
	Decode,
	DecodeWithMemTracking,
	Clone,
	Copy,
	PartialEq,
	Eq,
	Debug,
	TypeInfo,
	MaxEncodedLen,
)]
pub enum ProofType {
	/// Proves membership in a verified human registry without revealing identity (Sybil resistance).
	HumanityProof,
	/// Proves possession of credentials (e.g., press pass, whistleblower protection) without disclosure.
	CredentialVerification,
	/// Proves attributes (e.g., jurisdiction, accreditation, age) meet requirements without revealing specific values.
	JurisdictionProof,
}

/// Record of an on-chain verified zero-knowledge attestation.
#[derive(
	Encode, Decode, DecodeWithMemTracking, Clone, PartialEq, Eq, Debug, TypeInfo, MaxEncodedLen,
)]
#[scale_info(skip_type_params(T))]
pub struct Attestation<T: crate::pallet::Config> {
	/// The specific proof type attested.
	pub proof_type: ProofType,
	/// Account that submitted and holds the attestation.
	pub attester: T::AccountId,
	/// Block number when the proof was successfully verified.
	pub verified_at: BlockNumberFor<T>,
	/// Unique nullifier hash consumed for this attestation to prevent replay attacks.
	pub nullifier_hash: NullifierHash,
}
