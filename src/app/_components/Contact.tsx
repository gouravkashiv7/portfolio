"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center py-32 px-6">
      {/* Section heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-accent font-mono text-sm mb-4"
      >
        04. What’s Next?
      </motion.p>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-light mb-6"
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto"
      >
        I’m always open to discussing new projects or opportunities. Whether you
        have a question or just want to say hi, feel free to reach out — I’ll do
        my best to get back to you!
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="mailto:gouravkashiv3@gmail.com?subject=Hello Gourav!&body=Hi Gourav,%0D%0A%0D%0AI'd like to get in touch with you regarding..."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="inline-block border border-accent text-accent font-mono px-6 py-3 rounded hover:bg-accent hover:text-dark transition-all duration-300"
      >
        Say Hello
      </motion.a>

      {/* Contact Info */}
      <div className="mt-10 text-sm text-gray-400">
        <div className="flex justify-center items-center gap-2 text-light">
          <Phone size={16} className="text-accent" />
          <span className="font-mono">+91 94598 99052</span>
        </div>
      </div>
    </section>
  );
}
