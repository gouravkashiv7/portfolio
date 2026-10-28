import Image from "next/image";
import gourav from "../../../public/gourav.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Master's in Computer Science & Engineering",
    school: "Panjab University, Chandigarh",
    period: "2023 — 2025",
  },
  {
    degree: "Bachelor's in Computer Science & Engineering",
    school: "Chitkara University",
    period: "2018 — 2022",
  },
];

const recognition = [
  "Presented “Performance Comparison of Text-to-Video Generative Models” at IICTDS-2025, NMIMS Chandigarh (Dec 2025), with Sarbjeet Singh. Publication in progress.",
  "Quarterfinalist, Smart India Hackathon 2018",
  "Semifinalist, India Innovation Challenge Design Contest 2019",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="page-x">
        <SectionHeading id="about" eyebrow="About" title="How I work" />

        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <Reveal className="max-w-[65ch] space-y-5 text-[1.05rem] leading-[1.75] text-muted">
            <p>
              I like owning a product all the way through. On most projects
              I&apos;m the person who designs the screens, writes the API,
              shapes the database and then sets up the server it runs on. That
              range is the point: a decision in one layer usually shows up as a
              problem, or a shortcut, in another.
            </p>
            <p>
              On the <span className="text-fg">interface</span> side I care
              about screens that staff can use all day without training. On the{" "}
              <span className="text-fg">backend</span> I try to keep data models
              honest, so an ERP hierarchy or a booking calendar has one source
              of truth. I connect products to the services they depend on, such
              as Google Maps, OTA calendars, S3 and email, and I stay
              responsible for <span className="text-fg">deployment</span>: TLS,
              DNS, build pipelines and what happens after release.
            </p>
            <p>
              My master&apos;s research compared text-to-video generative
              models, and I keep exploring LLMs, RAG and agent tooling as
              practical parts of the development workflow. Since October 2026 I
              also teach web development and Python at Technoledge, which keeps
              my explanations, and my fundamentals, sharp.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-10">
            <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-line-strong lg:w-full">
              <Image
                src={gourav}
                alt="Portrait of Gourav Kashiv"
                fill
                sizes="(max-width: 1024px) 160px, 320px"
                className="object-cover"
                placeholder="blur"
              />
            </div>

            <div>
              <h3 className="eyebrow mb-4">Education</h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium text-fg">{e.degree}</p>
                    <p className="text-sm text-muted">{e.school}</p>
                    <p className="mt-0.5 font-mono text-xs text-subtle">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Research & recognition</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {recognition.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
