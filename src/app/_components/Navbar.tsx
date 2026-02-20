"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, motion, type Variants } from "framer-motion";
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

  const menuVariants: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants: Variants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
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

        {/* Mobile Menu Button - Framer Motion */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 justify-center items-center z-70 relative w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-accent block transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-accent block transition-colors"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-accent block transition-colors"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-dark z-50 md:hidden origin-top flex flex-col justify-center items-center backdrop-blur-xl bg-opacity-95"
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-8 overflow-hidden h-full justify-center w-full"
            >
              {links.map((link, i) => {
                const section = link.toLowerCase();
                const isActive = activeLink === section;

                return (
                  <div key={link} className="overflow-hidden">
                    <motion.a
                      variants={linkVariants}
                      href={`#${section}`}
                      onClick={(e) => handleScrollTo(e, section)}
                      className={`text-4xl font-mono flex items-center gap-4 transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-light hover:text-accent"
                      }`}
                    >
                      <span className="text-sm text-accent">0{i + 1}.</span>
                      <span>{link}</span>
                    </motion.a>
                  </div>
                );
              })}
              <div className="overflow-hidden mt-8">
                <motion.a
                  variants={linkVariants}
                  href="/resume.pdf"
                  className="border border-accent text-accent px-8 py-4 rounded text-xl font-mono hover:bg-accent hover:text-dark transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="View Resume"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
