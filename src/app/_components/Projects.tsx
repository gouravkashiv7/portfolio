"use client";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import OtherProjects from "./OtherProjects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-light mb-16 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-mono text-lg mr-4">03.</span>
          Some Things I've Built
          <span className="ml-6 h-px bg-gray-400 grow max-w-60"></span>
        </motion.h2>

        {/* Featured Projects Grid */}
        <div className="space-y-28">
          <ProjectItem
            title="The Retreat Cottage"
            description="Advanced booking system with real-time availability tracking, user authentication, and admin panel. Features interactive calendar that disables booked dates, secure payment processing, booking management, and instant confirmation system."
            tech={[
              "Next.js",
              "React",
              "Tailwind",
              "Supabase",
              "NextAuth.js",
              "Context API",
            ]}
            image="/theretreat.png"
            projectLink="https://github.com/gouravkashiv7/the-retreat-cottage"
            liveLink="https://the-retreat-cottage.vercel.app"
            featured={true}
            reverse={false}
          />
          <ProjectItem
            title="The Retreat Operations Manager"
            description="A modern React SPA for retreat management — powered by Supabase, React Query, and Styled Components, with seamless routing and full light/dark mode support."
            tech={[
              "React",
              "React Query",
              "React Router",
              "Styled Components",
              "Supabase",
              "Context API",
            ]}
            image="/theoperations.png"
            projectLink="https://github.com/gouravkashiv7/the-retreat-operations-manager"
            liveLink="https://the-retreat-operations-manager.vercel.app/"
            featured={true}
            reverse={true}
          />
        </div>

        {/* Other Noteworthy Projects */}
        <OtherProjects />
      </div>
    </section>
  );
}
