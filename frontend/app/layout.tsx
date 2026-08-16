import type { Metadata } from "next";
import "./globals.css";
import { Loader, SmoothScroll } from "@/components";

export const metadata: Metadata = {
  title: "Gono Protocol | Modular Blockchain Infrastructure",
  description:
    "A premium homepage for Gono Protocol, the modular blockchain infrastructure for verifiable media and autonomous commerce.",
  keywords: [
    "blockchain",
    "verifiable media",
    "autonomous commerce",
    "modular infrastructure",
    "AI commerce",
    "privacy",
    "Web3",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[var(--background)] text-white antialiased">
        <SmoothScroll>
          <Loader />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
