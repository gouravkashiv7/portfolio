"use client";
import { m } from "framer-motion";
import OtherProjects from "./OtherProjects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono text-base md:text-lg">
              03.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-light tracking-tight">
              Selected Production Systems
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2">
            Architected and shipped end-to-end: guest booking engines,
            enterprise ERPs, and cloud infrastructure.
          </p>
        </m.div>

        {/* Featured Projects Grid */}
        <div className="space-y-28">
          {/* Flagship: The Retreat Cottage + Operations Manager */}
          <ProjectItem
            title="The Retreat Cottage & Operations Manager"
            description="A unified hospitality platform integrating a public guest booking application with a real-time operational ERP. Features dynamic date blackout scheduling, serverless Supabase Edge Functions for two-way live calendar sync with MakeMyTrip and Goibibo (via iCal format), a digital food ordering portal, and automated client PDF invoicing."
            tech={[
              "Next.js 15",
              "React 19",
              "Supabase & Edge Functions",
              "React Query",
              "Styled Components",
              "iCal OTA Sync",
            ]}
            image="/theretreat_home.png"
            images={[
              "/theretreat_home.png",
              "/theoperations.png",
              "/theoperations2.png",
              "/theretreat_rooms.png",
              "/theoperations3.png",
            ]}
            projectLink="https://github.com/gouravkashiv7/the-retreat-operations-manager"
            liveLink="https://the-retreat-operations-manager.vercel.app/"
            featured={true}
            reverse={false}
            priority={true}
          />

          {/* St. Bede's ERP System */}
          <ProjectItem
            title="St. Bede's ERP System (CampusEvo)"
            description="Enterprise institutional ERP platform managing academic workflows, faculty records, dynamic course catalogs, and administrative operations. Architected the custom Question Bank & Dynamic Exam Generator, real-time Google Maps transit tracking for student fleet routing, and cut initial load times 6× (30s to 5s) by migrating build pipelines from Webpack to Vite + pnpm."
            tech={[
              "React",
              "Node.js & Express",
              "MongoDB",
              "AWS EC2 & Route 53",
              "Vite + pnpm (6× Speedup)",
              "Google Maps API",
            ]}
            image="/erp_dashboard.png"
            images={[
              "/erp_dashboard.png",
              "/erp_academics.png",
              "/erp_students.png",
              "/erp_faculty.png",
              "/erp_branding.png",
              "/erp_reports.png",
            ]}
            projectLink="https://stbedes.campusevo.com/"
            liveLink="https://stbedes.campusevo.com/"
            featured={true}
            reverse={true}
          />

          {/* KasauliCoder */}
          <ProjectItem
            title="KasauliCoder Digital Platform"
            description="Full-scale digital agency platform and technical community ecosystem. Features high-performance SaaS development tooling, automated developer content workflows, and an integrated learning platform with structured hackathons and engineering acceleration tracks."
            tech={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Server Actions",
              "Framer Motion",
              "Lucide Icons",
            ]}
            image="/kasaulicoder_home.png"
            images={[
              "/kasaulicoder_home.png",
              "/kasaulicoder_programs.png",
              "/kasaulicoder_projects.png",
              "/kasaulicoder_contact.png",
            ]}
            projectLink="https://www.kasaulicoder.com/"
            liveLink="https://www.kasaulicoder.com/"
            featured={true}
            reverse={false}
          />
        </div>

        {/* Other Noteworthy Projects */}
        <OtherProjects />
      </div>
    </section>
  );
}
