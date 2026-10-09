"use client";
import { m } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "M.Tech in Computer Science & Engineering",
      institution: "Panjab University, Chandigarh",
      period: "2023 — 2025",
      icon: <GraduationCap size={20} className="text-accent" />,
      highlights: [
        "Advanced specialization in distributed computing, machine learning, and scalable software systems.",
        "Authored empirical research: 'Performance Comparison of Text-to-Video Generative Models' presented at IICTDS-2025 (NMIMS Chandigarh).",
        "Deep exploration into Agentic AI architectures, RAG pipelines, and LLM application engineering.",
      ],
    },
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Chitkara University, Punjab",
      period: "2018 — 2022",
      grade: "Distinction • CGPA 9.58 / 10.0",
      icon: <Award size={20} className="text-accent" />,
      highlights: [
        "Graduated with top-tier distinction focusing on data structures, algorithms, and cloud architectures.",
        "National Quarterfinalist in Smart India Hackathon (SIH 2018) for IoT & cloud monitoring solutions.",
        "Semifinalist in India Innovation Challenge Design Contest (IICDC 2019) with embedded computer vision.",
        "Team runners-up at Octahacks Hackathon.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm md:text-base">
              05.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-light tracking-tight">
              Education & Honors
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2 max-w-2xl">
            Verified academic credentials and national engineering recognitions.
          </p>
        </m.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <m.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
              className="glass-card p-6 md:p-8 rounded-2xl border border-light/10 hover:border-accent/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-light/5 border border-light/10 text-xs font-mono text-light/80">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-light mb-1">
                  {item.degree}
                </h3>
                <p className="text-accent text-xs md:text-sm font-mono font-medium mb-2">
                  {item.institution}
                </p>

                {item.grade && (
                  <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
                    {item.grade}
                  </div>
                )}

                <ul className="space-y-2 mt-3 pt-3 border-t border-light/10">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs md:text-sm text-gray"
                    >
                      <span className="text-accent shrink-0 mt-0.5">▹</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
