import { ArrowUpRight, Github } from "lucide-react";
import { type CaseStudy, caseStudies } from "@/app/_data/site";
import Gallery from "./Gallery";
import OtherProjects from "./OtherProjects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function CaseStudyArticle({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
}) {
  const domain = project.live
    ?.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className="scroll-mt-24 border-t border-line py-14 first:border-t-0 first:pt-0 md:py-20"
    >
      <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className={`min-w-0 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <Gallery
            title={project.title}
            domain={domain}
            images={project.images}
          />
        </div>

        <div className="min-w-0">
          <p className="flex items-center gap-3 font-mono text-xs text-subtle">
            <span className="text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.kind}
          </p>
          <h3
            id={`${project.id}-title`}
            className="mt-3 text-2xl font-semibold tracking-tight text-fg md:text-[1.9rem]"
          >
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-[1.05rem]">
            {project.summary}
          </p>

          <dl className="mt-7 space-y-5 text-[0.95rem] leading-relaxed">
            <div>
              <dt className="mb-1 text-sm font-medium text-fg">Problem</dt>
              <dd className="text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-fg">My role</dt>
              <dd className="text-muted">{project.role}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-fg">Outcome</dt>
              <dd className="text-muted">{project.outcome}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Live site
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">for {project.title}</span>
              </a>
            )}
            {project.source ? (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} aria-hidden="true" />
                Source
                <span className="sr-only">for {project.title}</span>
              </a>
            ) : (
              <span className="inline-flex items-center px-1 text-sm text-subtle">
                Private client codebase
              </span>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10 grid gap-8 rounded-[14px] border border-line bg-surface/60 p-6 md:grid-cols-[1.6fr_1fr] md:p-8">
        <div>
          <h4 className="eyebrow mb-4">Engineering decisions</h4>
          <ul className="space-y-3 text-[0.95rem] leading-relaxed text-muted">
            {project.decisions.map((d) => (
              <li key={d} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent/70"
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-7 md:border-l md:border-line md:pl-8">
          <div>
            <h4 className="eyebrow mb-3">The hard part</h4>
            <p className="text-[0.95rem] leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="eyebrow mb-3">Stack</h4>
            <p className="font-mono text-[0.8rem] leading-6 text-muted">
              {project.stack.join(" · ")}
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="page-x">
        <SectionHeading
          id="work"
          eyebrow="Selected work"
          title="Products I've built and run"
          intro="Four systems in production. For each one I worked across the interface, the backend, the data model and the deployment."
        />
        <div>
          {caseStudies.map((p, i) => (
            <CaseStudyArticle key={p.id} project={p} index={i} />
          ))}
        </div>
        <OtherProjects />
      </div>
    </section>
  );
}
