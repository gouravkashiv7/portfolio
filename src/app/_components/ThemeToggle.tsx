"use client";

import { AnimatePresence, m } from "framer-motion";
import { Heart, Moon, Sparkles, Sun, TreeDeciduous } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { id: "light", icon: Sun },
  { id: "dark", icon: Moon },
  { id: "midnight", icon: Sparkles },
  { id: "rose", icon: Heart },
  { id: "forest", icon: TreeDeciduous },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id);
  };

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <m.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={cycleTheme}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-dark bg-opacity-80 text-accent shadow-lg backdrop-blur-md border border-light/20 transition-all duration-300 hover:shadow-accent/20 cursor-none"
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={24} />
        </m.div>
      </AnimatePresence>
    </m.button>
  );
}
