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
        <m.h2
          className="text-2xl md:text-3xl font-bold text-light mb-16 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-mono text-lg mr-4">03.</span>
          Some Things I've Built
          <span className="ml-6 h-px bg-gray-400 grow max-w-60"></span>
        </m.h2>

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
            description="A comprehensive React internal management system & guest portal. Key features include live availability syncing with external OTAs (MMT/Goibibo) via Edge Functions, a digital menu for guest ordering with real-time status tracking, and automated PDF receipt generation for stays and orders."
            tech={[
              "React",
              "React Query",
              "React Router",
              "Styled Components",
              "Supabase",
              "Edge Functions",
              "Framer Motion",
              "iCal API",
              "Context API",
              "Gemini AI",
              "react-image-crop",
            ]}
            image="/theoperations.png"
            images={[
              "/theoperations.png",
              "/theoperations2.png",
              "/theoperations3.png",
              "/theoperations4.png",
            ]}
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
