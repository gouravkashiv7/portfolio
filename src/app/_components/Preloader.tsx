"use client";

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Simulate tech-boot load time
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 600); // Hold briefly at 100%
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isLoading && (
          <m.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark overflow-hidden"
          >
            {/* Ambient Tech Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />

            {/* Noise overlay specific to Preloader to match brand depth */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Branding Name */}
              <div className="overflow-hidden mb-2">
                <m.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-5xl md:text-7xl font-bold font-mono text-light tracking-tighter"
                >
                  <span className="text-accent">G</span>ourav.
                </m.div>
              </div>

              {/* Sub-Branding Boot Sequence */}
              <div className="overflow-hidden mb-12">
                <m.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-gray text-xs md:text-sm tracking-[0.2em] font-mono flex items-center justify-center gap-3 uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  Initializing Environment
                </m.div>
              </div>

              {/* Progress Bar & Loader Text */}
              <div className="flex flex-col items-center w-64 md:w-80 gap-3">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full h-[1px] bg-light-bg relative overflow-hidden"
                >
                  <m.div
                    className="absolute top-0 left-0 h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                  />
                </m.div>

                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono text-gray uppercase tracking-widest"
                >
                  <span>System Loading</span>
                  <span className="text-accent font-bold">{progress}%</span>
                </m.div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
