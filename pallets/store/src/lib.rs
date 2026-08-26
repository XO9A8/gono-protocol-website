#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono Store Pallet — ERC-7053 Media Receipts & CID Provenance
//!
//! This pallet implements the ERC-7053 Media Receipt standard on Substrate FRAME,
//! providing on-chain content-addressed provenance for digital media assets.
//!
//! ## Overview
//!
//! - **Commit** a `MediaReceipt` identified by its CID (Content Identifier).
//! - **Link** receipts into a DAG via `parent_cid` to track revision provenance.
//! - **Transfer** asset ownership between accounts.
//! - **Query** receipts by CID or by author through a double-map index.
//!
//! ## Storage Layout
//!
//! | Storage Item      | Type                                  | Purpose                              |
//! |-------------------|---------------------------------------|--------------------------------------|
//! | `Receipts`        | `CID → MediaReceipt`                 | Primary receipt store                |
//! | `AuthorReceipts`  | `(AccountId, CID) → ()`              | Per-author index                     |
//! | `ProvenanceDAG`   | `CID → BoundedVec<CID>`              | Parent → children revision links     |

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
	use frame_system::pallet_prelude::*;

	// ─── Configuration Trait ───────────────────────────────────────────

	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Maximum byte length of a CID (CIDv1 is typically ≤ 68 bytes).
		#[pallet::constant]
		type MaxCidLength: Get<u32>;

		/// Maximum byte length of a C2PA Manifest URI.
		#[pallet::constant]
		type MaxC2paUriLength: Get<u32>;

		/// Maximum number of child revisions a single CID can have in the DAG.
		#[pallet::constant]
		type MaxChildRevisions: Get<u32>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	// ─── Storage ───────────────────────────────────────────────────────

	/// Primary store: CID → MediaReceipt.
	#[pallet::storage]
	#[pallet::getter(fn receipts)]
	pub type Receipts<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, MediaReceipt<T>, OptionQuery>;

	/// Per-author index: (AccountId, CID) → ().
	/// Enables efficient enumeration of all CIDs owned by a given account.
	#[pallet::storage]
	#[pallet::getter(fn author_receipts)]
	pub type AuthorReceipts<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		T::AccountId,
		Blake2_128Concat,
		CidOf<T>,
		(),
		OptionQuery,
	>;

	/// Provenance DAG: parent CID → bounded list of child revision CIDs.
	#[pallet::storage]
	#[pallet::getter(fn provenance_dag)]
	pub type ProvenanceDAG<T: Config> = StorageMap<
		_,
		Blake2_128Concat,
		CidOf<T>,
		BoundedVec<CidOf<T>, T::MaxChildRevisions>,
		ValueQuery,
	>;

	// ─── Events ────────────────────────────────────────────────────────

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A new Media Receipt was committed on-chain.
		ReceiptCommitted {
			cid: CidOf<T>,
			author: T::AccountId,
			content_hash: [u8; 32],
		},

		/// A child CID was linked to a parent, updating the provenance DAG.
		ProvenanceUpdated {
			parent_cid: CidOf<T>,
			child_cid: CidOf<T>,
		},

		/// Ownership of an asset (identified by CID) was transferred.
		OwnershipTransferred {
			cid: CidOf<T>,
			from: T::AccountId,
			to: T::AccountId,
		},
	}

	// ─── Errors ────────────────────────────────────────────────────────

	#[pallet::error]
	pub enum Error<T> {
		/// A receipt with this CID already exists on-chain.
		CIDAlreadyExists,

		/// The specified parent CID does not exist in storage.
		ParentNotFound,

		/// Caller is not the current owner/author of this receipt.
		Unauthorized,

		/// The CID was not found in storage.
		CIDNotFound,

		/// The provenance DAG has reached its maximum child count for this parent.
		MaxChildRevisionsExceeded,
	}

	// ─── Extrinsics ────────────────────────────────────────────────────

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Commit a new ERC-7053 Media Receipt on-chain.
		///
		/// - `cid`: Content Identifier bytes (CIDv1).
		/// - `content_hash`: 32-byte digest of the raw media.
		/// - `c2pa_uri`: URI pointing to the C2PA manifest (may be empty).
		/// - `parent_cid`: Optional parent CID to link into the provenance DAG.
		///
		/// Emits `ReceiptCommitted` and optionally `ProvenanceUpdated`.
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().writes(3))]
		pub fn commit_receipt(
			origin: OriginFor<T>,
			cid: CidOf<T>,
			content_hash: [u8; 32],
			c2pa_uri: C2paUriOf<T>,
			parent_cid: Option<CidOf<T>>,
		) -> DispatchResult {
			let author = ensure_signed(origin)?;

			// CID must not already exist
			ensure!(
				!Receipts::<T>::contains_key(&cid),
				Error::<T>::CIDAlreadyExists
			);

			// If a parent is specified, it must exist on-chain
			if let Some(ref parent) = parent_cid {
				ensure!(
					Receipts::<T>::contains_key(parent),
					Error::<T>::ParentNotFound
				);
			}

			let now = frame_system::Pallet::<T>::block_number();

			let receipt = MediaReceipt::<T> {
				cid: cid.clone(),
				content_hash,
				author: author.clone(),
				timestamp: now,
				c2pa_manifest_uri: c2pa_uri,
				parent_cid: parent_cid.clone(),
			};

			// Write primary receipt
			Receipts::<T>::insert(&cid, &receipt);

			// Write author index
			AuthorReceipts::<T>::insert(&author, &cid, ());

			// Update provenance DAG if parent exists
			if let Some(ref parent) = parent_cid {
				ProvenanceDAG::<T>::try_mutate(parent, |children| {
					children
						.try_push(cid.clone())
						.map_err(|_| Error::<T>::MaxChildRevisionsExceeded)
				})?;

				Self::deposit_event(Event::ProvenanceUpdated {
					parent_cid: parent.clone(),
					child_cid: cid.clone(),
				});
			}

			Self::deposit_event(Event::ReceiptCommitted {
				cid,
				author,
				content_hash,
			});

			Ok(())
		}

		/// Transfer ownership of a Media Receipt to a new account.
		///
		/// Only the current author/owner may call this.
		/// Updates both the `Receipts` record and the `AuthorReceipts` index.
		///
		/// Emits `OwnershipTransferred`.
		#[pallet::call_index(1)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().reads_writes(1, 3))]
		pub fn transfer_asset_ownership(
			origin: OriginFor<T>,
			cid: CidOf<T>,
			new_owner: T::AccountId,
		) -> DispatchResult {
			let caller = ensure_signed(origin)?;

			Receipts::<T>::try_mutate(&cid, |maybe_receipt| -> DispatchResult {
				let receipt = maybe_receipt.as_mut().ok_or(Error::<T>::CIDNotFound)?;

				ensure!(receipt.author == caller, Error::<T>::Unauthorized);

				let old_owner = receipt.author.clone();

				// Swap author
				receipt.author = new_owner.clone();

				// Update author index: remove old, insert new
				AuthorReceipts::<T>::remove(&old_owner, &cid);
				AuthorReceipts::<T>::insert(&new_owner, &cid, ());

				Self::deposit_event(Event::OwnershipTransferred {
					cid: cid.clone(),
					from: old_owner,
					to: new_owner,
				});

				Ok(())
			})
		}
	}
}

pub use pallet::*;
