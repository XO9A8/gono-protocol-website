#![cfg_attr(not(feature = "std"), no_std)]

//! # Gono Verify Pallet (SANUB Credibility Scoring Math)
//!
//! Implements Section 8.2 of the Gono Protocol Whitepaper (SANUB Framework):
//! - **Reporters**: Register published content CIDs.
//! - **Analysts**: Provide in-depth analysis (Approve / Reject) with numerical stake.
//! - **Verifiers**: Community members submit binary assessment ($p_k \in \{0, 1\}$).
//! - **Deterministic Fixed-Point Math**: Computes Public Belief ($B_n$), Content Importance ($I_n$),
//!   Belief Sigmoid ($S(B_n)$), Analyst Credit ($C_a$), Reporter Credit ($C_r$), and Content Credibility ($C_n$).

pub mod math;
pub mod types;

#[cfg(test)]
mod mock;
#[cfg(test)]
mod tests;

pub use math::*;
pub use types::*;

#[frame_support::pallet]
pub mod pallet {
	use super::math::*;
	use super::types::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;
	use sp_runtime::traits::Saturating;
	use sp_runtime::FixedU128;

	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Maximum byte length of a CID.
		#[pallet::constant]
		type MaxCidLength: Get<u32>;

		/// Minimum number of verifiers required before finalization.
		#[pallet::constant]
		type MinVerifiers: Get<u32>;

		/// Evaluation period (in blocks) before permissionless finalization is permitted.
		#[pallet::constant]
		type EvaluationPeriod: Get<BlockNumberFor<Self>>;

		/// Optional inspector to verify CID existence in external storage.
		type ContentInspector: ContentInspector<CidOf<Self>>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	// ─── Storage Items (Whitepaper Section 8.2 & Spec) ─────────────────

	/// Verifier binary scores: (CID, AccountId) -> u8 (0 or 1).
	#[pallet::storage]
	#[pallet::getter(fn verifier_scores)]
	pub type VerifierScores<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		CidOf<T>,
		Blake2_128Concat,
		T::AccountId,
		u8,
		OptionQuery,
	>;

	/// Analyst reviews: (CID, AccountId) -> AnalystReview (Verdict, Stake).
	#[pallet::storage]
	#[pallet::getter(fn analyst_reviews)]
	pub type AnalystReviews<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		CidOf<T>,
		Blake2_128Concat,
		T::AccountId,
		AnalystReview,
		OptionQuery,
	>;

	/// Analyst credit reputation score: AccountId -> FixedU128 (Eq 6).
	#[pallet::storage]
	#[pallet::getter(fn analyst_credit)]
	pub type AnalystCredit<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, FixedU128, ValueQuery>;

	/// Reporter credit reputation score: AccountId -> FixedU128 (Eq 7).
	#[pallet::storage]
	#[pallet::getter(fn reporter_credit)]
	pub type ReporterCredit<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, FixedU128, ValueQuery>;

	/// Final content credibility score: CID -> FixedU128 (Eq 8).
	#[pallet::storage]
	#[pallet::getter(fn content_credibility)]
	pub type ContentCredibility<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, FixedU128, ValueQuery>;

	// ─── Auxiliary Storage Items ───────────────────────────────────────

	/// Total count of verifiers ($N_n$) who voted on a content CID.
	#[pallet::storage]
	#[pallet::getter(fn verifier_count)]
	pub type VerifierCount<T: Config> = StorageMap<_, Blake2_128Concat, CidOf<T>, u32, ValueQuery>;

	/// Count of approving verifiers ($\sum p_k$) on a content CID.
	#[pallet::storage]
	#[pallet::getter(fn verifier_approvals)]
	pub type VerifierApprovals<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, u32, ValueQuery>;

	/// Total active verifiers ($N_T$) across the protocol.
	#[pallet::storage]
	#[pallet::getter(fn total_active_verifiers)]
	pub type TotalActiveVerifiers<T: Config> = StorageValue<_, u32, ValueQuery>;

	/// Tracks if an account has ever voted as a verifier (to dynamically increment $N_T$).
	#[pallet::storage]
	#[pallet::getter(fn has_voted_before)]
	pub type HasVotedBefore<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, bool, ValueQuery>;

	/// The registered reporter for a content CID.
	#[pallet::storage]
	#[pallet::getter(fn content_reporter)]
	pub type ContentReporter<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, T::AccountId, OptionQuery>;

	/// Block number when the content was registered.
	#[pallet::storage]
	#[pallet::getter(fn content_submitted_at)]
	pub type ContentSubmittedAt<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, BlockNumberFor<T>, OptionQuery>;

	/// Flag indicating whether content credibility calculation has been finalized.
	#[pallet::storage]
	#[pallet::getter(fn content_finalized)]
	pub type ContentFinalized<T: Config> =
		StorageMap<_, Blake2_128Concat, CidOf<T>, bool, ValueQuery>;

	/// Tracks analyst evaluation statistics: AccountId -> (a_p, a_n).
	#[pallet::storage]
	#[pallet::getter(fn analyst_stats)]
	pub type AnalystStats<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, (u32, u32), ValueQuery>;

	/// Cumulative positive credit $T_p$ accumulated by an analyst: AccountId -> FixedU128.
	#[pallet::storage]
	#[pallet::getter(fn analyst_positive_credit)]
	pub type AnalystPositiveCredit<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, FixedU128, ValueQuery>;

	/// Number of published contents ($n_{rt}$) for a reporter: AccountId -> u32.
	#[pallet::storage]
	#[pallet::getter(fn reporter_published_contents)]
	pub type ReporterPublishedContents<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, u32, ValueQuery>;

	/// Cumulative sum of content credit contributions for a reporter: AccountId -> FixedU128.
	#[pallet::storage]
	#[pallet::getter(fn reporter_credit_sum)]
	pub type ReporterCreditSum<T: Config> =
		StorageMap<_, Blake2_128Concat, T::AccountId, FixedU128, ValueQuery>;

	// ─── Events ────────────────────────────────────────────────────────

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A new content was registered by a reporter for verification.
		ContentRegistered {
			cid: CidOf<T>,
			reporter: T::AccountId,
		},
		/// A community verifier cast a binary vote.
		VerifierVoted {
			cid: CidOf<T>,
			who: T::AccountId,
			score: u8,
		},
		/// An analyst submitted an in-depth review with stake.
		AnalystReviewSubmitted {
			cid: CidOf<T>,
			who: T::AccountId,
			verdict: Verdict,
			stake: u128,
		},
		/// Analyst credit score was recalculated and updated.
		AnalystCreditUpdated {
			who: T::AccountId,
			credit: FixedU128,
		},
		/// Reporter credit score was recalculated and updated.
		ReporterCreditUpdated {
			who: T::AccountId,
			credit: FixedU128,
		},
		/// Content credibility score calculation finalized.
		ContentFinalized {
			cid: CidOf<T>,
			credibility_score: FixedU128,
			public_belief: FixedU128,
			importance: FixedU128,
		},
	}

	// ─── Errors ────────────────────────────────────────────────────────

	#[pallet::error]
	pub enum Error<T> {
		/// Content is not registered on-chain.
		ContentNotFound,
		/// Content with this CID is already registered.
		ContentAlreadyRegistered,
		/// Content credibility calculation is already finalized.
		ContentAlreadyFinalized,
		/// Verifier score must be binary (0 or 1).
		InvalidScore,
		/// Account has already voted as a verifier on this content.
		AlreadyVoted,
		/// Analyst has already submitted a review for this content.
		AlreadyReviewed,
		/// Stake must be strictly greater than zero.
		ZeroStake,
		/// Evaluation period has not elapsed yet for permissionless finalization.
		EvaluationPeriodPending,
		/// Number of verifiers is below the required MinVerifiers threshold.
		InsufficientVerifiers,
		/// Content inspection failed (e.g. CID rejected by ContentInspector).
		ContentInspectorRejected,
	}

	// ─── Extrinsics ────────────────────────────────────────────────────

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Register a content CID for verification by its reporter.
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().reads_writes(1, 2))]
		pub fn register_content(origin: OriginFor<T>, cid: CidOf<T>) -> DispatchResult {
			let reporter = ensure_signed(origin)?;

			ensure!(
				T::ContentInspector::content_exists(&cid),
				Error::<T>::ContentInspectorRejected
			);
			ensure!(
				!ContentReporter::<T>::contains_key(&cid),
				Error::<T>::ContentAlreadyRegistered
			);

			let now = frame_system::Pallet::<T>::block_number();
			ContentReporter::<T>::insert(&cid, &reporter);
			ContentSubmittedAt::<T>::insert(&cid, now);

			Self::deposit_event(Event::ContentRegistered { cid, reporter });

			Ok(())
		}

		/// Submit a binary verifier assessment ($p_k \in \{0, 1\}$).
		#[pallet::call_index(1)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().reads_writes(3, 4))]
		pub fn vote_as_verifier(
			origin: OriginFor<T>,
			cid: CidOf<T>,
			score_binary: u8,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;

			ensure!(score_binary <= 1, Error::<T>::InvalidScore);
			ensure!(
				ContentReporter::<T>::contains_key(&cid),
				Error::<T>::ContentNotFound
			);
			ensure!(
				!ContentFinalized::<T>::get(&cid),
				Error::<T>::ContentAlreadyFinalized
			);
			ensure!(
				!VerifierScores::<T>::contains_key(&cid, &who),
				Error::<T>::AlreadyVoted
			);

			VerifierScores::<T>::insert(&cid, &who, score_binary);
			VerifierCount::<T>::mutate(&cid, |count| *count = count.saturating_add(1));

			if score_binary == 1 {
				VerifierApprovals::<T>::mutate(&cid, |approvals| {
					*approvals = approvals.saturating_add(1)
				});
			}

			// Update global active verifiers count if first-time voter
			if !HasVotedBefore::<T>::get(&who) {
				HasVotedBefore::<T>::insert(&who, true);
				TotalActiveVerifiers::<T>::mutate(|total| *total = total.saturating_add(1));
			}

			Self::deposit_event(Event::VerifierVoted {
				cid,
				who,
				score: score_binary,
			});

			Ok(())
		}

		/// Submit an in-depth analyst review with stake.
		#[pallet::call_index(2)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().reads_writes(2, 1))]
		pub fn submit_analyst_review(
			origin: OriginFor<T>,
			cid: CidOf<T>,
			verdict: Verdict,
			stake: u128,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;

			ensure!(stake > 0, Error::<T>::ZeroStake);
			ensure!(
				ContentReporter::<T>::contains_key(&cid),
				Error::<T>::ContentNotFound
			);
			ensure!(
				!ContentFinalized::<T>::get(&cid),
				Error::<T>::ContentAlreadyFinalized
			);
			ensure!(
				!AnalystReviews::<T>::contains_key(&cid, &who),
				Error::<T>::AlreadyReviewed
			);

			let review = AnalystReview { verdict, stake };
			AnalystReviews::<T>::insert(&cid, &who, review);

			Self::deposit_event(Event::AnalystReviewSubmitted {
				cid,
				who,
				verdict,
				stake,
			});

			Ok(())
		}

		/// Finalize content credibility calculation (SANUB Equations 2–8).
		///
		/// Permissionless after `EvaluationPeriod`, or immediate via Root/Sudo.
		#[pallet::call_index(3)]
		#[pallet::weight(Weight::from_parts(50_000, 0) + T::DbWeight::get().reads_writes(10, 10))]
		pub fn finalize_content_score(origin: OriginFor<T>, cid: CidOf<T>) -> DispatchResult {
			let is_root = frame_system::ensure_root(origin.clone()).is_ok();
			if !is_root {
				let _caller = ensure_signed(origin)?;
				let submitted_at =
					ContentSubmittedAt::<T>::get(&cid).ok_or(Error::<T>::ContentNotFound)?;
				let now = frame_system::Pallet::<T>::block_number();
				ensure!(
					now >= submitted_at.saturating_add(T::EvaluationPeriod::get()),
					Error::<T>::EvaluationPeriodPending
				);
			}

			let reporter = ContentReporter::<T>::get(&cid).ok_or(Error::<T>::ContentNotFound)?;
			ensure!(
				!ContentFinalized::<T>::get(&cid),
				Error::<T>::ContentAlreadyFinalized
			);

			let n_n = VerifierCount::<T>::get(&cid);
			ensure!(
				n_n >= T::MinVerifiers::get(),
				Error::<T>::InsufficientVerifiers
			);

			let approvals = VerifierApprovals::<T>::get(&cid);
			let n_t = TotalActiveVerifiers::<T>::get().max(T::MinVerifiers::get());

			// Eq 2: Public Belief B_n
			let b_n = calculate_public_belief(approvals, n_n);

			// Eq 3: Content Importance I_n
			let i_n = calculate_content_importance(n_n, n_t);

			// Iterate analyst reviews to accumulate credits
			let mut sum_ca_approved = FixedU128::zero();
			let mut sum_ca_rejected = FixedU128::zero();
			let mut total_analysts_on_content = 0u32;

			for (analyst_id, review) in AnalystReviews::<T>::iter_prefix(&cid) {
				total_analysts_on_content = total_analysts_on_content.saturating_add(1);
				let (mut a_p, mut a_n) = AnalystStats::<T>::get(&analyst_id);
				let mut t_p = AnalystPositiveCredit::<T>::get(&analyst_id);

				let is_approved = review.verdict == Verdict::Approve;
				let delta_reward = calculate_analyst_evaluation_reward(b_n, is_approved);
				t_p = t_p.saturating_add(delta_reward);

				if is_approved {
					a_p = a_p.saturating_add(1);
				} else {
					a_n = a_n.saturating_add(1);
				}

				// Eq 5 & 6: Recalculate Analyst Credit C_a
				let c_a = calculate_analyst_credit(t_p, a_p, a_n);

				AnalystStats::<T>::insert(&analyst_id, (a_p, a_n));
				AnalystPositiveCredit::<T>::insert(&analyst_id, t_p);
				AnalystCredit::<T>::insert(&analyst_id, c_a);

				if is_approved {
					sum_ca_approved = sum_ca_approved.saturating_add(c_a);
				} else {
					sum_ca_rejected = sum_ca_rejected.saturating_add(c_a);
				}

				Self::deposit_event(Event::AnalystCreditUpdated {
					who: analyst_id,
					credit: c_a,
				});
			}

			// Eq 7: Reporter Credit C_r update
			let contrib = calculate_reporter_content_contribution(
				sum_ca_approved,
				sum_ca_rejected,
				total_analysts_on_content,
				i_n,
			);

			let published_count = ReporterPublishedContents::<T>::mutate(&reporter, |c| {
				*c = c.saturating_add(1);
				*c
			});
			let cumulative_sum = ReporterCreditSum::<T>::mutate(&reporter, |s| {
				*s = s.saturating_add(contrib);
				*s
			});

			let c_r = calculate_cumulative_reporter_credit(cumulative_sum, published_count);
			ReporterCredit::<T>::insert(&reporter, c_r);

			Self::deposit_event(Event::ReporterCreditUpdated {
				who: reporter,
				credit: c_r,
			});

			// Eq 8: Content Credibility C_n
			let c_n = calculate_content_credibility(sum_ca_approved, sum_ca_rejected, c_r);
			ContentCredibility::<T>::insert(&cid, c_n);
			ContentFinalized::<T>::insert(&cid, true);

			Self::deposit_event(Event::ContentFinalized {
				cid,
				credibility_score: c_n,
				public_belief: b_n,
				importance: i_n,
			});

			Ok(())
		}
	}
}

pub use pallet::*;
