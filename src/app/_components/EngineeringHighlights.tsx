"use client";
import { m } from "framer-motion";

export default function EngineeringHighlights() {
  const highlights = [
    {
      metric: "6×",
      label: "Build & Load Speedup",
      sublabel: "30s → 5s Initial Load",
      detail:
        "Migrated 250+ file institutional ERP from legacy Webpack to Vite + pnpm, reducing development spin-up and client initial paint times drastically.",
      tag: "Vite + pnpm Migration",
    },
    {
      metric: "Zero-Lag",
      label: "OTA Reservation Sync",
      sublabel: "MMT & Goibibo Real-Time",
      detail:
        "Engineered serverless Edge Functions for The Retreat Operations Manager, parsing external iCal booking feeds to prevent double-bookings.",
      tag: "Supabase Edge Functions",
    },
    {
      metric: "IICTDS-2025",
      label: "Published AI Research",
      sublabel: "NMIMS Chandigarh",
      detail:
        "Co-authored peer-reviewed benchmark study evaluating Text-to-Video Generative Architectures, presented in December 2025.",
      tag: "Generative AI Benchmark",
    },
    {
      metric: "AWS EC2",
      label: "Production Cloud Hosting",
      sublabel: "Route 53 & SSL Automation",
      detail:
        "Architected scalable Linux hosting pipelines on AWS with Docker containerization, custom reverse proxies, and Nginx SSL configuration.",
      tag: "DevOps & Infrastructure",
    },
  ];

  return (
    <section className="py-14 border-y border-light/10 bg-light-bg/40 backdrop-blur-md relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-1">
              Verifiable Engineering Evidence
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-light tracking-tight">
              Production Benchmarks & Architectural Impact
            </h2>
          </div>
          <p className="text-gray text-xs sm:text-sm max-w-md font-mono">
            Every metric below is backed by shipped source code, client
            deployments, or peer-reviewed research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-xl border border-light/10 bg-dark/40 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-2xl lg:text-3xl font-extrabold text-accent tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono text-gray/80 px-2 py-0.5 rounded bg-light/5 border border-light/10">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-light font-semibold text-sm mb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs font-mono text-accent/80 mb-2">
                  {item.sublabel}
                </p>
                <p className="text-gray text-xs leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
