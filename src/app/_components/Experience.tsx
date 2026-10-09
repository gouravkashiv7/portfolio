"use client";
import { m } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Kasauli Coder",
      role: "FullStack + DevOps Developer",
      domain: "EdTech & Institutional ERP Solutions",
      period: "Jun 2025 – Present",
      location: "Solan / Remote, India",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS EC2",
        "Vite",
        "pnpm",
        "Route 53",
        "Docker",
      ],
      achievements: [
        "Architected build tooling migration from Webpack to Vite and pnpm across a 250+ file MERN ERP platform, delivering a measured 6× decrease in initial load time (from 30s down to 5s).",
        "Engineered the Question Bank & Dynamic Exam Generator module, automating custom examination paper assembly for academic faculties.",
        "Implemented real-time Transport Management fleet module integrated with Google Maps APIs for bus route monitoring and student transit scheduling.",
        "Redesigned core HR systems: automated daily staff attendance tracking, digital leave approvals, and secure credential storage.",
        "Configured high-availability AWS infrastructure (EC2, Route 53, custom Nginx reverse proxy, automated SSL certs), ensuring 99.9% uptime for institutional clients.",
        "Implemented granular Role-Based Access Control (RBAC) and modular design token themes across complex institutional portals.",
      ],
    },
    {
      company: "Infotech Software Pvt Ltd",
      role: "FullStack Developer",
      domain: "Enterprise Web Applications",
      period: "Sep 2024 – May 2025",
      location: "Chandigarh, India",
      technologies: [
        "MERN Stack",
        "React",
        "Node.js",
        "REST APIs",
        "Git",
        "Postman",
        "Tailwind CSS",
      ],
      achievements: [
        "Developed responsive frontend interfaces and high-throughput RESTful endpoints using Node.js and Express for enterprise client applications.",
        "Integrated secure JWT-based authentication workflows, request validation middlewares, and MongoDB aggregations.",
        "Collaborated in Git-based agile team workflows with continuous code reviews, automated integration tests, and staging deployments.",
        "Diagnosed and resolved critical client-side rendering bottlenecks, improving Lighthouse performance scores by 25+ points.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const current = experiences[activeTab];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="font-mono text-accent text-sm md:text-base">02.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-light tracking-tight">
          Engineering Experience
        </h2>
        <div className="h-px bg-light/10 grow max-w-xs" />
      </m.div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Company Selector Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-light/10 shrink-0">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:-mb-0 md:-ml-0.5 cursor-pointer ${
                activeTab === idx
                  ? "border-accent text-accent bg-accent/5 font-semibold"
                  : "border-transparent text-gray hover:text-light hover:bg-light/5"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Content Panel */}
        <m.div
          key={current.company}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-light">
              <span>{current.role}</span>{" "}
              <span className="text-accent font-medium">
                @ {current.company}
              </span>
            </h3>
            <span className="text-xs font-mono text-gray flex items-center gap-1.5">
              <Calendar size={13} className="text-accent/80" />
              {current.period}
            </span>
          </div>

          <p className="text-xs font-mono text-accent/80 mb-6">
            {current.domain} • {current.location}
          </p>

          <ul className="space-y-3.5 mb-8">
            {current.achievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray text-xs sm:text-sm leading-relaxed"
              >
                <span className="text-accent mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-light/5">
            {current.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-light/5 text-gray border border-light/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
