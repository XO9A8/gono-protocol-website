import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VotingIntegrityPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-zinc-800/30 border border-zinc-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 uppercase tracking-wider">
                            Democracy & Governance
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Voting & Election Integrity
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">
                            Protecting democracy through verifiable, transparent, and tamper-proof election infrastructure using blockchain provenance and zero-knowledge cryptography
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>Author: Meheraj Alam</span>
                            <span>•</span>
                            <span>January 1, 2026</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-red max-w-none">
                        {/* The Crisis */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">The Global Democracy Crisis</h2>

                            <div className="bg-gradient-to-r from-red-500/10 to-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                                <p className="text-gray-200 text-lg font-semibold mb-2">Democracy Under Attack</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>57% of global population</strong> lives in countries with declining democratic quality (V-Dem Institute, 2024)</li>
                                    <li><strong>89 countries</strong> experienced election integrity disputes in the past 5 years</li>
                                    <li><strong>$2.3 billion</strong> spent annually on election monitoring and dispute resolution</li>
                                    <li><strong>75% of voters</strong> in developing nations distrust official election results</li>
                                    <li><strong>68 million diaspora voters</strong> cannot participate due to logistical barriers</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">Why Traditional Voting Systems Fail</h3>

                            <div className="space-y-4">
                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">🗳️ Paper Ballot Vulnerabilities</h4>
                                    <p className="text-gray-300">Physical ballots can be destroyed, stuffed, or miscounted. No cryptographic proof of accuracy. Recounts are slow, expensive, and often disputed. Chain of custody easily broken.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">💻 Electronic Voting Machine (EVM) Hacks</h4>
                                    <p className="text-gray-300">Proprietary systems with no public audit trail. Researchers have demonstrated hacks on Diebold, ES&S, and Dominion machines. Vote tallies can be altered without detection. No voter-verifiable paper trail in many jurisdictions.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">🌍 Diaspora Voter Suppression</h4>
                                    <p className="text-gray-300">Citizens abroad face impossible logistics: mail delays, embassy queues, postal vote fraud. Bangladesh has 10+ million overseas workers who cannot vote. India&apos;s 32 million NRIs largely disenfranchised.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">📊 No Transparent Audit Trail</h4>
                                    <p className="text-gray-300">Voters cannot verify their vote was counted correctly. Election observers see only aggregates, not individual vote verification. Disputes drag on for months with no cryptographic proof.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">⚖️ Post-Election Violence</h4>
                                    <p className="text-gray-300">Kenya 2007: 1,500 deaths over disputed elections. Bolivia 2019: President resigns amid fraud allegations. Myanmar 2021: Military coup justified by election fraud claims. Lack of verifiable proof fuels violence.</p>
                                </div>
                            </div>
                        </section>

                        {/* Real-World Impact */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Real-World Election Integrity Failures</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🇺🇸 USA 2020: Trust Collapse</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Despite no evidence of widespread fraud, <strong>30% of Americans</strong> distrust the result. Hundreds of lawsuits filed. Capitol insurrection on Jan 6, 2021. Cost: <strong>$519 million</strong> in legal battles + immeasurable social division. <em>Root cause: No cryptographic proof of vote integrity.</em>
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🇻🇪 Venezuela 2024: Digital Authoritarianism</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Government claimed Maduro won with 51%. Opposition has receipts proving otherwise. CNE (election authority) refuses to release precinct-level data. No international observers allowed. <strong>Result: Authoritarian regime continues, millions flee.</strong>
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-blue-800/10 border border-zinc-600/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🇧🇩 Bangladesh 2024: Boycotted Elections</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Opposition parties boycott, citing rigged EVMs and voter intimidation. <strong>Turnout disputed:</strong> Government claims 40%, independent observers estimate 10-15%. No transparent audit possible. Democracy undermined.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-purple-800/10 border border-zinc-600/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🇰🇪 Kenya 2017: Nullified Election</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Supreme Court <strong>nullified presidential election</strong> due to &quot;irregularities and illegalities.&quot; Rerun held, but credibility damaged. Cost: <strong>$480 million</strong> for rerun + ethnic tensions escalate.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-3">📉 The Pattern: Lack of Verifiable Proof</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Across all these cases, the fundamental problem is identical: <strong>no cryptographic proof that votes were counted as cast.</strong>
                                    Voters cannot verify their individual ballots. Election authorities cannot prove aggregate tallies are accurate.
                                    Disputes devolve into &quot;he said, she said&quot; battles. Democracy erodes when citizens cannot trust the most basic civic act: voting.
                                </p>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">The Gono Protocol Solution: Verifiable Democracy Infrastructure</h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Gono Protocol creates a <strong>transparent, auditable, privacy-preserving</strong> voting system where every citizen can cryptographically verify their vote was counted while maintaining ballot secrecy.
                                Combines blockchain immutability with zero-knowledge proofs for the world&apos;s first truly trustless elections.
                            </p>

                            {/* Phase 1: VOTER REGISTRATION */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 1: CAPTURE — Secure Voter Registration & Identity</h3>
                                    <p className="text-gray-300 mb-4">
                                        Every eligible voter receives a cryptographic identity that proves their right to vote without revealing personal information.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🆔 Decentralized Voter IDs (DIDs)</h4>
                                        <p className="text-gray-300 mb-3">Election commission issues blockchain-anchored voter credentials:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>National ID linked to DID:</strong> Voter&apos;s NID verified by government database, then DID created</li>
                                            <li><strong>Biometric enrollment:</strong> Fingerprint/face scan linked to DID (stored locally, never on-chain)</li>
                                            <li><strong>Eligibility proof:</strong> Age, citizenship, residency verified cryptographically</li>
                                            <li><strong>One person, one vote:</strong> Duplicate registrations mathematically impossible (cryptographic uniqueness)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Example: Bangladesh Voter Registration</h4>
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
                                            {`{
  "voterDID": "did:gono:voter:bd:0x9f4a2c...",
  "nationalID": "19920615-1234-5678", // Hashed, never stored plaintext
  "eligibility": {
    "citizenship": "Bangladesh",
    "age": 32, // Proven via zk-SNARK without revealing birthdate
    "constituency": "Dhaka-10",
    "registrationDate": "2025-11-01"
  },
  "biometricHash": "QmX7k3p...", // Stored locally on voter's device
  "voterCardIssued": true,
  "blockchainRecord": {
    "txHash": "0xd4f8a1...",
    "block": 10284756,
    "timestamp": "2025-11-01T09:15:00Z"
  }
}`}
                                        </pre>
                                        <p className="text-gray-400 text-xs mt-3 italic">
                                            Voter&apos;s identity is verified once during registration. After that, they vote anonymously using zk-SNARKs.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔐 Privacy-Preserving Enrollment (zk-SNARKs)</h4>
                                        <p className="text-gray-300 mb-3">Voters prove eligibility without revealing identity:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Age verification:</strong> Prove &quot;I am over 18&quot; without revealing birthdate</li>
                                            <li><strong>Residency proof:</strong> Prove &quot;I live in Dhaka-10&quot; without revealing exact address</li>
                                            <li><strong>Citizenship:</strong> Prove Bangladeshi nationality without exposing NID number</li>
                                            <li><strong>Anti-coercion:</strong> No one can prove <em>how</em> you voted (even to yourself after voting!)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌍 Diaspora Voter Inclusion</h4>
                                        <p className="text-gray-300 mb-3">Overseas citizens vote without traveling:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Bangladeshi worker in Dubai verifies identity via embassy-issued DID</li>
                                            <li>Votes from phone/computer with biometric authentication</li>
                                            <li>Vote encrypted, transmitted to blockchain, counted in real-time</li>
                                            <li><strong>No postal delays, no ballot destruction, no disenfranchisement</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2: VOTING PROCESS */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-red-500/20 to-red-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-zinc-300 mb-3">Phase 2: CERTIFY — Anonymous Ballot Submission & Blockchain Registration</h3>
                                    <p className="text-gray-300 mb-4">
                                        Voters cast ballots that are cryptographically verifiable yet completely anonymous. Blockchain records every vote, but no one can trace votes to voters.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🗳️ Anonymous Ballot Casting</h4>
                                        <p className="text-gray-300 mb-3">How a vote is cast:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li><strong>Voter authenticates</strong> at polling station (or via app for diaspora) using DID + biometric</li>
                                            <li><strong>Gono generates anonymous voting token</strong> using zk-SNARK:
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-sm">
                                                    <li>Proves: &quot;I am a registered voter in this constituency&quot;</li>
                                                    <li>Proves: &quot;I have not voted yet in this election&quot;</li>
                                                    <li>Does NOT reveal: Who the voter is, their NID, or any identifying info</li>
                                                </ul>
                                            </li>
                                            <li><strong>Voter selects candidate</strong> on touchscreen/app interface</li>
                                            <li><strong>Vote encrypted with homomorphic encryption</strong> (allows tallying without decryption)</li>
                                            <li><strong>Encrypted vote submitted to blockchain</strong> with zero-knowledge proof of eligibility</li>
                                            <li><strong>Voter receives receipt code</strong> (proves vote was submitted, but not which candidate chosen)</li>
                                        </ol>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Ballot Submission Flow</h4>
                                        <div className="space-y-3 text-sm text-gray-300">
                                            <div className="flex items-start gap-3">
                                                <span className="text-blue-200 font-mono">1.</span>
                                                <div>
                                                    <strong className="text-white">Voter authenticates at polling station</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Fingerprint scan → DID verified → Voting token generated</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-blue-200 font-mono">2.</span>
                                                <div>
                                                    <strong className="text-white">zk-SNARK proof generated</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Proves eligibility + hasn&apos;t voted yet, without revealing identity</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-blue-200 font-mono">3.</span>
                                                <div>
                                                    <strong className="text-white">Vote encrypted (candidate choice hidden)</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Homomorphic encryption allows tallying without seeing individual votes</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-zinc-300 font-mono">4.</span>
                                                <div>
                                                    <strong className="text-white">Blockchain records encrypted vote</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Immutable, timestamped, verifiable — but anonymous</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-pink-400 font-mono">5.</span>
                                                <div>
                                                    <strong className="text-white">Voter receives receipt code</strong>
                                                    <p className="text-xs text-gray-400 mt-1">Can verify vote was recorded, but cannot prove to others how they voted (prevents vote-buying)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔒 End-to-End Verifiable (E2E-V) Voting</h4>
                                        <p className="text-gray-300 mb-3">Three levels of verification guarantee accuracy:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Cast-as-intended:</strong> Voter confirms on screen that their choice matches their intent (before encryption)</li>
                                            <li><strong>Recorded-as-cast:</strong> Voter uses receipt code to verify their encrypted vote appears on blockchain</li>
                                            <li><strong>Counted-as-recorded:</strong> Anyone can verify the tally matches the blockchain records (public audit)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⚡ Real-Time Vote Recording</h4>
                                        <p className="text-gray-300 mb-2">Unlike paper ballots counted after polls close:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Each vote recorded on blockchain within 2-3 seconds of casting</li>
                                            <li>Election observers see encrypted votes appearing in real-time (cannot see choices, only that votes are being cast)</li>
                                            <li>Impossible to destroy ballots after polls close (already on blockchain)</li>
                                            <li>Results available <strong>instantly</strong> when voting period ends (just decrypt homomorphic tally)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Anti-Coercion Mechanism</h4>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Problem:</strong> In authoritarian regimes or vote-buying schemes, voters may be forced to prove how they voted.
                                        </p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Gono Solution:</strong> Receipt-freeness via cryptographic commitments.
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                                            <li>Voter&apos;s receipt proves &quot;I voted&quot; but <em>cannot</em> prove <em>how</em> they voted</li>
                                            <li>Even if coerced, voter can show receipt to intimidator without revealing choice</li>
                                            <li>Optional: Voter can cast &quot;fake&quot; vote for intimidator, then revote privately (only final vote counts)</li>
                                            <li>Cryptographically impossible to create proof of vote choice after voting completes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3: VERIFICATION & AUDITING */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 3: CHECK — Public Verification & Instant Audits</h3>
                                    <p className="text-gray-300 mb-4">
                                        Anyone — voters, candidates, international observers, media — can verify the election results independently using blockchain data. No trust required.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">✅ Individual Vote Verification</h4>
                                        <p className="text-gray-300 mb-3">After voting, each citizen can check:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li>Enter receipt code into Gono Verify Engine</li>
                                            <li>System shows: &quot;Your encrypted vote is recorded in Block #10284758&quot;</li>
                                            <li>Voter confirms their vote exists on blockchain (without revealing who they voted for)</li>
                                            <li>If vote is missing or altered, voter can flag discrepancy with election commission</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">📊 Public Tally Verification</h4>
                                        <p className="text-gray-300 mb-3">After polls close, anyone can verify the count:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Download full blockchain ledger of encrypted votes</li>
                                            <li>Run Gono verification script to:
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-sm">
                                                    <li>Confirm all votes have valid zk-SNARK proofs (no fake votes)</li>
                                                    <li>Verify no voter ID voted twice (uniqueness check)</li>
                                                    <li>Decrypt homomorphic tally to get final results</li>
                                                    <li>Compare against official results announced by election commission</li>
                                                </ul>
                                            </li>
                                            <li>If official results don&apos;t match blockchain tally → <strong>mathematically provable fraud</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Verification Dashboard Example</h4>
                                        <div className="space-y-2 text-sm text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Total Votes Cast:</strong> 12,847,293 (matches blockchain record count)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Eligible Voters:</strong> 119,000,000 (turnout: 10.8%)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>All zk-SNARK proofs valid:</strong> No fraudulent votes detected</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>No duplicate voter IDs:</strong> One person, one vote confirmed</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Homomorphic tally:</strong> Candidate A: 6,234,812 | Candidate B: 6,612,481</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Official result match:</strong> Election Commission result matches blockchain</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">ℹ</span>
                                                <span><strong>Audit completed in:</strong> 3 minutes 47 seconds</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-4 italic">
                                            Any citizen, media outlet, or international observer can run this verification independently. No permission needed.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌐 International Observer Integration</h4>
                                        <p className="text-gray-300 mb-3">UN, EU, OSCE, Carter Center observers gain superpowers:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Real-time monitoring:</strong> Watch encrypted votes being cast across all polling stations</li>
                                            <li><strong>Statistical anomaly detection:</strong> AI flags suspicious patterns (e.g., 100% turnout in one district)</li>
                                            <li><strong>Instant recounts:</strong> Re-run tally verification in seconds, not weeks</li>
                                            <li><strong>Tamper-proof evidence:</strong> If fraud detected, blockchain provides irrefutable proof for international tribunals</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⏱️ Instant Results & Dispute Resolution</h4>
                                        <p className="text-gray-300 mb-2">No more weeks of counting and recounting:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Polls close at 6 PM → Results at 6:02 PM</strong> (just decrypt homomorphic tally)</li>
                                            <li>If candidate disputes result, anyone can re-verify blockchain in minutes</li>
                                            <li>Court cases resolved with cryptographic proof, not allegations</li>
                                            <li>Eliminates post-election limbo that fuels violence</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 4: DISPUTE RESOLUTION */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 4: DISPUTE — Cryptographic Evidence for Court Proceedings</h3>
                                    <p className="text-gray-300 mb-4">
                                        When election results are contested, blockchain provides mathematically irrefutable evidence. No more &quot;he said, she said&quot; — only cryptographic proof.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⚖️ Court-Admissible Blockchain Evidence</h4>
                                        <p className="text-gray-300 mb-3">How disputes are resolved:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li><strong>Candidate challenges result:</strong> Claims votes were not counted accurately</li>
                                            <li><strong>Court requests blockchain audit:</strong> Gono provides full election ledger</li>
                                            <li><strong>Independent verifiers re-count:</strong> Multiple parties run verification scripts simultaneously</li>
                                            <li><strong>Cryptographic proof submitted:</strong>
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside text-sm">
                                                    <li>Each vote has zk-SNARK proof of validity</li>
                                                    <li>Each voter ID unique (Merkle tree proof of no duplicates)</li>
                                                    <li>Homomorphic tally matches individual encrypted votes</li>
                                                    <li>Timestamps prove votes were cast during election period</li>
                                                </ul>
                                            </li>
                                            <li><strong>Court verdict:</strong> If blockchain proof contradicts official result, election nullified. If blockchain confirms result, challenge dismissed.</li>
                                        </ol>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Example: Venezuela-style Fraud Prevention</h4>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Scenario:</strong> Government claims Candidate A won with 51%. Opposition claims they won based on physical receipts.
                                        </p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>With Traditional System:</strong> CNE (election authority) refuses to release precinct data. International observers barred. No way to verify. Regime stays in power.
                                        </p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>With Gono Protocol:</strong>
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                                            <li>Opposition downloads full blockchain ledger (public data, no permission needed)</li>
                                            <li>Runs verification: Candidate A: 6.2M votes, Candidate B: 6.8M votes</li>
                                            <li>Submits blockchain proof to international court</li>
                                            <li>Government cannot deny (data is immutable, cryptographically signed)</li>
                                            <li><strong>Result: Democracy protected, authoritarian fraud exposed</strong></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔍 Forensic Audit Capabilities</h4>
                                        <p className="text-gray-300 mb-3">Deep investigation tools for suspected fraud:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Timestamp analysis:</strong> Detect if votes were backdated or submitted after polls closed</li>
                                            <li><strong>Geographic anomalies:</strong> Flag if 100% of votes in one district went to one candidate (statistically impossible)</li>
                                            <li><strong>Duplicate vote detection:</strong> Merkle tree proof shows if any voter ID voted multiple times</li>
                                            <li><strong>Invalid zk-SNARK proofs:</strong> Identify fake votes injected by attackers (would fail cryptographic verification)</li>
                                            <li><strong>Ballot stuffing proof:</strong> If 150,000 votes cast in district with 100,000 registered voters → mathematical impossibility exposed</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌐 International Tribunal Evidence</h4>
                                        <p className="text-gray-300 mb-2">UN, ICC, ICJ can verify elections independently:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Blockchain data exported in standard formats (JSON, CSV)</li>
                                            <li>Cryptographic signatures verified by international experts</li>
                                            <li>No reliance on government-provided data (blockchain is neutral source of truth)</li>
                                            <li>Sanctions or military intervention based on verifiable fraud proof, not allegations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Traditional Elections vs Gono Protocol</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-700">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-zinc-300">Feature</th>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-blue-200">Traditional Voting</th>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-blue-200">Gono Protocol</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Ballot Security</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Paper can be destroyed/stuffed. EVMs can be hacked.</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Cryptographically secured on immutable blockchain</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Voter Privacy</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Physical booth, but paper trail can be traced</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Zero-knowledge proofs guarantee anonymity</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Counting Time</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Hours to weeks (manual counting)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">2 minutes (instant decryption)</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Recount Cost</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$10-50 million per recount</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$0 (instant re-verification)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Diaspora Voting</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Mail delays, embassy queues, often impossible</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Vote from anywhere via phone/computer</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Fraud Prevention</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Voter ID cards (can be faked)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Cryptographic nullifiers (mathematically unforgeable)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Auditability</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Limited (only election officials can audit)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Public (anyone can verify blockchain)</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Dispute Resolution</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Allegations vs denials (no proof)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Cryptographic proof in court</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Cost per Election</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$5-15 per voter (paper, staff, security)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$0.50 per voter (blockchain gas fees)</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Transparency</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Opaque (trust election officials)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Fully transparent (trustless verification)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Adoption Roadmap */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Adoption Roadmap</h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-zinc-900/20 to-blue-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 1: Pilot Elections (2026 Q2-Q3)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Partner with Bangladesh Election Commission for local government elections</li>
                                        <li>• Deploy in 3-5 municipalities (Dhaka North, Chittagong, Sylhet)</li>
                                        <li>• Run parallel paper + Gono voting for comparison</li>
                                        <li>• Train poll workers on voter authentication and blockchain verification</li>
                                        <li>• Publish open audit results for public verification</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-purple-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 2: National Elections (2026 Q4 - 2027)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Scale to national parliamentary elections in Bangladesh</li>
                                        <li>• Enable diaspora voting for 10M+ overseas Bangladeshis</li>
                                        <li>• Partner with international observers (UN, Carter Center, EU)</li>
                                        <li>• Deploy 50,000+ polling stations with Gono-enabled EVMs</li>
                                        <li>• Real-time results broadcast with blockchain verification</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-green-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 3: Regional Expansion (2027-2028)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Deploy in India (NRI voting for 32M diaspora)</li>
                                        <li>• Kenya, Nigeria, South Africa adopt for national elections</li>
                                        <li>• Venezuela opposition uses Gono for parallel citizen audit</li>
                                        <li>• UNHCR pilots Gono for refugee camp governance elections</li>
                                        <li>• UN endorses Gono as recommended standard for developing democracies</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-red-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-zinc-300 mb-3">Phase 4: Global Standard (2028+)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• EU pilots Gono for European Parliament elections</li>
                                        <li>• USA states adopt for primaries and local elections</li>
                                        <li>• International Covenant on Civil and Political Rights (ICCPR) recognizes blockchain voting</li>
                                        <li>• 100+ countries using Gono for verifiable elections</li>
                                        <li>• Post-election violence reduced by 80% globally</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Impact Metrics */}
                        <section className="mb-12 bg-gradient-to-r from-red-500/10 to-red-500/10 border border-zinc-600/30 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-zinc-300 mb-6">Projected Impact (10-Year Horizon)</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">2 billion+</h3>
                                    <p className="text-gray-300">Citizens voting via Gono Protocol</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">$100B+</h3>
                                    <p className="text-gray-300">Saved in election costs & fraud prevention</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
                                    <p className="text-gray-300">Reduction in post-election violence</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">500M+</h3>
                                    <p className="text-gray-300">Diaspora voters enfranchised</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">2 minutes</h3>
                                    <p className="text-gray-300">Average time from polls closing to verified results</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                                    <p className="text-gray-300">Election transparency & public auditability</p>
                                </div>
                            </div>
                        </section>

                        {/* UN SDG Alignment */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">UN Sustainable Development Goals Alignment</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-zinc-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">🗳️</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 16: Peace, Justice & Strong Institutions</h3>
                                    <p className="text-gray-300 text-sm">
                                        Verifiable elections strengthen democracy, reduce post-election violence, and build trust in governance. Transparent institutions emerge from transparent elections.
                                    </p>
                                </div>
                                <div className="bg-zinc-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">⚖️</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 10: Reduced Inequalities</h3>
                                    <p className="text-gray-300 text-sm">
                                        Diaspora voting removes geographic barriers. Refugees participate in governance. Rural voters access mobile voting. Democracy becomes truly inclusive.
                                    </p>
                                </div>
                                <div className="bg-green-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">🌍</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 17: Partnerships for the Goals</h3>
                                    <p className="text-gray-300 text-sm">
                                        International election observation enhanced. Cross-border verification enables global democratic solidarity. UN, EU, AU collaboration on election integrity.
                                    </p>
                                </div>
                                <div className="bg-red-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">💪</div>
                                    <h3 className="text-lg font-semibold text-zinc-300 mb-2">SDG 5: Gender Equality</h3>
                                    <p className="text-gray-300 text-sm">
                                        Women in patriarchal societies can vote privately without family coercion. Anonymous voting protects political expression. Receipt-freeness prevents vote-buying that targets women.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center py-12 bg-gradient-to-r from-red-500/10 to-red-500/10 rounded-lg border border-zinc-600/30">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Protect Democracy?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join election commissions, democracy advocates, and citizens building verifiable elections on Gono Protocol.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#products"
                                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/50"
                                >
                                    Build Voting Infrastructure
                                </Link>
                                <Link
                                    href="/docs"
                                    className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    Read Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
