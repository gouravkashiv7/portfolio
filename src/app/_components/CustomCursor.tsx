"use client";
import { m } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device or user prefers reduced motion
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target?.closest?.(
        "a, button, .interactive, .cursor-view",
      );

      if (interactiveEl) {
        setIsHovering(true);
        if (interactiveEl.classList.contains("cursor-view")) {
          setCursorText("View");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseover", mouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <m.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-100 flex items-center justify-center overflow-hidden border border-accent/40 bg-accent/10 backdrop-blur-[1px]"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: cursorText ? 2.2 : isHovering ? 1.6 : 1,
        borderColor: isHovering
          ? "var(--color-accent)"
          : "rgba(100, 255, 218, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.3 }}
    >
      {cursorText && (
        <m.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent"
        >
          {cursorText}
        </m.span>
      )}
    </m.div>
  );
}
