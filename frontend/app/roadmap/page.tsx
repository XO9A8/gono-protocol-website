"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./roadmap.css";

// Navigation Shell Component from homepage (simplified or we can just import it if it was exported, but typically Layout handles nav. Assuming we need one here or layout has it. The user's layout.tsx does not have an explicit nav, it just renders children. We will add a simplistic nav shell back link for premium feel like the homepage.)
// Wait, looking at the user's layout.tsx, there's no nav. Assuming nav is on the page itself based on my previous interactions in the history.
// I will include a basic top nav wrapper connecting back to Home.

const roadmapPhases = [
  {
    id: 1,
    title: "Phase 1: Foundation",
    description: "Establishing the core principles and underlying architecture of Gono Protocol.",
    status: "completed",
    items: [
      "Protocol concept and research",
      "Whitepaper draft",
      "Initial architecture design"
    ]
  },
  {
    id: 2,
    title: "Phase 2: Core Development",
    description: "Building the execution layer and modular frameworks.",
    status: "in-progress",
    items: [
      "Core execution layer",
      "Modular pallet framework",
      "Basic verification system"
    ]
  },
  {
    id: 3,
    title: "Phase 3: Expansion",
    description: "Integrating privacy layers and developer tools.",
    status: "upcoming",
    items: [
      "Privacy layer (ZK integration)",
      "Storage & identity modules",
      "Developer tools"
    ]
  },
  {
    id: 4,
    title: "Phase 4: Ecosystem Launch",
    description: "Opening the doors to developers, partners, and the community.",
    status: "upcoming",
    items: [
      "Public testnet",
      "Early partnerships",
      "Community onboarding"
    ]
  },
  {
    id: 5,
    title: "Phase 5: Scale & Adoption",
    description: "Full production deployment and real-world utility acceleration.",
    status: "upcoming",
    items: [
      "Mainnet launch",
      "Real-world integrations",
      "AI-agent commerce enablement"
    ]
  }
];

export default function RoadmapPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Reveal animation observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(".timeline-item");
    revealElements.forEach((el) => observer.observe(el));

    // Timeline progress based on scroll
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the timeline container has been scrolled through
      const totalHeight = rect.height;
      // Start filling line when top of container reaches middle of screen
      const scrolled = viewportHeight / 2 - rect.top;
      
      let progress = (scrolled / totalHeight) * 100;
      progress = Math.max(0, Math.min(progress, 100)); // Clamp between 0 and 100
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="roadmap-page">
      {/* Subtle Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center">
        <Link href="/" className="logo-chip group hover:!border-[rgba(var(--accent-cyan-rgb),0.4)] transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-violet)] flex items-center justify-center shadow-[0_0_12px_rgba(var(--accent-cyan-rgb),0.5)] group-hover:shadow-[0_0_20px_rgba(var(--accent-cyan-rgb),0.8)] transition-all">
            <span className="text-black font-bold text-xs tracking-tighter">GP</span>
          </div>
          <span className="ml-3 mr-4 text-sm font-semibold tracking-wide text-[var(--foreground)] opacity-90 group-hover:opacity-100 transition-opacity">
            Gono Protocol
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
           <Link href="/" className="nav-link text-sm uppercase tracking-wider !font-semibold">Home</Link>
           <Link href="/whitepaper" className="nav-link text-sm uppercase tracking-wider !font-semibold">Whitepaper</Link>
        </div>
      </div>

      <section className="roadmap-hero">
        <div className="roadmap-hero__background"></div>
        <div className="roadmap-hero__content px-4">
          <div className="eyebrow mb-6 mx-auto w-max hero-enter opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6F082] animate-pulse"></span>
            Project Trajectory
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text hero-enter opacity-0" style={{ animationDelay: '0.2s', fontFamily: 'var(--font-display-stack)' }}>
            Roadmap
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed hero-enter opacity-0" style={{ animationDelay: '0.3s' }}>
            A structured path toward verifiable media and autonomous commerce. Follow our journey as we build out the modular infrastructure of tomorrow.
          </p>
        </div>
      </section>

      <section className="timeline-container relative" ref={containerRef}>
        <div className="timeline-line hidden md:block">
           <div className="timeline-line__progress" style={{ height: `${scrollProgress}%` }}></div>
        </div>
        {/* Mobile static line visible differently handled in css via node alignment */}
        <div className="timeline-line md:hidden !left-8 !translate-x-0 !h-full">
           <div className="timeline-line__progress" style={{ height: `${scrollProgress}%` }}></div>
        </div>

        {roadmapPhases.map((phase, index) => {
          const isEven = index % 2 !== 0; // 0-indexed, so 1,3 are right side
          const slideClass = isEven ? "slide-from-right" : "slide-from-left";
          
          return (
            <div key={phase.id} className={`timeline-item ${slideClass}`}>
              <div className={`timeline-node status-${phase.status}`}></div>
              <div className={`timeline-content ${isEven ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'}`}>
                <div className="roadmap-card">
                  <div className={`status-badge status-badge--${phase.status}`}>
                    {phase.status === 'completed' && 'Completed'}
                    {phase.status === 'in-progress' && 'In Progress'}
                    {phase.status === 'upcoming' && 'Upcoming'}
                  </div>
                  <h3 className="roadmap-card__title">{phase.title}</h3>
                  <p className="roadmap-card__desc">{phase.description}</p>
                  <ul className="roadmap-card__list">
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="cta-section">
        <div className="cta-section__backdrop"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] tracking-tight">
            Building the foundation for a <br className="hidden md:block"/> verifiable digital future.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/whitepaper" className="button-primary w-full sm:w-auto">
              Read Whitepaper <ArrowRight size={18} />
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="button-secondary w-full sm:w-auto">
              Join the Ecosystem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
