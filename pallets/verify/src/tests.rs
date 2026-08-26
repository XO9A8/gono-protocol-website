//! Unit and integration tests for pallet-gono-verify (SANUB Framework Section 8.2)

use crate::{mock::*, *};
use frame_support::{assert_noop, assert_ok, BoundedVec};
use sp_runtime::traits::{Saturating, Zero};
use sp_runtime::FixedU128;

/// Helper: build a BoundedVec CID from raw bytes.
fn cid(bytes: &[u8]) -> BoundedVec<u8, MaxCidLength> {
	BoundedVec::try_from(bytes.to_vec()).expect("CID exceeds MaxCidLength")
}

// ═══════════════════════════════════════════════════════════════════════
// 1. DETERMINISTIC FIXED-POINT MATH TESTS (WHITE-PAPER SECTION 8.2)
// ═══════════════════════════════════════════════════════════════════════

#[test]
fn test_public_belief_eq2() {
	// All verifiers approve: 5 / 5 = 1.0
	let b1 = calculate_public_belief(5, 5);
	assert_eq!(b1, FixedU128::from_u32(1));

	// All verifiers reject: 0 / 5 = 0.0
	let b0 = calculate_public_belief(0, 5);
	assert_eq!(b0, FixedU128::zero());

	// 3 approvals out of 5: 3 / 5 = 0.6
	let b_mixed = calculate_public_belief(3, 5);
	assert_eq!(b_mixed, FixedU128::from_rational(3, 5));

	// Zero verifiers edge case
	assert_eq!(calculate_public_belief(0, 0), FixedU128::zero());
}

#[test]
fn test_content_importance_eq3() {
	// 5 verifiers out of 100 total: 5 / 100 = 0.05
	let i1 = calculate_content_importance(5, 100);
	assert_eq!(i1, FixedU128::from_rational(5, 100));

	// Clamping if N_n > N_T
	let i_clamped = calculate_content_importance(150, 100);
	assert_eq!(i_clamped, FixedU128::from_u32(1));

	// Zero total verifiers edge case
	assert_eq!(calculate_content_importance(5, 0), FixedU128::zero());
}

#[test]
fn test_taylor_exp_fixed() {
	// e^0 = 1.0
	let exp0 = exp_fixed(FixedU128::zero());
	assert_eq!(exp0, FixedU128::from_u32(1));

	// e^0.25 ≈ 1.2840254166877...
	let exp_quarter = exp_fixed(FixedU128::from_rational(1, 4));
	let expected_exp_quarter = FixedU128::from_rational(1284025, 1000000);
	let diff = if exp_quarter > expected_exp_quarter {
		exp_quarter - expected_exp_quarter
	} else {
		expected_exp_quarter - exp_quarter
	};
	// Accuracy within 0.0001
	assert!(diff < FixedU128::from_rational(1, 10000));

	// e^0.75 ≈ 2.1170000166...
	let exp_three_quarters = exp_fixed(FixedU128::from_rational(3, 4));
	let expected_exp_three_quarters = FixedU128::from_rational(2117, 1000);
	let diff75 = if exp_three_quarters > expected_exp_three_quarters {
		exp_three_quarters - expected_exp_three_quarters
	} else {
		expected_exp_three_quarters - exp_three_quarters
	};
	assert!(diff75 < FixedU128::from_rational(1, 1000));
}

#[test]
fn test_belief_sigmoid_eq4() {
	// At B_n = 0.75, exponent is 0, so S(0.75) = 1 / (1 + 1) = 0.5
	let s_mid = calculate_belief_sigmoid(FixedU128::from_rational(3, 4));
	assert_eq!(s_mid, FixedU128::from_rational(1, 2));

	// At B_n = 1.0, S(1.0) = e^0.25 / (e^0.25 + 1) ≈ 1.284025 / 2.284025 ≈ 0.562176
	let s_one = calculate_belief_sigmoid(FixedU128::from_u32(1));
	assert!(s_one > FixedU128::from_rational(56, 100));
	assert!(s_one < FixedU128::from_rational(57, 100));

	// At B_n = 0.0, S(0.0) = 1 / (1 + e^0.75) ≈ 1 / (1 + 2.117) ≈ 0.32082
	let s_zero = calculate_belief_sigmoid(FixedU128::zero());
	assert!(s_zero > FixedU128::from_rational(32, 100));
	assert!(s_zero < FixedU128::from_rational(33, 100));

	// Sigmoid is strictly monotonic: S(0.0) < S(0.5) < S(0.75) < S(1.0)
	let s_half = calculate_belief_sigmoid(FixedU128::from_rational(1, 2));
	assert!(s_zero < s_half);
	assert!(s_half < s_mid);
	assert!(s_mid < s_one);
}

#[test]
fn test_analyst_credit_eq5_eq6() {
	// Single approved content with public belief = 1.0
	// T_p = S(1.0) ≈ 0.562176
	let reward = calculate_analyst_evaluation_reward(FixedU128::from_u32(1), true);
	assert_eq!(reward, calculate_belief_sigmoid(FixedU128::from_u32(1)));

	// Single rejected content with public belief = 0.0
	// Inverted belief = 1.0, so T_p reward = S(1.0)
	let reward_reject = calculate_analyst_evaluation_reward(FixedU128::zero(), false);
	assert_eq!(
		reward_reject,
		calculate_belief_sigmoid(FixedU128::from_u32(1))
	);

	// Analyst Credit C_a for 1 correct review:
	// a_t = 1, penalty factor = (2 + 1/1) = 3
	// C_a = T_p / (T_p + (1 - T_p)*3)
	let ca_1 = calculate_analyst_credit(reward, 1, 0);
	assert!(ca_1 > FixedU128::from_rational(29, 100));
	assert!(ca_1 < FixedU128::from_rational(31, 100));

	// Zero reviews edge case
	assert_eq!(
		calculate_analyst_credit(FixedU128::zero(), 0, 0),
		FixedU128::zero()
	);
}

#[test]
fn test_reporter_credit_eq7_and_content_credibility_eq8() {
	let ca_alice = FixedU128::from_rational(8, 10);
	let ca_bob = FixedU128::from_rational(2, 10);
	let importance = FixedU128::from_rational(1, 1); // I_n = 1.0

	// 1 approving analyst (Alice: 0.8) and 1 rejecting analyst (Bob: 0.2), total analysts = 2
	// Penalty factor = 2 + 1/2 = 2.5
	// Denominator = 0.8 + 0.2 * 2.5 = 0.8 + 0.5 = 1.3
	// Contrib = (0.8 / 1.3) * 1.0 ≈ 0.61538
	let contrib = calculate_reporter_content_contribution(ca_alice, ca_bob, 2, importance);
	assert!(contrib > FixedU128::from_rational(61, 100));
	assert!(contrib < FixedU128::from_rational(62, 100));

	// Cumulative reporter credit for 1 published content
	let cr = calculate_cumulative_reporter_credit(contrib, 1);
	assert_eq!(cr, contrib);

	// Eq 8 Content Credibility:
	// Ratio = 0.8 / (0.8 + 0.2) = 0.8
	// C_n = 0.8 * C_r
	let cn = calculate_content_credibility(ca_alice, ca_bob, cr);
	let expected_cn = FixedU128::from_rational(8, 10).saturating_mul(cr);
	assert_eq!(cn, expected_cn);
}

// ═══════════════════════════════════════════════════════════════════════
// 2. DISPATCHABLES & RUNTIME INTEGRATION TESTS
// ═══════════════════════════════════════════════════════════════════════

#[test]
fn test_register_content_works() {
	new_test_ext().execute_with(|| {
		let reporter = 1u64;
		let test_cid = cid(b"bafkrei_report_01");

		assert_ok!(GonoVerify::register_content(
			RuntimeOrigin::signed(reporter),
			test_cid.clone(),
		));

		assert_eq!(GonoVerify::content_reporter(&test_cid), Some(reporter));
		assert_eq!(GonoVerify::content_submitted_at(&test_cid), Some(1));

		System::assert_has_event(
			Event::ContentRegistered {
				cid: test_cid.clone(),
				reporter,
			}
			.into(),
		);

		// Duplicate registration must fail
		assert_noop!(
			GonoVerify::register_content(RuntimeOrigin::signed(reporter), test_cid,),
			Error::<Test>::ContentAlreadyRegistered,
		);
	});
}

#[test]
fn test_vote_as_verifier_works() {
	new_test_ext().execute_with(|| {
		let reporter = 1u64;
		let v1 = 10u64;
		let v2 = 11u64;
		let test_cid = cid(b"bafkrei_verify_vote");

		assert_ok!(GonoVerify::register_content(
			RuntimeOrigin::signed(reporter),
			test_cid.clone(),
		));

		// Verifier 1 votes 1 (approve)
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(v1),
			test_cid.clone(),
			1,
		));

		assert_eq!(GonoVerify::verifier_scores(&test_cid, v1), Some(1));
		assert_eq!(GonoVerify::verifier_count(&test_cid), 1);
		assert_eq!(GonoVerify::verifier_approvals(&test_cid), 1);
		assert_eq!(GonoVerify::total_active_verifiers(), 1);

		// Verifier 2 votes 0 (reject)
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(v2),
			test_cid.clone(),
			0,
		));

		assert_eq!(GonoVerify::verifier_scores(&test_cid, v2), Some(0));
		assert_eq!(GonoVerify::verifier_count(&test_cid), 2);
		assert_eq!(GonoVerify::verifier_approvals(&test_cid), 1);
		assert_eq!(GonoVerify::total_active_verifiers(), 2);

		// Duplicate vote from v1 must fail
		assert_noop!(
			GonoVerify::vote_as_verifier(RuntimeOrigin::signed(v1), test_cid.clone(), 1,),
			Error::<Test>::AlreadyVoted,
		);

		// Invalid non-binary score must fail
		assert_noop!(
			GonoVerify::vote_as_verifier(RuntimeOrigin::signed(12u64), test_cid, 2,),
			Error::<Test>::InvalidScore,
		);
	});
}

#[test]
fn test_submit_analyst_review_works() {
	new_test_ext().execute_with(|| {
		let reporter = 1u64;
		let analyst = 20u64;
		let test_cid = cid(b"bafkrei_analyst_review");

		assert_ok!(GonoVerify::register_content(
			RuntimeOrigin::signed(reporter),
			test_cid.clone(),
		));

		// Submit review with stake
		assert_ok!(GonoVerify::submit_analyst_review(
			RuntimeOrigin::signed(analyst),
			test_cid.clone(),
			Verdict::Approve,
			500,
		));

		let review = GonoVerify::analyst_reviews(&test_cid, analyst).unwrap();
		assert_eq!(review.verdict, Verdict::Approve);
		assert_eq!(review.stake, 500);

		System::assert_has_event(
			Event::AnalystReviewSubmitted {
				cid: test_cid.clone(),
				who: analyst,
				verdict: Verdict::Approve,
				stake: 500,
			}
			.into(),
		);

		// Zero stake must fail
		assert_noop!(
			GonoVerify::submit_analyst_review(
				RuntimeOrigin::signed(21u64),
				test_cid.clone(),
				Verdict::Reject,
				0,
			),
			Error::<Test>::ZeroStake,
		);

		// Duplicate review from same analyst must fail
		assert_noop!(
			GonoVerify::submit_analyst_review(
				RuntimeOrigin::signed(analyst),
				test_cid,
				Verdict::Reject,
				300,
			),
			Error::<Test>::AlreadyReviewed,
		);
	});
}

#[test]
fn test_finalize_content_score_threshold_and_timelock() {
	new_test_ext().execute_with(|| {
		let reporter = 1u64;
		let test_cid = cid(b"bafkrei_timelock_test");

		assert_ok!(GonoVerify::register_content(
			RuntimeOrigin::signed(reporter),
			test_cid.clone(),
		));

		// 1 verifier votes (below MinVerifiers = 3)
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(10u64),
			test_cid.clone(),
			1,
		));

		// Finalize before MinVerifiers fails
		assert_noop!(
			GonoVerify::finalize_content_score(RuntimeOrigin::root(), test_cid.clone(),),
			Error::<Test>::InsufficientVerifiers,
		);

		// Add 2 more verifiers to reach MinVerifiers = 3
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(11u64),
			test_cid.clone(),
			1,
		));
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(12u64),
			test_cid.clone(),
			1,
		));

		// Signed call at block 1 fails due to EvaluationPeriod (10 blocks)
		assert_noop!(
			GonoVerify::finalize_content_score(RuntimeOrigin::signed(99u64), test_cid.clone(),),
			Error::<Test>::EvaluationPeriodPending,
		);

		// Root/Sudo can bypass evaluation period
		assert_ok!(GonoVerify::finalize_content_score(
			RuntimeOrigin::root(),
			test_cid.clone(),
		));

		assert!(GonoVerify::content_finalized(&test_cid));

		// Finalizing again fails
		assert_noop!(
			GonoVerify::finalize_content_score(RuntimeOrigin::root(), test_cid,),
			Error::<Test>::ContentAlreadyFinalized,
		);
	});
}

#[test]
fn test_finalize_full_pipeline_sanub_end_to_end() {
	new_test_ext().execute_with(|| {
		let reporter = 1u64;
		let test_cid = cid(b"bafkrei_full_pipeline_test");

		// 1. Reporter publishes content
		assert_ok!(GonoVerify::register_content(
			RuntimeOrigin::signed(reporter),
			test_cid.clone(),
		));

		// 2. 5 Verifiers cast votes: 4 Approves (1), 1 Reject (0)
		// Public Belief B_n = 4 / 5 = 0.8
		for i in 10..=13 {
			assert_ok!(GonoVerify::vote_as_verifier(
				RuntimeOrigin::signed(i),
				test_cid.clone(),
				1,
			));
		}
		assert_ok!(GonoVerify::vote_as_verifier(
			RuntimeOrigin::signed(14),
			test_cid.clone(),
			0,
		));

		// 3. 2 Analysts submit reviews:
		// Alice (analyst 100) Approves with 500 stake
		// Bob (analyst 101) Rejects with 300 stake
		assert_ok!(GonoVerify::submit_analyst_review(
			RuntimeOrigin::signed(100),
			test_cid.clone(),
			Verdict::Approve,
			500,
		));
		assert_ok!(GonoVerify::submit_analyst_review(
			RuntimeOrigin::signed(101),
			test_cid.clone(),
			Verdict::Reject,
			300,
		));

		// 4. Advance block number beyond EvaluationPeriod (1 + 10 = 11)
		System::set_block_number(12);

		// 5. Permissionless finalization call by any account
		assert_ok!(GonoVerify::finalize_content_score(
			RuntimeOrigin::signed(999),
			test_cid.clone(),
		));

		// 6. Verify storage outputs:
		let cn = GonoVerify::content_credibility(&test_cid);
		assert!(!cn.is_zero(), "Content credibility Cn must be non-zero");

		let ca_alice = GonoVerify::analyst_credit(100);
		let ca_bob = GonoVerify::analyst_credit(101);
		assert!(!ca_alice.is_zero(), "Alice Ca must be updated");
		assert!(!ca_bob.is_zero(), "Bob Ca must be updated");

		// Since B_n = 0.8 > 0.75, Alice (who approved) should have higher credit than Bob (who rejected)
		assert!(
			ca_alice > ca_bob,
			"Approving analyst should have higher score when Bn = 0.8"
		);

		let cr = GonoVerify::reporter_credit(reporter);
		assert!(!cr.is_zero(), "Reporter credit Cr must be updated");

		assert!(GonoVerify::content_finalized(&test_cid));
	});
}
