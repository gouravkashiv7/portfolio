"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, type Variants } from "framer-motion";
export default function Hero() {
  const lenis = useLenis();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col pt-32 md:pt-40 justify-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto items-start relative overflow-visible">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-screen opacity-50 pointer-events-none animate-pulse"></div>
      <div
        className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-screen opacity-40 pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10"
      >
        <div className="overflow-hidden mb-4 md:-ml-8 lg:-ml-24">
          <motion.p
            variants={itemVariants}
            className="text-accent font-mono text-base md:text-lg"
          >
            Hi, my name is
          </motion.p>
        </div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-light leading-[1.1] tracking-tight"
          >
            Gourav Kashiv.
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-gray leading-[1.1] tracking-tight"
          >
            Full-Stack Engineer | MERN Specialist | DevOps & Cloud
            Infrastructure
          </motion.h2>
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-lg text-gray/80 text-base md:text-lg leading-relaxed"
        >
          I architect and ship modern web applications end-to-end. My core stack
          is MERN (MongoDB, Express, React, Node.js), and I own the entire
          deployment pipeline—CI/CD, containerization with Docker, and AWS EC2
          infrastructure.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="glass-card p-4 border border-accent/20 hover:border-accent/40 transition-colors group">
            <h3 className="text-light font-bold mb-2 flex items-center gap-2">
              <span className="text-accent">Speed</span>
            </h3>
            <p className="text-gray/70 text-xs font-mono">
              Rapid prototyping to production-ready builds
            </p>
          </div>
          <div className="glass-card p-4 border border-accent/20 hover:border-accent/40 transition-colors group">
            <h3 className="text-light font-bold mb-2 flex items-center gap-2">
              <span className="text-accent">Ownership</span>
            </h3>
            <p className="text-gray/70 text-xs font-mono">
              From database schema to cloud deployment
            </p>
          </div>
          <div className="glass-card p-4 border border-accent/20 hover:border-accent/40 transition-colors group">
            <h3 className="text-light font-bold mb-2 flex items-center gap-2">
              <span className="text-accent">Reliability</span>
            </h3>
            <p className="text-gray/70 text-xs font-mono">
              Automated testing, monitoring, and scalable infrastructure
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-12 text-gray/60 text-sm font-mono italic"
        >
          Currently available for new projects and opportunities. Let&apos;s
          build something that lasts.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "#projects");
              const el = document.getElementById("projects");
              if (el) {
                if (lenis) {
                  lenis.scrollTo(el, { offset: -80 });
                } else {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }
            }}
            className="relative px-8 py-4 border border-accent/50 text-accent font-mono text-sm rounded bg-transparent overflow-hidden group inline-block interactive hover:border-accent transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-dark transition-colors duration-500">
              Check out my work!
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
