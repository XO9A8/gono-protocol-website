use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
use frame_support::pallet_prelude::*;

/// Upper bound type alias for CID byte length.
pub type CidOf<T> = BoundedVec<u8, <T as crate::pallet::Config>::MaxCidLength>;

/// Analyst review verdict on content validity.
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
pub enum Verdict {
	/// Analyst confirms content is genuine / authentic.
	Approve,
	/// Analyst rejects content as fake / manipulated.
	Reject,
}

/// An analyst review record stored on-chain.
#[derive(
	Encode, Decode, DecodeWithMemTracking, Clone, PartialEq, Eq, Debug, TypeInfo, MaxEncodedLen,
)]
pub struct AnalystReview {
	/// The verdict given by the analyst.
	pub verdict: Verdict,
	/// Numerical stake amount pledged by the analyst.
	pub stake: u128,
}

/// Optional trait hook to inspect/validate content existence in external storage (e.g. pallet-gono-store).
pub trait ContentInspector<Cid> {
	/// Check whether a CID exists and is valid.
	fn content_exists(cid: &Cid) -> bool;
}

/// Default no-op implementation: always returns true.
impl<Cid> ContentInspector<Cid> for () {
	fn content_exists(_cid: &Cid) -> bool {
		true
	}
}
