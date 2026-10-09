"use client";
import type { Variants } from "framer-motion";
import { m } from "framer-motion";
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import gourav from "../../../public/gourav.jpg";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const capabilityCategories = [
    {
      domain: "Frontend Engineering",
      icon: <Code2 size={18} className="text-accent" />,
      skills: [
        "React 19",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "State Architecture",
        "WCAG 2.2 AA A11y",
      ],
      summary:
        "High-performance interfaces, zero-CLS layouts, server component streaming, and design systems.",
    },
    {
      domain: "Backend & Distributed APIs",
      icon: <Server size={18} className="text-accent" />,
      skills: [
        "Node.js",
        "Express",
        "RESTful Endpoints",
        "Supabase Edge Functions",
        "Server Actions",
        "JWT/RBAC",
      ],
      summary:
        "Scalable application logic, webhook pipelines, middleware validation, and serverless compute.",
    },
    {
      domain: "Cloud & DevOps Infrastructure",
      icon: <Cloud size={18} className="text-accent" />,
      skills: [
        "AWS (EC2, S3, Route 53)",
        "Docker Containerization",
        "Nginx Reverse Proxy",
        "CI/CD Pipelines",
        "Linux Admin",
      ],
      summary:
        "End-to-end cloud deployments, domain DNS routing, SSL provisioning, and isolated environments.",
    },
    {
      domain: "Databases & Storage",
      icon: <Database size={18} className="text-accent" />,
      skills: [
        "MongoDB & Mongoose",
        "PostgreSQL",
        "Supabase",
        "Row Level Security (RLS)",
        "Query Optimization",
      ],
      summary:
        "Schema design, relational constraints, indexing strategies, and automated daily backups.",
    },
    {
      domain: "AI & LLM Integrations",
      icon: <Sparkles size={18} className="text-accent" />,
      skills: [
        "Large Language Models",
        "RAG Workflows",
        "Vector Search",
        "Gemini & OpenAI APIs",
        "Benchmark Evaluation",
      ],
      summary:
        "Domain-specific AI automation tools and published research in generative video architectures.",
    },
    {
      domain: "Performance & Reliability",
      icon: <Cpu size={18} className="text-accent" />,
      skills: [
        "Vite & pnpm Migration",
        "Webpack Optimization",
        "Edge Caching",
        "Lighthouse CWV",
        "Cross-Browser Debugging",
      ],
      summary:
        "Disciplined profiling, bundler modernization (6× load improvement), and deterministic testing.",
    },
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full"
      >
        {/* Section Header */}
        <m.div
          variants={cardVariants}
          className="flex items-center gap-3 mb-14"
        >
          <span className="font-mono text-accent text-sm md:text-base">
            01.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-light tracking-tight">
            Engineering Identity & Capabilities
          </h2>
          <div className="h-px bg-light/10 grow max-w-xs" />
        </m.div>

        {/* Narrative & Profile Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Engineering Bio */}
          <m.div
            variants={cardVariants}
            className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-xl border border-light/10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-light mb-4">
              Building Reliable Systems from Concept to AWS Production
            </h3>

            <div className="space-y-4 text-gray text-sm sm:text-base leading-relaxed">
              <p>
                I am a product-oriented software engineer who works across the
                entire product lifecycle. Rather than treating frontend,
                backend, and deployment as isolated silos, I take holistic
                ownership—translating ambiguous user needs into reliable
                schemas, accessible client applications, and resilient cloud
                infrastructure.
              </p>
              <p>
                My background spans institutional ERP software managing
                thousands of student and faculty records, hospitality platforms
                synchronizing live booking availability with global OTAs like
                MakeMyTrip and Goibibo, and modern Next.js SaaS platforms.
              </p>
              <p>
                I hold a{" "}
                <strong className="text-light">
                  Master’s in Computer Science & Engineering
                </strong>{" "}
                from Panjab University, where I conducted research on generative
                model benchmarking (presented at IICTDS-2025), and a
                <strong className="text-light"> Bachelor’s in CSE</strong> from
                Chitkara University.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-light/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray">
                <MapPin size={15} className="text-accent" />
                <span>Based in Solan / Chandigarh, India • UTC+05:30</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Open to Engineering Roles</span>
              </div>
            </div>
          </m.div>

          {/* Profile Photo */}
          <m.div
            variants={cardVariants}
            className="lg:col-span-4 rounded-xl overflow-hidden border border-light/10 p-2 bg-dark/60"
          >
            <div className="relative aspect-4/5 w-full rounded-lg overflow-hidden group">
              <Image
                src={gourav}
                alt="Gourav Kashiv - Full-Stack Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-light text-sm font-semibold">
                  Gourav Kashiv
                </p>
                <p className="text-accent text-xs font-mono">
                  Full-Stack Engineer
                </p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Structured Engineering Capabilities */}
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-light flex items-center gap-2 uppercase font-mono tracking-wider text-xs">
              <Cpu size={16} className="text-accent" />
              Technical Capabilities by Domain
            </h3>
            <p className="text-gray text-xs mt-1">
              Curated capabilities verified through production projects and
              shipped codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityCategories.map((cat) => (
              <m.div
                key={cat.domain}
                variants={cardVariants}
                className="p-5 rounded-xl border border-light/10 bg-dark/50 hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    {cat.icon}
                    <h4 className="text-light font-semibold text-sm">
                      {cat.domain}
                    </h4>
                  </div>
                  <p className="text-gray text-xs leading-relaxed mb-4">
                    {cat.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-light/5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-gray/90 bg-light/5 px-2 py-0.5 rounded border border-light/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}
