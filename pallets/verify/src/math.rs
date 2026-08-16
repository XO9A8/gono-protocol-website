//! SANUB Credibility Scoring Math implementation
//!
//! Implements deterministic fixed-point arithmetic using `sp_runtime::FixedU128`
//! strictly adhering to Section 8.2 of the Gono Protocol Whitepaper (Equations 2–8).

use sp_runtime::traits::{CheckedDiv, One, Saturating, Zero};
use sp_runtime::FixedU128;

/// Public Belief Calculation (Eq 2):
/// $$B_n = \frac{1}{N_n} \sum_{k=1}^{N_n} p_k$$
///
/// where $p_k \in \{0, 1\}$ is the binary score from verifier $k$,
/// and $N_n$ is the total number of verifiers for content $n$.
pub fn calculate_public_belief(approvals: u32, total_verifiers: u32) -> FixedU128 {
	if total_verifiers == 0 {
		return FixedU128::zero();
	}
	FixedU128::from_rational(approvals as u128, total_verifiers as u128)
}

/// Content Importance (Eq 3):
/// $$I_n = \frac{N_n}{N_T}$$
///
/// where $N_n$ is the number of verifiers for content $n$, and $N_T$ is
/// total active verifiers in the network.
pub fn calculate_content_importance(
	total_verifiers: u32,
	total_active_verifiers: u32,
) -> FixedU128 {
	if total_active_verifiers == 0 {
		return FixedU128::zero();
	}
	let clamped_verifiers = total_verifiers.min(total_active_verifiers);
	FixedU128::from_rational(clamped_verifiers as u128, total_active_verifiers as u128)
}

/// Computes $e^x$ for $x \ge 0$ using a high-order Taylor expansion:
/// $$e^x = \sum_{k=0}^{12} \frac{x^k}{k!}$$
pub fn exp_fixed(x: FixedU128) -> FixedU128 {
	let mut sum = FixedU128::one();
	let mut term = FixedU128::one();
	for i in 1..=12 {
		let i_fixed = FixedU128::from_u32(i);
		term = term
			.saturating_mul(x)
			.checked_div(&i_fixed)
			.unwrap_or_default();
		sum = sum.saturating_add(term);
	}
	sum
}

/// Belief Sigmoid Function (Eq 4):
/// $$S(B_n) = \frac{e^{B_n - 0.75}}{e^{B_n - 0.75} + 1}$$
///
/// Evaluates sigmoid smoothly and deterministically without floating-point math:
/// - If $B_n \ge 0.75$, let $x = B_n - 0.75 \ge 0 \implies S(B_n) = \frac{e^x}{e^x + 1}$
/// - If $B_n < 0.75$, let $y = 0.75 - B_n > 0 \implies S(B_n) = \frac{1}{1 + e^y}$
pub fn calculate_belief_sigmoid(belief: FixedU128) -> FixedU128 {
	let threshold = FixedU128::from_rational(3, 4); // 0.75

	if belief >= threshold {
		let x = belief.saturating_sub(threshold);
		let exp_x = exp_fixed(x);
		let denominator = exp_x.saturating_add(FixedU128::one());
		exp_x.checked_div(&denominator).unwrap_or_default()
	} else {
		let y = threshold.saturating_sub(belief);
		let exp_y = exp_fixed(y);
		let denominator = FixedU128::one().saturating_add(exp_y);
		FixedU128::one()
			.checked_div(&denominator)
			.unwrap_or_default()
	}
}

/// Analyst Positive Credit $T_p$ calculation (Eq 5):
/// $$T_p = \sum_{i=1}^{a_p} S(B_{n_i}) + \sum_{j=1}^{a_n} S(1 - B_{n_j})$$
///
/// Returns the credit reward increment for a single content evaluation:
/// - If analyst approved: $S(B_n)$
/// - If analyst rejected: $S(1 - B_n)$
pub fn calculate_analyst_evaluation_reward(belief: FixedU128, approved: bool) -> FixedU128 {
	if approved {
		calculate_belief_sigmoid(belief)
	} else {
		let inverted_belief = FixedU128::one().saturating_sub(belief);
		calculate_belief_sigmoid(inverted_belief)
	}
}

/// Analyst Credit with punishment weighting (Eq 6):
/// $$C_a = \frac{T_p}{T_p + (a_t - T_p) \cdot \left(2 + \frac{1}{a_t}\right)}$$
///
/// where $a_t = a_p + a_n$ is the total analyses conducted by the analyst.
pub fn calculate_analyst_credit(t_p: FixedU128, a_p: u32, a_n: u32) -> FixedU128 {
	let a_t = a_p.saturating_add(a_n);
	if a_t == 0 {
		return FixedU128::zero();
	}
	let a_t_fixed = FixedU128::from_u32(a_t);
	// Punishment multiplier factor: (2 + 1/a_t)
	let penalty_factor =
		FixedU128::from_u32(2).saturating_add(FixedU128::from_rational(1, a_t as u128));

	// (a_t - T_p) * (2 + 1/a_t)
	let diff = a_t_fixed.saturating_sub(t_p);
	let penalty_term = diff.saturating_mul(penalty_factor);

	// Denominator: T_p + (a_t - T_p) * (2 + 1/a_t)
	let denominator = t_p.saturating_add(penalty_term);
	t_p.checked_div(&denominator).unwrap_or_default()
}

/// Reporter Content Credit Contribution (Eq 7 inner term):
/// $$\text{Contrib}_i = \left( \frac{\sum_{j=1}^{a_p} C_{a_j}}{\sum_{j=1}^{a_p} C_{a_j} + \sum_{k=1}^{a_n} C_{a_k} \cdot \left(2 + \frac{1}{a_{ti}}\right)} \right) \cdot I_{n_i}$$
///
/// Evaluates the endorsement-weighted credibility contribution of content $i$ to its reporter.
pub fn calculate_reporter_content_contribution(
	sum_ca_approved: FixedU128,
	sum_ca_rejected: FixedU128,
	total_analysts: u32,
	importance: FixedU128,
) -> FixedU128 {
	if total_analysts == 0 {
		// Fallback to neutral 0.5 endorsement when no analysts participated
		return FixedU128::from_rational(1, 2).saturating_mul(importance);
	}
	let penalty_factor =
		FixedU128::from_u32(2).saturating_add(FixedU128::from_rational(1, total_analysts as u128));
	let penalized_rejected = sum_ca_rejected.saturating_mul(penalty_factor);
	let denominator = sum_ca_approved.saturating_add(penalized_rejected);

	let endorsement_ratio = sum_ca_approved
		.checked_div(&denominator)
		.unwrap_or_default();
	endorsement_ratio.saturating_mul(importance)
}

/// Reporter Cumulative Credit (Eq 7):
/// $$C_r = \frac{1}{n_{rt}} \sum_{i=1}^{n_{rt}} \text{Contrib}_i$$
pub fn calculate_cumulative_reporter_credit(
	total_contributions: FixedU128,
	published_contents_count: u32,
) -> FixedU128 {
	if published_contents_count == 0 {
		return FixedU128::zero();
	}
	let count_fixed = FixedU128::from_u32(published_contents_count);
	total_contributions
		.checked_div(&count_fixed)
		.unwrap_or_default()
}

/// Content Credibility Score $C_n$ (Eq 8):
/// $$C_n = \left( \frac{\sum C_{a_{approved}}}{\sum C_{a_{approved}} + \sum C_{a_{rejected}}} \right) \cdot C_r$$
///
/// Combines reporter credit $C_r$ with analyst consensus.
pub fn calculate_content_credibility(
	sum_ca_approved: FixedU128,
	sum_ca_rejected: FixedU128,
	reporter_credit: FixedU128,
) -> FixedU128 {
	let total_ca = sum_ca_approved.saturating_add(sum_ca_rejected);
	if total_ca.is_zero() {
		// When no analyst reviews exist, credit defaults to reporter's own baseline credit
		return reporter_credit;
	}
	let analyst_approval_ratio = sum_ca_approved.checked_div(&total_ca).unwrap_or_default();
	analyst_approval_ratio.saturating_mul(reporter_credit)
}
