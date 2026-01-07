import { api } from '@/lib/api';

export default async function Architecture() {
    const architecture = await api.getArchitecture();

    if (!architecture) {
        return null;
    }

    return (
        <section className="px-6 py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        4-Layer Modular Architecture
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Built on Substrate as a Polkadot Parachain. Institutional-grade security meets developer flexibility.
                    </p>
                </div>

                <div className="space-y-6">
                    {architecture.map((layer, index) => (
                        <div
                            key={layer.layer}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>

                            {/* Layer card */}
                            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Layer number badge */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
                                            <span className="text-2xl font-bold text-white">L{layer.layer}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                                            {layer.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {layer.description}
                                        </p>

                                        {/* Components */}
                                        <div className="flex flex-wrap gap-2">
                                            {layer.components.map((component) => (
                                                <span
                                                    key={component}
                                                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all"
                                                >
                                                    {component}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connection indicator (except for last layer) */}
                                    {index < architecture.length - 1 && (
                                        <div className="hidden md:block absolute -bottom-3 left-8 w-0.5 h-6 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technology badges */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Powered By</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: 'Substrate', icon: '⛓️' },
                            { name: 'Polkadot', icon: '🔴' },
                            { name: 'Arweave', icon: '🌐' },
                            { name: 'ERC-7053', icon: '📜' },
                            { name: 'C2PA', icon: '🔏' },
                            { name: 'zk-SNARKs', icon: '🔐' },
                        ].map((tech) => (
                            <div
                                key={tech.name}
                                className="group relative px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-indigo-500/50 transition-all"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity"></div>
                                <div className="relative flex items-center gap-3">
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
