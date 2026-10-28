import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { caseStudies, links } from "@/app/_data/site";
import SystemDiagram from "./SystemDiagram";

const strengths = [
  "React & Next.js",
  "Node.js APIs",
  "MongoDB & Postgres",
  "AWS & Vercel",
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/[0.07] blur-3xl"
      />

      <div className="page-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <p className="mb-6 flex flex-col gap-1 text-[0.95rem] sm:flex-row sm:items-center sm:gap-3">
            <span className="font-medium text-fg">Gourav Kashiv</span>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-line-strong sm:block"
            />
            <span className="text-muted">
              Full-Stack Engineer · Software Developer at Technoledge
            </span>
          </p>

          <h1
            id="hero-title"
            className="max-w-[20ch] text-[2.4rem] leading-[1.08] font-semibold tracking-[-0.03em] text-fg sm:text-5xl lg:text-[3.6rem]"
          >
            I build and ship full&#8209;stack products, from architecture to
            production.
          </h1>

          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">
            I design the interface, build the API and data model, and deploy and
            run the result, whether that is an institutional ERP or a booking
            platform. Lately I&apos;m also applying LLMs to real product work.
          </p>

          <ul
            aria-label="Core strengths"
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.8rem] text-subtle"
          >
            {strengths.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-accent"
                />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={links.resume}
              download="Gourav-Kashiv-Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-fg"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-fg"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 hover:text-fg"
              >
                <Mail size={16} aria-hidden="true" />
                {links.email}
              </a>
            </li>
          </ul>
        </div>

        <SystemDiagram />
      </div>

      <div className="page-x mt-16 md:mt-20">
        <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:gap-6">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            Shipped to production
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {caseStudies.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="text-muted hover:text-fg">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
