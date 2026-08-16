import { api } from '@/lib/api';
import { Newspaper, Bot, Building2, GraduationCap, Box } from "lucide-react";

const fallbackUseCases = [
    {
        id: 1,
        title: "Gono Moncho - Journalist Protection",
        description: "Secure platform for journalists to capture, store, and verify their work with cryptographic proof of authenticity.",
        category: "Media",
        pallets_used: ["Capture", "Store", "Privacy"]
    },
    {
        id: 2,
        title: "AI Training Data Markets",
        description: "Verified provenance for AI training datasets with automated micropayments to content creators.",
        category: "AI Commerce",
        pallets_used: ["Capture", "x402", "Verify"]
    },
    {
        id: 3,
        title: "Real Estate Documentation",
        description: "Immutable records of property inspections, contracts, and ownership transfers.",
        category: "Real Estate",
        pallets_used: ["Capture", "Store", "Certify"]
    },
    {
        id: 4,
        title: "Academic Credential Verification",
        description: "Blockchain-verified academic certificates and research paper provenance.",
        category: "Academia",
        pallets_used: ["Capture", "Verify", "Certify"]
    }
];

export default async function UseCases() {
    const useCases = await api.getUseCases();
    const data = useCases || fallbackUseCases;

    const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
        Media: { bg: 'bg-purple-500/10', border: 'border-purple-500/50', text: 'text-purple-400' },
        'AI Commerce': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/50', text: 'text-cyan-400' },
        'Real Estate': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/50', text: 'text-emerald-400' },
        Academia: { bg: 'bg-red-500/10', border: 'border-red-500/50', text: 'text-red-400' },
    };


    const categoryIcons: Record<string, React.ReactNode> = {
        Media: <Newspaper className="w-8 h-8" />,
        'AI Commerce': <Bot className="w-8 h-8" />,
        'Real Estate': <Building2 className="w-8 h-8" />,
        Academia: <GraduationCap className="w-8 h-8" />,
    };

    return (
        <section className="px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                        Real-World Use Cases
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        From journalism to AI commerce, Gono Protocol enables verifiable provenance across industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.map((useCase, index) => {
                        const colors = categoryColors[useCase.category] || categoryColors.Media;
                        const icon = categoryIcons[useCase.category] || '📦';

                        return (
                            <div
                                key={useCase.id}
                                className="group relative"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>

                                {/* Card */}
                                <div className="relative h-full bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                                    {/* Category badge */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-3xl">{icon}</span>
                                        <span className={`px-3 py-1 ${colors.bg} border ${colors.border} ${colors.text} rounded-full text-xs font-medium`}>
                                            {useCase.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                                        {useCase.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {useCase.description}
                                    </p>

                                    {/* Pallets used */}
                                    <div className="border-t border-gray-800 pt-6">
                                        <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
                                            Modules Used
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {useCase.pallets_used.map((pallet) => (
                                                <span
                                                    key={pallet}
                                                    className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-lg text-sm font-medium hover:bg-indigo-500/20 transition-colors"
                                                >
                                                    {pallet}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-8 bg-gradient-to-r from-indigo-900/50 to-cyan-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Build Your Use Case?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Our pluggable module approach means you only use what you need. Start building with the Capture SDK today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#products"
                                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                            >
                                Explore Products
                            </a>
                            <a
                                href="/docs"
                                className="px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-indigo-500/50 hover:text-white transition-all"
                            >
                                View Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
