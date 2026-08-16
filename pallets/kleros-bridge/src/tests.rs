use crate::mock::*;
use crate::pallet::{DisputeStatus, Disputes, Error, Event, NextDisputeId};
use frame_support::{assert_noop, assert_ok, BoundedVec};
use sp_runtime::DispatchError;

#[test]
fn test_escalate_dispute_works() {
	new_test_ext().execute_with(|| {
		System::set_block_number(1);
		let cid: BoundedVec<u8, frame_support::traits::ConstU32<128>> =
			b"QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx"
				.to_vec()
				.try_into()
				.unwrap();

		assert_ok!(KlerosBridge::escalate_dispute(
			RuntimeOrigin::signed(1),
			cid
		));

		assert_eq!(NextDisputeId::<Test>::get(), 1);
		assert_eq!(
			Disputes::<Test>::get(0),
			Some((1, DisputeStatus::Waiting, 0))
		);

		System::assert_has_event(RuntimeEvent::KlerosBridge(Event::DisputeEscalated {
			dispute_id: 0,
			plaintiff: 1,
		}));
	});
}

#[test]
fn test_submit_ruling_works() {
	new_test_ext().execute_with(|| {
		System::set_block_number(1);
		let cid: BoundedVec<u8, frame_support::traits::ConstU32<128>> =
			b"QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx"
				.to_vec()
				.try_into()
				.unwrap();

		assert_ok!(KlerosBridge::escalate_dispute(
			RuntimeOrigin::signed(1),
			cid
		));

		assert_ok!(KlerosBridge::submit_ruling(
			RuntimeOrigin::root(),
			0,
			2 // Ruling choice 2 (e.g. Reject/Manipulated)
		));

		assert_eq!(
			Disputes::<Test>::get(0),
			Some((1, DisputeStatus::Resolved, 2))
		);

		System::assert_has_event(RuntimeEvent::KlerosBridge(Event::RulingSubmitted {
			dispute_id: 0,
			ruling: 2,
		}));
	});
}

#[test]
fn test_submit_ruling_fails_non_root() {
	new_test_ext().execute_with(|| {
		let cid: BoundedVec<u8, frame_support::traits::ConstU32<128>> =
			b"QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx"
				.to_vec()
				.try_into()
				.unwrap();

		assert_ok!(KlerosBridge::escalate_dispute(
			RuntimeOrigin::signed(1),
			cid
		));

		assert_noop!(
			KlerosBridge::submit_ruling(RuntimeOrigin::signed(1), 0, 1),
			DispatchError::BadOrigin
		);
	});
}

#[test]
fn test_submit_ruling_fails_nonexistent_dispute() {
	new_test_ext().execute_with(|| {
		assert_noop!(
			KlerosBridge::submit_ruling(RuntimeOrigin::root(), 999, 1),
			Error::<Test>::DisputeNotFound
		);
	});
}

#[test]
fn test_submit_ruling_fails_already_resolved() {
	new_test_ext().execute_with(|| {
		let cid: BoundedVec<u8, frame_support::traits::ConstU32<128>> =
			b"QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx"
				.to_vec()
				.try_into()
				.unwrap();

		assert_ok!(KlerosBridge::escalate_dispute(
			RuntimeOrigin::signed(1),
			cid
		));

		assert_ok!(KlerosBridge::submit_ruling(RuntimeOrigin::root(), 0, 1));

		assert_noop!(
			KlerosBridge::submit_ruling(RuntimeOrigin::root(), 0, 2),
			Error::<Test>::DisputeAlreadyResolved
		);
	});
}
