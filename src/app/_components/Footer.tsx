"use client";

import { m } from "framer-motion";
import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
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
      icon: <Github size={18} />,
      url: "https://github.com/gouravkashiv7",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/gourav-kashiv",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/gourav_kashiv7",
    },
  ];

  return (
    <footer className="relative bg-dark pt-12 pb-6 border-t border-white/10 overflow-hidden mt-12 inline-block w-full">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 w-full">
          {/* Social Links */}
          <div className="hidden md:flex gap-4 order-2 md:order-1 md:w-1/3 justify-center md:justify-start">
            {socials.map((social, i) => (
              <m.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/30 hover:text-accent text-gray transition-all duration-300 cursor-view"
                  aria-label={social.name}
                >
                  <MagneticButton className="w-full h-full flex items-center justify-center">
                    <span>{social.icon}</span>
                  </MagneticButton>
                </Link>
              </m.div>
            ))}
          </div>

          {/* Back to top abstract button */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 md:w-1/3 flex justify-center"
          >
            <MagneticButton className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:border-accent hover:text-dark text-light transition-all duration-300 group cursor-pointer">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-full h-full flex items-center justify-center outline-none"
              >
                <ArrowUp
                  size={20}
                  className="group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </MagneticButton>
          </m.div>

          <div className="order-3 hidden md:flex md:w-1/3 justify-end items-center">
            <span className="text-light text-xs font-mono opacity-50 block text-right">
              Thanks for scrolling
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright & signature */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-xs font-mono text-gray/60 px-2 leading-relaxed text-center sm:text-left">
          <p className="mb-2 sm:mb-0">
            © {currentYear} Gourav Kashiv. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            Designed & Built with{" "}
            <span className="text-accent animate-pulse">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
