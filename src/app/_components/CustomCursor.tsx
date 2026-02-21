"use client";
import { m } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    }

    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
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

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <m.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-100 flex items-center justify-center overflow-hidden"
      style={{
        mixBlendMode: cursorText ? "normal" : "difference",
      }}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: cursorText ? 2.5 : isHovering ? 2.5 : 1,
        backgroundColor: cursorText ? "#64ffda" : "#ffffff",
        color: "#0a192f",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {cursorText && (
        <m.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-mono font-bold uppercase tracking-wider"
        >
          {cursorText}
        </m.span>
      )}
    </m.div>
  );
}
