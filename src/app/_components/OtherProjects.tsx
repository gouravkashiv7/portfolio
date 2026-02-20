"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Folder,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  projectLink: string;
  liveLink: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const OtherProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const otherProjects: Project[] = [
    {
      title: "GoGlobe",
      description:
        "A modern travel tracking app built with React, React Router, and Context API. Users can mark visited cities, add notes, and visualize their journeys on an interactive world map.",
      tech: [
        "React",
        "Vite",
        "React Router",
        "Context API",
        "Styled Components",
      ],
      projectLink: "https://github.com/gouravkashiv7/goGlobe",
      liveLink: "https://go-globe-sepia.vercel.app",
    },
    {
      title: "StarFlicks",
      description:
        "A movie discovery and rating app powered by the OMDb API. Built with React using useEffect, useState, and useRef for fetching, managing, and displaying film data seamlessly.",
      tech: ["React", "OMDb API", "JavaScript", "CSS"],
      projectLink: "https://github.com/gouravkashiv7/StarFlicks",
      liveLink: "https://star-flicks-one.vercel.app",
    },
    {
      title: "Travel List",
      description:
        "A simple React app for organizing travel packing lists. Demonstrates key React concepts like state management, conditional rendering, and component composition.",
      tech: ["React", "CSS", "JavaScript"],
      projectLink: "https://github.com/gouravkashiv7/travel-list",
      liveLink: "https://travel-list-nine-tau.vercel.app",
    },
    {
      title: "Eat N Split",
      description:
        "A clean React app that helps users split bills among friends. Focuses on controlled components and state management for a smooth and intuitive experience.",
      tech: ["React", "JavaScript", "CSS"],
      projectLink: "https://github.com/gouravkashiv7/eat-n-split",
      liveLink: "https://eat-n-split-three-tan.vercel.app",
    },
    {
      title: "IDACPS",
      description:
        "Intrusion Detection and Crop Protection System using image processing techniques like Haar Cascades. Focused on applying computer vision for smart agriculture.",
      tech: ["Python", "OpenCV", "Image Processing"],
      projectLink: "https://github.com/gouravkashiv7/IDACPS",
      liveLink: "#",
    },
  ];

  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-32"
    >
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-2xl font-bold text-light">
          Other Noteworthy Projects
        </h3>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {otherProjects.length > 3 && (
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-accent font-mono text-sm border border-accent px-6 py-3 rounded hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More
                <ChevronDown size={16} />
              </>
            )}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

// Separate ProjectCard component for better organization
const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass-card p-6 border border-gray-800/50 hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2 group h-full flex flex-col"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-accent">
        <Folder size={24} />
      </div>
      <div className="flex space-x-4">
        <a
          href={project.projectLink}
          className="text-gray-400 hover:text-accent transition-colors"
          aria-label="GitHub Repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </a>
        <a
          href={project.liveLink}
          className="text-gray-400 hover:text-accent transition-colors"
          aria-label="Live Demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>

    <h4 className="text-lg font-semibold text-light mb-3 group-hover:text-accent transition-colors grow-0">
      {project.title}
    </h4>

    <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((tech, techIndex) => (
        <span key={techIndex} className="text-xs text-gray-400 font-mono">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default OtherProjects;
