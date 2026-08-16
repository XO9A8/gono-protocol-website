//! Unit and integration tests for pallet-gono-privacy (ZK-SNARK Attestations).

use crate::mock::*;
use crate::types::{Attestation, ProofType};
use crate::verifier::{FailingZkVerifier, MockZkVerifier, ZkVerifier};
use crate::{Error, Event, NullifierRegistry, VerifiedAttestations};
use frame_support::{assert_noop, assert_ok};
use sp_core::{sr25519, H256};

fn alice() -> AccountId {
	sr25519::Public::from_raw([1u8; 32])
}

fn bob() -> AccountId {
	sr25519::Public::from_raw([2u8; 32])
}

fn sample_nullifier(val: u8) -> H256 {
	H256::from_low_u64_be(val as u64)
}

#[test]
fn test_verify_humanity_proof_success() {
	new_test_ext().execute_with(|| {
		let proof = b"valid_humanity_proof".to_vec();
		let inputs = b"world_id_public_inputs".to_vec();
		let nullifier = sample_nullifier(1);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			proof,
			inputs,
			nullifier,
		));

		// Verify nullifier stored
		assert!(NullifierRegistry::<Test>::get(&nullifier));

		// Verify attestation record
		let attestation =
			VerifiedAttestations::<Test>::get(&alice(), ProofType::HumanityProof).unwrap();
		assert_eq!(
			attestation,
			Attestation {
				proof_type: ProofType::HumanityProof,
				attester: alice(),
				verified_at: 1,
				nullifier_hash: nullifier,
			}
		);

		// Verify event
		System::assert_has_event(RuntimeEvent::GonoPrivacy(Event::AttestationVerified {
			who: alice(),
			proof_type: ProofType::HumanityProof,
			nullifier_hash: nullifier,
			block_number: 1,
		}));
	});
}

#[test]
fn test_verify_credential_verification_success() {
	new_test_ext().execute_with(|| {
		let proof = b"press_pass_zk_proof".to_vec();
		let inputs = b"reuters_press_credentials".to_vec();
		let nullifier = sample_nullifier(2);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(bob()),
			ProofType::CredentialVerification,
			proof,
			inputs,
			nullifier,
		));

		assert!(NullifierRegistry::<Test>::get(&nullifier));
		let attestation =
			VerifiedAttestations::<Test>::get(&bob(), ProofType::CredentialVerification).unwrap();
		assert_eq!(attestation.attester, bob());
		assert_eq!(attestation.proof_type, ProofType::CredentialVerification);
		assert_eq!(attestation.nullifier_hash, nullifier);
	});
}

#[test]
fn test_verify_jurisdiction_proof_success() {
	new_test_ext().execute_with(|| {
		let proof = b"jurisdiction_zk_proof".to_vec();
		let inputs = b"eu_compliance_inputs".to_vec();
		let nullifier = sample_nullifier(3);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::JurisdictionProof,
			proof,
			inputs,
			nullifier,
		));

		assert!(NullifierRegistry::<Test>::get(&nullifier));
		let attestation =
			VerifiedAttestations::<Test>::get(&alice(), ProofType::JurisdictionProof).unwrap();
		assert_eq!(attestation.proof_type, ProofType::JurisdictionProof);
	});
}

#[test]
fn test_replay_attack_rejected() {
	new_test_ext().execute_with(|| {
		let proof = b"valid_proof".to_vec();
		let inputs = b"public_inputs".to_vec();
		let nullifier = sample_nullifier(10);

		// First submission succeeds
		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			proof.clone(),
			inputs.clone(),
			nullifier,
		));

		// Replay submission by same account fails
		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				proof.clone(),
				inputs.clone(),
				nullifier,
			),
			Error::<Test>::NullifierAlreadyUsed
		);

		// Replay submission by different account (front-running / replay) also fails
		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(bob()),
				ProofType::HumanityProof,
				proof,
				inputs,
				nullifier,
			),
			Error::<Test>::NullifierAlreadyUsed
		);
	});
}

#[test]
fn test_invalid_proof_rejected() {
	new_test_ext().execute_with(|| {
		let invalid_proof = b"invalid_proof".to_vec();
		let inputs = b"public_inputs".to_vec();
		let nullifier = sample_nullifier(20);

		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				invalid_proof,
				inputs,
				nullifier,
			),
			Error::<Test>::ProofVerificationFailed
		);

		// Ensure nullifier was not registered on failure
		assert!(!NullifierRegistry::<Test>::contains_key(&nullifier));
		assert!(!VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::HumanityProof
		));
	});
}

#[test]
fn test_empty_proof_bytes_rejected() {
	new_test_ext().execute_with(|| {
		let empty_proof = vec![];
		let inputs = b"inputs".to_vec();
		let nullifier = sample_nullifier(21);

		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				empty_proof,
				inputs,
				nullifier,
			),
			Error::<Test>::ProofVerificationFailed
		);
	});
}

#[test]
fn test_proof_too_large_rejected() {
	new_test_ext().execute_with(|| {
		let oversized_proof = vec![0u8; (MaxProofSize::get() + 1) as usize];
		let inputs = b"inputs".to_vec();
		let nullifier = sample_nullifier(30);

		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				oversized_proof,
				inputs,
				nullifier,
			),
			Error::<Test>::ProofTooLarge
		);
	});
}

#[test]
fn test_public_inputs_too_large_rejected() {
	new_test_ext().execute_with(|| {
		let proof = b"proof".to_vec();
		let oversized_inputs = vec![0u8; (MaxPublicInputsSize::get() + 1) as usize];
		let nullifier = sample_nullifier(31);

		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				proof,
				oversized_inputs,
				nullifier,
			),
			Error::<Test>::PublicInputsTooLarge
		);
	});
}

#[test]
fn test_revoke_attestation_success() {
	new_test_ext().execute_with(|| {
		let proof = b"proof".to_vec();
		let inputs = b"inputs".to_vec();
		let nullifier = sample_nullifier(40);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::CredentialVerification,
			proof,
			inputs,
			nullifier,
		));

		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::CredentialVerification
		));

		// Revoke
		assert_ok!(GonoPrivacy::revoke_attestation(
			RuntimeOrigin::signed(alice()),
			ProofType::CredentialVerification,
			nullifier,
		));

		// Verify attestation removed
		assert!(!VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::CredentialVerification
		));

		// Verify event
		System::assert_has_event(RuntimeEvent::GonoPrivacy(Event::AttestationRevoked {
			who: alice(),
			proof_type: ProofType::CredentialVerification,
			nullifier_hash: nullifier,
		}));
	});
}

#[test]
fn test_revoke_nonexistent_attestation_fails() {
	new_test_ext().execute_with(|| {
		let nullifier = sample_nullifier(41);

		assert_noop!(
			GonoPrivacy::revoke_attestation(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				nullifier,
			),
			Error::<Test>::AttestationNotFound
		);
	});
}

#[test]
fn test_revoke_with_wrong_nullifier_fails() {
	new_test_ext().execute_with(|| {
		let proof = b"proof".to_vec();
		let inputs = b"inputs".to_vec();
		let nullifier = sample_nullifier(42);
		let wrong_nullifier = sample_nullifier(43);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			proof,
			inputs,
			nullifier,
		));

		assert_noop!(
			GonoPrivacy::revoke_attestation(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				wrong_nullifier,
			),
			Error::<Test>::InvalidNullifier
		);

		// Attestation should still exist
		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::HumanityProof
		));
	});
}

#[test]
fn test_nullifier_remains_spent_after_revocation() {
	new_test_ext().execute_with(|| {
		let proof = b"proof".to_vec();
		let inputs = b"inputs".to_vec();
		let nullifier = sample_nullifier(50);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			proof.clone(),
			inputs.clone(),
			nullifier,
		));

		assert_ok!(GonoPrivacy::revoke_attestation(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			nullifier,
		));

		// Reusing the revoked proof's nullifier must fail
		assert_noop!(
			GonoPrivacy::verify_and_attest(
				RuntimeOrigin::signed(alice()),
				ProofType::HumanityProof,
				proof,
				inputs,
				nullifier,
			),
			Error::<Test>::NullifierAlreadyUsed
		);
	});
}

#[test]
fn test_same_account_multiple_proof_types() {
	new_test_ext().execute_with(|| {
		let nullifier1 = sample_nullifier(60);
		let nullifier2 = sample_nullifier(61);
		let nullifier3 = sample_nullifier(62);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			b"proof1".to_vec(),
			b"inputs1".to_vec(),
			nullifier1,
		));

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::CredentialVerification,
			b"proof2".to_vec(),
			b"inputs2".to_vec(),
			nullifier2,
		));

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::JurisdictionProof,
			b"proof3".to_vec(),
			b"inputs3".to_vec(),
			nullifier3,
		));

		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::HumanityProof
		));
		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::CredentialVerification
		));
		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::JurisdictionProof
		));
	});
}

#[test]
fn test_multiple_accounts_same_proof_type() {
	new_test_ext().execute_with(|| {
		let nullifier1 = sample_nullifier(70);
		let nullifier2 = sample_nullifier(71);

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			b"proof".to_vec(),
			b"inputs".to_vec(),
			nullifier1,
		));

		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(bob()),
			ProofType::HumanityProof,
			b"proof".to_vec(),
			b"inputs".to_vec(),
			nullifier2,
		));

		assert!(VerifiedAttestations::<Test>::contains_key(
			&alice(),
			ProofType::HumanityProof
		));
		assert!(VerifiedAttestations::<Test>::contains_key(
			&bob(),
			ProofType::HumanityProof
		));
	});
}

#[test]
fn test_overwrite_attestation_with_new_nullifier() {
	new_test_ext().execute_with(|| {
		let nullifier1 = sample_nullifier(80);
		let nullifier2 = sample_nullifier(81);

		System::set_block_number(10);
		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			b"proof1".to_vec(),
			b"inputs1".to_vec(),
			nullifier1,
		));

		System::set_block_number(20);
		assert_ok!(GonoPrivacy::verify_and_attest(
			RuntimeOrigin::signed(alice()),
			ProofType::HumanityProof,
			b"proof2".to_vec(),
			b"inputs2".to_vec(),
			nullifier2,
		));

		let attestation =
			VerifiedAttestations::<Test>::get(&alice(), ProofType::HumanityProof).unwrap();
		assert_eq!(attestation.nullifier_hash, nullifier2);
		assert_eq!(attestation.verified_at, 20);
	});
}

#[test]
fn test_mock_and_failing_zk_verifiers_directly() {
	// Test MockZkVerifier
	assert!(MockZkVerifier::verify(
		&ProofType::HumanityProof,
		b"proof",
		b"inputs"
	));
	assert!(!MockZkVerifier::verify(
		&ProofType::HumanityProof,
		b"",
		b"inputs"
	));
	assert!(!MockZkVerifier::verify(
		&ProofType::HumanityProof,
		b"proof",
		b""
	));

	// Test FailingZkVerifier
	assert!(!FailingZkVerifier::verify(
		&ProofType::CredentialVerification,
		b"proof",
		b"inputs"
	));
}
