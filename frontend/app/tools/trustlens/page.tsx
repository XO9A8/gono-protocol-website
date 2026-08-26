import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function TrustLensPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 sm:py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                                <span className="text-2xl">📸</span>
                                <span className="text-sm font-medium text-red-400">TrustLens</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-300 via-red-300 to-red-300 bg-clip-text text-transparent">
                                Provide Real Proof<br />for Your Images
                            </h1>
                            
                            <p className="text-xl sm:text-2xl text-zinc-400 mb-4">
                                in the AI Era
                            </p>
                            
                            <p className="text-base sm:text-lg text-zinc-500 max-w-3xl mx-auto">
                                Capture authentic moments and secure them on the blockchain with cryptographic proof. 
                                TrustLens ensures your images are verifiable and tamper-proof.
                            </p>
                        </div>

                        {/* Coming Soon Badge */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-red-500/20 border border-red-500/30">
                                <span className="text-2xl">🚀</span>
                                <span className="text-lg font-semibold text-red-400">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Overview */}
                <section className="py-16 sm:py-20 relative">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Mobile App */}
                            <div className="glass rounded-2xl p-8 border border-zinc-800 hover:border-red-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Mobile Application</h2>
                                </div>
                                
                                <p className="text-zinc-400 mb-6 text-base sm:text-lg leading-relaxed">
                                    Capture photos directly from your smartphone camera with built-in authenticity verification. 
                                    Every photo is instantly registered on the blockchain with metadata proving when, where, and 
                                    how it was captured.
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-emerald-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Instant Blockchain Registration</h3>
                                            <p className="text-sm text-zinc-500">Photos are timestamped and hashed on capture</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-emerald-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">C2PA Metadata Integration</h3>
                                            <p className="text-sm text-zinc-500">Industry-standard content authenticity</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-emerald-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Location & Device Tracking</h3>
                                            <p className="text-sm text-zinc-500">GPS coordinates and device fingerprinting</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-emerald-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Offline Mode Support</h3>
                                            <p className="text-sm text-zinc-500">Queue registrations when offline</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <div className="flex gap-3">
                                        <button disabled className="flex-1 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-lg font-semibold cursor-not-allowed">
                                            iOS - Coming Soon
                                        </button>
                                        <button disabled className="flex-1 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-lg font-semibold cursor-not-allowed">
                                            Android - Coming Soon
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Browser Extension */}
                            <div className="glass rounded-2xl p-8 border border-zinc-800 hover:border-red-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-2xl">🧩</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Browser Extension</h2>
                                </div>
                                
                                <p className="text-zinc-400 mb-6 text-base sm:text-lg leading-relaxed">
                                    Verify any image you encounter online with a single click. The TrustLens browser extension 
                                    checks images against the blockchain registry to confirm authenticity and reveal the 
                                    complete provenance chain.
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-violet-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Right-Click Verification</h3>
                                            <p className="text-sm text-zinc-500">Check any image instantly from context menu</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-violet-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Automatic Badge Overlay</h3>
                                            <p className="text-sm text-zinc-500">Verified images show trust badges</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-violet-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Provenance Timeline</h3>
                                            <p className="text-sm text-zinc-500">View complete edit and ownership history</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-violet-400 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Deepfake Detection</h3>
                                            <p className="text-sm text-zinc-500">AI-powered manipulation analysis</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <div className="flex gap-3">
                                        <button disabled className="flex-1 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-lg font-semibold cursor-not-allowed">
                                            Chrome - Coming Soon
                                        </button>
                                        <button disabled className="flex-1 px-6 py-3 bg-zinc-800 text-zinc-500 rounded-lg font-semibold cursor-not-allowed">
                                            Firefox - Coming Soon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why TrustLens Section */}
                <section className="py-16 sm:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-red-300 bg-clip-text text-transparent">
                                Why TrustLens?
                            </h2>
                            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                                In an era of AI-generated content and sophisticated deepfakes, authenticity matters more than ever.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Combat Misinformation</h3>
                                <p className="text-zinc-400">
                                    Verify the authenticity of images before sharing. Stop the spread of manipulated content.
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">📰</div>
                                <h3 className="text-xl font-bold text-white mb-3">Protect Journalism</h3>
                                <p className="text-zinc-400">
                                    Journalists can prove their photos are genuine, maintaining credibility and trust.
                                </p>
                            </div>

                            <div className="glass rounded-xl p-6 border border-zinc-800">
                                <div className="text-4xl mb-4">⚖️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Legal Evidence</h3>
                                <p className="text-zinc-400">
                                    Create tamper-proof photographic evidence for legal and insurance purposes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 sm:py-20">
                    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                                How It Works
                            </h2>
                            <p className="text-lg text-zinc-400">
                                Simple, secure, and seamless authenticity verification
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Capture</h3>
                                <p className="text-sm text-zinc-400">
                                    Take a photo with TrustLens mobile app or upload to extension
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">2</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Hash & Sign</h3>
                                <p className="text-sm text-zinc-400">
                                    Image is hashed and signed with your cryptographic key
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">3</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Register</h3>
                                <p className="text-sm text-zinc-400">
                                    Metadata stored immutably on Gono Protocol blockchain
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">4</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Verify</h3>
                                <p className="text-sm text-zinc-400">
                                    Anyone can verify the image's authenticity anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/10 pointer-events-none"></div>
                    
                    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                            Be the First to Know
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            TrustLens is coming soon. Join our waitlist to get early access and stay updated on our launch.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/docs"
                                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/20"
                            >
                                View Documentation
                            </Link>
                            <Link
                                href="/#ecosystem"
                                className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all"
                            >
                                Explore Ecosystem
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
