import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { products } from "@/app/_data/site";
import Reveal from "./Reveal";

const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function OtherProjects() {
  return (
    <div
      id="products"
      className="scroll-mt-24 border-t border-line pt-14 md:pt-20"
    >
      <Reveal className="mb-10 max-w-2xl">
        <h3 className="text-2xl font-semibold tracking-tight text-fg md:text-[1.9rem]">
          More products I&apos;ve shipped
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted md:text-[1.05rem]">
          Products I design, build and run independently, from the first commit
          to the production server. Their source is private.
        </p>
      </Reveal>

      <ul className="grid gap-6 lg:grid-cols-3">
        {products.map((p) => (
          <li key={p.title} className="min-w-0">
            <Reveal className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-surface/60 transition-colors hover:border-line-strong">
                <div className="border-b border-line">
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5 bg-surface px-3 py-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="ml-2 truncate font-mono text-[0.68rem] text-subtle">
                      {hostname(p.live)}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg">
                    <Image
                      src={p.image.src}
                      alt={`${p.title} — ${p.image.alt}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-subtle">{p.kind}</p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight text-fg">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1 w-3 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[0.75rem] leading-6 text-subtle">
                    {p.stack.join(" · ")}
                  </p>
                  <div className="mt-auto pt-5">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
                    >
                      {hostname(p.live)}
                      <ArrowUpRight size={15} aria-hidden="true" />
                      <span className="sr-only">(opens {p.title})</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
