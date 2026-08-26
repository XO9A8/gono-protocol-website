"use client";

import { useEffect, useRef, useState } from "react";

function supportsInteractiveBackground() {
  if (typeof window === "undefined") {
    return false;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  try {
    const probe = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (probe.getContext("webgl2") || probe.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

export default function HomeBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let isCancelled = false;

    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    if (!supportsInteractiveBackground()) {
      setIsLoaded(true);
      return undefined;
    }

    const initialize = async () => {
      try {
        const { createNetworkBackground } = await import("@/lib/networkBackground");

        if (isCancelled || !canvasRef.current) {
          return;
        }

        dispose = createNetworkBackground(canvasRef.current);
        setIsInteractive(true);

        window.requestAnimationFrame(() => {
          if (!isCancelled) {
            setIsLoaded(true);
          }
        });
      } catch {
        if (!isCancelled) {
          setIsLoaded(true);
        }
      }
    };

    initialize();

    let animationFrameId: number;
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const runRenderLoop = () => {
      if (!containerRef.current) return;
      
      // Smooth interpolation (lerp) for buttery scrolling
      currentScroll += (targetScroll - currentScroll) * 0.08;
      
      // Increased multiplier for more pronounced zoom
      const scale = 1 + currentScroll * 0.0006;
      
      containerRef.current.style.transform = `scale(${scale}) translateZ(0)`;
      containerRef.current.style.willChange = "transform";
      
      animationFrameId = requestAnimationFrame(runRenderLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    runRenderLoop();

    return () => {
      isCancelled = true;
      dispose?.();
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`home-background${isInteractive ? " home-background--interactive" : " home-background--fallback"}${isLoaded ? " home-background--loaded" : ""}`}
    >
      <div className="home-background__fallback" />
      <div className="home-background__grid" />
      <canvas ref={canvasRef} className="home-background__canvas" />
    </div>
  );
}
