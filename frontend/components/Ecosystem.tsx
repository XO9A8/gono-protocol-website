const tokenFeatures = [
    { icon: "⚡", title: "Transaction Fees", description: "Pay for asset registration and verification services" },
    { icon: "🗳️", title: "Governance", description: "Vote on protocol upgrades and proposals" },
    { icon: "💎", title: "Staking Rewards", description: "Earn rewards by securing the network" },
    { icon: "🔄", title: "Cross-Chain", description: "ERC-20 compatible with BNB bridge" },
];

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-24 bg-[#111111]">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                        NUM Token
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Powering the <em className="font-serif italic text-cyan-400">ecosystem</em>
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8">
                        NUM is the native utility token that powers the Numbers Protocol ecosystem.
                        Stake, govern, and transact within the decentralized provenance network.
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                        {tokenFeatures.map((feat, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-4 glass rounded-xl glass-hover transition-all"
                            >
                                <span className="text-2xl">{feat.icon}</span>
                                <div>
                                    <h4 className="font-semibold">{feat.title}</h4>
                                    <p className="text-sm text-zinc-400">{feat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* CTAs */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="gradient-primary px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform glow-sm"
                        >
                            Get NUM Token
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 rounded-lg font-medium glass glass-hover transition-all"
                        >
                            View Tokenomics
                        </a>
                    </div>
                </div>

                {/* Visual */}
                <div className="flex justify-center items-center">
                    <div className="relative w-72 h-72">
                        {/* Rings */}
                        <div className="absolute inset-[30%] border border-indigo-500/50 rounded-full" />
                        <div className="absolute inset-[15%] border border-white/[0.08] rounded-full animate-spin-slow" />
                        <div className="absolute inset-0 border border-white/[0.08] rounded-full animate-spin-slow [animation-direction:reverse]" />

                        {/* Center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 gradient-primary rounded-full flex items-center justify-center font-bold font-mono text-lg glow">
                            NUM
                        </div>

                        {/* Orbit Nodes */}
                        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xl">
                            🔗
                        </div>
                        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xl">
                            🖼️
                        </div>
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xl">
                            🤖
                        </div>
                        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xl">
                            📊
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
