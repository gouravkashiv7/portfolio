"use client";
import { m } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export default function Education() {
  const degrees = [
    {
      degree: "M.Tech in Computer Science & Engineering",
      institution: "Panjab University, Chandigarh",
      period: "2023 – 2025",
      highlights: [
        "Specialized in Advanced Algorithms, Distributed Cloud Computing, and Machine Learning Systems.",
        'Authored research: "Performance Comparison of Text-to-Video Generative Models", co-authored with Sarbjeet Singh and presented at IICTDS-2025 (NMIMS Chandigarh).',
        "Investigated practical LLM reasoning workflows, Retrieval-Augmented Generation (RAG), and evaluation frameworks.",
      ],
    },
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Chitkara University, Rajpura",
      period: "2018 – 2022",
      highlights: [
        "Comprehensive foundations in Software Architecture, Relational Database Systems, Operating Systems, and Networking.",
        "Built IoT-driven agricultural intrusion detection systems and full-stack cloud prototypes deployed on AWS.",
        "Led engineering teams in national coding competitions and hackathon challenges.",
      ],
    },
  ];

  const honors = [
    {
      title: "Quarterfinalist — Smart India Hackathon (SIH)",
      detail:
        "Engineered an IoT-enabled agricultural intrusion detection and crop monitoring system.",
      year: "2018",
    },
    {
      title: "Runners-Up — Octahacks Hackathon",
      detail:
        "Developed a rapid collaborative software solution under strict 36-hour sprint constraints.",
      year: "Hackathon",
    },
    {
      title: "Semifinalist — IICDC (Texas Instruments / DST)",
      detail:
        "Selected among national innovators for embedded image processing and hardware automation.",
      year: "2019",
    },
    {
      title: "Certified Web Professional — Web Developer",
      detail:
        "Industry credentials validating professional JavaScript, semantic DOM architecture, and web systems.",
      year: "Certified",
    },
  ];

  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-6">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="font-mono text-accent text-sm md:text-base">04.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-light tracking-tight">
          Education & Recognized Honors
        </h2>
        <div className="h-px bg-light/10 grow max-w-xs" />
      </m.div>

      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {degrees.map((deg) => (
          <m.div
            key={deg.degree}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border border-light/10 bg-dark/50 hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20 flex items-center gap-1.5">
                  <GraduationCap size={13} />
                  {deg.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-light mb-1">
                {deg.degree}
              </h3>
              <p className="text-xs font-mono text-gray mb-4">
                {deg.institution}
              </p>

              <ul className="space-y-2.5">
                {deg.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-gray text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="text-accent mt-0.5 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        ))}
      </div>

      {/* Honors and Competitions */}
      <div className="p-6 rounded-xl border border-light/10 bg-dark/30">
        <h3 className="text-sm font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2 mb-4">
          <Trophy size={16} />
          Verified Competitions & Hackathon Achievements
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {honors.map((h) => (
            <div
              key={h.title}
              className="p-3.5 rounded-lg border border-light/5 bg-light/2"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs sm:text-sm font-semibold text-light">
                  {h.title}
                </h4>
                <span className="text-[10px] font-mono text-gray px-1.5 py-0.5 rounded bg-light/5">
                  {h.year}
                </span>
              </div>
              <p className="text-xs text-gray leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
