"use client";

import { m } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./_components/MagneticButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 relative">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl flex flex-col items-center"
      >
        <h1 className="text-9xl font-bold text-accent font-mono mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
          Page Not Found
        </h2>
        <p className="text-gray mb-10 leading-relaxed text-lg">
          The page you are looking for doesn't exist or has been moved. Let's
          get you back to the main portfolio.
        </p>
        <MagneticButton>
          <Link
            href="/"
            className="px-8 py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors inline-block"
          >
            Return Home
          </Link>
        </MagneticButton>
      </m.div>
    </main>
  );
}
