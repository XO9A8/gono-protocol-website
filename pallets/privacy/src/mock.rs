//! Mock runtime for pallet-gono-privacy unit tests.

use crate as pallet_gono_privacy;
use crate::types::ProofType;
use crate::verifier::ZkVerifier;
use frame_support::{construct_runtime, derive_impl, parameter_types, sp_runtime::BuildStorage};
use sp_core::sr25519;

// ─── Runtime Types ──────────────────────────────────────────────────
pub type AccountId = sr25519::Public;

// ─── Test ZK Verifier ────────────────────────────────────────────────
/// Test verifier that rejects proofs when `proof_bytes == b"invalid_proof"`,
/// or if proof_bytes or public_inputs are empty.
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub struct TestZkVerifier;

impl ZkVerifier<ProofType> for TestZkVerifier {
	fn verify(_proof_type: &ProofType, proof_bytes: &[u8], public_inputs: &[u8]) -> bool {
		if proof_bytes.is_empty() || public_inputs.is_empty() || proof_bytes == b"invalid_proof" {
			return false;
		}
		true
	}
}

// ─── Build Test Runtime ─────────────────────────────────────────────
construct_runtime! {
	pub struct Test {
		System: frame_system,
		GonoPrivacy: pallet_gono_privacy,
	}
}

// ─── frame_system Config ────────────────────────────────────────────
#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = frame_system::mocking::MockBlock<Test>;
	type AccountId = AccountId;
	type Lookup = sp_runtime::traits::IdentityLookup<Self::AccountId>;
}

// ─── pallet_gono_privacy Config ─────────────────────────────────────
parameter_types! {
	pub const MaxProofSize: u32 = 1024;
	pub const MaxPublicInputsSize: u32 = 512;
}

impl pallet_gono_privacy::Config for Test {
	type Verifier = TestZkVerifier;
	type MaxProofSize = MaxProofSize;
	type MaxPublicInputsSize = MaxPublicInputsSize;
}

// ─── Test Externalities Builder ─────────────────────────────────────
pub fn new_test_ext() -> sp_io::TestExternalities {
	let t = frame_system::GenesisConfig::<Test>::default()
		.build_storage()
		.unwrap();

	let mut ext = sp_io::TestExternalities::new(t);
	ext.execute_with(|| System::set_block_number(1));
	ext
}
