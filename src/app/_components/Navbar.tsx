"use client";

import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "@/app/_data/site";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // The last section is too short to reach the spy band; pin it at the bottom
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section that occupies the upper part of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const item of [{ id: "home" }, ...navItems]) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", close);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", close);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="page-x flex h-16 items-center justify-between"
      >
        <a href="#home" className="flex items-center gap-2.5 text-fg">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface font-mono text-xs font-semibold text-accent"
          >
            GK
          </span>
          <span className="text-[0.95rem] font-medium tracking-tight">
            Gourav Kashiv
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === item.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={links.resume}
              target="_blank"
              rel="noopener"
              className="btn btn-secondary min-h-9! px-3.5! text-sm!"
            >
              <FileText size={15} aria-hidden="true" />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-line">
          <ul className="page-x flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-lg text-fg border-b border-line"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener"
                className="btn btn-primary w-full"
              >
                <FileText size={16} aria-hidden="true" />
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
