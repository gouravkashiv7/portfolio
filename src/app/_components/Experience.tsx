import { ArrowUpRight } from "lucide-react";
import { roles } from "@/app/_data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="page-x">
        <SectionHeading
          id="experience"
          eyebrow="Experience"
          title="Where I've worked"
          intro="Two years of shipping MERN and Next.js products, and now teaching the same skills."
        />

        <ol className="space-y-px overflow-hidden rounded-[14px] border border-line bg-line">
          {roles.map((role, i) => (
            <li key={role.company} className="bg-bg">
              <Reveal
                delay={i * 0.05}
                className="grid gap-4 p-6 md:grid-cols-[13rem_1fr] md:gap-10 md:p-8"
              >
                <div>
                  <p className="font-mono text-[0.8rem] text-subtle">
                    {role.period}
                  </p>
                  {i === 0 && (
                    <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {role.title}
                    <span className="text-muted font-normal"> · </span>
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:text-accent-strong"
                      >
                        {role.company}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-accent">{role.company}</span>
                    )}
                  </h3>
                  <p className="mt-2 text-muted">{role.summary}</p>
                  <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted">
                    {role.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-subtle"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
