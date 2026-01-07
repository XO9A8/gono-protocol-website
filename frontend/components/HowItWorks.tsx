export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            name: "Capture",
            description: "Generate cryptographic hashes with C2PA metadata and optional zk-SNARK proofs for privacy",
            icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 36h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: 2,
            name: "Store",
            description: "Optional permanent storage on Arweave with Storage Endowment subsidies",
            icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <path d="M24 4L44 14v20L24 44 4 34V14L24 4z" stroke="currentColor" strokeWidth="2" />
                    <path d="M24 24v20M4 14l20 10 20-10" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
        },
        {
            id: 3,
            name: "Verify",
            description: "Community attestations via SANUB reputation algorithms and AI oracles",
            icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 4,
            name: "Certify",
            description: "ERC-7053 compliant Media Receipts indexed on Gono Parachain",
            icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 20h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="34" cy="34" r="8" fill="currentColor" />
                    <path d="M31 34l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 5,
            name: "Check",
            description: "Public auditing via Gono Explorer - anyone can verify asset provenance",
            icon: (
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
                    <path d="M29 29l11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
        },
    ];

    return (
        <section className="px-6 py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        A seamless provenance pipeline from capture to verification. Each step is modular and optional based on your use case.
                    </p>
                </div>

                {/* Pipeline visualization */}
                <div className="relative">
                    {/* Connection lines */}
                    <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Step card */}
                                <div className="group relative">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity"></div>
                                    
                                    {/* Card */}
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                                        {/* Number badge */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                            {step.id}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 mx-auto mb-4 text-indigo-400 group-hover:text-cyan-400 transition-colors">
                                            {step.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-3 text-center">
                                            {step.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 text-center leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow between steps (hidden on mobile, hidden after last step) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-20 -right-4 transform translate-x-1/2 text-indigo-500/50">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">
                        Each module is optional - use only what you need for your specific use case
                    </p>
                    <a
                        href="#features"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                    >
                        Explore Modules
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
