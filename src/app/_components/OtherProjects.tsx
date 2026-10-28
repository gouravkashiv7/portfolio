import { ArrowUpRight } from "lucide-react";
import { links, smallProjects } from "@/app/_data/site";
import Reveal from "./Reveal";

export default function OtherProjects() {
  return (
    <Reveal className="mt-8 border-t border-line pt-14 md:pt-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-fg">
            More products I&apos;ve shipped
          </h3>
          <p className="mt-2 text-muted">
            Live products I build and run independently. Source is private.
          </p>
        </div>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-sm"
        >
          All repositories on GitHub
        </a>
      </div>

      <ul className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line md:grid-cols-3">
        {smallProjects.map((p) => (
          <li key={p.title} className="bg-bg">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-6 transition-colors hover:bg-surface"
            >
              <span className="flex items-center justify-between">
                <span className="font-medium text-fg">{p.title}</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </span>
              <span className="mt-4 font-mono text-[0.75rem] text-subtle">
                {p.stack.join(" · ")}
              </span>
              <span className="mt-3 text-sm text-accent">
                {new URL(p.live).hostname.replace(/^www\./, "")}
              </span>
              <span className="sr-only">(opens live site)</span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
