"use client";

import { m } from "framer-motion";
import { ArrowUp, Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/gouravkashiv7",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/gouravkashiv7/",
    },
    {
      name: "X",
      icon: <X size={20} />,
      url: "https://x.com/KashivGourav",
    },
  ];

  return (
    <footer className="relative bg-dark pt-12 pb-8 border-t border-light/10 overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo/Name and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-light font-bold text-xl tracking-tighter">
              GK.
            </span>
            <p className="text-gray text-sm font-mono tracking-tight">
              © {currentYear} | Designed & Built by{" "}
              <Link
                href="/"
                className="text-accent hover:underline underline-offset-4 decoration-accent/30 transition-all font-medium"
              >
                Gourav Kashiv
              </Link>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <m.div
                key={social.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-light/5 border border-light/10 hover:bg-light/10 hover:border-accent/40 hover:text-accent text-gray transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              </m.div>
            ))}
          </div>

          {/* Scroll to Top */}
          <div>
            <MagneticButton>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-dark border border-accent hover:bg-transparent hover:text-accent transition-all duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp
                  size={20}
                  className="group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-light/5 text-[10px] font-mono text-gray uppercase tracking-[0.2em]">
          <p>Handcrafted with precision</p>
          <p className="mt-2 sm:mt-0">Inspired by minimalist aesthetics</p>
        </div>
      </div>
    </footer>
  );
}
