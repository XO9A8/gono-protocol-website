//! Unit tests for pallet-gono-store
//!
//! Covers:
//! - Happy-path commit and query
//! - Duplicate CID rejection
//! - DAG provenance linking
//! - Parent-not-found error
//! - Max child revisions overflow
//! - Ownership transfer happy path
//! - Unauthorized transfer rejection
//! - Transfer of non-existent CID
//! - Multi-author provenance chain

use crate::{mock::*, Error, Event};
use frame_support::{assert_noop, assert_ok, BoundedVec};

/// Helper: build a BoundedVec CID from raw bytes.
fn cid(bytes: &[u8]) -> BoundedVec<u8, MaxCidLength> {
	BoundedVec::try_from(bytes.to_vec()).expect("CID exceeds MaxCidLength")
}

/// Helper: build a BoundedVec C2PA URI from raw bytes.
fn c2pa(bytes: &[u8]) -> BoundedVec<u8, MaxC2paUriLength> {
	BoundedVec::try_from(bytes.to_vec()).expect("URI exceeds MaxC2paUriLength")
}

// ─── commit_receipt tests ──────────────────────────────────────────

#[test]
fn commit_receipt_works() {
	new_test_ext().execute_with(|| {
		let author: u64 = 1;
		let test_cid = cid(b"bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetoju");
		let hash = [0xAA; 32];
		let uri = c2pa(b"https://c2pa.gono.io/manifest/abc123");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(author),
			test_cid.clone(),
			hash,
			uri.clone(),
			None,
		));

		// Verify storage
		let receipt = GonoStore::receipts(&test_cid).expect("Receipt must exist");
		assert_eq!(receipt.author, author);
		assert_eq!(receipt.content_hash, hash);
		assert_eq!(receipt.cid, test_cid);
		assert_eq!(receipt.c2pa_manifest_uri, uri);
		assert_eq!(receipt.parent_cid, None);
		assert_eq!(receipt.timestamp, 1); // block_number set in new_test_ext

		// Verify author index
		assert!(GonoStore::author_receipts(author, &test_cid).is_some());

		// Verify event
		System::assert_has_event(
			Event::ReceiptCommitted {
				cid: test_cid,
				author,
				content_hash: hash,
			}
			.into(),
		);
	});
}

#[test]
fn commit_duplicate_cid_fails() {
	new_test_ext().execute_with(|| {
		let test_cid = cid(b"bafkrei_duplicate_test");
		let hash = [0xBB; 32];
		let uri = c2pa(b"");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			test_cid.clone(),
			hash,
			uri.clone(),
			None,
		));

		// Second commit with same CID must fail
		assert_noop!(
			GonoStore::commit_receipt(RuntimeOrigin::signed(2), test_cid, hash, uri, None,),
			Error::<Test>::CIDAlreadyExists,
		);
	});
}

#[test]
fn commit_with_parent_links_dag() {
	new_test_ext().execute_with(|| {
		let parent = cid(b"bafkrei_parent");
		let child = cid(b"bafkrei_child_v2");
		let hash = [0xCC; 32];
		let uri = c2pa(b"");

		// Commit parent first
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			parent.clone(),
			hash,
			uri.clone(),
			None,
		));

		// Commit child referencing parent
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			child.clone(),
			[0xDD; 32],
			uri,
			Some(parent.clone()),
		));

		// Verify DAG link
		let children = GonoStore::provenance_dag(&parent);
		assert_eq!(children.len(), 1);
		assert_eq!(children[0], child);

		// Verify child receipt has parent_cid set
		let child_receipt = GonoStore::receipts(&child).unwrap();
		assert_eq!(child_receipt.parent_cid, Some(parent.clone()));

		// Verify ProvenanceUpdated event
		System::assert_has_event(
			Event::ProvenanceUpdated {
				parent_cid: parent,
				child_cid: child,
			}
			.into(),
		);
	});
}

#[test]
fn commit_with_nonexistent_parent_fails() {
	new_test_ext().execute_with(|| {
		let orphan = cid(b"bafkrei_orphan");
		let ghost_parent = cid(b"bafkrei_does_not_exist");

		assert_noop!(
			GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				orphan,
				[0xEE; 32],
				c2pa(b""),
				Some(ghost_parent),
			),
			Error::<Test>::ParentNotFound,
		);
	});
}

#[test]
fn commit_exceeding_max_children_fails() {
	new_test_ext().execute_with(|| {
		let parent = cid(b"bafkrei_many_children");
		let hash = [0xFF; 32];
		let uri = c2pa(b"");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(1),
			parent.clone(),
			hash,
			uri.clone(),
			None,
		));

		// Fill up to MaxChildRevisions (64)
		for i in 0..64u32 {
			let child_bytes = format!("bafkrei_child_{:04}", i);
			let child_cid = cid(child_bytes.as_bytes());
			assert_ok!(GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				child_cid,
				hash,
				uri.clone(),
				Some(parent.clone()),
			));
		}

		// The 65th child must fail
		let overflow_child = cid(b"bafkrei_child_overflow");
		assert_noop!(
			GonoStore::commit_receipt(
				RuntimeOrigin::signed(1),
				overflow_child,
				hash,
				uri,
				Some(parent),
			),
			Error::<Test>::MaxChildRevisionsExceeded,
		);
	});
}

// ─── transfer_asset_ownership tests ────────────────────────────────

#[test]
fn transfer_ownership_works() {
	new_test_ext().execute_with(|| {
		let original_owner: u64 = 1;
		let new_owner: u64 = 2;
		let test_cid = cid(b"bafkrei_transferable");
		let hash = [0x11; 32];

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(original_owner),
			test_cid.clone(),
			hash,
			c2pa(b""),
			None,
		));

		assert_ok!(GonoStore::transfer_asset_ownership(
			RuntimeOrigin::signed(original_owner),
			test_cid.clone(),
			new_owner,
		));

		// Receipt author updated
		let receipt = GonoStore::receipts(&test_cid).unwrap();
		assert_eq!(receipt.author, new_owner);

		// Author index updated
		assert!(GonoStore::author_receipts(original_owner, &test_cid).is_none());
		assert!(GonoStore::author_receipts(new_owner, &test_cid).is_some());

		// Event emitted
		System::assert_has_event(
			Event::OwnershipTransferred {
				cid: test_cid,
				from: original_owner,
				to: new_owner,
			}
			.into(),
		);
	});
}

#[test]
fn transfer_by_non_owner_fails() {
	new_test_ext().execute_with(|| {
		let owner: u64 = 1;
		let attacker: u64 = 99;
		let test_cid = cid(b"bafkrei_secured");

		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(owner),
			test_cid.clone(),
			[0x22; 32],
			c2pa(b""),
			None,
		));

		assert_noop!(
			GonoStore::transfer_asset_ownership(
				RuntimeOrigin::signed(attacker),
				test_cid,
				attacker,
			),
			Error::<Test>::Unauthorized,
		);
	});
}

#[test]
fn transfer_nonexistent_cid_fails() {
	new_test_ext().execute_with(|| {
		let ghost = cid(b"bafkrei_ghost");

		assert_noop!(
			GonoStore::transfer_asset_ownership(RuntimeOrigin::signed(1), ghost, 2,),
			Error::<Test>::CIDNotFound,
		);
	});
}

// ─── Multi-author provenance chain ─────────────────────────────────

#[test]
fn multi_author_dag_chain() {
	new_test_ext().execute_with(|| {
		let alice: u64 = 1;
		let bob: u64 = 2;

		let original = cid(b"bafkrei_original_photo");
		let edit_v1 = cid(b"bafkrei_edit_v1");
		let edit_v2 = cid(b"bafkrei_edit_v2");

		// Alice commits original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(alice),
			original.clone(),
			[0xAA; 32],
			c2pa(b"https://c2pa.example/original"),
			None,
		));

		// Bob creates edit referencing Alice's original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(bob),
			edit_v1.clone(),
			[0xBB; 32],
			c2pa(b"https://c2pa.example/edit_v1"),
			Some(original.clone()),
		));

		// Alice creates another edit also referencing the original
		assert_ok!(GonoStore::commit_receipt(
			RuntimeOrigin::signed(alice),
			edit_v2.clone(),
			[0xCC; 32],
			c2pa(b""),
			Some(original.clone()),
		));

		// DAG should show two children under the original
		let children = GonoStore::provenance_dag(&original);
		assert_eq!(children.len(), 2);
		assert_eq!(children[0], edit_v1);
		assert_eq!(children[1], edit_v2);

		// Each author's index is correct
		assert!(GonoStore::author_receipts(alice, &original).is_some());
		assert!(GonoStore::author_receipts(bob, &edit_v1).is_some());
		assert!(GonoStore::author_receipts(alice, &edit_v2).is_some());
		// Bob does NOT own the original
		assert!(GonoStore::author_receipts(bob, &original).is_none());
	});
}
