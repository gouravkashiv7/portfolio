import { skillGroups } from "@/app/_data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-24 md:py-32"
    >
      <div className="page-x">
        <SectionHeading
          id="skills"
          eyebrow="Skills"
          title="What I work with"
          intro="Grouped by the part of the product they serve, each with the work where I used it."
        />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="font-medium text-fg">{group.title}</h3>
                <p className="mt-3 leading-7 text-muted">
                  {group.skills.join(", ")}
                </p>
                <p className="mt-4 font-mono text-[0.75rem] leading-5 text-subtle">
                  <span className="text-accent">Used in</span> {group.evidence}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
