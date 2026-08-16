import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function JournalismPage() {
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
                            Gono Moncho
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Decentralized News Publishing & Censorship-Resistant Journalism
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            A complete decentralized ecosystem for verifiable journalism, built on the Gono Protocol blockchain
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <p className="italic">
                                Author: Jonayet Hossain
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="italic">
                                December 15, 2025
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-red max-w-none">
                        {/* The Problem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Problem: A Crisis of Trust in Modern Journalism</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Global Challenge</h3>
                            <p className="text-gray-300 leading-relaxed">
                                The global news ecosystem faces an unprecedented crisis. In the digital age, while access to information has become easier than ever, the <strong className="text-white">integrity and trustworthiness</strong> of that information has severely degraded. The very platforms designed to inform the public have become tools for manipulation, censorship, and oppression.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Problems Identified</h3>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">1. Power and Narrative Control</h4>
                                <p className="text-gray-300 mb-3">Modern media appears diverse but is predominantly controlled by a few powerful entities. These gatekeepers can:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Influence public perception by promoting stories that serve their interests</li>
                                    <li>Suppress information that threatens their power</li>
                                    <li>Create an asymmetric information environment where the public receives a curated, biased view of reality</li>
                                </ul>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">2. Misinformation and Disinformation Epidemic</h4>
                                <p className="text-gray-300 mb-3">Centralized, profit-driven digital platforms prioritize <strong className="text-white">engagement over accuracy</strong>. This has resulted in:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Widespread fabrication and dissemination of fake news</li>
                                    <li>Manipulation of public emotions for political objectives</li>
                                    <li>Erosion of societal harmony and trust</li>
                                    <li>Citizens unable to distinguish genuine journalism from sophisticated propaganda</li>
                                </ul>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">3. Lack of Transparency and Traceability</h4>
                                <p className="text-gray-300 mb-3">Once news is published:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Its origins become opaque and unverifiable</li>
                                    <li>Alterations and edits occur without public knowledge</li>
                                    <li>No mechanism exists to trace stories back to their source</li>
                                    <li>Bias can be injected and inconvenient facts retracted without accountability</li>
                                </ul>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-zinc-300 mb-3">4. Threats to Journalists</h4>
                                <p className="text-gray-300 mb-3">Those who cover sensitive topics face:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Immense political and legal pressure</li>
                                    <li>Physical threats and intimidation</li>
                                    <li>Imprisonment under oppressive laws</li>
                                    <li>Zero protection for anonymous, secure reporting</li>
                                    <li>Violation of fundamental press freedom principles</li>
                                </ul>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Case Study: Bangladesh — A Nation in Crisis</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Bangladesh represents a stark example of systemic press oppression.
                            </p>

                            <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-blue-200 mb-3">Current Situation</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong className="text-white">World Press Freedom Index Rank</strong>: 149th out of 180 countries (2025)</li>
                                    <li><strong className="text-white">One of the least press-freedom countries</strong> in the world</li>
                                </ul>
                            </div>

                            <h4 className="text-xl font-semibold text-white mb-3">Oppressive Legal Frameworks</h4>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Law</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Digital Security Act (DSA) 2018</td>
                                            <td className="px-4 py-3 text-gray-300">Criminalized online speech critical of the government</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Cyber Security Act (CSA) 2023</td>
                                            <td className="px-4 py-3 text-gray-300">Continued control and suppression of journalists&apos; voices</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 className="text-xl font-semibold text-white mb-3">Real Consequences</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>Journalists jailed for writing against oppression</li>
                                <li>Self-censorship has become the norm</li>
                                <li>Independent journalism is virtually non-existent</li>
                                <li>Powerful actors can erase inconvenient truths from the public record</li>
                            </ul>
                        </section>

                        {/* The Core Problem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Core Problem: Centralized Architecture = Vulnerable Journalism</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Existing news systems are built on <strong className="text-white">centralized client-server architectures</strong> which are inherently:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li><strong className="text-white">Vulnerable to censorship</strong> — Content can be deleted or altered at will</li>
                                <li><strong className="text-white">Controllable by gatekeepers</strong> — Single points of failure enable manipulation</li>
                                <li><strong className="text-white">Non-transparent</strong> — No audit trail for content changes</li>
                                <li><strong className="text-white">Unsafe for journalists</strong> — Identity exposure puts reporters at risk</li>
                            </ul>

                            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-lg p-6 my-8">
                                <p className="text-lg text-zinc-300 font-semibold mb-2">The fundamental need:</p>
                                <p className="text-gray-300">
                                    A technological solution that is decentralized to resist censorship, transparent to ensure accountability, and immutable to guarantee the permanence and authenticity of published information.
                                </p>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Solution: Gono Moncho</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Built on the Gono Protocol Blockchain</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We introduce <strong className="text-white">Gono Moncho</strong> — a complete decentralized ecosystem for verifiable journalism, built on top of the <strong className="text-white">Gono Protocol</strong> blockchain infrastructure.
                            </p>

                            <h4 className="text-xl font-semibold text-white mb-3">What is Gono Moncho?</h4>
                            <p className="text-gray-300 mb-4">Gono Moncho (meaning &quot;People&apos;s Platform&quot; in Bengali) is a:</p>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">Decentralized news publishing media ecosystem</strong></li>
                                <li><strong className="text-white">Censorship-resistant platform</strong> for journalists</li>
                                <li><strong className="text-white">Economically self-sustaining</strong> community-governed system</li>
                                <li><strong className="text-white">Privacy-preserving</strong> environment using Zero-Knowledge Proofs</li>
                            </ul>

                            <h4 className="text-xl font-semibold text-white mb-3">Why Gono Protocol as the Foundation?</h4>
                            <p className="text-gray-300 mb-4">The Gono Protocol provides the perfect blockchain infrastructure for Gono Moncho:</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Protocol Feature</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">How It Enables Gono Moncho</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">ERC-7053 Provenance Rail</td>
                                            <td className="px-4 py-3 text-gray-300">Creates immutable &quot;media receipts&quot; — permanent records of all published content</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Arweave Integration (Store Pallet)</td>
                                            <td className="px-4 py-3 text-gray-300">&quot;Pay-once, store-forever&quot; ensures news cannot be deleted or censored</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">zk-SNARK Privacy Engine</td>
                                            <td className="px-4 py-3 text-gray-300">Allows journalists to prove identity without exposing their wallet or real-world identity</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">SANUB Trust Logic</td>
                                            <td className="px-4 py-3 text-gray-300">Algorithmically calculates the credibility of content and verifiers</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Polkadot Security</td>
                                            <td className="px-4 py-3 text-gray-300">Institutional-grade protection against state-level attacks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Problem-Solution Mapping */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">How Gono Moncho Solves Each Problem</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Moncho Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Deletion and Alteration</td>
                                            <td className="px-4 py-3 text-gray-300">Content published on immutable ledger via Arweave — only the owner can modify, and all changes are versioned</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Threats to Journalists</td>
                                            <td className="px-4 py-3 text-gray-300">Zero-Knowledge Proofs enable anonymous publishing with verified authenticity</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Misinformation</td>
                                            <td className="px-4 py-3 text-gray-300">Multi-layer verification: AI Oracles + Community Verifiers + Journalistic Integrity Council</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Narrative Control</td>
                                            <td className="px-4 py-3 text-gray-300">NewsDAO governance ensures community-driven, decentralized editorial control</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Lack of Accountability</td>
                                            <td className="px-4 py-3 text-gray-300">All actions recorded on transparent public ledger with full audit trail</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Sybil Attacks</td>
                                            <td className="px-4 py-3 text-gray-300">Economic staking + Proof-of-Humanity (BrightID) prevents fake account manipulation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Ecosystem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Gono Moncho Ecosystem</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Publishing Channels</h3>
                            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">Framework Integration</strong> — Allows existing news outlets to integrate with the ecosystem</li>
                                <li><strong className="text-white">Portal</strong> — A hub for verified journalists, analysts, and verifiers to publish and consume news</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Roles</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Role</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Function</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Incentive</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Reporter</td>
                                            <td className="px-4 py-3 text-gray-300">Publishes news with supporting evidence</td>
                                            <td className="px-4 py-3 text-gray-300">Earns NEWS tokens and CRED reputation</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Analyzer</td>
                                            <td className="px-4 py-3 text-gray-300">Provides in-depth analysis and context</td>
                                            <td className="px-4 py-3 text-gray-300">Earns CRED based on accuracy</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Verifier</td>
                                            <td className="px-4 py-3 text-gray-300">Community members who assess and flag content</td>
                                            <td className="px-4 py-3 text-gray-300">Token rewards for honest participation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Dual Token Economy</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">NEWS Token (ERC-20)</strong> — Economic governance token for staking, fees, and DAO participation</li>
                                <li><strong className="text-white">CRED Token (Soulbound)</strong> — Non-transferable reputation token earned through quality contributions</li>
                            </ul>
                        </section>

                        {/* Flow */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Flow: From Capture to Verification</h2>
                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                                <pre className="text-gray-300 whitespace-pre">
                                    {`┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   CAPTURE   │────▶│    STORE    │────▶│   VERIFY    │────▶│   CERTIFY   │────▶│    CHECK    │
│  (Content)  │     │  (Arweave)  │     │  (SANUB+AI) │     │ (ERC-7053)  │     │  (Audit)    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
       │                  │                   │                   │                   │
       ▼                  ▼                   ▼                   ▼                   ▼
    SDK + ZKP         Permanent          Multi-layer         On-chain           Public
    Metadata          Storage            Validation          Receipt            Explorer`}
                                </pre>
                            </div>
                        </section>

                        {/* SDG Impact */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Impact: Alignment with UN Sustainable Development Goals</h2>

                            <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-blue-200 mb-3">SDG 16: Peace, Justice and Strong Institutions</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Ensures public access to information (Target 16.10)</li>
                                    <li>Creates transparent, accountable institutions (Target 16.6)</li>
                                    <li>Provides practical tools for justice against oppressive laws (Target 16.3)</li>
                                </ul>
                            </div>

                            <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6 mb-6">
                                <h4 className="text-xl font-semibold text-blue-200 mb-3">SDG 10: Reduced Inequalities</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Empowers marginalized voices</li>
                                    <li>Prevents information-based political exclusion</li>
                                </ul>
                            </div>

                            <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-blue-200 mb-3">SDG 9: Industry, Innovation and Infrastructure</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Novel digital infrastructure using cutting-edge technology</li>
                                    <li>Resilient, sustainable, and reliable innovation for democratic societies</li>
                                </ul>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Conclusion: A New Era for Journalism</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The crisis is clear. Traditional centralized media systems have failed to protect journalistic integrity, enabling censorship, misinformation, and threats to reporters who dare speak truth to power.
                            </p>

                            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-lg p-6 my-8">
                                <p className="text-lg text-zinc-300 font-semibold mb-2">Gono Moncho offers a fundamentally new paradigm:</p>
                                <p className="text-gray-300 text-xl italic">
                                    &quot;A decentralized, self-sustaining, self-policing ecosystem where the financial and reputational incentives of all parties are aligned with the collective goal of producing and verifying truthful information.&quot;
                                </p>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-4">
                                By leveraging blockchain&apos;s unique capabilities—decentralization, immutability, transparency, and cryptoeconomics—Gono Moncho provides:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Freedom</strong> from censorship and oppression</li>
                                <li><strong className="text-white">Safety</strong> for journalists through cryptographic anonymity</li>
                                <li><strong className="text-white">Trust</strong> through multi-layer verification</li>
                                <li><strong className="text-white">Sustainability</strong> through value-capture tokenomics</li>
                                <li><strong className="text-white">Democracy</strong> through community governance</li>
                            </ul>

                            <p className="text-gray-300 leading-relaxed mt-6 text-lg font-semibold">
                                This is not just a platform. This is a movement to reclaim the truth.
                            </p>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mt-8 italic">
                                <p className="text-gray-300">
                                    For nations like Bangladesh, where press freedom ranks among the world&apos;s lowest, Gono Moncho represents hope — a technological intervention that gives power back to the people and protects those who fight for it.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Back Link */}
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mt-12 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
