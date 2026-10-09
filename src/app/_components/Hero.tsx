"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { m, type Variants } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Send } from "lucide-react";

export default function Hero() {
  const lenis = useLenis();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const scrollTo = (id: string) => {
    window.history.pushState(null, "", `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-[92vh] flex flex-col pt-28 md:pt-36 justify-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto items-start relative overflow-visible"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent/15 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />
      <div
        className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <m.div
        variants={containerVariants}
        initial={false}
        animate="visible"
        className="w-full relative z-10"
      >
        <div className="overflow-hidden mb-3">
          <m.div variants={itemVariants}>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-medium hover:bg-accent/15 hover:border-accent/40 transition-colors group cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Available for Full-Time Roles & High-Impact Projects</span>
              <span className="text-accent/60 group-hover:text-accent transition-colors">
                • Connect →
              </span>
            </button>
          </m.div>
        </div>

        <div className="overflow-hidden mb-3">
          <m.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-light leading-[1.06] tracking-tight"
          >
            From idea to <span className="text-accent">production</span>.
          </m.h1>
        </div>

        <div className="overflow-hidden mb-5">
          <m.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray/90 leading-tight tracking-tight"
          >
            I'm <span className="text-light">Gourav Kashiv</span> — Full-Stack
            Engineer & Cloud Infrastructure Architect
          </m.h2>
        </div>

        <m.p
          variants={itemVariants}
          className="max-w-2xl text-gray text-base md:text-lg leading-relaxed mb-8"
        >
          I design, engineer, and operate resilient web applications end-to-end.
          Specializing in modern Next.js/React architectures, distributed
          backend APIs with Node.js & databases, automated AWS cloud
          deployments, and applied AI systems.
        </m.p>

        {/* Verifiable Engineering Metrics Strip */}
        <m.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8"
        >
          <div className="glass-card p-4 border border-light/10 hover:border-accent/40 transition-colors">
            <div className="text-accent font-mono text-xs uppercase tracking-wider mb-1 font-semibold">
              6× Optimization
            </div>
            <div className="text-light font-bold text-sm">
              Reduced Load Time
            </div>
            <p className="text-gray text-xs mt-1 leading-snug">
              Migrated legacy ERP from Webpack to Vite + pnpm, cutting load from
              30s to 5s.
            </p>
          </div>
          <div className="glass-card p-4 border border-light/10 hover:border-accent/40 transition-colors">
            <div className="text-accent font-mono text-xs uppercase tracking-wider mb-1 font-semibold">
              Full-Stack Scope
            </div>
            <div className="text-light font-bold text-sm">Concept to Cloud</div>
            <p className="text-gray text-xs mt-1 leading-snug">
              MERN, Next.js, PostgreSQL/Supabase, Docker, and AWS EC2 with SSL &
              Route 53.
            </p>
          </div>
          <div className="glass-card p-4 border border-light/10 hover:border-accent/40 transition-colors">
            <div className="text-accent font-mono text-xs uppercase tracking-wider mb-1 font-semibold">
              Applied AI
            </div>
            <div className="text-light font-bold text-sm">
              Research & Agents
            </div>
            <p className="text-gray text-xs mt-1 leading-snug">
              Published Generative AI research (IICTDS-2025) and integrated
              LLM/MCP workflows.
            </p>
          </div>
        </m.div>

        {/* Call to Actions */}
        <m.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="relative px-7 py-3.5 bg-accent text-dark font-mono text-sm font-semibold rounded hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/10 flex items-center gap-2 cursor-pointer"
          >
            <span>View Selected Work</span>
            <ArrowDown size={16} />
          </button>

          {/* Secondary CTA: Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-light/20 text-light hover:border-accent hover:text-accent font-mono text-sm rounded transition-colors duration-300 flex items-center gap-2"
          >
            <FileText size={16} />
            <span>Download Résumé</span>
          </a>

          {/* Secondary CTA: Contact */}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-6 py-3.5 border border-light/20 text-gray hover:text-light hover:border-light/40 font-mono text-sm rounded transition-colors duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Send size={15} />
            <span>Get in Touch</span>
          </button>
        </m.div>

        {/* Subtle quick links */}
        <m.div
          variants={itemVariants}
          className="mt-8 flex items-center gap-6 text-gray text-xs font-mono"
        >
          <span className="flex items-center gap-2 text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for Engineering Roles & Projects
          </span>
          <span className="text-light/20">•</span>
          <a
            href="https://github.com/gouravkashiv7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <Github size={14} />
            <span>github.com/gouravkashiv7</span>
          </a>
          <span className="text-light/20 hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/gouravkashiv7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hidden sm:flex items-center gap-1.5"
          >
            <Linkedin size={14} />
            <span>linkedin.com/in/gouravkashiv7</span>
          </a>
        </m.div>
      </m.div>
    </section>
  );
}
