"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const lenis = useLenis();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

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
      { rootMargin: "-25% 0px -65% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll and handle click
  const handleScrollTo = (
    first: string | React.MouseEvent,
    second?: string | React.MouseEvent,
  ) => {
    let sectionId = "";
    if (typeof first === "string") {
      sectionId = first;
      if (second && typeof second !== "string") {
        second.preventDefault();
      }
    } else {
      first.preventDefault();
      if (typeof second === "string") {
        sectionId = second;
      }
    }
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", `#${sectionId}`);

    const el = document.getElementById(sectionId);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -70 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-60 w-full flex justify-center pointer-events-none mt-4 md:mt-6 px-4">
        <nav
          aria-label="Primary navigation"
          className={`pointer-events-auto bg-dark/85 backdrop-blur-xl py-2 px-3 md:px-5 rounded-full flex items-center shadow-[0_8px_32px_0_rgba(13,148,136,0.12)] dark:shadow-[0_8px_32px_0_rgba(100,255,218,0.06)] border border-light/10 transition-all duration-500 ease-out ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {/* Brand mark */}
          <button
            type="button"
            onClick={() => handleScrollTo("home")}
            className="hidden lg:flex items-center gap-1.5 mr-3 font-mono font-bold text-accent text-sm tracking-tight px-2 py-1 rounded hover:bg-accent/10 transition-colors cursor-pointer"
            aria-label="Gourav Kashiv - Back to top"
          >
            <span>GK</span>
            <span className="text-light/40">/</span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center relative gap-0.5">
            {navItems.map((item) => {
              const isActive = activeLink === item.id;
              const isHovered = hoveredLink === item.id;

              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(item.id)}
                  onMouseLeave={() => setHoveredLink("")}
                >
                  {/* Sliding Active/Hover Indicator */}
                  {isActive && (
                    <m.div
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 bg-accent/15 border border-accent/30 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  {isHovered && !isActive && (
                    <m.div
                      layoutId="navbar-hover-indicator"
                      className="absolute inset-0 bg-light/5 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(item.id, e)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative z-10 block px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-light/75 hover:text-light"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            <li className="ml-2 pl-2 border-l border-light/10 flex items-center gap-2">
              <MagneticButton className="relative block">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-accent/40 bg-accent/5 text-accent px-3.5 py-1.5 rounded-full hover:bg-accent hover:text-dark font-mono text-xs font-medium transition-all duration-300"
                  aria-label="Open résumé PDF in a new tab"
                >
                  Résumé
                </a>
              </MagneticButton>
            </li>
          </ul>

          {/* Mobile Header Bar */}
          <div className="md:hidden flex items-center justify-between w-full min-w-70 px-2 py-1">
            <button
              type="button"
              onClick={() => handleScrollTo("home")}
              className="text-light font-bold tracking-tight text-base pl-2 flex items-center gap-1.5 cursor-pointer"
              aria-label="Gourav Kashiv - Back to top"
            >
              <span className="text-accent font-mono">GK</span>
              <span className="text-light/60 text-xs font-normal">
                Portfolio
              </span>
            </button>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent border border-accent/40 text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/5"
              >
                Résumé
              </a>
              <button
                type="button"
                className="flex flex-col gap-1.5 justify-center items-center z-70 relative w-9 h-9 group rounded-full bg-light/5 border border-light/10 hover:bg-light/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span
                  className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2 opacity-90"
                      : "group-hover:opacity-80"
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "group-hover:opacity-80"
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-accent block transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2 opacity-90"
                      : "group-hover:opacity-80"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/95 z-50 md:hidden flex flex-col justify-between p-6 pt-28 shadow-2xl"
          >
            <m.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
                hidden: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col gap-3 w-full max-w-sm mx-auto"
            >
              {navItems.map((item, idx) => {
                const isActive = activeLink === item.id;

                return (
                  <m.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(item.id, e)}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={`text-2xl font-semibold flex items-center justify-between p-3 rounded-xl transition-all duration-200 border ${
                      isActive
                        ? "text-accent bg-accent/10 border-accent/30 font-bold"
                        : "text-light/80 border-transparent hover:bg-light/5 hover:text-accent"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent/60">
                        0{idx + 1}.
                      </span>
                      <span>{item.label}</span>
                    </span>
                    {isActive && (
                      <span className="text-accent text-sm font-mono">●</span>
                    )}
                  </m.a>
                );
              })}
            </m.div>

            <div className="w-full max-w-sm mx-auto flex flex-col gap-3 pb-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-accent/50 text-accent py-3.5 rounded-xl font-mono text-sm bg-accent/10 hover:bg-accent hover:text-dark transition-all duration-300 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Résumé (PDF)
              </a>
              <div className="text-center font-mono text-xs text-gray pt-2">
                gouravkashiv@zohomail.in
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
