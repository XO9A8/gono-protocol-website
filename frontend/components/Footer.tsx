import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Docs", href: "/whitepaper" },
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-white/10 bg-[rgba(69,64,64,0.78)] py-12 backdrop-blur-2xl sm:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="logo-chip">
                <Image
                  src="/logo.png"
                  alt="Gono Protocol"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-2xl object-cover"
                />
              </span>

              <span>
                <span className="block text-lg font-semibold tracking-tight text-white">
                  Gono Protocol
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-muted)]">
                  Modular blockchain rail
                </span>
              </span>
            </Link>

            <p className="max-w-lg text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Premium infrastructure for verifiable media, privacy-preserving proof, and
              autonomous commerce.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {FOOTER_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Gono Protocol. All rights reserved.</p>
          <p>Built for trusted media provenance, modular privacy, and machine-native payments.</p>
        </div>
      </div>
    </footer>
  );
}
