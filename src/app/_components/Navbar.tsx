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
        className={`fixed top-0 w-full bg-dark/90 backdrop-blur-md py-6 px-8 flex justify-end text-light z-60 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray/20 shadow-lg shadow-accent/5"
            : "border-b border-gray/5 shadow-md shadow-accent/2"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Desktop Navigation */}
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
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-dark font-mono text-sm transition-colors duration-300"
            aria-label="View Resume"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Menu Button  */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 justify-center items-center z-70 relative w-8 h-8 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "rotate-45 translate-y-2 opacity-80"
                : "group-hover:opacity-80"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-0"
                : "group-hover:opacity-80 group-hover:w-5"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "-rotate-45 -translate-y-2 opacity-80"
                : "group-hover:opacity-80"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay - CSS Transitions only */}
      <div
        className={`fixed inset-0  bg-dark/95 backdrop-blur-xl z-50 md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto shadow-2xl shadow-accent/10 delay-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full gap-8">
          {links.map((link, i) => {
            const section = link.toLowerCase();
            const isActive = activeLink === section;

            // Stagger animation delays for each link
            const delay = (i + 1) * 75;

            return (
              <a
                key={link}
                href={`#${section}`}
                onClick={(e) => handleScrollTo(e, section)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${delay}ms` : "0ms",
                  transitionProperty: "opacity, transform",
                }}
                className={`text-4xl font-mono flex items-center gap-4 transition-all duration-300 p-2 hover:scale-110 ease-out ${
                  isActive
                    ? "text-accent translate-x-2"
                    : "text-light hover:text-accent hover:translate-x-2"
                } ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="text-sm text-accent opacity-70">
                  0{i + 1}.
                </span>
                <span>{link}</span>
              </a>
            );
          })}

          <div
            className={`mt-4 relative group transition-all duration-500 ease-out ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${(links.length + 1) * 75}ms`
                : "0ms",
            }}
          >
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-lg group-hover:bg-accent/40 transition-colors duration-300"></div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block border border-accent/50 text-accent px-10 py-4 rounded-lg text-xl font-mono bg-dark/50 hover:bg-accent hover:text-dark hover:border-accent transition-all duration-300 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="View Resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
