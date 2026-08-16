import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Database,
  Eye,
  Lock,
  LockKeyhole,
  MessageSquare,
  Orbit,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { Footer, Navbar, Reveal } from "@/components";

export const metadata: Metadata = {
  title: "Architecture | Gono Protocol - System Design & Modularity",
  description:
    "Explore Gono Protocol's four-layer architecture: Security, Execution Rail, Modular Pallets, and Application Layer. Learn how modular design enables scalability and flexibility.",
};

// Layer definitions
const ARCHITECTURE_LAYERS = [
  {
    order: 1,
    title: "Security Layer",
    subtitle: "Shared Trust Foundation",
    description:
      "Leverages Polkadot-backed validators for institutional-grade consensus and cryptoeconomic security against censorship and majority attacks.",
    features: [
      "Shared validator set",
      "Cross-chain messaging",
      "Pooled security resources",
    ],
    icon: Shield,
    color: "layer-security",
    accent: "accent-blue",
  },
  {
    order: 2,
    title: "Core Execution Rail",
    subtitle: "Canonical Provenance",
    description:
      "Implements ERC-7053 media receipt indexing and absolute source of truth for content provenance, versions, and state.",
    features: [
      "Content-addressable hashing",
      "Media receipt generation",
      "Version control & history",
    ],
    icon: Server,
    color: "layer-execution",
    accent: "accent-cyan",
  },
  {
    order: 3,
    title: "Modular Service Pallets",
    subtitle: "Composable Extensions",
    description:
      "Plug-and-play modules for storage, verification, privacy, and payments—adopt only what your workflow needs.",
    features: [
      "Storage pallet (Arweave, Filecoin)",
      "Verification pallet (SANUB, Kleros)",
      "Privacy pallet (zk-SNARKs)",
      "Payment pallet (x402)",
    ],
    icon: Database,
    color: "layer-modules",
    accent: "accent-violet",
  },
  {
    order: 4,
    title: "Application Layer",
    subtitle: "Developer Interfaces",
    description:
      "Decentralized APIs and SDKs enabling builders to create media systems, asset registries, and AI marketplaces on a trusted base.",
    features: [
      "dAPI interfaces",
      "Developer SDKs",
      "Application portals",
    ],
    icon: Zap,
    color: "layer-application",
    accent: "accent-blue",
  },
];

// Modular pallets breakdown
const MODULAR_PALLETS = [
  {
    title: "Store Pallet",
    icon: Database,
    description: "Permanent global storage across Arweave, Filecoin, and StorJ with dynamic top-up funding.",
    capabilities: [
      "1-of-N redundancy SLA",
      "Pay-once, store-forever model",
      "Community-funded extensions",
    ],
  },
  {
    title: "Verify Pallet",
    icon: CheckCircle,
    description: "Community-driven verification using SANUB reputation algorithm and optional AI oracles.",
    capabilities: [
      "SANUB credibility scoring",
      "Journalistic Integrity Council",
      "Kleros dispute resolution",
    ],
  },
  {
    title: "Privacy Pallet",
    icon: LockKeyhole,
    description: "Zero-knowledge proofs for selective disclosure and anonymity without compromising verifiability.",
    capabilities: [
      "zk-SNARK proofs",
      "Proof of personhood",
      "BrightID integration",
    ],
  },
  {
    title: "x402 Pallet",
    icon: Zap,
    description: "Native micropayment protocol for AI-to-AI and human-to-API commerce without account creation.",
    capabilities: [
      "HTTP 402 standard",
      "Per-request settlement",
      "Stablecoin + GONO support",
    ],
  },
];

// Data flow stages
const GONO_FLOW_STAGES = [
  {
    stage: 1,
    title: "Capture",
    status: "mandatory",
    description:
      "Content enters the system with C2PA metadata, cryptographic hash, and optional zero-knowledge proof of personhood.",
    details: [
      "SHA-256 or Keccak-256 hashing",
      "C2PA metadata embedding",
      "Optional ZKP for anonymity",
    ],
  },
  {
    stage: 2,
    title: "Store",
    status: "optional",
    description:
      "Permanent hosting across decentralized providers with Storage Endowment funding and dynamic top-up support.",
    details: [
      "Multi-provider redundancy",
      "1-of-N SLA guarantee",
      "Community-funded extensions",
    ],
  },
  {
    stage: 3,
    title: "Verify",
    status: "optional",
    description:
      "Community or AI-driven assessment of content authenticity with SANUB credibility scoring and dispute resolution.",
    details: [
      "SANUB reputation engine",
      "AI oracle assessment",
      "Journalistic Integrity Council",
    ],
  },
  {
    stage: 4,
    title: "Certify",
    status: "mandatory",
    description:
      "Permanent on-chain record creation via ERC-7053, establishing immutable provenance with version control.",
    details: [
      "ERC-7053 indexing",
      "Immutable media receipt",
      "Versioned provenance chain",
    ],
  },
  {
    stage: 5,
    title: "Check",
    status: "mandatory",
    description:
      "Public auditing and cross-referencing via Gono Explorer to verify authenticity and trace complete asset history.",
    details: [
      "Public hash verification",
      "Timeline visualization",
      "Chain-of-custody tracking",
    ],
  },
];

// Governance tiers
const GOVERNANCE_TIERS = [
  {
    tier: "Tier 1",
    title: "Core Economic Governance",
    focus: "Token-Weighted",
    role: "Determines token inflation, validator SLAs, and treasury allocation.",
    features: ["Conviction voting", "Long-term staker rewards", "Protocol parameters"],
  },
  {
    tier: "Tier 2",
    title: "Technical & Integrity Governance",
    focus: "Reputation-Weighted",
    role: "Manages SANUB parameters, Journalistic Council, and verification standards.",
    features: ["Analyst Credit system", "Merit-based authority", "Integrity oversight"],
  },
  {
    tier: "Tier 3",
    title: "Autonomous Commerce Governance",
    focus: "AI-Native",
    role: "Handles x402 facilitators, SLA parameters, and machine-to-machine commerce.",
    features: ["AI agent voting", "Automated SLA management", "Human veto power"],
  },
];

// Privacy features
const PRIVACY_CAPABILITIES = [
  {
    title: "Zero-Knowledge Proofs",
    description: "Prove statements about data without revealing the data itself",
    icon: Eye,
  },
  {
    title: "Selective Disclosure",
    description: "Share only the information necessary for verification",
    icon: Lock,
  },
  {
    title: "Anonymous Verification",
    description: "Verify authenticity without exposing creator or location identity",
    icon: ShieldAlert,
  },
];

// Use case examples
const ARCHITECTURE_USE_CASES = [
  {
    title: "Investigative Journalism",
    description:
      "Sources submit evidence anonymously via ZKP, verified without exposure, stored permanently with time-locked keys.",
    modules: ["Privacy Pallet", "Store Pallet", "Verify Pallet"],
  },
  {
    title: "AI Data Marketplaces",
    description:
      "Models purchase training data via x402 micropayments, verify provenance instantly, settle without intermediaries.",
    modules: ["x402 Pallet", "Verify Pallet", "Core Execution Rail"],
  },
  {
    title: "Digital Asset Provenance",
    description:
      "Tokenized media tracks ownership from creation through custody chain, with permanent immutable record.",
    modules: ["Core Execution Rail", "Store Pallet", "Verify Pallet"],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-page__content">
        {/* Hero Section */}
        <section className="architecture-hero px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pt-12">
          <div className="architecture-hero__backdrop" aria-hidden="true" />

          <div className="mx-auto max-w-7xl">
            <div className="relative z-10">
              <Reveal>
                <div className="eyebrow hero-enter">
                  <Sparkles className="h-3.5 w-3.5" />
                  Modular by Design. Built for Trust.
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="hero-enter mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  System Architecture That Separates Concerns,{" "}
                  <span className="gradient-text">Scales Integrity</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="hero-enter mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  Gono Protocol is built as four distinct layers: security, execution, modular
                  services, and applications. This design enables flexibility, upgradeability, and
                  scalability while maintaining a unified, trustworthy foundation for media provenance
                  and autonomous commerce.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#layers" className="button-primary">
                    Explore the Layers
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/#architecture" className="button-secondary">
                    Back to Overview
                  </Link>
                </div>
              </Reveal>

              {/* Hero Abstract Visualization */}
              <Reveal delay={400}>
                <div className="architecture-hero__visual mt-16">
                  <svg
                    viewBox="0 0 600 300"
                    className="architecture-hero__svg"
                    aria-hidden="true"
                  >
                    {/* Background grid */}
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="rgba(140, 174, 255, 0.1)"
                          strokeWidth="0.5"
                        />
                      </pattern>
                      <linearGradient
                        id="layerGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" style={{ stopColor: "#361717", stopOpacity: 0.3 }} />
                        <stop offset="50%" style={{ stopColor: "#D8D365", stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: "#E6F082", stopOpacity: 0.1 }} />
                      </linearGradient>
                    </defs>

                    <rect width="600" height="300" fill="url(#grid)" />

                    {/* Animated layer lines */}
                    <line
                      x1="50"
                      y1="60"
                      x2="550"
                      y2="60"
                      stroke="url(#layerGradient)"
                      strokeWidth="2"
                      className="architecture-hero__line"
                      style={{ animationDelay: "0s" }}
                    />
                    <line
                      x1="50"
                      y1="120"
                      x2="550"
                      y2="120"
                      stroke="url(#layerGradient)"
                      strokeWidth="2"
                      className="architecture-hero__line"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <line
                      x1="50"
                      y1="180"
                      x2="550"
                      y2="180"
                      stroke="url(#layerGradient)"
                      strokeWidth="2"
                      className="architecture-hero__line"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <line
                      x1="50"
                      y1="240"
                      x2="550"
                      y2="240"
                      stroke="url(#layerGradient)"
                      strokeWidth="2"
                      className="architecture-hero__line"
                      style={{ animationDelay: "0.6s" }}
                    />

                    {/* Connecting nodes */}
                    {[
                      { x: 100, y: 60, delay: "0s" },
                      { x: 300, y: 60, delay: "0.1s" },
                      { x: 500, y: 60, delay: "0.2s" },
                      { x: 150, y: 120, delay: "0.3s" },
                      { x: 300, y: 120, delay: "0.4s" },
                      { x: 450, y: 120, delay: "0.5s" },
                      { x: 100, y: 180, delay: "0.6s" },
                      { x: 300, y: 180, delay: "0.7s" },
                      { x: 500, y: 180, delay: "0.8s" },
                      { x: 200, y: 240, delay: "0.9s" },
                      { x: 400, y: 240, delay: "1s" },
                    ].map((node, i) => (
                      <circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r="3"
                        fill="#E6F082"
                        className="architecture-hero__node"
                        style={{ animationDelay: node.delay }}
                      />
                    ))}

                    {/* Layer labels */}
                    <text
                      x="20"
                      y="65"
                      fontSize="12"
                      fill="rgba(140, 174, 255, 0.6)"
                      fontFamily="var(--font-mono-stack)"
                    >
                      Layer 1
                    </text>
                    <text
                      x="20"
                      y="125"
                      fontSize="12"
                      fill="rgba(140, 174, 255, 0.5)"
                      fontFamily="var(--font-mono-stack)"
                    >
                      Layer 2
                    </text>
                    <text
                      x="20"
                      y="185"
                      fontSize="12"
                      fill="rgba(140, 174, 255, 0.5)"
                      fontFamily="var(--font-mono-stack)"
                    >
                      Layer 3
                    </text>
                    <text
                      x="20"
                      y="245"
                      fontSize="12"
                      fill="rgba(140, 174, 255, 0.5)"
                      fontFamily="var(--font-mono-stack)"
                    >
                      Layer 4
                    </text>
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Layer Breakdown Section */}
        <section id="layers" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">Four-Layer Architecture</p>
                <h2 className="section-title">Each layer has a specific purpose and responsibility</h2>
                <p className="section-copy">
                  The layered design enables independent scaling, upgrading, and module composition
                  while ensuring security and trust flow through the entire stack.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-6">
              {ARCHITECTURE_LAYERS.map((layer, index) => (
                <Reveal key={layer.title} delay={index * 100}>
                  <article
                    className={`architecture-layer-card ${layer.color}`}
                    style={
                      {
                        "--layer-order": layer.order,
                      } as React.CSSProperties
                    }
                  >
                    <div className="architecture-layer-card__header">
                      <div className="architecture-layer-card__icon">
                        <layer.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="architecture-layer-card__number">Layer {layer.order}</div>
                        <h3 className="architecture-layer-card__title">{layer.title}</h3>
                        <p className="architecture-layer-card__subtitle">{layer.subtitle}</p>
                      </div>
                    </div>

                    <p className="architecture-layer-card__description">{layer.description}</p>

                    <div className="architecture-layer-card__features">
                      {layer.features.map((feature) => (
                        <div key={feature} className="architecture-layer-card__feature">
                          <span className="architecture-layer-card__feature-dot" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="architecture-layer-card__connector" aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Modular Pallets Section */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">Modular Service Pallets</p>
                <h2 className="section-title">Plug-and-play modules that compose around a unified core</h2>
                <p className="section-copy">
                  Unlike monolithic blockchains, Gono lets you adopt only the services your
                  application needs. Storage, verification, privacy, and payments are optional
                  pallets that integrate seamlessly with the core execution rail.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {MODULAR_PALLETS.map((pallet, index) => (
                <Reveal key={pallet.title} delay={index * 100}>
                  <article className="pallet-card">
                    <div className="pallet-card__icon">
                      <pallet.icon className="h-6 w-6" />
                    </div>
                    <h3 className="pallet-card__title">{pallet.title}</h3>
                    <p className="pallet-card__description">{pallet.description}</p>

                    <div className="pallet-card__capabilities">
                      {pallet.capabilities.map((cap) => (
                        <div key={cap} className="pallet-card__capability">
                          <span className="pallet-card__check">✓</span>
                          {cap}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Data & Verification Flow */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">The Gono Flow</p>
                <h2 className="section-title">Five stages from content to verified authenticity</h2>
                <p className="section-copy">
                  Every piece of content follows the same pipeline: mandatory capture and
                  certification, optional storage and verification, and always-available auditing.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-4">
              {GONO_FLOW_STAGES.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <article className={`flow-stage-card flow-stage-card--${item.status}`}>
                    <div className="flow-stage-card__header">
                      <div className="flow-stage-card__number">{item.stage}</div>
                      <div>
                        <div className="flow-stage-card__badges">
                          <span
                            className={`flow-stage-card__badge flow-stage-card__badge--${item.status}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <h3 className="flow-stage-card__title">{item.title}</h3>
                      </div>
                    </div>

                    <p className="flow-stage-card__description">{item.description}</p>

                    <div className="flow-stage-card__details">
                      {item.details.map((detail) => (
                        <div key={detail} className="flow-stage-card__detail">
                          <MessageSquare className="h-3.5 w-3.5" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    {index < GONO_FLOW_STAGES.length - 1 && (
                      <div className="flow-stage-card__arrow" aria-hidden="true">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <Reveal>
                <div>
                  <p className="section-kicker">Privacy & Trust</p>
                  <h2 className="section-title">Verification without exposure</h2>
                  <p className="section-copy">
                    The Privacy Pallet enables zero-knowledge proofs that prove statements
                    about data without revealing the data itself. Investigative journalists
                    can verify sources, institutions can prove compliance, and AI agents can
                    authenticate content—all without compromising sensitive information.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {PRIVACY_CAPABILITIES.map((cap, index) => (
                      <Reveal key={cap.title} delay={index * 100}>
                        <div className="privacy-capability">
                          <div className="privacy-capability__icon">
                            <cap.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="privacy-capability__title">{cap.title}</h4>
                            <p className="privacy-capability__description">{cap.description}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="privacy-visual">
                  <svg
                    viewBox="0 0 400 400"
                    className="privacy-visual__svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="privacyGlow1" cx="40%" cy="40%">
                        <stop offset="0%" style={{ stopColor: "#361717", stopOpacity: 0.4 }} />
                        <stop offset="100%" style={{ stopColor: "#361717", stopOpacity: 0 }} />
                      </radialGradient>
                      <radialGradient id="privacyGlow2" cx="60%" cy="60%">
                        <stop offset="0%" style={{ stopColor: "#E6F082", stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: "#E6F082", stopOpacity: 0 }} />
                      </radialGradient>
                    </defs>

                    {/* Glowing circles */}
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill="url(#privacyGlow1)"
                      className="privacy-visual__inner-glow"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="url(#privacyGlow2)"
                      className="privacy-visual__outer-glow"
                    />

                    {/* Concentric rings */}
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill="none"
                      stroke="rgba(134, 109, 255, 0.3)"
                      strokeWidth="1.5"
                      className="privacy-visual__ring"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="130"
                      fill="none"
                      stroke="rgba(83, 230, 255, 0.2)"
                      strokeWidth="1.5"
                      className="privacy-visual__ring"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="160"
                      fill="none"
                      stroke="rgba(91, 140, 255, 0.2)"
                      strokeWidth="1.5"
                      className="privacy-visual__ring"
                      style={{ animationDelay: "0.6s" }}
                    />

                    {/* Center lock */}
                    <g className="privacy-visual__lock">
                      <rect x="175" y="200" width="50" height="60" rx="4" fill="none" stroke="#E6F082" strokeWidth="2" />
                      <rect x="180" y="195" width="40" height="20" rx="3" fill="none" stroke="#E6F082" strokeWidth="2" />
                      <circle cx="200" cy="235" r="3" fill="#E6F082" />
                    </g>

                    {/* Proof nodes */}
                    {[
                      { x: 200, y: 80, label: "Proof" },
                      { x: 310, y: 150, label: "Verify" },
                      { x: 270, y: 280, label: "Trust" },
                      { x: 130, y: 280, label: "Privacy" },
                      { x: 90, y: 150, label: "Sealed" },
                    ].map((node, i) => (
                      <g key={i} className="privacy-visual__node">
                        <circle cx={node.x} cy={node.y} r="5" fill="#E6F082" />
                        <text
                          x={node.x}
                          y={node.y + 20}
                          fontSize="11"
                          fill="rgba(83, 230, 255, 0.7)"
                          textAnchor="middle"
                          fontFamily="var(--font-mono-stack)"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">Governance Model</p>
                <h2 className="section-title">Three-tier sovereignty: economics, integrity, and autonomy</h2>
                <p className="section-copy">
                  Gono Sovereign Governance balances token-weighted stakeholder decisions, reputation-based
                  integrity oversight, and AI-native commerce governance through a three-tier system.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {GOVERNANCE_TIERS.map((tier, index) => (
                <Reveal key={tier.title} delay={index * 120}>
                  <article className="governance-card">
                    <div className="governance-card__tier">{tier.tier}</div>
                    <h3 className="governance-card__title">{tier.title}</h3>
                    <div className="governance-card__focus">{tier.focus}</div>

                    <p className="governance-card__role">{tier.role}</p>

                    <div className="governance-card__features">
                      {tier.features.map((feature) => (
                        <div key={feature} className="governance-card__feature">
                          <span className="governance-card__dot" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Modularity Benefits */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="section-shell">
              <Reveal>
                <div className="section-heading">
                  <p className="section-kicker">Why Modularity Matters</p>
                  <h2 className="section-title">Flexibility. Upgradeability. Scalability.</h2>
                  <p className="section-copy">
                    A modular architecture is not just elegant—it is essential for building
                    systems that grow responsibly.
                  </p>
                </div>
              </Reveal>

              <div className="modularity-comparison mt-16">
                <div className="modularity-system">
                  <Reveal>
                    <div className="modularity-system__inner">
                      <h3 className="modularity-system__title">Monolithic</h3>
                      <p className="modularity-system__subtitle">All or nothing</p>

                      <div className="modularity-blocks">
                        <div className="modularity-block modularity-block--full">
                          <span className="modularity-block__label">Storage</span>
                        </div>
                        <div className="modularity-block modularity-block--full">
                          <span className="modularity-block__label">Verification</span>
                        </div>
                        <div className="modularity-block modularity-block--full">
                          <span className="modularity-block__label">Privacy</span>
                        </div>
                        <div className="modularity-block modularity-block--full">
                          <span className="modularity-block__label">Payments</span>
                        </div>

                        <p className="modularity-blocks__note">
                          Adopt everything or nothing. Overhead bloat. Hard to upgrade.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="modularity-divider" aria-hidden="true">
                  <Orbit className="h-5 w-5" />
                </div>

                <div className="modularity-system">
                  <Reveal delay={100}>
                    <div className="modularity-system__inner">
                      <h3 className="modularity-system__title">Modular</h3>
                      <p className="modularity-system__subtitle">Pick what you need</p>

                      <div className="modularity-blocks">
                        <div className="modularity-block">
                          <span className="modularity-block__label">Storage</span>
                        </div>
                        <div className="modularity-block">
                          <span className="modularity-block__label">Verify</span>
                        </div>
                        <div className="modularity-block">
                          <span className="modularity-block__label">Privacy</span>
                        </div>
                        <div className="modularity-block">
                          <span className="modularity-block__label">Payments</span>
                        </div>

                        <p className="modularity-blocks__note">
                          Compose incrementally. Minimal footprint. Easy upgrades.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">Architecture in Practice</p>
                <h2 className="section-title">How different applications use the modular stack</h2>
                <p className="section-copy">
                  The same foundational layers power journalism, data commerce, and institutional
                  workflows—each using only the modules that matter to them.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {ARCHITECTURE_USE_CASES.map((useCase, index) => (
                <Reveal key={useCase.title} delay={index * 120}>
                  <article className="architecture-use-case-card">
                    <h3 className="architecture-use-case-card__title">{useCase.title}</h3>
                    <p className="architecture-use-case-card__description">{useCase.description}</p>

                    <div className="architecture-use-case-card__modules">
                      <p className="architecture-use-case-card__modules-label">Uses</p>
                      <div className="architecture-use-case-card__module-badges">
                        {useCase.modules.map((module) => (
                          <span key={module} className="architecture-use-case-card__module-badge">
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Integration */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="section-heading">
                <p className="section-kicker">For Developers</p>
                <h2 className="section-title">Build on a foundation that grows with you</h2>
                <p className="section-copy">
                  The protocol is designed to minimize integration complexity while maintaining
                  powerful composability for advanced use cases.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <Reveal delay={0}>
                <div className="dev-guide-card">
                  <div className="dev-guide-card__number">01</div>
                  <h3 className="dev-guide-card__title">Core APIs</h3>
                  <p className="dev-guide-card__description">
                    Access ERC-7053 receipt indexing and content-addressable storage directly.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="dev-guide-card">
                  <div className="dev-guide-card__number">02</div>
                  <h3 className="dev-guide-card__title">Modular SDKs</h3>
                  <p className="dev-guide-card__description">
                    Add storage, verification, or payments only when your app needs them.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="dev-guide-card">
                  <div className="dev-guide-card__number">03</div>
                  <h3 className="dev-guide-card__title">Composable Logic</h3>
                  <p className="dev-guide-card__description">
                    Chain pallets together for complex workflows without rebuilding trust.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-4 pb-20 pt-12 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="cta-shell">
                <p className="section-kicker">Ready to Build?</p>
                <h2 className="section-title max-w-4xl">
                  A foundation for verifiable digital systems.
                </h2>
                <p className="section-copy max-w-2xl">
                  Explore the full protocol specification, dive into the modular design patterns,
                  and join builders creating the next generation of trusted applications.
                </p>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link href="/whitepaper" className="button-primary">
                    Read Full Whitepaper
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#" className="button-secondary">
                    Developer Documentation
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
