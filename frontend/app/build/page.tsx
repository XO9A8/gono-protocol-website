import Link from "next/link";
import { Navbar, Footer } from "@/components";

export default function BuildOnGono() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

                    {/* Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        {/* Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-red-500 p-0.5">
                                <div className="w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-indigo-400"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                    >
                                        <circle
                                            cx="20"
                                            cy="20"
                                            r="18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <circle cx="20" cy="20" r="8" fill="currentColor" />
                                        <path
                                            d="M20 2v6M20 32v6M2 20h6M32 20h6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-red-200 bg-clip-text text-transparent">
                            Build on Gono
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Developer resources, documentation, and tools are coming soon.
                        </p>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 mb-12">
                            <div className="relative">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute" />
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                            </div>
                            <span className="text-red-400 font-semibold tracking-wide">UNDER DEVELOPMENT</span>
                        </div>

                        {/* Description */}
                        <div className="max-w-2xl mx-auto mb-12 space-y-6 text-zinc-300">
                            <p className="text-lg leading-relaxed">
                                We&apos;re building comprehensive developer tools, SDKs, APIs, and documentation
                                to help you integrate Gono Protocol into your applications.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Create tamper-proof content, verify authenticity, and build trust-based
                                solutions powered by blockchain technology.
                            </p>
                        </div>

                        {/* What's Coming */}
                        <div className="max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl font-bold text-white mb-8">What&apos;s Coming</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        ),
                                        title: "SDK & APIs",
                                        description: "Easy-to-use libraries for JavaScript, Python, and more"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        ),
                                        title: "Documentation",
                                        description: "Complete guides, tutorials, and API references"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        ),
                                        title: "Sandbox",
                                        description: "Test environment to experiment before going live"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 transition-all group"
                                    >
                                        <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-zinc-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/whitepaper"
                                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                            >
                                Read Whitepaper
                            </Link>
                            <Link
                                href="/use-cases"
                                className="px-8 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg font-semibold transition-all"
                            >
                                Explore Use Cases
                            </Link>
                        </div>

                        {/* Footer Note */}
                        <p className="mt-16 text-sm text-zinc-500">
                            Want to be notified when we launch? Follow us on{" "}
                            <a
                                href="https://twitter.com/gonoprotocol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 transition-colors underline"
                            >
                                Twitter
                            </a>
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
