// Single source of truth for portfolio content. Every claim here has been
// checked against the project repositories, live sites or the resume.

export const links = {
  site: "https://www.gouravkashiv.com",
  email: "gouravkashiv3@gmail.com",
  phoneDisplay: "+91 94598 99052",
  whatsapp: "https://wa.me/919459899052",
  github: "https://github.com/gouravkashiv7",
  linkedin: "https://www.linkedin.com/in/gouravkashiv7/",
  x: "https://x.com/KashivGourav",
  resume: "/resume.pdf",
};

export interface CaseStudy {
  id: string;
  title: string;
  kind: string;
  summary: string;
  problem: string;
  role: string;
  decisions: string[];
  challenge: string;
  outcome: string;
  stack: string[];
  live?: string;
  source?: string;
  images: { src: string; alt: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "erp",
    title: "St. Bede's ERP",
    kind: "Technoledge ERP · Institutional",
    summary:
      "Technoledge's MERN-based ERP, running academics, HR, examinations and student transport for colleges and schools such as St. Bede's.",
    problem:
      "Institutions were managing sessions, departments, staff records, exams and bus routes across disconnected tools and spreadsheets.",
    role: "Full-stack development and deployment: React client, Express/MongoDB APIs, and the AWS EC2 server it runs on.",
    decisions: [
      "Modelled a Session → Institution → Department → Course → Branch hierarchy so every module shares one academic structure.",
      "Moved the client build from Webpack to Vite + pnpm, and optimised what the browser loads in production.",
      "Stored documents in S3 and generated reports server-side with PDFKit; scheduled jobs run with node-cron.",
      "Built the transport module on the Google Maps JavaScript API for routes, stops and allocations.",
    ],
    challenge:
      "Adding the institution hierarchy to a codebase with many existing modules meant migrating data and updating each module without breaking live workflows.",
    outcome:
      "In production on AWS EC2 behind Nginx with Let's Encrypt TLS, serving multiple institutions from one codebase. The Vite migration cut dev-server start-up from about 30 s to 5 s, and production load times improved too.",
    stack: [
      "React",
      "Redux",
      "MUI",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS EC2",
      "S3",
      "Nginx",
    ],
    live: "https://stbedes.campusevo.com/",
    images: [
      { src: "/erp_dashboard.png", alt: "ERP admin dashboard" },
      { src: "/erp_academics.png", alt: "Academics module" },
      { src: "/erp_students.png", alt: "Student records" },
      { src: "/erp_faculty.png", alt: "Faculty management" },
      { src: "/erp_reports.png", alt: "Reports" },
      { src: "/erp_branding.png", alt: "Institution branding settings" },
    ],
  },
  {
    id: "operations",
    title: "The Retreat Operations Manager",
    kind: "Internal tool · Hospitality",
    summary:
      "The staff-facing system for a boutique cottage: bookings, check-in/out, room inventory, guest orders and channel calendars.",
    problem:
      "Bookings arrived from the direct site and from OTA channels, and staff tracked availability, guests and meal orders by hand.",
    role: "Sole developer: product design, React front end, Supabase schema and Edge Functions.",
    decisions: [
      "Used Supabase (Postgres, auth, storage) so a single developer could own the whole backend.",
      "Wrote Edge Functions that import and export iCal feeds to keep OTA calendars such as Goibibo in step with direct bookings.",
      "Used TanStack Query for server state and caching across bookings, rooms and guest views.",
      "Generated booking receipts as PDFs in the browser with jsPDF.",
    ],
    challenge:
      "OTA calendars only expose iCal feeds, so availability had to be reconciled from imported events without creating double bookings.",
    outcome:
      "Live and used for daily operations, alongside the public booking site that shares the same Supabase backend.",
    stack: [
      "React 19",
      "Vite",
      "TanStack Query",
      "Supabase",
      "Edge Functions",
      "Styled Components",
    ],
    live: "https://the-retreat-operations-manager.vercel.app/",
    source: "https://github.com/gouravkashiv7/the-retreat-operations-manager",
    images: [
      { src: "/theoperations.png", alt: "Operations dashboard" },
      { src: "/theoperations2.png", alt: "Bookings table" },
      { src: "/theoperations3.png", alt: "Room inventory" },
      { src: "/theoperations4.png", alt: "Booking details" },
    ],
  },
  {
    id: "retreat",
    title: "The Retreat Cottage",
    kind: "Customer product · Booking",
    summary:
      "The public website and direct-booking flow for a cottage in Kasauli, with guest accounts and downloadable receipts.",
    problem:
      "The property relied on third-party listings and needed its own site where guests could check availability and request a stay.",
    role: "Sole developer: design, Next.js front end, auth, email and data model.",
    decisions: [
      "Built on the Next.js App Router for server-rendered, indexable pages.",
      "Shared one Supabase database with the Operations Manager so availability is the same in both apps.",
      "Added guest sign-in with NextAuth, validated booking forms with React Hook Form and Zod, and sent confirmations with Nodemailer.",
    ],
    challenge:
      "Keeping the public calendar accurate while staff edit bookings in a separate application.",
    outcome:
      "Live at retreatcottage.in, taking direct stay requests with confirmations by email.",
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "NextAuth",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://www.retreatcottage.in/",
    source: "https://github.com/gouravkashiv7/the-retreat-cottage",
    images: [
      { src: "/theretreat_home.png", alt: "Home page" },
      { src: "/theretreat_rooms.png", alt: "Rooms" },
      { src: "/theretreat_retreats.png", alt: "Retreat packages" },
      { src: "/theretreat_amenities.png", alt: "Amenities" },
      { src: "/theretreat_location.png", alt: "Location" },
    ],
  },
  {
    id: "kasaulicoder",
    title: "Kasauli Coder",
    kind: "Agency site · Learning platform",
    summary:
      "The website and member platform for a development agency and tech community: programs, projects, blog and dashboards.",
    problem:
      "The agency needed one place to present client work, run learning programs and manage members.",
    role: "Full-stack development: Next.js app, MongoDB models, authentication and admin tools.",
    decisions: [
      "Used React 19 and the Next.js App Router with server actions to keep data access on the server.",
      "Wrote custom JWT authentication (jose, bcrypt) with separate member and admin dashboards.",
      "Published blog content from MDX so posts live in version control.",
    ],
    challenge:
      "Serving a marketing site, a blog and authenticated dashboards from one Next.js codebase without the public pages getting slower.",
    outcome: "Live at kasaulicoder.com, deployed on Vercel.",
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://www.kasaulicoder.com/",
    images: [
      { src: "/kasaulicoder_home.png", alt: "Home page" },
      { src: "/kasaulicoder_programs.png", alt: "Programs" },
      { src: "/kasaulicoder_projects.png", alt: "Projects" },
      { src: "/kasaulicoder_contact.png", alt: "Contact page" },
    ],
  },
];

export interface Product {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  image: { src: string; alt: string };
}

export const products: Product[] = [
  {
    title: "Kaala Panchang",
    kind: "Web + Android · Calendar",
    description:
      "A Hindu Panchang calculated from each city's own sunrise: tithi, nakshatra, Rahu Kaal, muhurat, festivals and Kundli.",
    highlights: [
      "pnpm/Turborepo monorepo: Next.js 16 web, Expo React Native app and an Express 5 API sharing one calculation package.",
      "Astronomical timings computed with astronomy-engine, in five languages, with programmatic city × date pages for search.",
      "Backend self-hosted on AWS EC2 with push notifications and generated PDF calendars and Kundlis.",
    ],
    stack: ["Next.js", "Expo", "Express", "MongoDB", "AWS EC2"],
    live: "https://www.kaalapanchang.com/",
    image: { src: "/kaala_home.png", alt: "Today's Panchang home page" },
  },
  {
    title: "OffersNudge",
    kind: "Web app · Deals",
    description:
      "A coupon and deals platform that lists verified codes by store and category, with an admin dashboard to manage them.",
    highlights: [
      "Next.js 16 App Router on MongoDB Atlas, with NextAuth-protected admin tools.",
      "Newsletter with double opt-in, code submissions and partner inquiries.",
      "Honeypot spam traps and MongoDB-backed rate limiting on every public form.",
    ],
    stack: ["Next.js", "MongoDB", "NextAuth", "Zod", "Vercel"],
    live: "https://www.offersnudge.com/",
    image: { src: "/offersnudge_home.png", alt: "Deals home page" },
  },
  {
    title: "Best eSIM Provider",
    kind: "Web app · Comparison",
    description:
      "Compares travel eSIM plans for a whole trip and shows where every price came from and when it was checked.",
    highlights: [
      "Every plan carries a source URL and check date; the ranking formula is published and ignores commission.",
      "Fifteen languages with right-to-left support, and multi-currency prices.",
      "Next.js 16 with Cache Components on AWS EC2 behind Cloudflare and Nginx, tested with Vitest and Playwright + axe.",
    ],
    stack: ["Next.js", "TypeScript", "Zod", "Playwright", "AWS EC2"],
    live: "https://www.bestesimprovider.com/",
    image: { src: "/esim_home.png", alt: "Trip eSIM search page" },
  },
];

export interface Role {
  company: string;
  url?: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
}

export const roles: Role[] = [
  {
    company: "Technoledge",
    title: "Software Developer — Expert & Trainer",
    period: "Oct 2026 — Present",
    summary:
      "Teaching and building: I train students in web development and Python and develop the Technoledge ERP.",
    points: [
      "Run hands-on, project-based sessions on web development and Python.",
      "Develop and maintain ERP modules across the React client and Node.js API.",
    ],
  },
  {
    company: "Kasauli Coder",
    url: "https://www.kasaulicoder.com/",
    title: "Full-Stack & DevOps Developer",
    period: "Jun 2025 — Sep 2026",
    summary:
      "EdTech products and the Technoledge ERP, from feature work to deployment.",
    points: [
      "Migrated the ERP client from Webpack to Vite + pnpm: dev-server start-up fell from about 30 s to 5 s, and production load got faster too.",
      "Built the Question Bank & Exam Generator and a Transport module on Google Maps.",
      "Rebuilt HR workflows: attendance, leave management and secure documents.",
      "Deployed to AWS (EC2, Route 53) with TLS, and added role-based access across a 250+ file MERN codebase.",
    ],
  },
  {
    company: "Infotech Software Pvt Ltd",
    title: "Full-Stack Developer",
    period: "Sep 2024 — May 2025",
    summary: "MERN features and REST APIs for client projects.",
    points: [
      "Built responsive React features and Express/MongoDB REST APIs.",
      "Worked in a Git-based team workflow and supported testing, debugging and releases.",
    ],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
  evidence: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "MUI",
    ],
    evidence: "ERP client, Operations Manager, Retreat Cottage",
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "REST",
      "Server Actions",
      "JWT / NextAuth",
      "Edge Functions",
    ],
    evidence: "ERP API, Kasauli Coder auth, iCal sync functions",
  },
  {
    title: "Databases & data modelling",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Supabase",
      "Row-Level Security",
    ],
    evidence: "ERP institution hierarchy, shared Retreat database",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "S3",
      "Route 53",
      "Nginx",
      "Let's Encrypt",
      "Vercel",
      "Docker",
    ],
    evidence: "ERP and Kaala backends on EC2, Vercel deployments",
  },
  {
    title: "AI & emerging tech",
    skills: ["LLM integration", "RAG", "Agentic workflows", "MCP", "Python"],
    evidence: "IICTDS-2025 research on text-to-video models",
  },
  {
    title: "Tools & collaboration",
    skills: ["Git & GitHub", "Vite", "pnpm", "Biome", "Postman", "Linux"],
    evidence: "Daily workflow; Webpack → Vite migration",
  },
];
