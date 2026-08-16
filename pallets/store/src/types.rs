//! Data types for pallet-gono-store (ERC-7053 Media Receipts & CIDs)
//!
//! Defines the on-chain representation of a Media Receipt following the ERC-7053
//! standard, adapted for Substrate's bounded-type and SCALE-codec constraints.

use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
use frame_support::pallet_prelude::*;
use frame_system::pallet_prelude::BlockNumberFor;

/// Upper bound for CID byte length (CIDv1 typically ≤ 68 bytes).
pub type CidOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxCidLength>;

/// Upper bound for C2PA Manifest URI length.
pub type C2paUriOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxC2paUriLength>;

/// An on-chain Media Receipt adhering to the ERC-7053 standard.
///
/// Fields map to the ERC-7053 Commit event:
/// - `cid`: Content Identifier (CIDv1, self-describing hash)
/// - `content_hash`: SHA-256 / Keccak-256 digest of the raw media bytes
/// - `author`: Account that originally committed the receipt
/// - `timestamp`: Block number when the receipt was committed
/// - `c2pa_manifest_uri`: Optional URI pointing to the full C2PA manifest
/// - `parent_cid`: Optional parent CID linking this receipt into a DAG provenance chain
#[derive(
	Encode, Decode, DecodeWithMemTracking, Clone, PartialEq, Eq, Debug, TypeInfo, MaxEncodedLen,
)]
#[scale_info(skip_type_params(T))]
pub struct MediaReceipt<T: crate::pallet::Config> {
	pub cid: CidOf<T>,
	pub content_hash: [u8; 32],
	pub author: T::AccountId,
	pub timestamp: BlockNumberFor<T>,
	pub c2pa_manifest_uri: C2paUriOf<T>,
	pub parent_cid: Option<CidOf<T>>,
}
