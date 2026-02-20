"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import MagneticButton from "./_components/MagneticButton";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Next.js standard signature
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service here
    console.error("Caught in error boundary:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl flex flex-col items-center glass-card p-10 border border-gray-800/50 rounded-lg"
      >
        <div className="text-accent mb-6 font-mono font-bold text-xl">
          {/* Error Encountered */}
        </div>
        <h2 className="text-3xl font-bold text-light mb-4">
          Something went wrong
        </h2>
        <p className="text-gray mb-8 leading-relaxed">
          An unexpected error has occurred while rendering this page. You can
          try reloading the application.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <MagneticButton>
            <button
              type="button"
              onClick={() => reset()}
              className="px-8 py-4 bg-accent/10 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/20 transition-colors w-full sm:w-auto"
            >
              Try Again
            </button>
          </MagneticButton>
        </div>
      </motion.div>
    </main>
  );
}
