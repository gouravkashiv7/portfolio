import { Cloud, Database, Layout, Plug } from "lucide-react";
import Image from "next/image";
import gourav from "../../../public/gourav.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const focus = [
  {
    icon: Layout,
    title: "Interface",
    text: "Screens that staff can use all day without training.",
  },
  {
    icon: Database,
    title: "Backend & data",
    text: "Honest data models, so an ERP hierarchy or a booking calendar has one source of truth.",
  },
  {
    icon: Plug,
    title: "Integrations",
    text: "Connecting products to Google Maps, OTA calendars, S3, email and payments.",
  },
  {
    icon: Cloud,
    title: "Deployment",
    text: "TLS, DNS, build pipelines and what happens after release.",
  },
];

const education = [
  {
    degree: "M.Tech, Computer Science & Engineering",
    school: "Panjab University, Chandigarh",
    period: "2023 — 2025",
  },
  {
    degree: "B.E., Computer Science & Engineering",
    school: "Chitkara University",
    period: "2018 — 2022 · Distinction, CGPA 9.58 / 10",
  },
];

const recognition = [
  {
    title: "IICTDS-2025, NMIMS Chandigarh",
    text: "Presented “Performance Comparison of Text-to-Video Generative Models” with Sarbjeet Singh. Publication in progress.",
  },
  {
    title: "Smart India Hackathon 2018",
    text: "Quarterfinalist",
  },
  {
    title: "India Innovation Challenge Design Contest 2019",
    text: "Semifinalist",
  },
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

        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0">
            <Reveal className="max-w-[62ch] space-y-5 text-[1.075rem] leading-[1.75] text-muted">
              <p>
                <span className="text-fg">
                  I like owning a product all the way through.
                </span>{" "}
                On most projects I&apos;m the person who designs the screens,
                writes the API, shapes the database and then sets up the server
                it runs on. That range is the point: a decision in one layer
                usually shows up as a problem, or a shortcut, in another.
              </p>
              <p>
                My master&apos;s research compared text-to-video generative
                models, and I keep exploring LLMs, RAG and agent tooling as
                practical parts of the development workflow. Since October 2026
                I also teach web development and Python at Technoledge, which
                keeps my explanations, and my fundamentals, sharp.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <ul className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
                {focus.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="bg-bg p-5">
                    <span className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong text-accent">
                        <Icon size={15} aria-hidden="true" />
                      </span>
                      <span className="font-medium text-fg">{title}</span>
                    </span>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <aside
              aria-label="Profile"
              className="rounded-[14px] border border-line bg-bg p-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line-strong">
                  <Image
                    src={gourav}
                    alt="Portrait of Gourav Kashiv"
                    fill
                    sizes="64px"
                    className="object-cover object-[50%_30%] scale-125"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="font-medium text-fg">Gourav Kashiv</p>
                  <p className="text-sm text-muted">
                    Software Developer, Technoledge
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-subtle">
                    Solan, Himachal Pradesh
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <h3 className="eyebrow mb-4">Education</h3>
                <ul className="space-y-4">
                  {education.map((e) => (
                    <li key={e.degree}>
                      <p className="text-[0.95rem] font-medium text-fg">
                        {e.degree}
                      </p>
                      <p className="text-sm text-muted">{e.school}</p>
                      <p className="mt-0.5 font-mono text-xs text-subtle">
                        {e.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <h3 className="eyebrow mb-4">Research & recognition</h3>
                <ul className="space-y-3.5">
                  {recognition.map((r) => (
                    <li key={r.title}>
                      <p className="text-[0.95rem] font-medium text-fg">
                        {r.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        {r.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
