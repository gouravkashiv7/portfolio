"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  projectLink: string;
  liveLink: string;
  featured?: boolean;
  reverse?: boolean;
}

export default function ProjectItem({
  title,
  description,
  tech,
  image,
  projectLink,
  liveLink,
  featured = false,
  reverse = false,
}: ProjectItemProps) {
  // 3D Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to center of element (range -0.5 to 0.5)
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

  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-6 lg:gap-8 items-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative group perspective-1000">
        <motion.div
          className="relative rounded-lg overflow-hidden aspect-14/10 transform-style-3d"
          style={{
            rotateX,
            rotateY,
            transition: "all 0.1s ease", // Smooth out rapid tiny movements
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              width={700}
              height={520}
              className="w-full h-full object-cover cursor-pointer"
            />
          </Link>
          <div className="absolute inset-0 bg-light-bg/60 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none rounded-lg" />

          {/* Edge glare effect */}
          <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
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
          >
            <Github size={18} className="lg:size-5" />
          </Link>
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors duration-300 p-1 active:scale-95"
          >
            <ExternalLink size={18} className="lg:size-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
