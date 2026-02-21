"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const links = ["About", "Education", "Projects", "Contact"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
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
      <div className="fixed top-0 inset-x-0 z-60 w-full flex justify-center pointer-events-none mt-6 px-4">
        <nav
          className={`pointer-events-auto bg-dark/80 backdrop-blur-xl py-2 px-4 rounded-full flex items-center shadow-[0_8px_32px_0_rgba(100,255,218,0.05)] border border-white/5 transition-all duration-500 ease-out ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center relative gap-1">
            {links.map((link) => {
              const section = link.toLowerCase();
              const isActive = activeLink === section;
              const isHovered = hoveredLink === section;

              return (
                <li
                  key={link}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(section)}
                  onMouseLeave={() => setHoveredLink("")}
                >
                  {/* Sliding Active/Hover Indicator */}
                  {isActive && (
                    <m.div
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 bg-accent/10 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {isHovered && !isActive && (
                    <m.div
                      layoutId="navbar-hover-indicator"
                      className="absolute inset-0 bg-white/5 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScrollTo(e, section)}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-light/70 hover:text-light"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              );
            })}

            <li className="ml-2 pl-2 border-l border-white/10 hidden md:block">
              <MagneticButton className="relative block">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-accent/20 text-accent px-4 py-1.5 rounded-full hover:bg-accent hover:text-dark font-mono text-sm transition-all duration-300 ml-1"
                  aria-label="View Resume"
                >
                  Resume
                </a>
              </MagneticButton>
            </li>
          </ul>

          {/* Mobile Menu Button  */}
          <div className="md:hidden flex items-center justify-between w-full min-w-50 px-2">
            <span className="text-light font-bold tracking-tight text-lg pl-2">
              GK
            </span>
            <button
              type="button"
              className="flex flex-col gap-1.5 justify-center items-center z-70 relative w-10 h-10 group rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 opacity-80"
                    : "group-hover:opacity-80"
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : "group-hover:opacity-80 group-hover:w-3"
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 opacity-80"
                    : "group-hover:opacity-80"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Powered by Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { delay: 0.2, duration: 0.3 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-50 md:hidden flex flex-col items-center justify-center p-4 shadow-2xl shadow-accent/10"
          >
            <m.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
                hidden: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
              className="flex flex-col items-center justify-center h-full w-full gap-8"
            >
              {links.map((link) => {
                const section = link.toLowerCase();
                const isActive = activeLink === section;

                return (
                  <m.a
                    key={link}
                    href={`#${section}`}
                    onClick={(e) => handleScrollTo(e, section)}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      },
                    }}
                    className={`text-4xl font-medium flex items-center justify-center transition-colors duration-300 p-2 ${
                      isActive
                        ? "text-accent"
                        : "text-light/70 hover:text-white"
                    }`}
                  >
                    <span>{link}</span>
                  </m.a>
                );
              })}

              <m.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                className="mt-4 relative group"
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
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
