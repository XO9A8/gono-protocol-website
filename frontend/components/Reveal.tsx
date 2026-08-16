"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
  duration?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 820,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(node);
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction}${isVisible ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ["--reveal-distance" as string]: `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}
