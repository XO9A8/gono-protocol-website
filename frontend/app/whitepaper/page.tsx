import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
    BookOpen,
    Zap,
    Save,
    Shield,
    Vote,
    Palette,
    Home,
    Cpu,
    Newspaper,
    Scan,
    Database,
    ShieldCheck,
    FileSignature,
    Search
} from "lucide-react";


const GLOSSARY_ITEMS = [
    {
        term: "x402",
        definition: "HTTP-402 crypto micropayments for AI-to-AI commerce (USDC/stablecoin)"
    },
    {
        term: "C2PA",
        definition: "Content authenticity metadata standard embedded inside media files"
    },
    {
        term: "ERC-7053",
        definition: "On-chain index of media/receipt history and provenance"
    },
    {
        term: "GONO",
        definition: "Native utility token for network gas, storage, staking, and governance"
    },
    {
        term: "zk-SNARKs",
        definition: "Zero-knowledge proofs for anonymous identity verification"
    },
    {
        term: "SANUB",
        definition: "Stake-Aligned Neutral Unbiased Blockchain reputation algorithm"
    },
    {
        term: "Arweave",
        definition: "Permanent decentralized storage network (pay-once, store-forever)"
    },
    {
        term: "Substrate",
        definition: "Blockchain framework for building Polkadot parachains"
    },
    {
        term: "Parachain",
        definition: "Blockchain running parallel to Polkadot relay chain with shared security"
    }
];

const VisualFlow = () => {
    const steps = [
        { icon: Scan, label: "Capture", sub: "Mandatory", active: true },
        { icon: Database, label: "Store", sub: "Optional", active: false },
        { icon: ShieldCheck, label: "Verify", sub: "Optional", active: false },
        { icon: FileSignature, label: "Certify", sub: "Mandatory", active: true },
        { icon: Search, label: "Check", sub: "Public Tool", active: false },
    ];

    return (
        <div className="w-full overflow-x-auto pb-4 mb-12">
            <div className="flex items-start justify-between min-w-[600px] px-2">
                {steps.map((step, idx) => (
                    <div key={step.label} className="flex-1 flex items-center">
                        <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.active
                                ? "bg-blue-600 border-blue-400 shadow-lg shadow-blue-900/40 text-white"
                                : "bg-gray-900/50 border-gray-700 text-gray-400"
                                }`}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="text-center">
                                <div className={`font-bold text-sm ${step.active ? "text-blue-200" : "text-gray-400"}`}>
                                    {step.label}
                                </div>
                                <div className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded mt-1 ${step.active
                                    ? "bg-blue-900/30 text-blue-300 border border-blue-800/30"
                                    : "bg-gray-800/30 text-gray-500 border border-gray-700/30"
                                    }`}>
                                    {step.sub}
                                </div>
                            </div>
                        </div>
                        {idx < steps.length - 1 && (
                            <div className="h-[2px] flex-1 mx-4 bg-gradient-to-r from-gray-800 via-blue-900/40 to-gray-800 -mt-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function WhitepaperPage() {
    return (
        <>
            <Navbar />
            <main className="whitepaper-theme reading-mode min-h-screen px-4 pb-16 pt-12 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <section className="mb-8 rounded-lg border border-yellow-700/30 bg-yellow-500/5 p-4 lg:hidden">
                        <h3 className="mb-4 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-yellow-500">
                            <BookOpen className="w-4 h-4" /> Glossary
                        </h3>
                        <div className="space-y-4 text-sm">
                            {GLOSSARY_ITEMS.map((item) => (
                                <div key={item.term}>
                                    <h4 className="font-bold text-yellow-500 mb-1">{item.term}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="lg:flex lg:gap-8">
                        {/* Desktop Sidebar - Glossary */}
                        <aside className="hidden lg:block w-72 flex-shrink-0">
                            <div className="sticky top-24">
                                <div className="bg-yellow-500/5 border border-yellow-700/30 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-yellow-500 mb-6 uppercase tracking-wider">
                                        Glossary
                                    </h3>

                                    <div className="space-y-6 text-sm max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
                                        {GLOSSARY_ITEMS.map((item) => (
                                            <div key={item.term}>
                                                <h4 className="font-bold text-yellow-500 mb-1">{item.term}</h4>
                                                <p className="text-gray-400 leading-relaxed">{item.definition}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-grow max-w-3xl mx-auto w-full break-words">
                            {/* Header */}
                            <div className="text-center mb-12 sm:mb-16">
                                <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-800/30 border border-zinc-600/30 rounded-full text-blue-200 text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider">
                                    Whitepaper
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-zinc-200 via-gray-300 to-zinc-200 bg-clip-text text-transparent px-4">
                                    Gono Protocol
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-300 font-medium px-4">
                                    Provenance infrastructure for humans & AI. Once on-chain, it remains forever.
                                </p>
                                <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto px-4">
                                    Capture, certify, and check digital and real-world assets with verifiable proof at every step.
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
                                {/* Section 01: Why Now */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">01.</span> Why Now
                                    </h2>
                                    <p className="text-gray-200 text-justify leading-relaxed mb-8 text-lg">
                                        Several converging trends make this the definitive moment for Gono Protocol:
                                    </p>
                                    <ul className="space-y-3 sm:space-y-4 text-gray-200">
                                        <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl">•</span>
                                            <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">AI Systems as Content Buyers:</strong> AI companies have begun paying for licensed data; Gono automates this through machine-native per-request payments.</span>
                                        </li>
                                        <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl">•</span>
                                            <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Matured Standards:</strong> The ecosystem now supports HTTP 402, C2PA content credentials, and ERC-7053 for on-chain indexing.</span>
                                        </li>
                                        <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl">•</span>
                                            <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Mainstream Stablecoins:</strong> Using stablecoins removes volatility; Gono keeps all transactions in stablecoins for enterprise predictability.</span>
                                        </li>
                                        <li className="flex gap-3 sm:gap-4 bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl">•</span>
                                            <span className="leading-relaxed text-sm sm:text-base"><strong className="text-white">Efficiency in RWA & DePIN:</strong> Provenance reduces due diligence from weeks to minutes and ensures rewards flow to verified work.</span>
                                        </li>
                                    </ul>
                                </section>

                                {/* Section 02: The Gono Platform */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">02.</span> The Gono Platform
                                    </h2>

                                    {/* Platform Overview */}
                                    <div className="mb-8 sm:mb-10">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-100 mb-4">What is Gono Platform?</h3>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-4 text-base sm:text-lg">
                                            Gono Platform is a <strong className="text-white">modular blockchain infrastructure</strong> that creates permanent, verifiable records of digital and physical assets. Think of it as a universal &quot;certificate of authenticity&quot; system that works for everything from news articles and photographs to real estate transactions and AI-generated content.
                                        </p>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-4 text-base sm:text-lg">
                                            Unlike traditional systems where records can be altered or deleted, Gono creates an <strong className="text-white">immutable chain of evidence</strong> that proves exactly when something was created, who created it, and how it has been used or modified over time. This &quot;provenance&quot; the complete history of an asset becomes a permanent part of the blockchain, accessible to anyone who needs to verify authenticity.
                                        </p>
                                    </div>

                                    {/* How It Works */}
                                    <div className="mb-8 sm:mb-10">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-100 mb-4">How Does It Work?</h3>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-6 text-base sm:text-lg">
                                            Gono operates through a five-stage pipeline that transforms any asset into a permanently verified, globally accessible record. Each stage serves a specific purpose, and users can choose which stages to use based on their needs:
                                        </p>
                                        <VisualFlow />
                                    </div>

                                    {/* Capture */}
                                    <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-1">1</span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-2">CAPTURE — Creating the Digital Fingerprint</h3>
                                                <div className="inline-block px-2 py-1 bg-blue-900/40 border border-blue-700/30 rounded text-xs text-blue-200 mb-3">
                                                    MANDATORY
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">What it does:</strong> The Capture stage creates a unique &quot;digital fingerprint&quot; of your asset. When you upload a photo, document, or any digital file, our SDK instantly generates a cryptographic hash — a one-of-a-kind code that represents exactly that file. Even changing a single pixel would create a completely different hash.
                                        </p>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">How it works:</strong> The system embeds industry-standard C2PA metadata directly into your file. This metadata includes critical information like who created it, when it was created, what device was used, and even GPS coordinates if applicable. For journalists or whistleblowers who need anonymity, our zero-knowledge proof technology (zk-SNARKs) lets you prove you&apos;re a real person without revealing your identity.
                                        </p>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4">
                                            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Real-World Example:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                A journalist in Myanmar captures video of protests. The moment they press &quot;record,&quot; Gono&apos;s SDK embeds C2PA metadata with timestamp, location, and device info — but uses zk-SNARKs to keep the journalist&apos;s identity completely anonymous. Even if authorities seize the phone, they cannot trace who filmed it.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Store */}
                                    <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">2</span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-blue-200 mb-2">STORE — Permanent, Censorship-Proof Storage</h3>
                                                <div className="inline-block px-2 py-1 bg-blue-900/40 border border-blue-700/30 rounded text-xs text-blue-200 mb-3">
                                                    OPTIONAL
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">What it does:</strong> For content that must survive forever — war crime evidence, historical records, critical journalism — the Store module uploads your file to Arweave, a decentralized storage network that guarantees data will remain accessible for at least 200 years. No government, corporation, or hacker can delete it.
                                        </p>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">How it works:</strong> You pay a one-time &quot;Storage Endowment&quot; in GONO tokens (typically a few dollars for most files). This fee funds the distributed network of Arweave storage nodes that replicate your file across thousands of servers worldwide. Unlike cloud storage subscriptions that require monthly payments, you pay once and the file is stored permanently.
                                        </p>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4">
                                            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Real-World Example:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Human rights organizations documenting war crimes in Ukraine upload evidence to Gono. Even if Russia bombs servers or pressures cloud providers to delete files, the evidence remains on Arweave&apos;s permanent network, accessible to international courts decades later.
                                            </p>
                                        </div>
                                        <div className="bg-stone-900/30 border border-stone-600/30 rounded p-3 mt-4">
                                            <p className="text-blue-200 text-xs sm:text-sm"><strong>Why optional?</strong> Not all content needs permanent storage. A restaurant menu doesn&apos;t need to exist for 200 years, but investigative journalism exposing corruption does. Users choose based on their needs.</p>
                                        </div>
                                    </div>

                                    {/* Verify */}
                                    <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">3</span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-blue-200 mb-2">VERIFY — Community Trust & AI Validation</h3>
                                                <div className="inline-block px-2 py-1 bg-blue-900/40 border border-blue-700/30 rounded text-xs text-blue-200 mb-3">
                                                    OPTIONAL
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">What it does:</strong> The Verify stage adds a layer of credibility by having independent experts or AI systems assess your content. This creates a trust score that helps audiences distinguish reliable information from misinformation.
                                        </p>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">How it works:</strong> Your asset can be reviewed by:
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm sm:text-base mb-4">
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">Community Verifiers:</strong> Stake-holding experts who earn rewards for accurate assessments and lose stake for fraudulent ones</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">AI Oracles:</strong> Automated systems that check technical authenticity (e.g., detecting deepfakes, verifying GPS coordinates)</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">SANUB Reputation Engine:</strong> Our proprietary algorithm that weighs verifier credibility, stake amounts, and consensus patterns to produce a trust score</span></li>
                                        </ul>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4">
                                            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Real-World Example:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                A photo claims to show election fraud. Five independent journalists (verified experts who staked GONO tokens) examine the metadata, cross-reference timestamps with polling hours, and vote on authenticity. The SANUB engine weighs their reputations and produces a 92% confidence score that the photo is genuine — far more trustworthy than a random social media post.
                                            </p>
                                        </div>
                                        <div className="bg-stone-900/30 border border-stone-600/30 rounded p-3 mt-4">
                                            <p className="text-blue-200 text-xs sm:text-sm"><strong>Why optional?</strong> A wedding photo doesn&apos;t need third-party verification, but a news article claiming government corruption benefits enormously from expert validation. Users activate Verify when credibility matters.</p>
                                        </div>
                                    </div>

                                    {/* Certify */}
                                    <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-1">4</span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-2">CERTIFY — Blockchain Registration & Media Receipts</h3>
                                                <div className="inline-block px-2 py-1 bg-blue-900/40 border border-blue-700/30 rounded text-xs text-blue-200 mb-3">
                                                    MANDATORY
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">What it does:</strong> This is where the magic happens. Certify takes all the information from previous stages — the cryptographic hash, storage location, verification results — and writes it permanently to the Gono blockchain using the ERC-7053 standard. This creates an immutable &quot;media receipt&quot; that proves your asset&apos;s complete history.
                                        </p>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">How it works:</strong> Think of it like Git for assets. Every time you update, modify, or add new verification to your content, a new entry is appended to the blockchain. The old versions aren&apos;t deleted — they remain as part of the permanent historical record. This creates an unbreakable chain of custody showing exactly how the asset evolved over time.
                                        </p>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4 mb-4">
                                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">What Gets Recorded on the Blockchain:</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Asset Hash</div>
                                                    <div className="text-gray-400 text-xs">Unique cryptographic fingerprint</div>
                                                </div>
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Timestamp</div>
                                                    <div className="text-gray-400 text-xs">Exact moment of creation</div>
                                                </div>
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Creator ID</div>
                                                    <div className="text-gray-400 text-xs">Wallet address or anonymous proof</div>
                                                </div>
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Storage Link</div>
                                                    <div className="text-gray-400 text-xs">Arweave permanent URL (if used)</div>
                                                </div>
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Verification Score</div>
                                                    <div className="text-gray-400 text-xs">SANUB credibility rating (if verified)</div>
                                                </div>
                                                <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                                                    <div className="text-blue-100 font-semibold mb-1">Update History</div>
                                                    <div className="text-gray-400 text-xs">All subsequent modifications</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4">
                                            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Real-World Example:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                An investigative report about corruption is published. Initial certification includes the article hash, timestamp, and author wallet. Three months later, new documents emerge — these are added as a new certification entry, linked to the original. Six months later, independent journalists verify the claims, adding their attestations. The full timeline is visible to anyone checking the blockchain, creating an auditable trail of evidence.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Check */}
                                    <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">5</span>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-blue-200 mb-2">CHECK — Public Verification & Transparency</h3>
                                                <div className="inline-block px-2 py-1 bg-blue-900/40 border border-blue-700/30 rounded text-xs text-blue-200 mb-3">
                                                    PUBLIC TOOL
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">What it does:</strong> Check is the verification tool that anyone — journalists, researchers, courts, or ordinary citizens — can use to confirm an asset&apos;s authenticity. It&apos;s like a search engine for truth.
                                        </p>
                                        <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
                                            <strong className="text-white">How it works:</strong> Using the Gono Explorer (our public blockchain browser), anyone can:
                                        </p>
                                        <ul className="space-y-2 text-gray-300 text-sm sm:text-base mb-4">
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span>Upload a file or enter its hash to check if it&apos;s registered on Gono</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span>View the complete provenance timeline: when it was created, who verified it, how it&apos;s been modified</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span>See verification scores from independent experts</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span>Access the original file from permanent storage</span></li>
                                            <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span>Compare the current file against the blockchain record to detect tampering</span></li>
                                        </ul>
                                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mt-4">
                                            <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Real-World Example:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                You see a viral video claiming election fraud. Instead of trusting it blindly, you upload it to Gono Explorer. The system reveals: (1) The video was actually filmed 3 years ago at a different election, (2) It was edited to remove timestamps, (3) Independent fact-checkers gave it a 5% credibility score. Within seconds, you know it&apos;s misinformation.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Platform Architecture */}
                                    <div className="mt-10 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-100 mb-6">Modular Architecture: Built for Flexibility</h3>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-6 text-sm sm:text-base">
                                            Gono is built on <strong className="text-white">Substrate as a Polkadot Parachain</strong>, which means it inherits enterprise-grade security from day one while remaining flexible enough to adapt to different use cases. Here&apos;s how the architecture works:
                                        </p>

                                        <div className="space-y-4">
                                            <div className="bg-black/30 border-l-4 border-blue-700/50 p-4 rounded-r-lg">
                                                <h4 className="text-blue-200 font-bold mb-2 text-sm sm:text-base">Layer 1: Polkadot Relay Chain (Shared Security)</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">Provides institutional-grade security against 51% attacks and state-level censorship. Gono doesn&apos;t need to bootstrap its own security — it leverages Polkadot&apos;s $10B+ staked validator network from day one.</p>
                                            </div>

                                            <div className="bg-black/30 border-l-4 border-blue-700/50 p-4 rounded-r-lg">
                                                <h4 className="text-blue-100 font-bold mb-2 text-sm sm:text-base">Layer 2: Gono Execution Rail (Core Parachain)</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">The mandatory ERC-7053 indexing logic that creates the global &quot;Media Receipt&quot; ledger. This is the immutable backbone that every asset must pass through.</p>
                                            </div>

                                            <div className="bg-black/30 border-l-4 border-blue-700/50 p-4 rounded-r-lg">
                                                <h4 className="text-blue-200 font-bold mb-2 text-sm sm:text-base">Layer 3: Modular Service Pallets (Optional Extensions)</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed mb-3">Developers can &quot;plug in&quot; only the modules they need:</p>
                                                <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                                                    <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">Store Pallet:</strong> Arweave integration for permanent hosting</span></li>
                                                    <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">Verify Pallet:</strong> Community attestations + SANUB reputation</span></li>
                                                    <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">Privacy Pallet:</strong> zk-SNARKs for anonymous verification</span></li>
                                                    <li className="flex gap-2"><span className="text-blue-200 flex-shrink-0">•</span> <span><strong className="text-white">x402 Micropayment Pallet:</strong> Machine-to-machine payments for AI commerce</span></li>
                                                </ul>
                                            </div>

                                            <div className="bg-black/30 border-l-4 border-blue-700/50 p-4 rounded-r-lg">
                                                <h4 className="text-blue-200 font-bold mb-2 text-sm sm:text-base">Layer 4: Application Layer</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">User-facing apps like Gono Moncho (journalism platform), TrustLens (media verification), or custom dApps built by third-party developers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* x402 Micropayments Integration */}
                                    <div className="mt-8 bg-gradient-to-r from-blue-950/30 to-slate-900/30 border border-zinc-700/40 rounded-xl p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-200 mb-4">x402 Micropayments: The AI Commerce Engine</h3>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-4 text-sm sm:text-base">
                                            Gono integrates the <strong className="text-white">x402 Open Standard</strong> (reviving HTTP-402) to enable instant, pay-per-use transactions between humans and AI agents. This isn&apos;t a separate stage in the pipeline — it&apos;s a protocol-wide capability that enables commerce at any point.
                                        </p>
                                        <p className="text-gray-200 text-justify leading-relaxed mb-4 text-sm sm:text-base">
                                            <strong className="text-white">How it works for non-technical stakeholders:</strong>
                                        </p>
                                        <ul className="space-y-3 text-gray-300 text-sm sm:text-base mb-4">
                                            <li className="flex gap-2">
                                                <span className="text-blue-200 flex-shrink-0">•</span>
                                                <span><strong className="text-white">AI systems pay for data automatically:</strong> When an AI training model needs verified news articles, it sends a micropayment (in USDC stablecoins) directly to the creator&apos;s wallet. No invoices, no contracts — just instant payment per request.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-200 flex-shrink-0">•</span>
                                                <span><strong className="text-white">Creators earn from usage:</strong> Instead of selling exclusive rights to platforms, photographers, journalists, or data providers earn micropayments every time their content is accessed or used by AI systems.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-blue-200 flex-shrink-0">•</span>
                                                <span><strong className="text-white">Transparent royalties:</strong> Every x402 payment is logged on-chain, creating an auditable trail. Creators can prove exactly how many times their content was used and verify they were paid correctly.</span>
                                            </li>
                                        </ul>
                                        <div className="bg-black/40 border border-zinc-700/30 rounded-lg p-4">
                                            <h4 className="text-blue-200 font-semibold mb-2 text-sm">Business Model Example:</h4>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                                OpenAI wants to train GPT-5 on verified journalism. Instead of scraping websites illegally, its AI agent queries Gono&apos;s index, finds 10,000 articles from The Guardian, sends $0.05 per article via x402 (paid in USDC), and receives instant access. Journalists get paid, AI gets licensed data, everyone wins.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 03: Why Gono Protocol */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">03.</span> Why Gono Protocol
                                    </h2>
                                    <p className="text-gray-200 text-justify leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                                        Gono is uniquely positioned due to its head start in standards and modular product stack.
                                    </p>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex gap-3 sm:gap-4 rounded-lg bg-gradient-to-r from-zinc-900/10 to-transparent p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                            <div>
                                                <strong className="text-white text-sm sm:text-base">Standards Leadership:</strong>
                                                <p className="text-gray-300 mt-1 text-sm sm:text-base">We utilize open standards like C2PA and ERC-7053, ensuring cross-chain indexing of media provenance.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4 rounded-lg bg-gradient-to-r from-zinc-900/10 to-transparent p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                            <div>
                                                <strong className="text-white text-sm sm:text-base">Field-Proven Technology:</strong>
                                                <p className="text-gray-300 mt-1 text-sm sm:text-base">Our tech has been tested in high-trust environments, from investigative journalism to war archives.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4 rounded-lg bg-gradient-to-r from-zinc-900/10 to-transparent p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                            <div>
                                                <strong className="text-white text-sm sm:text-base">Product-Ready Stack:</strong>
                                                <p className="text-gray-300 mt-1 text-sm sm:text-base">Gono iterates on existing SDKs and developer APIs that produce credentials readable by major interfaces.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4 rounded-lg bg-gradient-to-r from-zinc-900/10 to-transparent p-3 sm:p-4">
                                            <span className="text-blue-200 flex-shrink-0 text-lg sm:text-xl font-bold">•</span>
                                            <div>
                                                <strong className="text-white text-sm sm:text-base">Uniquely Positioned:</strong>
                                                <p className="text-gray-300 mt-1 text-sm sm:text-base">We integrate payment, proof, and provenance into a single, seamless product.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 04: Role of the GONO Token */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">04.</span> Role of the GONO Token
                                    </h2>
                                    <p className="text-gray-200 text-justify leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                                        GONO is the native utility-and-governance token that powers the network.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border border-zinc-600/30 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Zap className="w-5 h-5 text-yellow-500" /> Proof-as-a-Fee
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Every ERC-7053 write (new captures, receipt mints) requires GONO as &quot;provenance gas.&quot;</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border border-zinc-600/30 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Save className="w-5 h-5 text-red-400" /> Storage Endowment
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">A one-time upfront fee in GONO secures permanent space on Arweave.</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border border-zinc-600/30 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Shield className="w-5 h-5 text-yellow-500" /> Network Security
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Nodes securing modular pallets must stake GONO and are subject to slashing for poor service.</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border border-zinc-600/30 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Vote className="w-5 h-5 text-red-400" /> Governance
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Staked GONO provides rights to vote on technical upgrades and fee schedules.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 05: Case Studies */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">05.</span> Case Studies
                                    </h2>
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Palette className="w-6 h-6 text-pink-400" /> Creator Monetization
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base mb-3">
                                                Artists register original content with C2PA credentials on-chain via ERC-7053. When AI agents license work through x402 micropayments, they receive verifiable on-chain usage certificates. Fans pre-fund projects by purchasing NFT passes, automatically receiving delivery receipts when promised content is released.
                                            </p>
                                            <p className="text-gray-300 text-justify leading-relaxed text-sm">
                                                <strong className="text-blue-200">Verification Flow:</strong> Anyone can audit the complete history by inspecting C2PA metadata, cross-checking on-chain records to verify the original creator and timestamp, and confirming that promised deliverables were provided to supporters. This provenance trail enhances creator credibility and protects fans from broken promises.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Home className="w-6 h-6 text-red-400" /> Real Estate Rental
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base mb-3">
                                                Properties linked to digital-twin NFTs with verifiable condition photos captured via C2PA. GONO-staked witness nodes verify identity and property condition at check-in, uploading signed attestations with C2PA-tagged photos. Revenue splits execute automatically according to the trust schedule, providing investors real-time auditable booking and payout history.
                                            </p>
                                            <p className="text-gray-300 text-justify leading-relaxed text-sm">
                                                <strong className="text-blue-200">Key Features:</strong> Renters have provable deposit and refund records backed by witness attestations. Complete rental history (occupancy, incidents, income) is instantly available for refinancing or sale. Every booking, payment, and payout is recorded on the Gono Protocol timeline for full transparency.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Cpu className="w-6 h-6 text-cyan-400" /> DePIN GPU Computing
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base mb-3">
                                                Decentralized GPU facilities represented as NFTs encoding investor rights to revenue portions. Clients pay in stablecoins for compute tasks, receiving usage certificate NFTs upon completion. Payments route automatically into on-chain revenue-split contracts, with witness nodes attesting that computing service was delivered and logging GPU utilization verification.
                                            </p>
                                            <p className="text-gray-300 text-justify leading-relaxed text-sm">
                                                <strong className="text-blue-200">Transparency Benefits:</strong> Investors can verify GPU performance including tasks run, revenue earned, and correct payouts received. Cumulative on-chain data becomes an auditable financial statement. New potential backers can check history for due diligence, making physical hardware a trust-minimized, revenue-generating on-chain asset.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 border-l-4 border-blue-700/50 rounded-r-xl p-4 sm:p-6">
                                            <h4 className="text-lg sm:text-xl font-bold text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                <Newspaper className="w-6 h-6 text-gray-400" /> Field Journalism
                                            </h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base mb-3">
                                                Journalists create Assignment Anchors capturing story proposals, budgets, timelines, and milestones, registered on-chain via ERC-7053 and C2PA. Sponsors receive non-transferable NFT tokens and funds are held in smart contract escrow. When milestones are reached, witness nodes attest with on-chain signatures, triggering payment releases. Geo-tagged C2PA photos prove field work authenticity.
                                            </p>
                                            <p className="text-gray-300 text-justify leading-relaxed text-sm">
                                                <strong className="text-blue-200">Monetization & Transparency:</strong> Readers access published content via x402 micropayments, with each access logging a receipt. Sponsors can query Gono Protocol to see the full chronology from funding to publication, verifying funds were used as intended. Non-transferable sponsor tokens with no profit rights avoid securities classification.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 06: FAQ */}
                                <section className="mb-20 sm:mb-24">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                                        <span className="text-blue-200">06.</span> FAQ
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What is Gono Protocol?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Gono Protocol is a modular blockchain infrastructure built on Substrate as a Polkadot Parachain. It provides a universal, content-addressable rail for verifiable media, digital assets, and autonomous AI commerce. Using a &quot;Pluggable Module&quot; approach, developers can build high-security journalism platforms, lightweight asset trackers, or automated AI data marketplaces using the same core infrastructure.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">How does the modular architecture work?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Gono is structured into 4 layers: Layer 1 (Polkadot Relay Chain) provides shared security, Layer 2 (Gono Execution Rail) handles mandatory ERC-7053 indexing, Layer 3 (Modular Service Pallets) offers optional extensions like Store, Verify, Privacy, and x402 pallets, and Layer 4 (Application Layer) consists of user-facing applications. Developers can opt-in to specific pallets based on their application needs.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What is ERC-7053 and why is it important?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">ERC-7053 is the Ethereum standard for &quot;Media Receipts&quot; - immutable blockchain records of digital asset provenance. Every asset registered on Gono receives an ERC-7053 compliant receipt, creating a global ledger of media authenticity. This ensures that any digital content has a verifiable chain of custody that cannot be altered or erased.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">How do x402 micropayments work?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">The x402 protocol revives HTTP status code 402 &quot;Payment Required&quot; for machine-to-machine commerce. When an AI agent requests data, it receives a 402 response with payment details. The agent pays in stablecoins (USDC/DAI) plus a small GONO protocol fee, then receives the data with a provenance receipt. This enables autonomous AI data marketplaces without human intervention.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What is the GONO token used for?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">GONO is the native utility token with four primary uses: Network Gas (paying for ERC-7053 indexing and transactions), Storage Endowment (subsidizing permanent Arweave storage), Validator Staking (securing the Polkadot Parachain and earning rewards), and Governance Rights (voting on protocol upgrades, pallet activations, and treasury allocation).</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">How does privacy work with zk-SNARKs?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">The Privacy Pallet uses zero-knowledge proofs (zk-SNARKs) to enable anonymous content registration. Journalists and whistleblowers can prove the authenticity of their content without revealing their identity. The cryptographic proof confirms the asset exists and meets certain criteria, while keeping the creator anonymous - perfect for high-stakes investigative journalism.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">What are witness nodes and SANUB?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Witness nodes are community validators in the Verify Pallet who attest to the authenticity of digital assets. SANUB (Stake-Aligned Neutral Unbiased Blockchain) is the reputation algorithm that weights attestations based on validator stake and historical accuracy. This creates a decentralized trust layer where AI oracles and human experts can collaborate on verification.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Is storage on Arweave mandatory?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">No, the Store Pallet is completely optional. Developers can choose to use Arweave for permanent decentralized storage, use their own storage solutions, or skip storage entirely if they only need provenance indexing. The modular design means you only use (and pay for) what your application requires.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">How is Gono different from traditional NFT platforms?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">Unlike NFT platforms focused on collectibles and art markets, Gono is designed for provenance and verification across any digital asset. It supports modular privacy (zk-SNARKs), institutional-grade security (Polkadot), standardized receipts (ERC-7053), and autonomous AI commerce (x402). You can build journalism platforms, real estate trackers, or AI marketplaces - not just NFT galleries.</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-4 sm:p-6">
                                            <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Can I build on Gono today?</h4>
                                            <p className="text-gray-200 text-justify leading-relaxed text-sm sm:text-base">The core infrastructure is under active development. Developers can start experimenting with the Capture SDK for asset registration and explore the x402 protocol specification. The parachain testnet will launch in Q2 2026, with mainnet targeted for Q4 2026. Join our developer community to get early access and shape the protocol.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* CTA */}
                                <div className="text-center bg-gradient-to-r from-zinc-900/30 to-zinc-800/30 border-2 border-zinc-600/30 rounded-2xl p-6 sm:p-8 md:p-12">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                        Ready to Build on Gono?
                                    </h3>
                                    <p className="text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                                        Join the future of provenance infrastructure and start building verifiable applications today.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                        <Link
                                            href="/"
                                            className="bg-gradient-to-r from-zinc-600 to-gray-600 px-6 py-3 text-sm font-semibold text-white rounded-lg sm:px-8 sm:py-4 sm:text-base"
                                        >
                                            Get Started
                                        </Link>
                                        <a
                                            href="https://github.com/gono-protocol"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-zinc-600/50 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-gray-200 rounded-lg sm:px-8 sm:py-4 sm:text-base"
                                        >
                                            View Documentation
                                        </a>
                                    </div>
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
