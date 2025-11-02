"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-0 max-w-5xl mx-auto items-start">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-accent font-mono mb-4 text-base md:text-lg"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-7xl font-bold text-light leading-tight"
      >
        Gourav Kashiv.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-6xl font-bold text-gray mt-2 leading-tight"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 md:mt-8 max-w-lg text-gray text-base md:text-lg leading-relaxed"
      >
        I'm a React and Next.js developer specializing in building fast,
        responsive, and accessible digital experiences. Currently, I'm looking
        for freelance opportunities to prove my skills and build awesome web
        products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="#projects"
          className="inline-block mt-8 md:mt-12 px-6 md:px-8 py-3 md:py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent hover:text-dark transition-all duration-300"
        >
          Check out my work!
        </Link>
      </motion.div>
    </section>
  );
}
