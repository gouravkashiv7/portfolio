"use client";
import { m } from "framer-motion";
import { Bot, Cloud, Code2, Database, Layout, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Full-Stack Engineering",
    icon: <Code2 className="text-accent" size={20} />,
    subtitle:
      "End-to-end web applications and reactive client-server architectures",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React 19",
      "Next.js (App Router)",
      "Node.js",
      "Express.js",
      "Server Actions",
      "RESTful APIs",
    ],
  },
  {
    title: "Frontend & Product UI",
    icon: <Layout className="text-accent" size={20} />,
    subtitle: "High-performance, accessible, and responsive user interfaces",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI/UX",
      "Design Systems",
      "Core Web Vitals",
      "Semantic HTML5",
      "Styled Components",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "Backend & Data",
    icon: <Database className="text-accent" size={20} />,
    subtitle:
      "Schema design, data modeling, security policies, and synchronization",
    skills: [
      "MongoDB & Mongoose",
      "PostgreSQL",
      "Supabase",
      "Row-Level Security (RLS)",
      "Redis",
      "JWT & NextAuth",
      "Data Indexing",
      "iCal Sync Feeds",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-accent" size={20} />,
    subtitle:
      "Containerization, automated pipelines, and cloud hosting infrastructure",
    skills: [
      "AWS EC2",
      "AWS S3 & Route 53",
      "AWS Lambda",
      "Docker",
      "CI/CD Pipelines",
      "Nginx Reverse Proxy",
      "SSL / HTTPS Config",
      "Vercel Edge Platform",
    ],
  },
  {
    title: "AI & Agentic Systems",
    icon: <Bot className="text-accent" size={20} />,
    subtitle:
      "Applied generative AI, LLM orchestration, and empirical research",
    skills: [
      "Agentic AI Workflows",
      "LLM Integration",
      "RAG Systems",
      "Vector Databases",
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Text-to-Video Diffusion",
      "Python AI Tooling",
    ],
  },
  {
    title: "Engineering Tools",
    icon: <Wrench className="text-accent" size={20} />,
    subtitle:
      "Production development tooling, performance profiling, and workflows",
    skills: [
      "Git & GitHub",
      "Vite (6× Speedup)",
      "pnpm Workspaces",
      "Linux / Zsh",
      "Biome & Linter",
      "Postman API Testing",
      "Turbopack",
      "Performance Profiling",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24 max-w-6xl mx-auto"
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
              03.
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-light tracking-tight">
              Technical Capabilities
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2.5 max-w-2xl">
            A structured breakdown of core competencies, backed by real-world
            production software and verified implementation.
          </p>
        </m.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <m.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="glass-card p-6 rounded-2xl border border-light/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-gray text-xs leading-relaxed mb-5">
                  {cat.subtitle}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-light/5 border border-light/10 text-light/80 hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      {skill}
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
