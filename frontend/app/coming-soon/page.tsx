import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function ComingSoonPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                            <span className="text-4xl">🚀</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-300 via-red-300 to-red-300 bg-clip-text text-transparent">
                        Coming Soon
                    </h1>

                    {/* Description */}
                    <p className="text-xl sm:text-2xl text-zinc-400 mb-4">
                        We're working hard to bring you something amazing
                    </p>

                    <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
                        This feature is currently under development. Stay tuned for updates as we continue building 
                        the future of digital provenance on the blockchain.
                    </p>

                    {/* Progress Indicator */}
                    <div className="max-w-md mx-auto mb-12">
                        <div className="glass rounded-2xl p-6 border border-zinc-800">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-zinc-400">Development Progress</span>
                                <span className="text-sm font-semibold text-red-400">In Progress</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/20"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/#ecosystem"
                            className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all"
                        >
                            Explore Ecosystem
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="glass rounded-xl p-6 border border-zinc-800">
                            <div className="text-3xl mb-3">📅</div>
                            <h3 className="text-lg font-bold text-white mb-2">Timeline</h3>
                            <p className="text-sm text-zinc-400">
                                Following our roadmap in Phase 2 - Concept Development
                            </p>
                        </div>

                        <div className="glass rounded-xl p-6 border border-zinc-800">
                            <div className="text-3xl mb-3">🔔</div>
                            <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                            <p className="text-sm text-zinc-400">
                                Follow our progress on GitHub and social media
                            </p>
                        </div>

                        <div className="glass rounded-xl p-6 border border-zinc-800">
                            <div className="text-3xl mb-3">💬</div>
                            <h3 className="text-lg font-bold text-white mb-2">Get Involved</h3>
                            <p className="text-sm text-zinc-400">
                                Join our community and contribute to development
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
