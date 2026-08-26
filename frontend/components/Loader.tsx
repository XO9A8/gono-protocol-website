"use client";

import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is active
    document.body.style.overflow = "hidden";

    // Animation configuration
    const duration = 1200; // 1.2 seconds
    const fps = 60;
    const interval = duration / 100; // time per 1%

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      
      // Calculate progress using a simple ease-out curve for premium feel
      const t = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const currentProgress = easeOut * 100;

      setProgress(currentProgress);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Reached 100%
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = "unset";
          
          // Wait for exit animation to complete before unmounting
          setTimeout(() => {
            setIsUnmounted(true);
          }, 500); // 0.5s exit duration
        }, 150); // slight delay at 100%
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (isUnmounted) return null;

  return (
    <div className={`loader ${isComplete ? "loader--exit" : ""}`}>
      <div className="loader-content">
        <div className="progress-text">{Math.floor(progress)}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
