import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, links, type Product, products } from "@/app/_data/site";
import Footer from "../../_components/Footer";
import Gallery from "../../_components/Gallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...caseStudies, ...products].map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (product) {
    const title = `${product.title} — Gourav Kashiv`;
    const url = `${links.site}/work/${product.id}`;
    return {
      title,
      description: product.description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description: product.description,
        url,
        siteName: "Gourav Kashiv",
        images: [{ url: product.image.src, alt: product.image.alt }],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: product.description,
        images: [product.image.src],
      },
    };
  }

  const project = caseStudies.find((p) => p.id === id);
  if (!project) return {};

  const title = `${project.title} case study — Gourav Kashiv`;
  const url = `${links.site}/work/${project.id}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.summary,
      url,
      siteName: "Gourav Kashiv",
      images: [{ url: project.images[0].src, alt: project.images[0].alt }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [project.images[0].src],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (product) return <ProductPage product={product} />;

  const project = caseStudies.find((p) => p.id === id);
  if (!project) notFound();

  const domain = project.live
    ?.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <>
      <main id="main" className="pt-10 pb-24">
        <div className="page-x">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="eyebrow mb-3">{project.kind}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-fg md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Live site
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={16} aria-hidden="true" />
                  Source
                </a>
              )}
            </div>
          </header>

          <div className="mt-12 max-w-4xl">
            <Gallery
              title={project.title}
              domain={domain}
              images={project.images}
              priority
            />
          </div>

          <div className="mt-14 grid max-w-4xl gap-12">
            <section aria-labelledby="overview">
              <h2 id="overview" className="eyebrow mb-4">
                Overview
              </h2>
              <dl className="space-y-5 leading-relaxed">
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
            </section>

            <section aria-labelledby="decisions">
              <h2 id="decisions" className="eyebrow mb-4">
                Engineering decisions
              </h2>
              <ul className="space-y-3 leading-relaxed text-muted">
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
            </section>

            <section aria-labelledby="challenge">
              <h2 id="challenge" className="eyebrow mb-4">
                The hard part
              </h2>
              <p className="leading-relaxed text-muted">{project.challenge}</p>
            </section>

            <section aria-labelledby="stack">
              <h2 id="stack" className="eyebrow mb-4">
                Stack
              </h2>
              <p className="font-mono text-sm leading-6 text-muted">
                {project.stack.join(" · ")}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ProductPage({ product }: { product: Product }) {
  const domain = product.live
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <>
      <main id="main" className="pt-10 pb-24">
        <div className="page-x">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="eyebrow mb-3">{product.kind}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-fg md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {product.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={product.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Live site
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <span className="px-1 text-sm text-subtle">
                Private client codebase
              </span>
            </div>
          </header>

          <div className="mt-12 max-w-4xl">
            <Gallery
              title={product.title}
              domain={domain}
              images={[product.image]}
              priority
            />
          </div>

          <div className="mt-14 grid max-w-4xl gap-12">
            <section aria-labelledby="about">
              <h2 id="about" className="eyebrow mb-4">
                About
              </h2>
              <div className="space-y-4 leading-relaxed text-muted">
                {product.about.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="highlights">
              <h2 id="highlights" className="eyebrow mb-4">
                Highlights
              </h2>
              <ul className="space-y-3 leading-relaxed text-muted">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent/70"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="stack">
              <h2 id="stack" className="eyebrow mb-4">
                Stack
              </h2>
              <p className="font-mono text-sm leading-6 text-muted">
                {product.stack.join(" · ")}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
