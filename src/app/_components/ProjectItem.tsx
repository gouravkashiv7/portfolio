"use client";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  type MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ProjectItemProps {
  title: string;
  subtitle?: string;
  category?: string;
  projectRole?: string;
  impact?: string;
  description: string;
  highlights?: string[];
  tech: string[];
  image: string;
  images?: string[];
  projectLink: string;
  liveLink: string;
  featured?: boolean;
  reverse?: boolean;
  priority?: boolean;
}

const AUTOPLAY_INTERVAL = 4500;

export default function ProjectItem({
  title,
  subtitle,
  category = "Production System",
  projectRole,
  impact,
  description,
  highlights = [],
  tech,
  image,
  images,
  projectLink,
  liveLink,
  featured = true,
  reverse = false,
  priority = false,
}: ProjectItemProps) {
  const allImages = images && images.length > 0 ? images : [image];
  const hasMultiple = allImages.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3D subtle tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsPaused(false);
  };

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // Autoplay cycle
  useEffect(() => {
    if (!hasMultiple || isPaused || isFullscreen || !isInView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [hasMultiple, isPaused, isFullscreen, isInView, allImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, goNext, goPrev]);

  const isGitHubLink = projectLink.includes("github.com");

  return (
    <>
      <m.article
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="w-full bg-light/2 border border-light/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500 shadow-xl"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-accent/10 transition-colors duration-700" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase (Screenshots) */}
          <div
            className={`w-full lg:col-span-7 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <section
              aria-label={`${title} screenshot showcase`}
              className="relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-light/15 bg-dark/60 shadow-2xl transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
              }}
            >
              {/* Browser-style Top Bar */}
              <div className="px-4 py-2.5 bg-dark/80 border-b border-light/10 flex items-center justify-between text-xs font-mono text-gray">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  <span className="ml-2 text-light/50 text-[11px] truncate max-w-50 sm:max-w-none">
                    {liveLink.replace("https://", "")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {hasMultiple && (
                    <span className="text-[11px] text-accent/80 font-mono">
                      {activeIndex + 1} / {allImages.length}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsFullscreen(true)}
                    className="p-1 rounded hover:bg-light/10 text-gray hover:text-accent transition-colors"
                    aria-label={`View fullscreen screenshot of ${title}`}
                  >
                    <Expand size={14} />
                  </button>
                </div>
              </div>

              {/* Image Preview Container */}
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="relative aspect-16/10 w-full block overflow-hidden bg-black/40 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label={`Open fullscreen view of ${title} screenshot`}
              >
                <m.div
                  style={{ rotateX, rotateY }}
                  className="w-full h-full relative"
                >
                  <AnimatePresence mode="wait">
                    <m.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={allImages[activeIndex]}
                        alt={`${title} - Preview ${activeIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                        priority={priority}
                      />
                    </m.div>
                  </AnimatePresence>

                  {/* Left/Right Chevrons */}
                  {hasMultiple && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goPrev();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-md border border-light/20 flex items-center justify-center text-light/80 hover:text-accent hover:border-accent transition-all opacity-80 hover:opacity-100 z-10"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          goNext();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-md border border-light/20 flex items-center justify-center text-light/80 hover:text-accent hover:border-accent transition-all opacity-80 hover:opacity-100 z-10"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </m.div>
              </button>

              {/* Thumbnails row */}
              {hasMultiple && (
                <div className="p-2.5 bg-dark/90 border-t border-light/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  {allImages.map((img, i) => (
                    <button
                      key={`thumb-${img}`}
                      type="button"
                      onClick={() => goToSlide(i)}
                      className={`relative w-14 h-9 rounded overflow-hidden shrink-0 border transition-all ${
                        i === activeIndex
                          ? "border-accent ring-1 ring-accent/40"
                          : "border-light/20 opacity-50 hover:opacity-80"
                      }`}
                      aria-label={`Switch to screenshot ${i + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Detailed Engineering Case Study Breakdown */}
          <div
            className={`w-full lg:col-span-5 flex flex-col justify-between ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div>
              {/* Category & Scope badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                  {category}
                </span>
                {featured && (
                  <span className="font-mono text-xs font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Flagship
                  </span>
                )}
                {projectRole && (
                  <span className="font-mono text-xs text-gray px-2.5 py-0.5 rounded-full bg-light/5 border border-light/10">
                    {projectRole}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl md:text-3xl font-bold text-light mb-1 tracking-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-gray text-xs md:text-sm font-medium mb-4">
                  {subtitle}
                </p>
              )}

              {/* Impact Callout */}
              {impact && (
                <div className="my-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                  <Sparkles size={14} className="shrink-0" />
                  <span>{impact}</span>
                </div>
              )}

              {/* Problem & Architectural Solution */}
              <p className="text-gray text-sm md:text-base leading-relaxed my-4">
                {description}
              </p>

              {/* Engineering Highlights */}
              {highlights.length > 0 && (
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-light/70 font-semibold mb-2 flex items-center gap-1.5">
                    <Layers size={13} className="text-accent" />
                    <span>Engineering Decisions & Scope</span>
                  </div>
                  <ul className="space-y-2">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-gray"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 font-mono text-xs text-gray">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-light/5 border border-light/10 text-light/80 hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-light/10">
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-dark font-mono text-xs font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/10"
                aria-label={`Visit live website for ${title}`}
              >
                <span>Live System</span>
                <ExternalLink size={13} />
              </Link>

              {isGitHubLink && (
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-light/5 border border-light/15 text-light hover:text-accent hover:border-accent/40 font-mono text-xs transition-colors"
                  aria-label={`View GitHub source code for ${title}`}
                >
                  <Github size={14} />
                  <span>Repository</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </m.article>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-dark/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsFullscreen(false);
            }}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between z-10 pointer-events-auto">
              <div className="flex items-center gap-3 font-mono text-xs text-light">
                <span className="font-bold text-accent">{title}</span>
                <span className="text-gray">
                  ({activeIndex + 1} of {allImages.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="w-10 h-10 rounded-full bg-light/10 hover:bg-accent hover:text-dark border border-light/20 flex items-center justify-center text-light transition-all cursor-pointer"
                aria-label="Close fullscreen view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Active Image */}
            <div className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center">
              <Image
                src={allImages[activeIndex]}
                alt={`${title} - High resolution view ${activeIndex + 1}`}
                fill
                sizes="95vw"
                className="object-contain rounded-lg"
                priority
              />

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-md border border-light/20 flex items-center justify-center text-light hover:text-accent hover:border-accent transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-md border border-light/20 flex items-center justify-center text-light hover:text-accent hover:border-accent transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
