//! Mock runtime for pallet-gono-x402 unit tests.

use crate as pallet_gono_x402;
use frame_support::{
	construct_runtime, derive_impl, parameter_types, sp_runtime::BuildStorage, traits::ConstU32,
};
use sp_core::sr25519;

// ─── Runtime Types ──────────────────────────────────────────────────
pub type AccountId = sr25519::Public;
pub type Balance = u128;

// ─── Build Test Runtime ─────────────────────────────────────────────
construct_runtime! {
	pub struct Test {
		System: frame_system,
		Balances: pallet_balances,
		GonoX402: pallet_gono_x402,
	}
}

// ─── frame_system Config ────────────────────────────────────────────
#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = frame_system::mocking::MockBlock<Test>;
	type AccountId = AccountId;
	type Lookup = sp_runtime::traits::IdentityLookup<Self::AccountId>;
	type AccountData = pallet_balances::AccountData<Balance>;
}

// ─── pallet_balances Config ─────────────────────────────────────────
parameter_types! {
	pub const ExistentialDeposit: Balance = 1;
}

#[derive_impl(pallet_balances::config_preludes::TestDefaultConfig)]
impl pallet_balances::Config for Test {
	type Balance = Balance;
	type ExistentialDeposit = ExistentialDeposit;
	type AccountStore = System;
	type ReserveIdentifier = [u8; 8];
	type FreezeIdentifier = ();
	type MaxFreezes = ConstU32<10>;
	type RuntimeHoldReason = RuntimeHoldReason;
	type RuntimeFreezeReason = ();
}

// ─── pallet_gono_x402 Config ────────────────────────────────────────
parameter_types! {
	pub const MaxChannelDuration: u64 = 1000;
	pub const DisputePeriod: u64 = 10;
}

impl pallet_gono_x402::Config for Test {
	type NativeBalance = Balances;
	type RuntimeHoldReason = RuntimeHoldReason;
	type Signature = sr25519::Signature;
	type Signer = sr25519::Public;
	type MaxChannelDuration = MaxChannelDuration;
	type DisputePeriod = DisputePeriod;
}

// ─── Test Externalities Builder ─────────────────────────────────────
pub fn new_test_ext() -> sp_io::TestExternalities {
	let mut t = frame_system::GenesisConfig::<Test>::default()
		.build_storage()
		.unwrap();

	pallet_balances::GenesisConfig::<Test>::default()
		.assimilate_storage(&mut t)
		.unwrap();

	let mut ext = sp_io::TestExternalities::new(t);
	ext.execute_with(|| System::set_block_number(1));
	ext
}
