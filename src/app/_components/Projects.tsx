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
        >
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-16 flex items-center">
            <span className="text-accent font-mono text-base md:text-lg mr-3 md:mr-4">
              03.
            </span>
            Projects
            <span className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60"></span>
          </h2>
        </m.div>

        {/* Featured Projects Grid */}
        <div className="space-y-28">
          <ProjectItem
            title="Kasauli Coder"
            description="A comprehensive digital agency and tech community ecosystem. Features high-performance SaaS development, automated content workflows, and a technical learning platform with integrated hackathons and career acceleration programs. Includes a sophisticated blog ecosystem for technical knowledge sharing."
            tech={[
              "MERN Stack",
              "Next.js",
              "React",
              "Tailwind CSS",
              "Lucide React",
              "Framer Motion",
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
          <ProjectItem
            title="St. Bede's ERP System"
            description="A comprehensive institutional ERP system developed and deployed during my internship. Manages critical operations for St. Bede's College including centralized student and faculty records, academic course management, and institutional branding tools. Architected and managed the end-to-end deployment on AWS for high availability and performance."
            tech={[
              "AWS (EC2, S3)",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Lucide React",
            ]}
            image="/erp_dashboard.png"
            images={[
              "/erp_dashboard.png",
              "/erp_academics.png",
              "/erp_branding.png",
              "/erp_faculty.png",
              "/erp_students.png",
              "/erp_reports.png",
            ]}
            projectLink="https://stbedes.campusevo.com/"
            liveLink="https://stbedes.campusevo.com/"
            featured={true}
            reverse={true}
          />
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
            image="/theretreat_home.png"
            images={[
              "/theretreat_home.png",
              "/theretreat_retreats.png",
              "/theretreat_rooms.png",
              "/theretreat_location.png",
              "/theretreat_amenities.png",
            ]}
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
