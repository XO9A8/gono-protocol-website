"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.08]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <svg
                            className="w-8 h-8 text-indigo-500"
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
                            <circle cx="20" cy="8" r="3" fill="currentColor" />
                            <circle cx="20" cy="32" r="3" fill="currentColor" />
                            <circle cx="8" cy="20" r="3" fill="currentColor" />
                            <circle cx="32" cy="20" r="3" fill="currentColor" />
                        </svg>
                        <span className="font-semibold text-lg tracking-tight">
                            Gono Protocol
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {[
                            { name: "BUILD", href: "#products" },
                            { name: "USE CASES", href: "#use-cases" },
                            { name: "BLOG", href: "#archive" },
                            { name: "ECOSYSTEM", href: "#ecosystem" },
                            { name: "ABOUT", href: "#faq" },
                            { name: "CAREERS", href: "#" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://github.com/gono-protocol"
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
                            href="#products"
                            className="px-6 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors tracking-wide"
                        >
                            BUILD ON GONO
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-white/[0.08]">
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: "BUILD", href: "#products" },
                                { name: "USE CASES", href: "#use-cases" },
                                { name: "BLOG", href: "#archive" },
                                { name: "ECOSYSTEM", href: "#ecosystem" },
                                { name: "ABOUT", href: "#faq" },
                                { name: "CAREERS", href: "#" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-400 hover:text-white transition-colors font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white/[0.08]">
                            <Link
                                href="#products"
                                className="w-full px-6 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors tracking-wide text-center block"
                            >
                                BUILD ON GONO
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
