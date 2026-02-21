"use client";

import { m } from "framer-motion";
import { Github, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto text-center py-20 md:py-32 px-6 relative"
    >
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <m.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 blur-[80px] rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10">
        {/* Section heading */}
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent font-mono text-sm mb-4"
        >
          04. What's Next?
        </m.p>

        {/* Title */}
        <m.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-light mb-6"
        >
          Get In Touch
        </m.h2>

        {/* Description */}
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-base"
        >
          I'm always open to discussing new projects or opportunities. Whether
          you have a question or just want to say hi, feel free to reach out —
          I'll do my best to get back to you!
        </m.p>

        {/* Contact Button */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact" className="inline-block">
            <MagneticButton className="border border-accent text-accent font-mono px-8 py-4 rounded transition-all duration-300 text-sm md:text-base relative overflow-hidden group hover:border-transparent">
              <span className="relative z-10 group-hover:text-dark transition-colors duration-300">
                Say Hello
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </MagneticButton>
          </Link>
        </m.div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-10 text-sm text-gray-400">
          <div className="flex justify-center items-center gap-2 text-light">
            <Phone size={16} className="text-accent" />
            <span className="font-mono">+91 94598 99052</span>
          </div>
        </div>

        {/* Social Links - Only visible on mobile */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden mt-12 flex justify-center items-center gap-6"
        >
          <Link
            href="https://github.com/gouravkashiv7"
            target="_blank"
            className="text-accent p-2 rounded-full transition-all duration-300 hover:bg-accent/10 active:bg-accent/20 active:scale-95"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gourav-kashiv-7203572b2/"
            target="_blank"
            className="text-accent p-2 rounded-full transition-all duration-300 hover:bg-accent/10 active:bg-accent/20 active:scale-95"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/_viva_la_vida_______/"
            target="_blank"
            className="text-accent p-2 rounded-full transition-all duration-300 hover:bg-accent/10 active:bg-accent/20 active:scale-95"
          >
            <Instagram size={24} />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
