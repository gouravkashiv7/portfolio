"use client";
import { motion } from "framer-motion";

export default function EmailLink() {
  return (
    <div className="fixed right-8 bottom-0 flex flex-col items-center gap-6">
      <motion.a
        href="mailto:gouravkashiv@zohomail.in"
        className="text-gray hover:text-accent transition-colors duration-300 font-mono text-sm writing-mode-vertical rotate-360"
        style={{ writingMode: "vertical-rl" }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        gouravkashiv@zohomail.in
      </motion.a>
      <div className="w-px h-24 bg-gray mt-4"></div>
    </div>
  );
}
