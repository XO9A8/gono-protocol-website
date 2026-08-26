//! ZK-SNARK Proof Verifier Trait and Implementations
//!
//! Provides a pluggable abstraction for verifying Zero-Knowledge proofs
//! across different proving systems (Groth16, PLONK, STARKs) and curves (BN254, BLS12-381).

use crate::types::ProofType;

/// Generic ZK-SNARK verifier trait for zero-knowledge attestation circuits.
pub trait ZkVerifier<ProofType> {
	/// Verify a zero-knowledge proof against provided public inputs for a given proof type.
	///
	/// Returns `true` if the proof is cryptographically valid, `false` otherwise.
	fn verify(proof_type: &ProofType, proof_bytes: &[u8], public_inputs: &[u8]) -> bool;
}

/// Default mock verifier for local development and unit testing.
/// Accepts all proofs as long as proof bytes and public inputs are non-empty.
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub struct MockZkVerifier;

impl ZkVerifier<ProofType> for MockZkVerifier {
	fn verify(_proof_type: &ProofType, proof_bytes: &[u8], public_inputs: &[u8]) -> bool {
		!proof_bytes.is_empty() && !public_inputs.is_empty()
	}
}

/// Verifier implementation that unconditionally fails verification (used for testing failure branches).
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub struct FailingZkVerifier;

impl ZkVerifier<ProofType> for FailingZkVerifier {
	fn verify(_proof_type: &ProofType, _proof_bytes: &[u8], _public_inputs: &[u8]) -> bool {
		false
	}
}
