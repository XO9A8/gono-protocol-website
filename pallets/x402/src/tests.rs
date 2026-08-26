//! Comprehensive unit tests for pallet-gono-x402 (HTTP 402 State Channel Micropayments)

use crate::{
	mock::*, types::*, ChannelCount, Channels, Error, Event, HoldReason, NonceRegistry,
	SenderChannelCount,
};
use frame_support::{
	assert_noop, assert_ok,
	traits::fungible::{Inspect, InspectHold, Mutate},
};
use sp_core::{sr25519, Pair};
use sp_runtime::traits::{Hash, Zero};

// ─── Test Helpers ───────────────────────────────────────────────────

fn generate_account() -> (sr25519::Pair, AccountId) {
	let pair = sr25519::Pair::generate().0;
	let public = pair.public();
	(pair, public)
}

fn setup_funded_account(initial_balance: Balance) -> (sr25519::Pair, AccountId) {
	let (pair, account) = generate_account();
	let _ = <Test as crate::pallet::Config>::NativeBalance::set_balance(&account, initial_balance);
	(pair, account)
}

fn derive_channel_id(sender: &AccountId, recipient: &AccountId, nonce: u64) -> ChannelIdOf<Test> {
	<Test as frame_system::Config>::Hashing::hash_of(&(
		b"gono-x402-channel",
		sender,
		recipient,
		nonce,
	))
}

// ─── 1. Channel Lifecycle & Opening Tests ───────────────────────────

#[test]
fn test_open_channel_success() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let deposit = 2_000;
		let duration = 100;
		let expected_channel_id = derive_channel_id(&alice, &bob, 0);

		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			deposit,
			duration
		));

		// Verify storage
		let channel = Channels::<Test>::get(&expected_channel_id).expect("channel must exist");
		assert_eq!(channel.sender, alice);
		assert_eq!(channel.recipient, bob);
		assert_eq!(channel.deposit_amount, deposit);
		assert_eq!(channel.settled_amount, Zero::zero());
		assert_eq!(channel.expiration_block, 1 + duration);
		assert!(!channel.closed);

		assert_eq!(SenderChannelCount::<Test>::get(&alice), 1);
		assert_eq!(ChannelCount::<Test>::get(), 1);

		// Verify hold on Alice's balance
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance_on_hold(
				&HoldReason::ChannelDeposit.into(),
				&alice
			),
			deposit
		);
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance(&alice),
			8_000
		);
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&alice),
			10_000
		);

		// Verify event
		System::assert_last_event(
			Event::ChannelOpened {
				channel_id: expected_channel_id,
				sender: alice,
				recipient: bob,
				deposit,
				expiration: 1 + duration,
			}
			.into(),
		);
	});
}

#[test]
fn test_open_channel_fails_zero_deposit() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		assert_noop!(
			GonoX402::open_channel(RuntimeOrigin::signed(alice), bob, 0, 100),
			Error::<Test>::ZeroDeposit
		);
	});
}

#[test]
fn test_open_channel_fails_zero_duration() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		assert_noop!(
			GonoX402::open_channel(RuntimeOrigin::signed(alice), bob, 1_000, 0),
			Error::<Test>::InvalidDuration
		);
	});
}

#[test]
fn test_open_channel_fails_duration_exceeds_max() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		assert_noop!(
			GonoX402::open_channel(RuntimeOrigin::signed(alice), bob, 1_000, 1001),
			Error::<Test>::DurationExceedsMax
		);
	});
}

#[test]
fn test_open_channel_fails_insufficient_funds() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(500);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		assert_noop!(
			GonoX402::open_channel(RuntimeOrigin::signed(alice), bob, 1_000, 100),
			sp_runtime::TokenError::FundsUnavailable
		);
	});
}

// ─── 2. Top-Up Tests ────────────────────────────────────────────────

#[test]
fn test_top_up_channel_success() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		assert_ok!(GonoX402::top_up_channel(
			RuntimeOrigin::signed(alice),
			channel_id,
			500
		));

		let channel = Channels::<Test>::get(&channel_id).unwrap();
		assert_eq!(channel.deposit_amount, 1_500);

		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance_on_hold(
				&HoldReason::ChannelDeposit.into(),
				&alice
			),
			1_500
		);

		System::assert_last_event(
			Event::ChannelToppedUp {
				channel_id,
				additional_deposit: 500,
				total_deposit: 1_500,
			}
			.into(),
		);
	});
}

#[test]
fn test_top_up_fails_non_sender() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(5_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		assert_noop!(
			GonoX402::top_up_channel(RuntimeOrigin::signed(bob), channel_id, 500),
			Error::<Test>::NotChannelSender
		);
	});
}

#[test]
fn test_top_up_fails_zero_amount() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		assert_noop!(
			GonoX402::top_up_channel(RuntimeOrigin::signed(alice), channel_id, 0),
			Error::<Test>::ZeroAmount
		);
	});
}

#[test]
fn test_top_up_fails_after_expiration() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		// Advance block past expiration (1 + 100 = 101)
		System::set_block_number(102);

		assert_noop!(
			GonoX402::top_up_channel(RuntimeOrigin::signed(alice), channel_id, 500),
			Error::<Test>::ChannelExpired
		);
	});
}

// ─── 3. Settlement & Signature Verification Tests ───────────────────

#[test]
fn test_settle_channel_single_voucher_success() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		let cumulative_amount = 600;
		let nonce = 1;
		let payload = construct_voucher_payload(&channel_id, &cumulative_amount, nonce);
		let signature = alice_pair.sign(&payload);

		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			cumulative_amount,
			nonce,
			signature,
			false // do not close channel
		));

		// Check channel state
		let channel = Channels::<Test>::get(&channel_id).unwrap();
		assert_eq!(channel.settled_amount, 600);
		assert!(!channel.closed);

		// Check balances: Bob got 600, Alice has 1400 still held
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&bob),
			1_600
		);
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance_on_hold(
				&HoldReason::ChannelDeposit.into(),
				&alice
			),
			1_400
		);

		// Nonce registered
		assert!(NonceRegistry::<Test>::get(&channel_id, nonce));

		System::assert_last_event(
			Event::ChannelSettled {
				channel_id,
				cumulative_amount: 600,
				payout_amount: 600,
				nonce: 1,
				is_closed: false,
			}
			.into(),
		);
	});
}

#[test]
fn test_settle_multiple_vouchers_cumulatively() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		// Voucher 1: 300
		let p1 = construct_voucher_payload(&channel_id, &300u128, 1);
		let sig1 = alice_pair.sign(&p1);
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			300,
			1,
			sig1,
			false
		));
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&bob),
			300
		);

		// Voucher 2: 700 (payout is 700 - 300 = 400)
		let p2 = construct_voucher_payload(&channel_id, &700u128, 2);
		let sig2 = alice_pair.sign(&p2);
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			700,
			2,
			sig2,
			false
		));
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&bob),
			700
		);

		let channel = Channels::<Test>::get(&channel_id).unwrap();
		assert_eq!(channel.settled_amount, 700);
	});
}

#[test]
fn test_settle_fails_invalid_signature() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (charlie_pair, _charlie) = setup_funded_account(1_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		// Signed by Charlie instead of Alice
		let payload = construct_voucher_payload(&channel_id, &500u128, 1);
		let bad_signature = charlie_pair.sign(&payload);

		assert_noop!(
			GonoX402::settle_channel(
				RuntimeOrigin::signed(bob),
				channel_id,
				500,
				1,
				bad_signature,
				false
			),
			Error::<Test>::InvalidSignature
		);
	});
}

#[test]
fn test_settle_fails_nonce_replay() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		let payload = construct_voucher_payload(&channel_id, &500u128, 1);
		let sig = alice_pair.sign(&payload);

		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			500,
			1,
			sig,
			false
		));

		// Replay same nonce
		assert_noop!(
			GonoX402::settle_channel(RuntimeOrigin::signed(bob), channel_id, 600, 1, sig, false),
			Error::<Test>::NonceAlreadyUsed
		);
	});
}

#[test]
fn test_settle_fails_settlement_exceeds_deposit() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		let payload = construct_voucher_payload(&channel_id, &1_500u128, 1);
		let sig = alice_pair.sign(&payload);

		assert_noop!(
			GonoX402::settle_channel(RuntimeOrigin::signed(bob), channel_id, 1_500, 1, sig, false),
			Error::<Test>::SettlementExceedsDeposit
		);
	});
}

#[test]
fn test_settle_fails_non_increasing_amount() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		let p1 = construct_voucher_payload(&channel_id, &500u128, 1);
		let sig1 = alice_pair.sign(&p1);
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			500,
			1,
			sig1,
			false
		));

		// Submit voucher with smaller or equal amount
		let p2 = construct_voucher_payload(&channel_id, &400u128, 2);
		let sig2 = alice_pair.sign(&p2);
		assert_noop!(
			GonoX402::settle_channel(RuntimeOrigin::signed(bob), channel_id, 400, 2, sig2, false),
			Error::<Test>::InvalidSettlementAmount
		);
	});
}

#[test]
fn test_settle_fails_non_recipient_caller() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_charlie_pair, charlie) = setup_funded_account(1_000);
		let (_bob_pair, bob) = setup_funded_account(1_000);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			1_000,
			100
		));

		let p1 = construct_voucher_payload(&channel_id, &500u128, 1);
		let sig1 = alice_pair.sign(&p1);

		// Charlie tries to settle Bob's voucher
		assert_noop!(
			GonoX402::settle_channel(
				RuntimeOrigin::signed(charlie),
				channel_id,
				500,
				1,
				sig1,
				false
			),
			Error::<Test>::NotChannelRecipient
		);
	});
}

#[test]
fn test_settle_and_close_channel_refunds_unspent() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		let payload = construct_voucher_payload(&channel_id, &1_200u128, 1);
		let signature = alice_pair.sign(&payload);

		// Settle and close
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			1_200,
			1,
			signature,
			true // close channel
		));

		let channel = Channels::<Test>::get(&channel_id).unwrap();
		assert!(channel.closed);
		assert_eq!(channel.settled_amount, 1_200);

		// Bob got 1,200
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&bob),
			1_200
		);

		// Alice remaining 800 unspent deposit was released from hold
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance_on_hold(
				&HoldReason::ChannelDeposit.into(),
				&alice
			),
			0
		);
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&alice),
			8_800
		);

		assert_eq!(ChannelCount::<Test>::get(), 0);
	});
}

// ─── 4. Dispute Grace Period & Timeout Tests ────────────────────────

#[test]
fn test_settle_during_dispute_period_succeeds() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100 // Expiration is 1 + 100 = 101. DisputePeriod is 10. Deadline = 111.
		));

		// Advance to block 105 (past expiration 101, but within dispute period < 111)
		System::set_block_number(105);

		let payload = construct_voucher_payload(&channel_id, &800u128, 1);
		let signature = alice_pair.sign(&payload);

		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			800,
			1,
			signature,
			false
		));

		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&bob),
			800
		);
	});
}

#[test]
fn test_settle_fails_after_dispute_period() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100 // Expiration 101. Deadline 111.
		));

		// Advance to block 112 (after dispute deadline)
		System::set_block_number(112);

		let payload = construct_voucher_payload(&channel_id, &800u128, 1);
		let signature = alice_pair.sign(&payload);

		assert_noop!(
			GonoX402::settle_channel(
				RuntimeOrigin::signed(bob),
				channel_id,
				800,
				1,
				signature,
				false
			),
			Error::<Test>::ChannelExpired
		);
	});
}

#[test]
fn test_claim_timeout_fails_before_expiration() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100 // Expiration 101
		));

		System::set_block_number(50);

		assert_noop!(
			GonoX402::claim_channel_timeout(RuntimeOrigin::signed(alice), channel_id),
			Error::<Test>::ChannelNotExpired
		);
	});
}

#[test]
fn test_claim_timeout_fails_during_dispute_period() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100 // Expiration 101, DisputeDeadline 111
		));

		// Block 105 is past expiration but dispute period is active
		System::set_block_number(105);

		assert_noop!(
			GonoX402::claim_channel_timeout(RuntimeOrigin::signed(alice), channel_id),
			Error::<Test>::DisputePeriodActive
		);
	});
}

#[test]
fn test_claim_timeout_success_after_dispute_period() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100 // Expiration 101, DisputeDeadline 111
		));

		// Settle a partial voucher of 500
		let payload = construct_voucher_payload(&channel_id, &500u128, 1);
		let sig = alice_pair.sign(&payload);
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			500,
			1,
			sig,
			false
		));

		// Advance to block 112 (after dispute deadline)
		System::set_block_number(112);

		assert_ok!(GonoX402::claim_channel_timeout(
			RuntimeOrigin::signed(alice),
			channel_id
		));

		let channel = Channels::<Test>::get(&channel_id).unwrap();
		assert!(channel.closed);

		// Alice remaining 1,500 unspent deposit was released from hold
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::balance_on_hold(
				&HoldReason::ChannelDeposit.into(),
				&alice
			),
			0
		);
		assert_eq!(
			<Test as crate::pallet::Config>::NativeBalance::total_balance(&alice),
			9_500
		);
		assert_eq!(ChannelCount::<Test>::get(), 0);

		System::assert_last_event(
			Event::ChannelTimedOut {
				channel_id,
				sender: alice,
				refund_amount: 1_500,
			}
			.into(),
		);
	});
}

#[test]
fn test_claim_timeout_fails_non_sender() {
	new_test_ext().execute_with(|| {
		let (_alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		System::set_block_number(115);

		assert_noop!(
			GonoX402::claim_channel_timeout(RuntimeOrigin::signed(bob), channel_id),
			Error::<Test>::NotChannelSender
		);
	});
}

#[test]
fn test_operations_fail_on_closed_channel() {
	new_test_ext().execute_with(|| {
		let (alice_pair, alice) = setup_funded_account(10_000);
		let (_bob_pair, bob) = setup_funded_account(0);

		let channel_id = derive_channel_id(&alice, &bob, 0);
		assert_ok!(GonoX402::open_channel(
			RuntimeOrigin::signed(alice),
			bob,
			2_000,
			100
		));

		// Settle & close
		let p = construct_voucher_payload(&channel_id, &500u128, 1);
		let s = alice_pair.sign(&p);
		assert_ok!(GonoX402::settle_channel(
			RuntimeOrigin::signed(bob),
			channel_id,
			500,
			1,
			s,
			true
		));

		// Top up fails
		assert_noop!(
			GonoX402::top_up_channel(RuntimeOrigin::signed(alice), channel_id, 500),
			Error::<Test>::ChannelAlreadyClosed
		);

		// Subsequent settle fails
		let p2 = construct_voucher_payload(&channel_id, &800u128, 2);
		let s2 = alice_pair.sign(&p2);
		assert_noop!(
			GonoX402::settle_channel(RuntimeOrigin::signed(bob), channel_id, 800, 2, s2, false),
			Error::<Test>::ChannelAlreadyClosed
		);

		// Timeout fails
		System::set_block_number(120);
		assert_noop!(
			GonoX402::claim_channel_timeout(RuntimeOrigin::signed(alice), channel_id),
			Error::<Test>::ChannelAlreadyClosed
		);
	});
}
