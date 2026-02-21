"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Simulate load time or wait for window.onload
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-dark"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold font-mono text-light tracking-tighter"
            >
              <span className="text-accent">G</span>ourav.
            </motion.div>
          </div>

          <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-full bg-accent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
