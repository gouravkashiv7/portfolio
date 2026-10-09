"use client";

import { AnimatePresence, m } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gouravkashiv@zohomail.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10">
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs mb-4"
        >
          <span className="font-semibold">06.</span>
          <span>Initiate Contact</span>
        </m.div>

        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-light mb-5 tracking-tight"
        >
          Let&apos;s Build Something{" "}
          <span className="text-accent">Lasting</span>.
        </m.h2>

        {/* Narrative */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Whether you&apos;re recruiting for a full-stack engineering position,
          looking to architect a new platform from concept through AWS
          production, or want to collaborate on AI-driven systems—I&apos;d love
          to connect.
        </m.p>

        {/* Primary Contact Cards Grid */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left"
        >
          {/* Email Card */}
          <div className="glass-card p-5 rounded-2xl border border-light/10 hover:border-accent/40 transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Mail size={18} />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-light/5 hover:bg-light/10 border border-light/10 text-gray hover:text-accent transition-colors flex items-center gap-1.5 font-mono text-[11px]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-light font-bold text-sm mb-1">
                Direct Email
              </h3>
              <p className="text-accent font-mono text-xs truncate">
                gouravkashiv@zohomail.in
              </p>
            </div>

            <a
              href="mailto:gouravkashiv@zohomail.in?subject=Engineering%20Opportunity%20-%20Gourav%20Kashiv"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-light/80 hover:text-accent transition-colors"
            >
              <span>Compose message</span>
              <Send size={12} />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="glass-card p-5 rounded-2xl border border-light/10 hover:border-accent/40 transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MessageCircle size={18} />
                </div>
                <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Instant response
                </span>
              </div>
              <h3 className="text-light font-bold text-sm mb-1">
                WhatsApp & Call
              </h3>
              <p className="text-gray font-mono text-xs">+91 94598 99052</p>
            </div>

            <a
              href="https://wa.me/919459899052?text=Hi%20Gourav,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-light/80 hover:text-emerald-400 transition-colors"
            >
              <span>Start WhatsApp chat</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </m.div>

        {/* Social Links Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs"
        >
          <a
            href="https://github.com/gouravkashiv7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-light/5 border border-light/10 text-gray hover:text-accent hover:border-accent/40 transition-colors inline-flex items-center gap-2"
          >
            <Github size={15} />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gouravkashiv7/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-light/5 border border-light/10 text-gray hover:text-accent hover:border-accent/40 transition-colors inline-flex items-center gap-2"
          >
            <Linkedin size={15} />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://x.com/KashivGourav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-light/5 border border-light/10 text-gray hover:text-accent hover:border-accent/40 transition-colors inline-flex items-center gap-2"
          >
            <X size={15} />
            <span>X (Twitter)</span>
          </a>
        </m.div>
      </div>

      {/* Copy Toast Alert */}
      <AnimatePresence>
        {copied && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-accent text-dark font-mono text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2"
          >
            <Check size={14} />
            <span>Email copied to clipboard: gouravkashiv@zohomail.in</span>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
