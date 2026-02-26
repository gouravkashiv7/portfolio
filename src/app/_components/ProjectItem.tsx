"use client";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ExternalLink,
  Github,
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

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[];
  projectLink: string;
  liveLink: string;
  featured?: boolean;
  reverse?: boolean;
}

const AUTOPLAY_INTERVAL = 4000;

export default function ProjectItem({
  title,
  description,
  tech,
  image,
  images,
  projectLink,
  liveLink,
  featured = false,
  reverse = false,
}: ProjectItemProps) {
  const allImages = images && images.length > 1 ? images : [image];
  const hasMultiple = allImages.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 3D Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
    setProgressKey((k) => k + 1);
  }, [allImages.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setProgressKey((k) => k + 1);
  }, [allImages.length]);

  // Auto-play (pause when fullscreen is open)
  useEffect(() => {
    if (!hasMultiple || isPaused || isFullscreen) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, isPaused, isFullscreen, goNext]);

  // Keyboard navigation for fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    // Prevent body scroll when fullscreen is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen, goNext, goPrev]);

  return (
    <>
      <m.div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-6 lg:gap-8 items-center`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Image Section */}
        {/* biome-ignore lint/a11y/noStaticElementInteractions: decorative tilt effect */}
        <div
          className="w-full lg:w-1/2 relative group perspective-1000"
          onMouseEnter={() => hasMultiple && setIsPaused(true)}
          onMouseLeave={() => {
            hasMultiple && setIsPaused(false);
            handleMouseLeave();
          }}
        >
          <m.div
            className="relative rounded-lg overflow-hidden aspect-14/10 transform-style-3d"
            style={{
              rotateX,
              rotateY,
              transition: "all 0.1s ease",
            }}
            onMouseMove={handleMouseMove}
          >
            {/* Image with AnimatePresence crossfade */}
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full cursor-view"
              aria-label={`View live site for ${title}`}
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={allImages[activeIndex]}
                    alt={`${title} - Screenshot ${activeIndex + 1}`}
                    width={700}
                    height={520}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="w-full h-full object-contain bg-dark cursor-pointer"
                  />
                </m.div>
              </AnimatePresence>
            </Link>

            {/* Overlay tint */}
            <div className="absolute inset-0 bg-light-bg/60 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none rounded-lg z-1" />

            {/* Edge glare effect */}
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />

            {/* Expand button — top-right corner, appears on hover */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsFullscreen(true);
              }}
              className="absolute top-2 right-2 z-5 w-9 h-9 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-dark/70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              aria-label="View fullscreen"
            >
              <Expand size={16} />
            </button>

            {/* Chevron Arrows — appear on hover */}
            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    goPrev();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-5 w-9 h-9 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    goNext();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-5 w-9 h-9 rounded-full bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Progress bar — thin accent line at bottom */}
            {hasMultiple && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-3">
                <m.div
                  key={progressKey}
                  className="h-full bg-accent/70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPaused ? undefined : 1 }}
                  transition={{
                    duration: AUTOPLAY_INTERVAL / 1000,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </m.div>

          {/* Navigation Dots — below the image */}
          {hasMultiple && (
            <div className="flex justify-center gap-2 mt-3">
              {allImages.map((_, i) => (
                <button
                  type="button"
                  key={`dot-${allImages[i]}`}
                  onClick={() => goToSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-6 bg-accent shadow-[0_0_8px_rgba(100,255,218,0.5)]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className={`w-full lg:w-1/2 ${
            reverse ? "lg:text-left" : "lg:text-right"
          } relative z-10 lg:-mx-16`}
        >
          {featured && (
            <p className="text-accent font-mono text-xs lg:text-sm mb-2">
              Featured Project
            </p>
          )}

          <h3 className="text-xl lg:text-2xl font-bold text-light mb-4">
            {title}
          </h3>

          <div
            className={`bg-light-bg p-4 lg:p-6 rounded-lg mb-4 lg:mb-6 text-left`}
          >
            <p className="text-gray leading-relaxed text-sm lg:text-base">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6 font-mono text-xs lg:text-sm text-gray ${
              reverse ? "justify-start" : "lg:justify-end justify-start"
            }`}
          >
            {tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {/* Links */}
          <div
            className={`flex gap-4 ${
              reverse ? "justify-start" : "lg:justify-end justify-start"
            }`}
          >
            <Link
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors duration-300 p-1 active:scale-95"
              aria-label={`View GitHub repository for ${title}`}
            >
              <Github size={18} className="lg:size-5" />
            </Link>
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors duration-300 p-1 active:scale-95"
              aria-label={`View live site for ${title}`}
            >
              <ExternalLink size={18} className="lg:size-5" />
            </Link>
          </div>
        </div>
      </m.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-xl cursor-auto"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              aria-label="Close fullscreen"
            >
              <X size={20} />
            </button>

            {/* Image counter */}
            {hasMultiple && (
              <div className="absolute top-7 left-6 text-gray/70 font-mono text-sm z-10">
                {activeIndex + 1} / {allImages.length}
              </div>
            )}

            {/* Fullscreen image */}
            <m.div
              className="relative w-[90vw] h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={allImages[activeIndex]}
                    alt={`${title} - Screenshot ${activeIndex + 1}`}
                    width={1920}
                    height={1080}
                    sizes="90vw"
                    className="max-w-full max-h-full object-contain rounded-lg"
                    priority
                  />
                </m.div>
              </AnimatePresence>

              {/* Fullscreen chevrons */}
              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light/70 hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </m.div>

            {/* Fullscreen dots */}
            {hasMultiple && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                {allImages.map((_, i) => (
                  <button
                    type="button"
                    key={`fs-dot-${allImages[i]}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex
                        ? "w-8 bg-accent shadow-[0_0_12px_rgba(100,255,218,0.6)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
