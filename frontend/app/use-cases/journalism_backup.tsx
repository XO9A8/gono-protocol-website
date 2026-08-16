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
                        className="inline-flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-medium mb-6 uppercase tracking-wider">
                            Use Case D
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Field Reporting & Transparent Journalism
                        </h1>
                        <p className="text-xl text-gray-300">
                            Revolutionizing investigative journalism with transparent funding and verifiable content authenticity
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-red max-w-none">
                        {/* The Problem */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-red-400 mb-4">The Problem</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Investigative journalism and field reporting face:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <strong className="text-white">Opaque funding</strong> — Donors don't know how their contributions are used
                                </li>
                                <li>
                                    <strong className="text-white">No milestone verification</strong> — No proof that reporters are completing promised work
                                </li>
                                <li>
                                    <strong className="text-white">Content authenticity</strong> — No way to verify that photos/videos from the field are genuine
                                </li>
                                <li>
                                    <strong className="text-white">Access monetization</strong> — Difficulty in fairly compensating journalists for their work
                                </li>
                            </ul>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-red-400 mb-6">The Solution: Gono Protocol for Journalism Provenance</h2>
                            
                            <div className="space-y-8">
                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-red-500 mb-3">Capture</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Journalist creates an <strong>Assignment Anchor</strong> — a digital record capturing:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- Story proposal</li>
                                                <li>- Budget and timeline</li>
                                                <li>- Conditions and milestones</li>
                                            </ul>
                                        </li>
                                        <li>• Registered on-chain via ERC-7053 and C2PA</li>
                                        <li>• Approved backers receive a non-transferable <strong>Sponsor Token</strong> (NFT) tying them to the project</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-red-500 mb-3">Certify</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Funds from sponsors are held in smart contract escrow (in stablecoins)</li>
                                        <li>• When reporter reaches a milestone, a witness node (e.g., editor) attests with on-chain signature</li>
                                        <li>• Smart contract releases payment upon attestation</li>
                                        <li>• Reporter uses TrustLens-like tools to capture geo-tagged photos as evidence with C2PA credentials</li>
                                        <li>• When article is published, readers can:
                                            <ul className="ml-6 mt-2 space-y-1">
                                                <li>- Buy one-time access token</li>
                                                <li>- Use x402 micropayment to access</li>
                                                <li>- Each access triggers content delivery and logs a receipt</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-red-500 mb-3">Check</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Any sponsor can query Gono Protocol to see full chronology from first dollar to publication</li>
                                        <li>• Verify funds were used as intended</li>
                                        <li>• Because sponsor tokens are non-transferable with no profit rights, this avoids securities classification</li>
                                        <li>• Every step tied to public provenance chain enhances credibility and donor transparency</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Key Benefits */}
                        <section className="mb-12 bg-red-500/5 border border-red-500/20 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-red-400 mb-4">Key Benefits</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Transparent Funding:</strong>
                                        <span className="text-gray-300"> Full accountability to donors</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Milestone Verification:</strong>
                                        <span className="text-gray-300"> Automated payment releases</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Content Authenticity:</strong>
                                        <span className="text-gray-300"> C2PA verified media</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 text-xl">✓</span>
                                    <div>
                                        <strong className="text-white">Fair Compensation:</strong>
                                        <span className="text-gray-300"> Direct reader micropayments</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center py-8">
                            <Link
                                href="/docs"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-500 text-black font-semibold rounded-lg hover:from-red-400 hover:to-red-400 transition-all duration-300"
                            >
                                Learn More in Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
