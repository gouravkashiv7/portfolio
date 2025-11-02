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
      } gap-8 items-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image Section - More height */}
      <div className="lg:w-1/2 relative group">
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
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
          </Link>
          <div className="absolute inset-0 bg-[#112240]/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Content Section - Overlapping with higher z-index */}
      <div
        className={`lg:w-1/2 ${
          reverse ? "lg:text-left" : "lg:text-right"
        } relative z-10 lg:-mx-16`}
      >
        {featured && (
          <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
        )}

        <h3 className="text-2xl font-bold text-light mb-4">{title}</h3>

        <div
          className={`bg-[#112240] p-6 rounded-lg mb-6 ${
            reverse ? "lg:text-left" : "lg:text-left"
          }`}
        >
          <p className="text-gray leading-relaxed">{description}</p>
        </div>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap gap-3 mb-6 font-mono text-sm text-gray ${
            reverse ? "justify-start" : "lg:justify-end"
          }`}
        >
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        {/* Links */}
        <div
          className={`flex gap-4 ${
            reverse ? "justify-start" : "lg:justify-end"
          }`}
        >
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-accent transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
