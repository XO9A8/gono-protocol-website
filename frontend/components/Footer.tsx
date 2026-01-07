import Link from "next/link";

const footerLinks = {
    Products: ["Capture App", "Numbers Search", "Dashboard", "API"],
    Developers: ["Documentation", "SDK", "GitHub", "Status"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
    return (
        <footer id="about" className="py-16 bg-[#111111] border-t border-white/[0.08]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main */}
                <div className="grid lg:grid-cols-[1.5fr_2fr] gap-16 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg
                                className="w-7 h-7 text-indigo-500"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="8" fill="currentColor" />
                                <circle cx="20" cy="8" r="3" fill="currentColor" />
                                <circle cx="20" cy="32" r="3" fill="currentColor" />
                                <circle cx="8" cy="20" r="3" fill="currentColor" />
                                <circle cx="32" cy="20" r="3" fill="currentColor" />
                            </svg>
                            <span className="font-semibold text-lg">Numbers Protocol</span>
                        </Link>
                        <p className="text-zinc-400 text-sm max-w-xs mb-6">
                            Provenance infrastructure for humans and AI. Building trust in the digital age.
                        </p>

                        {/* Social */}
                        <div className="flex gap-2">
                            {["X", "Discord", "GitHub", "Telegram"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500 transition-all"
                                    aria-label={social}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                                    {title}
                                </h4>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-sm text-zinc-400 hover:text-white transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-4">
                    <p className="text-sm text-zinc-500">
                        © 2024 Numbers Protocol. All rights reserved.
                    </p>
                    <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 glass rounded text-zinc-500">
                            C2PA Member
                        </span>
                        <span className="text-xs px-2 py-1 glass rounded text-zinc-500">
                            IPTC Partner
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
