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
                            Numbers Protocol
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {["Products", "Features", "Ecosystem", "Archive", "About"].map(
                            (item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#"
                            className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="gradient-primary px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform glow-sm"
                        >
                            Get Started
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
                            {["Products", "Features", "Ecosystem", "Archive", "About"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            className="text-zinc-400 hover:text-white transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white/[0.08]">
                            <Link
                                href="#"
                                className="gradient-primary px-5 py-2.5 rounded-full text-sm font-medium inline-block"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
