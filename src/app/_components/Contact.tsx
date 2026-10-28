"use client";

import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { links } from "@/app/_data/site";
import Reveal from "./Reveal";

export default function Contact({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard can be blocked; the mailto link is still available.
    }
  };

  const secondary = [
    { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
    { label: "GitHub", href: links.github, icon: Github },
    { label: "WhatsApp", href: links.whatsapp, icon: MessageCircle },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 md:py-32"
    >
      <Reveal className="page-x">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-12 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <p className="eyebrow mb-4">Contact</p>
          <Heading
            id="contact-title"
            className="max-w-[22ch] text-3xl font-semibold tracking-tight text-fg md:text-[2.6rem] md:leading-[1.15]"
          >
            Hiring, planning a product, or want to compare notes?
          </Heading>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">
            I&apos;m always available for new discussions. Email is the best way
            to reach me: tell me a little about the role or project and
            I&apos;ll reply.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${links.email}`} className="btn btn-primary">
              <Mail size={16} aria-hidden="true" />
              {links.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-secondary"
              aria-live="polite"
            >
              {copied ? (
                <Check size={16} aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              href={links.resume}
              download="Gourav-Kashiv-Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6 text-sm">
            {secondary.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-fg"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
            <li className="text-subtle">Based in Solan, Himachal Pradesh</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
