export default function X402Micropayment() {
    return (
        <section className="px-6 py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-indigo-950/20 to-cyan-950/20 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                        x402 Protocol
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                        Machine-to-Machine Micropayments
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Reviving HTTP-402 for the AI economy. Enable autonomous agents to pay for data and services per request.
                    </p>
                </div>

                {/* Main content grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Left: Explanation */}
                    <div className="space-y-6">
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💳</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">What is x402?</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            A revival of the HTTP 402 "Payment Required" status code. Instead of paywalls, enable seamless micropayments for individual API requests, perfect for AI-to-AI commerce.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🤖</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">AI Agent Commerce</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            AI agents autonomously discover, evaluate, and purchase data from providers. No human intervention needed - just programmatic payments for verified provenance data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💰</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Stablecoin Settlement</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Transactions settled in stablecoins (USDC, DAI) for price stability. Protocol fees paid in GONO tokens, creating sustainable value capture for the ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Flow diagram */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl opacity-20 blur"></div>
                        <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full">
                            <h3 className="text-xl font-bold text-white mb-8 text-center">Payment Flow</h3>
                            
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        1
                                    </div>
                                    <div className="flex-grow">
                                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                                            <p className="text-sm text-gray-300">
                                                <span className="font-semibold text-cyan-400">AI Agent</span> discovers data via Gono Explorer
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                    </svg>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        2
                                    </div>
                                    <div className="flex-grow">
                                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                                            <p className="text-sm text-gray-300">
                                                Request data → <span className="font-semibold text-yellow-400">HTTP 402</span> response with payment info
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                    </svg>
                                </div>

                                {/* Step 3 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        3
                                    </div>
                                    <div className="flex-grow">
                                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                                            <p className="text-sm text-gray-300">
                                                Payment in <span className="font-semibold text-emerald-400">USDC/DAI</span> + <span className="font-semibold text-indigo-400">GONO</span> fee
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                    </svg>
                                </div>

                                {/* Step 4 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        4
                                    </div>
                                    <div className="flex-grow">
                                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                                            <p className="text-sm text-gray-300">
                                                Data delivered with <span className="font-semibold text-cyan-400">provenance receipt</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Use cases */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: '🔍',
                            title: 'Training Data Markets',
                            description: 'AI companies purchase verified, high-quality training datasets with provenance guarantees',
                        },
                        {
                            icon: '📊',
                            title: 'Real-time Analytics',
                            description: 'Pay-per-query access to live data feeds for autonomous trading bots and analytics engines',
                        },
                        {
                            icon: '🎨',
                            title: 'Content Licensing',
                            description: 'Automated micro-licensing for AI-generated content using original creator assets',
                        },
                    ].map((useCase) => (
                        <div key={useCase.title} className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all text-center">
                                <div className="text-4xl mb-4">{useCase.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                                <p className="text-sm text-gray-400">{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
