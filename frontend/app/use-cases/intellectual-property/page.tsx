import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function IntellectualPropertyPage() {
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
                            Intellectual Property
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Intellectual Property Protection & Licensing
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Creating immutable proof of original creation and automating IP licensing through blockchain provenance
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <p className="italic">
                                Author: Meheraj Alam
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="italic">
                                January 9, 2026
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-red max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Problem: IP Theft & Attribution Crisis</h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Creators across all industries face an unprecedented crisis in protecting their intellectual property. The digital age has made copying trivial while proving originality remains expensive and complex.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Current Challenges</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">No proof of original creation</td>
                                            <td className="px-4 py-3 text-gray-300">Anyone can claim &quot;I made this first&quot;</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Timestamp manipulation</td>
                                            <td className="px-4 py-3 text-gray-300">File metadata can be altered</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Expensive registration</td>
                                            <td className="px-4 py-3 text-gray-300">Traditional copyright/patent costs are prohibitive</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Cross-border disputes</td>
                                            <td className="px-4 py-3 text-gray-300">International IP enforcement is complex</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">AI training disputes</td>
                                            <td className="px-4 py-3 text-gray-300">Creators can&apos;t prove their work was used to train AI</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Licensing opacity</td>
                                            <td className="px-4 py-3 text-gray-300">No way to track who&apos;s using your IP and how</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Solution: IP Provenance with Gono Protocol</h2>

                            <div className="space-y-6">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 1: CAPTURE - Original Creation Registration</h3>
                                    <p className="text-gray-300 mb-4">When a creator finishes their work (art, music, code, design, writing):</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Upload to Gono Protocol via TrustLens or SDK</li>
                                        <li>• System generates cryptographic hash of the file</li>
                                        <li>• Embeds C2PA metadata:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- Creator&apos;s identity (can be pseudonymous via zk-SNARK)</li>
                                                <li>- Creation timestamp (from secure time server)</li>
                                                <li>- Device/software used (Photoshop, Ableton, VSCode, etc.)</li>
                                                <li>- Geolocation (optional)</li>
                                            </ul>
                                        </li>
                                        <li>• File stored on Arweave (optional, for permanent hosting)</li>
                                    </ul>
                                    <p className="text-blue-200 mt-4 font-semibold">Result: Immutable &quot;birth certificate&quot; for the creative work</p>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 2: CERTIFY - On-Chain Registration</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Hash + metadata anchored on blockchain via ERC-7053</li>
                                        <li>• Creates permanent, tamper-proof record</li>
                                        <li>• NFT minted (non-transferable, just proof of ownership)</li>
                                        <li>• Previous versions linked (if iterative work)</li>
                                    </ul>
                                    <p className="text-blue-200 mt-4 font-semibold">Result: Undeniable proof of &quot;who created what, when&quot;</p>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 3: LICENSING - x402 Micropayments</h3>
                                    <p className="text-gray-300 mb-4">When someone wants to use the IP:</p>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">For Humans:</h4>
                                        <ul className="space-y-1 text-gray-300">
                                            <li>• Visit Gono Explorer, find the work</li>
                                            <li>• Pay licensing fee via stablecoin</li>
                                            <li>• Receive verifiable license NFT</li>
                                            <li>• License terms embedded in smart contract</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">For AI Companies:</h4>
                                        <ul className="space-y-1 text-gray-300">
                                            <li>• AI agent queries Gono API for training data</li>
                                            <li>• Pays per-asset via x402 protocol</li>
                                            <li>• Receives usage certificate</li>
                                            <li>• Payment automatically splits to creator</li>
                                        </ul>
                                    </div>
                                    <p className="text-blue-200 mt-4 font-semibold">Result: Transparent, automated licensing without intermediaries</p>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 4: VERIFICATION - Dispute Resolution</h3>
                                    <p className="text-gray-300 mb-4">When someone claims &quot;I made this first&quot;:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Both parties submit their files to Gono Protocol</li>
                                        <li>• System compares:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- Cryptographic hashes</li>
                                                <li>- C2PA metadata timestamps</li>
                                                <li>- Blockchain registration dates</li>
                                            </ul>
                                        </li>
                                        <li>• Immutable evidence decides who&apos;s the original creator</li>
                                        <li>• No need for expensive legal battles</li>
                                    </ul>
                                    <p className="text-blue-200 mt-4 font-semibold">Result: Mathematical proof replaces subjective judgment</p>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 5: DERIVATIVE WORKS - Attribution Chain</h3>
                                    <p className="text-gray-300 mb-4">When someone creates a derivative work:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• New work registered with reference to original</li>
                                        <li>• Creates provenance chain: Original → Derivative</li>
                                        <li>• Smart contract enforces revenue sharing:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- 70% to derivative creator</li>
                                                <li>- 30% to original creator (customizable)</li>
                                            </ul>
                                        </li>
                                        <li>• All parties can verify attribution on-chain</li>
                                    </ul>
                                    <p className="text-blue-200 mt-4 font-semibold">Result: Fair compensation for inspiration/remixing</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Real-World Scenarios</h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-zinc-900/20 to-zinc-800/20 border-l-4 border-stone-500 rounded-r-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">Scenario A: Graphic Designer vs. Client Dispute</h3>
                                    <div className="mb-4">
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">Problem:</strong> Client claims designer &quot;stole&quot; their idea</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">With Gono Protocol:</strong></p>
                                        <ul className="space-y-1 text-gray-300">
                                            <li>✓ Designer registered mockups on Gono before sending to client</li>
                                            <li>✓ Blockchain timestamp proves designer created it first</li>
                                            <li>✓ Client&apos;s claim is mathematically disproven</li>
                                            <li>✓ Designer shows verifiable proof in court</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-zinc-800/20 border-l-4 border-stone-500 rounded-r-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">Scenario B: Musician vs. AI Music Platform</h3>
                                    <div className="mb-4">
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">Problem:</strong> AI company trained model on artist&apos;s music without permission</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">With Gono Protocol:</strong></p>
                                        <ul className="space-y-1 text-gray-300">
                                            <li>✓ Artist registered songs on Gono before AI scraped them</li>
                                            <li>✓ Artist queries which AI models have paid for license</li>
                                            <li>✓ Finds unauthorized use</li>
                                            <li>✓ Presents blockchain evidence showing original registration date</li>
                                            <li>✓ AI company must pay retroactive fees + damages</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-zinc-800/20 border-l-4 border-stone-500 rounded-r-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">Scenario C: Open-Source Code Attribution</h3>
                                    <div className="mb-4">
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">Problem:</strong> Company uses GPL code in proprietary software without attribution</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 mb-2"><strong className="text-blue-200">With Gono Protocol:</strong></p>
                                        <ul className="space-y-1 text-gray-300">
                                            <li>✓ Developer registers code with GPL license terms on Gono</li>
                                            <li>✓ License terms embedded in ERC-7053 record</li>
                                            <li>✓ Automated tools scan for code similarity</li>
                                            <li>✓ When match found, smart contract enforces GPL compliance or commercial license payment</li>
                                            <li>✓ Violation triggers on-chain report</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Key Advantages Over Traditional IP Systems</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Traditional System</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Protocol</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">Register with copyright office ($35-$85 per work)</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Free on-chain registration</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">Wait weeks for approval</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Instant</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">Only covers single jurisdiction</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Global, borderless</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">Manual dispute resolution</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Cryptographic proof</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">No usage tracking</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Real-time licensing data</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300">Legal fees for enforcement</td>
                                            <td className="px-4 py-3 text-blue-200 font-semibold">Smart contract enforcement</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Use Case Breakdown by Industry</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">🎨 Visual Artists</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register paintings, illustrations, photos</li>
                                        <li>• License for commercial use via x402</li>
                                        <li>• Prove originality against copycats</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">🎵 Musicians</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register songs, beats, melodies</li>
                                        <li>• Track AI music model usage</li>
                                        <li>• Enforce sampling attribution</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">💻 Software Developers</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register code repositories</li>
                                        <li>• Link to open-source licenses</li>
                                        <li>• Prevent proprietary theft</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">✍️ Writers</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register manuscripts, articles, scripts</li>
                                        <li>• Prove first publication date</li>
                                        <li>• License for AI training datasets</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">👗 Fashion Designers</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register clothing designs</li>
                                        <li>• Prevent fast-fashion copying</li>
                                        <li>• Track licensed reproductions</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="text-lg font-bold text-blue-200 mb-2">🎬 Filmmakers</h3>
                                    <ul className="space-y-1 text-gray-300 text-sm">
                                        <li>• Register scripts and footage</li>
                                        <li>• License clips for AI training</li>
                                        <li>• Track derivative works</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Integration with Existing Tools</h2>

                            <p className="text-gray-300 mb-6">Gono Protocol can seamlessly integrate with the creative tools you already use:</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">Adobe Creative Cloud</strong>
                                        <p className="text-gray-300 text-sm">Auto-register on export</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">GitHub</strong>
                                        <p className="text-gray-300 text-sm">Register commits with C2PA</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">Spotify/SoundCloud</strong>
                                        <p className="text-gray-300 text-sm">On-chain music registration</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">WordPress</strong>
                                        <p className="text-gray-300 text-sm">Blog post provenance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">Figma</strong>
                                        <p className="text-gray-300 text-sm">Design file timestamps</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-200 text-xl">→</span>
                                    <div>
                                        <strong className="text-white">Final Cut Pro</strong>
                                        <p className="text-gray-300 text-sm">Video project registration</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Conclusion: The Future of IP Protection</h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                The traditional intellectual property system was designed for a pre-digital era. Gono Protocol brings IP protection into the 21st century with instant, global, cryptographically-verified proof of creation.
                            </p>

                            <blockquote className="border-l-4 border-stone-500 pl-4 italic text-gray-300 my-6">
                                For creators, registering work on Gono Protocol becomes as essential as saving the file itself — a proactive defense in a world where digital copying is effortless and proving originality is priceless.
                            </blockquote>

                            <div className="bg-gradient-to-r from-zinc-900/30 to-zinc-800/30 border border-zinc-600/30 rounded-lg p-6 mt-8">
                                <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>✓ <strong className="text-white">Instant Proof:</strong> Blockchain timestamp proves creation date</li>
                                    <li>✓ <strong className="text-white">Global Protection:</strong> Borderless, jurisdiction-independent</li>
                                    <li>✓ <strong className="text-white">Automated Licensing:</strong> Smart contracts handle permissions and payments</li>
                                    <li>✓ <strong className="text-white">AI Transparency:</strong> Track who&apos;s using your work for training</li>
                                    <li>✓ <strong className="text-white">Fair Compensation:</strong> Direct creator payments via x402</li>
                                    <li>✓ <strong className="text-white">Dispute Resolution:</strong> Mathematical proof replaces costly litigation</li>
                                </ul>
                            </div>

                            <p className="text-gray-400 italic mt-8 text-center">
                                Protect your creativity. Prove your originality. Build on Gono Protocol.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
