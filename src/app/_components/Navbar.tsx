"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const links = ["About", "Education", "Projects", "Contact"];
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }

      // Set border visibility based on scroll position
      setIsScrolled(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-dark/90 backdrop-blur-md py-6 px-8 flex justify-end text-light z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray/20 shadow-lg shadow-accent/5"
          : "border-b border-gray/5 shadow-md shadow-accent/2"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <ul className="flex gap-8 items-center">
        {links.map((link, i) => {
          const section = link.toLowerCase();
          const isActive = activeLink === section;

          return (
            <li key={i}>
              <Link
                href={`#${section}`}
                onClick={() => setActiveLink(section)}
                className={`transition-colors font-mono text-sm flex items-center gap-1 ${
                  isActive ? "text-accent" : "text-light hover:text-accent"
                }`}
              >
                <span className="text-accent">0{i + 1}.</span>
                <span>{link}</span>
                <span className="text-gray">。</span>
              </Link>
            </li>
          );
        })}
        <a
          href="/resume.pdf"
          className="ml-4 border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-dark font-mono text-sm transition-colors duration-300"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
}
