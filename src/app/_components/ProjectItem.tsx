"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative rounded-lg overflow-hidden aspect-14/10">
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
              className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105 cursor-pointer active:scale-105"
            />
          </Link>
          <div className="absolute inset-0 bg-light-bg/60 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>
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
