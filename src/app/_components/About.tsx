"use client";
import { m } from "framer-motion";
import { Award, Compass, GraduationCap, MapPin, Terminal } from "lucide-react";
import Image from "next/image";
import gourav from "../../../public/gourav.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm md:text-base">
              04.
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-light tracking-tight">
              About & Philosophy
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2.5 max-w-2xl">
            Engineering approach, technical curiosity, and how I build software
            that endures.
          </p>
        </m.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Text Content */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-gray text-sm md:text-base leading-relaxed"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-light/10 space-y-5">
              <h3 className="text-xl md:text-2xl font-bold text-light">
                Engineering with ownership and operational discipline.
              </h3>

              <p>
                I approach software development as a craft of end-to-end
                accountability. To me, shipping a product doesn&apos;t end when
                the code compiles locally—it includes database index
                optimization, sensible schema migrations, automated testing
                pipelines, and observable cloud deployments.
              </p>

              <p>
                My professional experience centers on creating high-performance
                web systems using the{" "}
                <span className="text-light font-medium">
                  MERN Stack, Next.js, and TypeScript
                </span>
                , combined with production cloud engineering on{" "}
                <span className="text-light font-medium">
                  AWS (EC2, S3, Route 53)
                </span>{" "}
                and Docker. Whether eliminating bottlenecks to achieve 6× faster
                ERP loads or architecting two-way calendar sync for hospitality
                engines, I prioritize measurable outcomes over vanity
                complexity.
              </p>

              <p>
                Beyond full-stack engineering, I hold a Master&apos;s degree in
                Computer Science with a focus on generative AI and deep
                learning. I actively research and build with{" "}
                <span className="text-accent font-mono text-xs md:text-sm font-semibold">
                  Agentic AI, RAG systems, and Model Context Protocol (MCP)
                </span>
                , applying these tools to real developer workflows.
              </p>
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl border border-light/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-sm">
                    Pragmatic Architecture
                  </h4>
                  <p className="text-gray text-xs mt-1 leading-snug">
                    Default to simplicity. Build abstractions only when patterns
                    prove themselves under real traffic.
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-light/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-sm">
                    Production Rigor
                  </h4>
                  <p className="text-gray text-xs mt-1 leading-snug">
                    Clean git history, reproducible containerized builds, zero
                    downtime deployments, and defensive error handling.
                  </p>
                </div>
              </div>
            </div>
          </m.div>

          {/* Profile & Location Sidebar */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Portrait Image Card */}
            <div className="glass-card p-3 rounded-2xl border border-light/10 overflow-hidden group">
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-dark/80">
                <Image
                  src={gourav}
                  alt="Gourav Kashiv - Full-Stack Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 group-hover:scale-103"
                  priority={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark/85 backdrop-blur-md border border-light/10 text-xs font-mono">
                  <div className="text-light font-bold">Gourav Kashiv</div>
                  <div className="text-accent text-[11px]">
                    Full-Stack & Cloud Engineer
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="glass-card p-5 rounded-2xl border border-light/10 space-y-3.5">
              <div className="flex items-center gap-2.5 text-xs font-mono text-light">
                <MapPin size={15} className="text-accent shrink-0" />
                <span>Solan & Chandigarh, India</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-light">
                <GraduationCap size={15} className="text-accent shrink-0" />
                <span>M.Tech in CSE — Panjab University</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-light">
                <Award size={15} className="text-accent shrink-0" />
                <span>SIH Quarterfinalist & IICDC Semifinalist</span>
              </div>

              <div className="pt-2 border-t border-light/10">
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 w-fit hover:bg-accent/15 hover:border-accent/40 transition-colors cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span>Available only for freelance roles currently</span>
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
