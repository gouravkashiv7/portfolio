"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

const links = ["About", "Education", "Projects", "Contact"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Set border visibility based on scroll position
      setIsScrolled(currentScrollY > 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll Spy for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" },
    );

    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // removed lastScrollY from dependency to prevent excessive re-renders!

  // Smooth scroll and handle click
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    e.preventDefault();
    setActiveLink(section);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", `#${section}`);

    // Smooth scroll to element
    const el = document.getElementById(section);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed header
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-dark/90 backdrop-blur-md py-6 px-8 flex justify-end text-light z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray/20 shadow-lg shadow-accent/5"
            : "border-b border-gray/5 shadow-md shadow-accent/2"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Desktop Navigation - unchanged from original */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => {
            const section = link.toLowerCase();
            const isActive = activeLink === section;

            return (
              <li key={link}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleScrollTo(e, section)}
                  className={`transition-colors font-mono text-sm flex items-center gap-1 ${
                    isActive ? "text-accent" : "text-light hover:text-accent"
                  }`}
                >
                  <span className="text-accent">0{i + 1}.</span>
                  <span>{link}</span>
                  <span className="text-gray">。</span>
                </a>
              </li>
            );
          })}
          <a
            href="/resume.pdf"
            className="ml-4 border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-dark font-mono text-sm transition-colors duration-300"
            aria-label="View Resume"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Menu Button - only shows on small screens */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-accent transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-accent transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-5 h-px bg-accent transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay - only shows on small screens */}
      <div
        className={`fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, i) => {
            const section = link.toLowerCase();
            const isActive = activeLink === section;

            return (
              <a
                key={link}
                href={`#${section}`}
                onClick={(e) => handleScrollTo(e, section)}
                className={`text-2xl font-mono transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-accent scale-110"
                    : "text-light hover:text-accent"
                }`}
              >
                <span className="text-accent">0{i + 1}.</span>
                <span>{link}</span>
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            className="mt-4 border-2 border-accent text-accent px-6 py-3 rounded text-lg font-mono hover:bg-accent hover:text-dark transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="View Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
