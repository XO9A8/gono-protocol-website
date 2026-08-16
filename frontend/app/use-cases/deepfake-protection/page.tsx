import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function DeepfakeProtectionPage() {
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
                            Deepfake Protection
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Deepfake Protection & Content Authenticity
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Creating an immutable registry of authentic content to combat the deepfake crisis
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <p className="italic">
                                Author: Jonayet Hossain
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="italic">
                                December 22, 2025
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-red max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Problem: The Rise of Undetectable Deepfakes</h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                AI-generated photos and videos have become so realistic that distinguishing them from authentic content is nearly impossible. Deepfake technology can now clone anyone&apos;s face, synthesize realistic voices, and generate full video content indistinguishable from real footage.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Who is at Risk?</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Target</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Potential Harm</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Celebrities</td>
                                            <td className="px-4 py-3 text-gray-300">Fake endorsements, fabricated scandals, reputation destruction</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Politicians</td>
                                            <td className="px-4 py-3 text-gray-300">Fabricated speeches, fake policy statements, election manipulation</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Influencers</td>
                                            <td className="px-4 py-3 text-gray-300">Brand damage, fake promotional content, impersonation</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Business Leaders</td>
                                            <td className="px-4 py-3 text-gray-300">Stock manipulation, fake announcements, corporate sabotage</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Ordinary People</td>
                                            <td className="px-4 py-3 text-gray-300">Non-consensual intimate images, identity theft, blackmail</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Problems</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-zinc-300 mb-3">1. No Source of Truth</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>There&apos;s no way to prove content is fake</li>
                                        <li>There&apos;s no way to prove the original is authentic</li>
                                        <li>The burden falls on victims to disprove fabrications</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-zinc-300 mb-3">2. Detection is Losing the Race</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>AI detection tools are increasingly unreliable</li>
                                        <li>Deepfake technology improves faster than detection</li>
                                        <li>By the time a fake is debunked, the damage is done</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-zinc-300 mb-3">3. No Registry of Authentic Content</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>Celebrities post thousands of photos/videos</li>
                                        <li>No centralized, verifiable record of their authentic content</li>
                                        <li>Anyone can claim any content is &quot;original&quot;</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Insight: Capture Authenticity at the Source</h2>

                            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-lg p-6 my-8">
                                <p className="text-lg text-zinc-300 font-semibold mb-2">The only way to fight deepfakes:</p>
                                <p className="text-gray-300 text-xl">
                                    Prove what&apos;s REAL, not detect what&apos;s fake
                                </p>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-4">
                                Instead of trying to detect AI-generated content (a losing battle), we must:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                <li>Capture authentic content with cryptographic proof at the moment of creation</li>
                                <li>Store this proof immutably on-chain</li>
                                <li>Allow anyone to verify authenticity by checking the registry</li>
                            </ol>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The Solution: Gono Protocol Content Authenticity System</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">How It Works</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">CAPTURE (At Creation)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Celebrity captures photo/video using C2PA-enabled device or app</li>
                                        <li>• Cryptographic signature embedded in content metadata</li>
                                        <li>• Device GPS, timestamp, and hardware info recorded</li>
                                        <li>• Content hash generated from original file</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">STORE (Permanent Archive)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Original content uploaded to Arweave (permanent storage)</li>
                                        <li>• Thumbnail/preview stored for quick reference</li>
                                        <li>• Cannot be deleted, altered, or censored</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">CERTIFY (On-Chain Registration)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Content hash anchored on Gono Protocol via ERC-7053</li>
                                        <li>• C2PA metadata linked to creator&apos;s verified wallet</li>
                                        <li>• Indexed for searchability</li>
                                        <li>• Creator&apos;s identity verified (optional: Proof-of-Humanity)</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-zinc-300 mb-3">CHECK (Public Verification)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Anyone can submit any image/video for verification</li>
                                        <li>• System computes hash and checks against on-chain registry</li>
                                        <li>• Result: ✅ VERIFIED (matches registry) or ⚠️ UNVERIFIED (not found)</li>
                                        <li>• Shows original source, timestamp, and creator if verified</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">The User Experience</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-4">For Content Creators</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                        <li>Download the Gono Capture App</li>
                                        <li>Capture content (C2PA credentials auto-embedded)</li>
                                        <li>Publish to social media (simultaneously registered on-chain)</li>
                                        <li>All authentic content now in verified registry</li>
                                    </ol>
                                </div>

                                <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-4">For the Public</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                        <li>See suspicious content online</li>
                                        <li>Submit to Gono Verification Portal</li>
                                        <li>Instant result:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>✅ VERIFIED — In creator&apos;s authentic registry</li>
                                                <li>⚠️ UNVERIFIED — Not in any verified registry</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">How Gono Protocol Enables This</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Protocol Feature</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">How It Protects Against Deepfakes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">ERC-7053 Provenance Rail</td>
                                            <td className="px-4 py-3 text-gray-300">Creates immutable &quot;content receipts&quot; linking creators to their authentic media</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">C2PA Integration</td>
                                            <td className="px-4 py-3 text-gray-300">Embeds cryptographic proof of authenticity at moment of capture</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Arweave Storage</td>
                                            <td className="px-4 py-3 text-gray-300">Permanently stores original content — cannot be deleted or altered</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Content Hashing</td>
                                            <td className="px-4 py-3 text-gray-300">Any modification breaks the hash — tampering is instantly detectable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Creator Verification</td>
                                            <td className="px-4 py-3 text-gray-300">Links content to verified identities (wallet + optional Proof-of-Humanity)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Public Index</td>
                                            <td className="px-4 py-3 text-gray-300">Allows anyone to check any content against the authenticity registry</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Example Scenario: Protecting a Celebrity</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Without Gono Protocol</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Celebrity must issue denial (often not believed)</li>
                                        <li>• Hire forensic experts to analyze the video</li>
                                        <li>• Legal action takes months/years</li>
                                        <li>• Damage is already done</li>
                                    </ul>
                                </div>

                                <div className="bg-stone-900/20 border border-stone-700 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">With Gono Protocol</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Anyone checks video against verified registry</li>
                                        <li>• Result: ⚠️ UNVERIFIED — Not in Celebrity X&apos;s authenticated content</li>
                                        <li>• Social media platforms auto-flag unverified content</li>
                                        <li>• Deepfake identified within minutes, not days</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Adoption Strategy</h2>

                            <div className="space-y-4">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-white mb-3">Phase 1: Celebrity Early Adopters</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Partner with high-profile celebrities facing deepfake threats</li>
                                        <li>• Provide white-glove onboarding and capture tools</li>
                                        <li>• Build initial registry of authenticated content</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-white mb-3">Phase 2: Platform Integration</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Integrate with major social media platforms</li>
                                        <li>• Provide verification API for content moderation</li>
                                        <li>• Automatic flagging of unverified content featuring known public figures</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-white mb-3">Phase 3: Universal Adoption</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Camera manufacturers embed C2PA by default</li>
                                        <li>• Smartphone apps integrate with Gono Protocol</li>
                                        <li>• Authenticity becomes standard expectation</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Conclusion: Proving What&apos;s Real</h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                The deepfake crisis cannot be solved by better detection. AI-generated content will only become more convincing. The only sustainable solution is to prove what&apos;s real at the source.
                            </p>

                            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-lg p-6 my-8">
                                <p className="text-lg text-zinc-300 font-semibold mb-2">Gono Protocol provides the infrastructure to:</p>
                                <p className="text-gray-300 text-xl italic">
                                    &quot;Create an immutable, publicly verifiable registry of authentic content — so deepfakes are instantly identifiable as unverified.&quot;
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The New Reality</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Verified content</strong> = Exists in creator&apos;s on-chain registry with C2PA proof</li>
                                <li><strong className="text-white">Unverified content</strong> = Does not exist in any registry (treat with suspicion)</li>
                            </ul>

                            <p className="text-gray-300 leading-relaxed mt-6">
                                For celebrities, influencers, and public figures, registering authentic content on Gono Protocol becomes as essential as copyright — a proactive defense against the rising tide of synthetic media.
                            </p>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 mt-8 italic">
                                <p className="text-gray-300">
                                    In a world where seeing is no longer believing, Gono Protocol makes authenticity verifiable — protecting individuals, preserving truth, and restoring trust in digital media.
                                </p>
                            </div>
                        </section>
                    </div>

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
