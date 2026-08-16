#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(test)]
mod mock;
#[cfg(test)]
mod tests;

#[frame_support::pallet]
pub mod pallet {
	use codec::{Decode, DecodeWithMemTracking, Encode, MaxEncodedLen};
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	#[pallet::config]
	pub trait Config: frame_system::Config {
		#[pallet::constant]
		type MaxRulingLength: Get<u32>;
	}

	#[derive(
		Clone, Encode, Decode, DecodeWithMemTracking, Eq, PartialEq, Debug, TypeInfo, MaxEncodedLen,
	)]
	pub enum DisputeStatus {
		Waiting,
		Appealable,
		Resolved,
	}

	#[pallet::storage]
	pub type Disputes<T: Config> = StorageMap<
		_,
		Blake2_128Concat,
		u32,                               // Dispute ID
		(T::AccountId, DisputeStatus, u8), // (Plaintiff, Status, RulingChoice)
		OptionQuery,
	>;

	#[pallet::storage]
	pub type NextDisputeId<T: Config> = StorageValue<_, u32, ValueQuery>;

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		DisputeEscalated {
			dispute_id: u32,
			plaintiff: T::AccountId,
		},
		RulingSubmitted {
			dispute_id: u32,
			ruling: u8,
		},
	}

	#[pallet::error]
	pub enum Error<T> {
		DisputeNotFound,
		DisputeAlreadyResolved,
	}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(10_000, 0))]
		pub fn escalate_dispute(
			origin: OriginFor<T>,
			_arbitrable_cid: BoundedVec<u8, ConstU32<128>>,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;
			let id = NextDisputeId::<T>::get();
			NextDisputeId::<T>::put(id.saturating_add(1));
			Disputes::<T>::insert(id, (who.clone(), DisputeStatus::Waiting, 0));
			Self::deposit_event(Event::DisputeEscalated {
				dispute_id: id,
				plaintiff: who,
			});
			Ok(())
		}

		#[pallet::call_index(1)]
		#[pallet::weight(Weight::from_parts(10_000, 0))]
		pub fn submit_ruling(origin: OriginFor<T>, dispute_id: u32, ruling: u8) -> DispatchResult {
			ensure_root(origin)?;
			Disputes::<T>::try_mutate(dispute_id, |d| -> DispatchResult {
				let (_, status, r) = d.as_mut().ok_or(Error::<T>::DisputeNotFound)?;
				ensure!(
					*status != DisputeStatus::Resolved,
					Error::<T>::DisputeAlreadyResolved
				);
				*status = DisputeStatus::Resolved;
				*r = ruling;
				Ok(())
			})?;
			Self::deposit_event(Event::RulingSubmitted { dispute_id, ruling });
			Ok(())
		}
	}
}

pub use pallet::*;
