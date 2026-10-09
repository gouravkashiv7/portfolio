"use client";
import { m } from "framer-motion";
import OtherProjects from "./OtherProjects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm md:text-base">
              01.
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-light tracking-tight">
              Flagship Production Systems
            </h2>
            <div className="ml-4 md:ml-6 h-px bg-accent/20 grow max-w-20 md:max-w-60" />
          </div>
          <p className="text-gray text-xs sm:text-sm font-mono mt-2.5 max-w-2xl">
            Real software systems engineered and shipped from concept through
            cloud infrastructure, database schema design, and production
            operations.
          </p>
        </m.div>

        {/* Featured Projects Stack */}
        <div className="space-y-20 md:space-y-28">
          {/* Project 1: Kasauli Coder */}
          <ProjectItem
            title="Kasauli Coder Ecosystem"
            subtitle="Full-Stack Digital Agency, Active Labs & Developer Community Platform"
            category="Agency Platform & SaaS"
            projectRole="Lead Full-Stack Architect & DevOps"
            impact="Production Platform • Sub-Second Page Transitions"
            description="An integrated digital agency and engineering ecosystem built to power client solutions, developer bootcamps, and technical programs. Serves as both a high-converting digital storefront and an active learning hub featuring hackathon tracking and career acceleration pipelines."
            highlights={[
              "Architected full-scale SaaS using React 19, Next.js 16, and modern Server Actions for zero-waterfall data fetching.",
              "Designed a modular, theme-ready component design system enforcing strict brand consistency across 20+ pages.",
              "Implemented automated developer workflows, technical blog distribution, and hackathon registration portals.",
              "Deployed to AWS cloud infrastructure with automated CI/CD pipelines, SSL termination, and Nginx reverse proxy.",
            ]}
            tech={[
              "React 19",
              "Next.js 16",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
              "Server Actions",
              "AWS EC2",
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
            priority={true}
          />

          {/* Project 2: St. Bede's ERP System */}
          <ProjectItem
            title="St. Bede's College ERP Platform"
            subtitle="Enterprise Institutional Operations, Fleet Management & Academics"
            category="Enterprise ERP Platform"
            projectRole="FullStack & Cloud DevOps Engineer"
            impact="⚡ 6× Load Time Optimization (30s → 5s)"
            description="A comprehensive institutional management system deployed on AWS for St. Bede's College. Modernized critical day-to-day operations across academic departments, student information systems, examination generation, faculty records, and student transport fleet logistics."
            highlights={[
              "Achieved a 6× load time reduction (from 30s down to 5s) by refactoring legacy Webpack build pipelines into a modernized Vite + pnpm bundling workflow.",
              "Engineered the Question Bank & Dynamic Exam Generator module for automated test construction with formatting rules.",
              "Built an interactive student Transport Management module with real-time transit tracking powered by Google Maps API.",
              "Automated HR & faculty attendance workflows with secure PDF document issuance and multi-tiered Role-Based Access Control (RBAC).",
              "Architected high-availability cloud deployment on AWS (EC2, S3 bucket storage, Route 53 DNS, and SSL/HTTPS).",
            ]}
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "AWS (EC2, S3, Route 53)",
              "Vite + pnpm",
              "Google Maps API",
              "Tailwind CSS",
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

          {/* Project 3: The Retreat Cottage */}
          <ProjectItem
            title="The Retreat Cottage"
            subtitle="High-Performance SaaS Accommodation Booking Engine"
            category="Customer-Facing SaaS"
            projectRole="End-to-End Product Architect"
            impact="Direct Booking Engine • Zero OTA Commission"
            description="A modern, high-converting direct reservation engine developed for luxury boutique accommodation. Eliminates third-party commission overhead by providing guests with direct live availability booking, secure payments, and instant verified confirmations."
            highlights={[
              "Engineered real-time availability tracking calendar that dynamically locks reserved dates to prevent double-booking collisions.",
              "Built secure customer authentication and session state powered by Supabase with Row-Level Security (RLS) data policies.",
              "Implemented instant confirmation workflow with transactional receipt delivery and reservation management dashboard.",
              "Crafted a luxury, responsive UI optimized for Core Web Vitals, achieving near-instant mobile browsing speeds.",
            ]}
            tech={[
              "Next.js",
              "React",
              "Supabase & PostgreSQL",
              "NextAuth.js",
              "Tailwind CSS",
              "Context API",
              "Vercel",
            ]}
            image="/theretreat_home.png"
            images={[
              "/theretreat_home.png",
              "/theretreat_rooms.png",
              "/theretreat_retreats.png",
              "/theretreat_amenities.png",
              "/theretreat_location.png",
            ]}
            projectLink="https://github.com/gouravkashiv7/the-retreat-cottage"
            liveLink="https://retreatcottage.in"
            featured={true}
            reverse={false}
          />

          {/* Project 4: The Retreat Operations Manager */}
          <ProjectItem
            title="The Retreat Operations Manager"
            subtitle="Real-Time Hotel ERP, Two-Way OTA Sync & In-Room Guest Dining Suite"
            category="Internal Operations & Guest Portal"
            projectRole="Lead Full-Stack Engineer"
            impact="🔄 Live Two-Way OTA Calendar Sync (MMT & Goibibo)"
            description="A robust operational management suite that centralizes room inventory, multi-channel booking synchronization, housekeeping, and in-room digital guest services into a unified administrative control center."
            highlights={[
              "Engineered automated 2-way OTA synchronization connecting MakeMyTrip and Goibibo feeds via Supabase Edge Functions & iCal API.",
              "Built an interactive QR-driven digital room-service menu with real-time status transitions (Pending → Preparing → Delivered).",
              "Created automated on-the-fly PDF invoice and receipt generation for guest stays, meal orders, and checkout audits.",
              "Implemented optimistic UI updates and real-time state synchronization using React Query and Supabase real-time subscriptions.",
            ]}
            tech={[
              "React",
              "React Query",
              "React Router",
              "Supabase & Edge Functions",
              "iCal OTA API",
              "Styled Components",
              "Framer Motion",
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
