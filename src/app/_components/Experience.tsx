"use client";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  Building,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  impact?: string;
  summary: string;
  achievements: string[];
  tech: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Jun 2025 — Present",
    role: "FullStack + DevOps Developer",
    company: "Kasauli Coder",
    location: "Solan / Remote, India",
    type: "EdTech & ERP Solutions",
    impact: "⚡ 6× Load Time Optimization (30s → 5s)",
    summary:
      "Leading full-stack engineering and cloud infrastructure for client ERP solutions, agency digital ecosystems, and internal developer platforms.",
    achievements: [
      "Cut ERP dashboard load times by 6× (from 30s down to 5s) by architecting a migration from legacy Webpack to Vite + pnpm with aggressive code-splitting.",
      "Built the core Question Bank & Exam Generator module, automating test paper synthesis with custom institutional formatting guidelines.",
      "Engineered an interactive student Transport Management module with real-time transit tracking integrated with the Google Maps API.",
      "Modernized internal HR systems: automated faculty attendance tracking, leave request state machines, and cryptographically signed PDF document generation.",
      "Architected and deployed AWS cloud infrastructure (EC2 instances, Route 53 DNS, automated SSL/TLS certificates, Nginx reverse proxy) ensuring 99.9% uptime.",
      "Enforced Role-Based Access Control (RBAC) and scalable design tokens across a 250+ file MERN codebase.",
    ],
    tech: [
      "React 19",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS (EC2, Route 53)",
      "Docker",
      "Vite",
      "pnpm",
      "Google Maps API",
    ],
    link: "https://www.kasaulicoder.com/",
  },
  {
    period: "Sep 2024 — May 2025",
    role: "FullStack Developer",
    company: "Infotech Software Pvt Ltd",
    location: "Chandigarh, India",
    type: "Client Software & Enterprise Web",
    summary:
      "Engineered scalable client-facing web applications and distributed backend REST APIs using the MERN stack.",
    achievements: [
      "Developed high-throughput RESTful API endpoints with input validation, JWT-based authentication, and indexed MongoDB schemas.",
      "Built responsive, accessible user interfaces in React with optimized state management and seamless API integrations.",
      "Participated in agile Git workflows, peer code reviews, integration testing, and production deployment releases.",
      "Diagnosed and resolved critical client bugs, improving runtime stability and reducing API error rates.",
    ],
    tech: [
      "React",
      "JavaScript (ES6+)",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Git",
      "Postman",
    ],
  },
  {
    period: "Dec 2025",
    role: "AI Researcher & Co-Author",
    company: "Panjab University",
    location: "Chandigarh, India",
    type: "Academic Research & Publications",
    impact: "Presented at IICTDS-2025 (NMIMS Chandigarh)",
    summary:
      "Authored and presented peer-reviewed research on generative AI diffusion models and video synthesis architectures.",
    achievements: [
      "Authored 'Performance Comparison of Text-to-Video Generative Models' with Prof. Sarbjeet Singh, evaluating contemporary diffusion models across fidelity and temporal consistency.",
      "Presented empirical benchmarks at the International Conference on Information & Communication Technologies for Digital Society (IICTDS-2025, NMIMS Chandigarh).",
      "Conducted extensive exploration of Agentic AI, RAG architectures, and Model Context Protocol (MCP) workflows.",
    ],
    tech: [
      "Python",
      "Generative AI",
      "Text-to-Video Models",
      "Diffusion Models",
      "LLMs",
      "PyTorch",
      "Research Benchmarking",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm md:text-base">
              02.
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-light tracking-tight">
              Engineering Experience
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2.5 max-w-2xl">
            A track record of taking software from architectural planning
            through deployment, operational resilience, and verified speed
            optimizations.
          </p>
        </m.div>

        {/* Experience Timeline */}
        <div className="relative border-l border-light/10 ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <m.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-7.75 md:-left-11.75 top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-300" />

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-light/10 hover:border-accent/40 transition-colors duration-300">
                {/* Header Details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl md:text-2xl font-bold text-light tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent font-semibold text-lg hover:underline underline-offset-4"
                        >
                          <span>@ {exp.company}</span>
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <span className="text-accent font-semibold text-lg">
                          @ {exp.company}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-gray">
                      <span className="flex items-center gap-1.5">
                        <Building size={13} className="text-accent/80" />
                        <span>{exp.type}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-accent/80" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light/5 border border-light/10 text-xs font-mono text-light/80 self-start md:self-auto shrink-0">
                    <Calendar size={13} className="text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Impact Highlight Pill */}
                {exp.impact && (
                  <div className="my-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium">
                    <Sparkles size={14} className="shrink-0" />
                    <span>{exp.impact}</span>
                  </div>
                )}

                {/* Summary */}
                <p className="text-gray text-sm md:text-base leading-relaxed my-3">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2.5 my-4">
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-gray/90"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 border-t border-light/10 font-mono text-xs text-gray">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-light/5 border border-light/10 text-light/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
