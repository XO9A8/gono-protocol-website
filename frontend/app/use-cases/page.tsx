import { Navbar, Footer } from "@/components";
import Link from "next/link";
import Image from "next/image";

const useCases = [
    {
        id: "journalism",
        title: "Field Reporting & Transparent Journalism",
        category: "Gono Moncho",
        overview: "A complete decentralized ecosystem for verifiable journalism, built on the Gono Protocol blockchain. Empowering censorship-resistant publishing with privacy-preserving Zero-Knowledge Proofs.",
        date: "12.15.2025",
        author: "Jonayet Hossain",
        image: "/images/use-cases/journalism.jpg", // Placeholder - will be replaced
    },
    {
        id: "deepfake-protection",
        title: "Deepfake Protection & Content Authenticity",
        category: "Content Verification",
        overview: "Creating an immutable registry of authentic content to combat the deepfake crisis. Prove what's REAL at the source with cryptographic verification.",
        date: "12.22.2025",
        author: "Jonayet Hossain",
        image: "/images/use-cases/deepfake.jpg", // Placeholder - will be replaced
    },
    {
        id: "utilities",
        title: "Government & Utility Services",
        category: "Public Infrastructure",
        overview: "How BTRC, NEIR, and Electricity Providers can supercharge their services using blockchain provenance. Transparent, verifiable infrastructure for citizens.",
        date: "01.05.2026",
        author: "Jonayet Hossain",
        image: "/images/use-cases/utilities.jpg", // Placeholder - will be replaced
    },
    {
        id: "news-verification",
        title: "Cross-Source News Verification",
        category: "isItTrue?",
        overview: "Harnessing the collective intelligence of global journalism through AI-powered aggregation, cross-source consensus scoring, and immutable blockchain provenance.",
        date: "12.12.2025",
        author: "Jonayet Hossain",
        image: "/images/use-cases/news-verification.jpg", // Placeholder - will be replaced
    },
    {
        id: "intellectual-property",
        title: "Intellectual Property Protection & Licensing",
        category: "IP Protection",
        overview: "Creating immutable proof of original creation and automating IP licensing through blockchain provenance. Protect your creativity with cryptographic timestamps and smart contract enforcement.",
        date: "01.09.2026",
        author: "Meheraj Alam",
        image: "/images/use-cases/ip.jpg", // Placeholder - will be replaced
    },
    {
        id: "academic-credentials",
        title: "Academic Credentials & Degree Verification",
        category: "Education & Verification",
        overview: "Eliminating diploma fraud and credential verification delays through blockchain-verified educational records. Instant verification, refugee-proof credentials, and lifelong learning portfolios.",
        date: "01.08.2026",
        author: "Meheraj Alam",
        image: "/images/use-cases/academic.jpg", // Placeholder - will be replaced
    },
    {
        id: "voting-integrity",
        title: "Voting & Election Integrity",
        category: "Democracy & Governance",
        overview: "Protecting democracy through verifiable, transparent elections using blockchain provenance and zero-knowledge cryptography. Anonymous voting with public auditability.",
        date: "01.01.2026",
        author: "Meheraj Alam",
        image: "/images/use-cases/voting.jpg", // Placeholder - will be replaced
    },
];

export default function UseCasesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-medium mb-6 uppercase tracking-wider">
                            Use Cases
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-200 via-red-300 to-red-200 bg-clip-text text-transparent">
                            Real-World Applications
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover how Gono Protocol's Capture → Store → Verify → Certify → Check pipeline delivers value across multiple industries
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {useCases.map((useCase, index) => {
                            const categoryIcons: Record<string, string> = {
                                "Gono Moncho": "📰",
                                "Content Verification": "🛡️",
                                "Public Infrastructure": "🏛️",
                                "isItTrue?": "🔍",
                                "IP Protection": "©️",
                                "Education & Verification": "🎓",
                                "Democracy & Governance": "🗳️",
                            };
                            const icon = categoryIcons[useCase.category] || "📋";

                            return (
                                <Link
                                    key={useCase.id}
                                    href={`/use-cases/${useCase.id}`}
                                    className="group"
                                >
                                    <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                        {/* Gradient accent bar */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-500 to-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                                        {/* Content */}
                                        <div className="p-6 sm:p-8">
                                            {/* Header with icon and category */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/20 border border-red-500/30 flex items-center justify-center text-2xl">
                                                    {icon}
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                                                        {useCase.category}
                                                    </span>
                                                    <p className="text-xs text-gray-500">
                                                        By {useCase.author} • {useCase.date}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors leading-tight">
                                                {useCase.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                                                {useCase.overview}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-red-400 font-medium group-hover:text-red-300 transition-colors">
                                                <span>Read Case Study</span>
                                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Summary Section */}
                    <div className="mt-20 p-8 bg-red-500/5 border border-red-500/20 rounded-lg">
                        <h2 className="text-2xl font-bold text-red-400 mb-4">
                            Why Gono Protocol?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            All these use cases leverage Gono Protocol's core capabilities to transform physical assets, creative works, and journalistic output into trust-minimized, verifiable on-chain entities.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">ERC-7053 Provenance Rail:</strong>
                                    <span className="text-gray-400"> Immutable records for every transaction</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">Arweave Storage:</strong>
                                    <span className="text-gray-400"> Permanent, censorship-resistant archival</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">C2PA Integration:</strong>
                                    <span className="text-gray-400"> Verifiable content authenticity</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">x402 Micropayments:</strong>
                                    <span className="text-gray-400"> Seamless M2M and human payments</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">Witness Nodes:</strong>
                                    <span className="text-gray-400"> Staked attestors ensure verification</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-red-500">✓</span>
                                <div>
                                    <strong className="text-white">SANUB Trust Logic:</strong>
                                    <span className="text-gray-400"> Algorithmic credibility scoring</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
