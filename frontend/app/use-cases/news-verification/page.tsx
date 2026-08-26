import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function NewsVerificationPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-zinc-800/30 border border-zinc-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 uppercase tracking-wider">
                            isItTrue?
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Cross-Source News Verification & AI Aggregation
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Harnessing the collective intelligence of global journalism through AI-powered aggregation, cross-source consensus scoring, and immutable blockchain provenance
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <p className="italic">
                                Author: Jonayet Hossain
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="italic">
                                December 12, 2025
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-red max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Problem: How Do We Know What&apos;s True?</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Information Overload Challenge</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                In today&apos;s hyper-connected world, a single event can generate coverage from hundreds of news outlets — local newspapers, national broadcasters, international channels, online publications, and independent journalists. While this abundance of sources <em>should</em> improve our understanding, it creates a paradox:
                            </p>
                            <blockquote className="border-l-4 border-stone-500 pl-4 italic text-gray-300 my-6">
                                More sources, less clarity.
                            </blockquote>
                            <p className="text-gray-300 leading-relaxed">
                                When the same story appears across CNN, BBC, Al Jazeera, Reuters, local outlets, and countless blogs — how does a reader know which version is accurate? Are they all reporting the same facts? Are some adding spin? Are others fabricating details?
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Problems Identified</h3>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">1. Fragmented Truth</h4>
                                <p className="text-gray-300 mb-3">A single event is covered by dozens of outlets, each with their own:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Editorial bias</li>
                                    <li>Regional perspective</li>
                                    <li>Level of access to sources</li>
                                    <li>Degree of fact-checking</li>
                                </ul>
                                <p className="text-gray-300 mt-3"><strong className="text-white">Result:</strong> Readers receive fragmented, sometimes contradictory versions of the same story with no way to synthesize them.</p>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">2. No Cross-Source Verification Mechanism</h4>
                                <p className="text-gray-300 mb-3">Currently, there is <strong className="text-white">no system</strong> that:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Tracks how many outlets covered the same event</li>
                                    <li>Compares the facts reported across sources</li>
                                    <li>Identifies consensus vs. outliers</li>
                                    <li>Weights credibility based on cross-source agreement</li>
                                </ul>
                                <p className="text-gray-300 mt-3"><strong className="text-white">Result:</strong> A fabricated story on one outlet looks just as legitimate as a verified story covered by 50 outlets.</p>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">3. The &quot;First Mover&quot; Problem</h4>
                                <p className="text-gray-300 mb-3">When breaking news occurs:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Speed is prioritized over accuracy</li>
                                    <li>Initial reports often contain errors</li>
                                    <li>Corrections are buried or ignored</li>
                                    <li>No mechanism links original reports to follow-up verification</li>
                                </ul>
                                <p className="text-gray-300 mt-3"><strong className="text-white">Result:</strong> Misinformation spreads before verification catches up.</p>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">4. Evidence Scarcity</h4>
                                <p className="text-gray-300 mb-3">Most news articles are:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Self-contained with no linked evidence</li>
                                    <li>Missing primary source citations</li>
                                    <li>Impossible to verify independently</li>
                                </ul>
                                <p className="text-gray-300 mt-3"><strong className="text-white">Result:</strong> Readers must &quot;trust&quot; outlets rather than verify claims.</p>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">5. Information Silos</h4>
                                <p className="text-gray-300 mb-3">Each news outlet operates in isolation:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>No shared database of events</li>
                                    <li>No cross-referencing capability</li>
                                    <li>No aggregate credibility score</li>
                                </ul>
                                <p className="text-gray-300 mt-3"><strong className="text-white">Result:</strong> The collective intelligence of global journalism is fragmented and inaccessible.</p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Insight: Consensus = Credibility</h2>

                            <blockquote className="border-l-4 border-stone-500 pl-4 italic text-gray-300 my-6">
                                If 50 independent news outlets report the same facts about an event, it&apos;s far more likely to be true than if only 1 outlet reports it.
                            </blockquote>

                            <p className="text-gray-300 leading-relaxed mb-4">
                                This is the principle of <strong className="text-white">cross-source consensus</strong>. Independent verification by multiple sources is the gold standard of journalistic credibility.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                But currently, there&apos;s no system that:
                            </p>
                            <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-6">
                                <li>Automatically identifies matching stories across outlets</li>
                                <li>Counts and displays coverage consensus</li>
                                <li>Synthesizes information into a comprehensive view</li>
                                <li>Provides an on-chain, immutable record of this verification</li>
                            </ol>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Solution: isItTrue?</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Built on the Gono Protocol Blockchain</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We introduce <strong className="text-white">isItTrue?</strong> — an AI-powered, cross-source news verification and aggregation system built on the Gono Protocol infrastructure.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">What is isItTrue?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">isItTrue? is a:</p>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">Intelligent web scraper</strong> that monitors global news outlets</li>
                                <li><strong className="text-white">Event clustering engine</strong> that groups articles covering the same story</li>
                                <li><strong className="text-white">AI summarization system</strong> that creates comprehensive, multi-source summaries</li>
                                <li><strong className="text-white">Evidence aggregator</strong> that finds supporting materials (videos, documents, social media posts)</li>
                                <li><strong className="text-white">Credibility scoring system</strong> based on cross-source consensus</li>
                                <li><strong className="text-white">Blockchain-backed provenance system</strong> using Gono Protocol&apos;s ERC-7053 standard</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">How It Works</h3>
                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200 mb-2">1. Scraper Network</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Monitors 500+ news outlets in real-time</li>
                                            <li>• Extracts article content, metadata, timestamps</li>
                                            <li>• Generates content hashes for duplicate detection</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200 mb-2">2. Event Clustering Engine (AI)</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• NLP analysis identifies same-event articles</li>
                                            <li>• Groups stories by event, not by keywords</li>
                                            <li>• Links updates, corrections, follow-ups to original event</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200 mb-2">3. Consensus Scoring Module</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Counts unique outlets covering the event</li>
                                            <li>• Weights outlets by historical credibility (SANUB algorithm)</li>
                                            <li>• Calculates CONSENSUS SCORE (1-100)</li>
                                            <li>• Identifies outlier claims vs. verified facts</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-zinc-300 mb-2">4. AI Summarization Engine</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Synthesizes all articles into comprehensive summary</li>
                                            <li>• Highlights agreed facts vs. disputed claims</li>
                                            <li>• Cites all source articles with links</li>
                                            <li>• Flags missing information or gaps</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200 mb-2">5. Evidence Aggregator</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Scrapes for supporting evidence (videos, photos, documents)</li>
                                            <li>• Finds primary source materials</li>
                                            <li>• Links social media posts from witnesses</li>
                                            <li>• Attaches verified evidence to the event record</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-200 mb-2">6. Blockchain Certification (Gono Protocol)</h4>
                                        <ul className="space-y-1 text-gray-300 text-sm">
                                            <li>• Event summary anchored on-chain via ERC-7053</li>
                                            <li>• Immutable record of all sources and evidence</li>
                                            <li>• Consensus score stored transparently</li>
                                            <li>• Permanent archival on Arweave</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">How Gono Protocol Enables isItTrue?</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Protocol Feature</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">How It Powers isItTrue?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">ERC-7053 Provenance Rail</td>
                                            <td className="px-4 py-3 text-gray-300">Creates immutable &quot;Event Receipts&quot; — permanent on-chain records of news events with all source links</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Arweave Integration</td>
                                            <td className="px-4 py-3 text-gray-300">Permanently stores AI summaries, evidence links, and article snapshots</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">SANUB Trust Logic</td>
                                            <td className="px-4 py-3 text-gray-300">Weights outlet credibility based on historical accuracy, improving consensus calculations</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">AI Oracle Integration</td>
                                            <td className="px-4 py-3 text-gray-300">Powers the NLP clustering, summarization, and evidence discovery engines</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">x402 Micropayments</td>
                                            <td className="px-4 py-3 text-gray-300">Enables pay-per-query access to verified news summaries for users and AI agents</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">zk-SNARK Privacy</td>
                                            <td className="px-4 py-3 text-gray-300">Allows anonymous verification contributions without exposing validator identity</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Consensus Score: Quantifying Truth</h2>

                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Score</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Label</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Meaning</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">90-100</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">✅ Verified</td>
                                            <td className="px-4 py-3 text-gray-300">Covered by 20+ credible outlets with matching facts and evidence</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">70-89</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">🟢 High Confidence</td>
                                            <td className="px-4 py-3 text-gray-300">Covered by 10+ outlets with strong agreement</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">50-69</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">🟡 Developing</td>
                                            <td className="px-4 py-3 text-gray-300">Multiple outlets with some discrepancies</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">30-49</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">🟠 Low Confidence</td>
                                            <td className="px-4 py-3 text-gray-300">Few sources or significant fact conflicts</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">0-29</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">🔴 Unverified</td>
                                            <td className="px-4 py-3 text-gray-300">Single source or contradicted by other outlets</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Problem → Solution Mapping</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">isItTrue? Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Fragmented Truth</td>
                                            <td className="px-4 py-3 text-gray-300">AI-powered synthesis creates unified, comprehensive summaries from all sources</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">No Cross-Source Verification</td>
                                            <td className="px-4 py-3 text-gray-300">Automatic clustering tracks coverage across 500+ outlets with consensus scoring</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">First Mover Problem</td>
                                            <td className="px-4 py-3 text-gray-300">Versioned event records link initial reports to corrections and updates</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Evidence Scarcity</td>
                                            <td className="px-4 py-3 text-gray-300">Active scraping finds and attaches videos, documents, social posts</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Information Silos</td>
                                            <td className="px-4 py-3 text-gray-300">Unified on-chain event database with all sources linked</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Trust Without Verification</td>
                                            <td className="px-4 py-3 text-gray-300">Immutable blockchain record with transparent scoring methodology</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Conclusion: From Fragmented News to Verified Truth</h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                The current news ecosystem presents a paradox: more sources than ever, yet less clarity about what&apos;s true. Readers are overwhelmed, journalists are siloed, and misinformation thrives in the chaos.
                            </p>

                            <blockquote className="border-l-4 border-stone-500 pl-4 italic text-gray-300 my-6">
                                isItTrue?, built on the Gono Protocol, transforms this landscape by harnessing the collective intelligence of global journalism through AI-powered aggregation, cross-source consensus scoring, and immutable blockchain provenance.
                            </blockquote>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Core Insight</h3>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">50 outlets saying the same thing</strong> = strong signal of truth</li>
                                <li><strong className="text-white">1 outlet contradicting 49</strong> = clear outlier to investigate</li>
                                <li><strong className="text-white">Full transparency</strong> = readers can verify for themselves</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Outcome</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">For Readers:</strong> One place to find comprehensive, verified news with transparent credibility scores</li>
                                <li><strong className="text-white">For Journalists:</strong> Powerful research tool showing global coverage landscape</li>
                                <li><strong className="text-white">For AI Agents:</strong> Reliable access to verified information</li>
                                <li><strong className="text-white">For Society:</strong> Reduced misinformation through transparent, consensus-based verification</li>
                            </ul>

                            <p className="text-gray-400 italic mt-8 text-center">
                                In a world drowning in information, isItTrue? provides the life raft of verified truth — aggregated from hundreds of sources, verified by consensus, and preserved forever on the blockchain.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
