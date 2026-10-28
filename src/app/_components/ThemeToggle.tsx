"use client";

import { Moon, Sun } from "lucide-react";

// The theme lives on <html data-theme>, set before paint by the inline
// script in layout.tsx. Icons swap with CSS so server and client markup
// always match.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice still applies to this page.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:border-accent hover:text-fg"
    >
      <Sun size={16} aria-hidden="true" className="hidden light:block" />
      <Moon size={16} aria-hidden="true" className="light:hidden" />
      <span className="sr-only">Toggle light and dark theme</span>
    </button>
  );
}
