//! Mock runtime for pallet-gono-verify unit tests.

use crate as pallet_gono_verify;
use frame_support::{construct_runtime, derive_impl, parameter_types, sp_runtime::BuildStorage};

// ─── Build the test runtime ─────────────────────────────────────────
construct_runtime! {
	pub struct Test {
		System: frame_system,
		GonoVerify: pallet_gono_verify,
	}
}

// ─── frame_system configuration ─────────────────────────────────────
#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = frame_system::mocking::MockBlock<Test>;
}

// ─── Pallet configuration ───────────────────────────────────────────
parameter_types! {
	pub const MaxCidLength: u32 = 68;
	pub const MinVerifiers: u32 = 3;
	pub const EvaluationPeriod: u64 = 10;
}

impl pallet_gono_verify::Config for Test {
	type MaxCidLength = MaxCidLength;
	type MinVerifiers = MinVerifiers;
	type EvaluationPeriod = EvaluationPeriod;
	type ContentInspector = ();
}

// ─── Test externalities builder ─────────────────────────────────────
pub fn new_test_ext() -> sp_io::TestExternalities {
	let t = frame_system::GenesisConfig::<Test>::default()
		.build_storage()
		.unwrap();
	let mut ext = sp_io::TestExternalities::new(t);
	ext.execute_with(|| System::set_block_number(1));
	ext
}
