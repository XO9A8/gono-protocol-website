"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [gonoDropdownOpen, setGonoDropdownOpen] = useState(false);
    const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#221212]/90 backdrop-blur-xl border-b border-white/[0.08]"
                : "bg-transparent"
                }`}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Gono Protocol"
                            className="w-10 h-10"
                        />
                        <span className="font-semibold text-lg tracking-tight text-white">
                            Gono Protocol
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden xl:flex items-center gap-6">
                        {[
                            { name: "HOME", href: "/" },
                            { name: "USE CASES", href: "/use-cases" },
                            { name: "ROADMAP", href: "/roadmap" },
                            { name: "ECOSYSTEM", href: "/coming-soon" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-zinc-300 hover:text-[var(--accent-cyan)] transition-colors text-xs font-semibold tracking-wider"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* TOOLS Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                                onMouseEnter={() => setToolsDropdownOpen(true)}
                                className="text-zinc-300 hover:text-[var(--accent-cyan)] transition-colors text-xs font-semibold tracking-wider flex items-center gap-1 cursor-pointer"
                            >
                                TOOLS
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {toolsDropdownOpen && (
                                <div
                                    onMouseLeave={() => setToolsDropdownOpen(false)}
                                    className="absolute top-full left-0 mt-2 w-56 bg-[#221212]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl p-1.5 overflow-hidden z-50"
                                >
                                    <Link
                                        href="/coming-soon"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setToolsDropdownOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>MAINNET</span>
                                            <span className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded">Coming Soon</span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/tools/trustlens"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setToolsDropdownOpen(false)}
                                    >
                                        TRUSTLENS
                                    </Link>
                                    <Link
                                        href="/tools/verify-engine"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setToolsDropdownOpen(false)}
                                    >
                                        VERIFY ENGINE
                                    </Link>
                                    <Link
                                        href="/coming-soon"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setToolsDropdownOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>RECORD</span>
                                            <span className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded">Coming Soon</span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* GONO Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setGonoDropdownOpen(!gonoDropdownOpen)}
                                onMouseEnter={() => setGonoDropdownOpen(true)}
                                className="text-zinc-300 hover:text-[var(--accent-cyan)] transition-colors text-xs font-semibold tracking-wider flex items-center gap-1 cursor-pointer"
                            >
                                GONO
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {gonoDropdownOpen && (
                                <div
                                    onMouseLeave={() => setGonoDropdownOpen(false)}
                                    className="absolute top-full left-0 mt-2 w-48 bg-[#221212]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl p-1.5 overflow-hidden z-50"
                                >
                                    <Link
                                        href="/whitepaper"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setGonoDropdownOpen(false)}
                                    >
                                        WHITEPAPER
                                    </Link>
                                    <Link
                                        href="/docs"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setGonoDropdownOpen(false)}
                                    >
                                        DOCS
                                    </Link>
                                    <Link
                                        href="/staking"
                                        className="block px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                                        onClick={() => setGonoDropdownOpen(false)}
                                    >
                                        STAKING
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* Actions */}
                    <div className="hidden xl:flex items-center gap-4">
                        <Link
                            href="https://github.com/Meherajs/gono-protocol-website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </Link>
                        <Link
                            href="/build"
                            className="px-5 py-2 bg-white rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors tracking-wider"
                            style={{ color: '#000000' }}
                        >
                            BUILD ON GONO
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="xl:hidden fixed inset-0 top-0 left-0 w-screen h-screen bg-[#221212] z-40 overflow-y-auto px-6 pt-24 pb-12 flex flex-col gap-6">
                        <ul className="flex flex-col gap-5">
                            {[
                                { name: "HOME", href: "/" },
                                { name: "USE CASES", href: "/use-cases" },
                                { name: "ROADMAP", href: "/roadmap" },
                                { name: "ECOSYSTEM", href: "/coming-soon" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-lg tracking-wide block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {/* TOOLS Section */}
                            <li className="pt-4 border-t border-white/[0.08]">
                                <span className="text-zinc-500 text-xs uppercase tracking-wider font-extrabold">TOOLS</span>
                                <div className="mt-4 flex flex-col gap-4 pl-3">
                                    <Link
                                        href="/coming-soon"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>Mainnet</span>
                                            <span className="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded">Coming Soon</span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/tools/trustlens"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        TrustLens
                                    </Link>
                                    <Link
                                        href="/tools/verify-engine"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Verify Engine
                                    </Link>
                                    <Link
                                        href="/coming-soon"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>Record</span>
                                            <span className="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-1.5 py-0.5 rounded">Coming Soon</span>
                                        </div>
                                    </Link>
                                </div>
                            </li>

                            {/* GONO Section */}
                            <li className="pt-4 border-t border-white/[0.08]">
                                <span className="text-zinc-500 text-xs uppercase tracking-wider font-extrabold">GONO</span>
                                <div className="mt-4 flex flex-col gap-4 pl-3">
                                    <Link
                                        href="/whitepaper"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Whitepaper
                                    </Link>
                                    <Link
                                        href="/docs"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Docs
                                    </Link>
                                    <Link
                                        href="/staking"
                                        className="text-zinc-300 hover:text-white transition-colors font-bold text-base block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Staking
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-auto pt-6 border-t border-white/[0.08] flex flex-col gap-4">
                            <Link
                                href="/build"
                                className="w-full px-6 py-3.5 bg-white rounded-xl text-center text-sm font-bold hover:bg-gray-200 transition-colors tracking-wider block"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ color: '#000000' }}
                            >
                                BUILD ON GONO
                            </Link>
                            <Link
                                href="https://github.com/Meherajs/gono-protocol-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-6 py-3.5 bg-white/[0.05] border border-white/[0.08] text-white rounded-xl text-center text-sm font-bold hover:bg-white/[0.1] transition-colors tracking-wider flex items-center justify-center gap-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

