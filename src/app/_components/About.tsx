"use client";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  GitBranch,
  Globe2,
  Layout,
  MapPin,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import gourav from "../../../public/gourav.jpg";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const techStack = [
    { name: "MERN Stack", icon: <Code2 size={16} /> },
    { name: "Next.js & TS", icon: <Globe2 size={16} /> },
    { name: "AWS (S3, EC2)", icon: <Cpu size={16} /> },
    { name: "Route 53 & Lambda", icon: <Globe2 size={16} /> },
    { name: "Docker & CI/CD", icon: <Terminal size={16} /> },
    { name: "Prompt Engineering", icon: <Zap size={16} /> },
    { name: "Gen AI & LLMs", icon: <Sparkles size={16} /> },
    { name: "UI/UX & Framer", icon: <Layout size={16} /> },
    { name: "Git & Open Source", icon: <GitBranch size={16} /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-6xl mx-auto"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-8 md:mb-12 flex items-center">
            <span className="text-accent font-mono text-base md:text-lg mr-3 md:mr-4">
              01.
            </span>
            About Me
            <span className="ml-4 md:ml-6 h-px bg-gray grow max-w-20 md:max-w-60"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-auto"
        >
          {/* Main Text Card - Large */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-4 lg:col-span-4 glass-card p-8 md:p-10 flex flex-col justify-center group hover:border-accent/40 transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <Terminal size={120} />
            </div>

            <div className="space-y-6 text-gray/90 text-sm md:text-base leading-relaxed relative z-10">
              <p className="text-lg md:text-xl font-medium text-light mb-2">
                Hello! I'm Gourav, a passionate Full-Stack Engineer and MERN
                Specialist.
              </p>
              <p>
                I love building responsive, user-friendly applications and have
                a strong background in DevOps, ensuring seamless deployments and
                scalable cloud infrastructure. I'm passionate about my work and
                known for my speed and efficiency in turning ideas into
                production-ready software.
              </p>
              <p>
                I specialize in the{" "}
                <span className="text-accent font-medium">
                  MERN Stack, Next.js, and DevOps
                </span>
                , with deep expertise in{" "}
                <span className="text-accent font-medium">
                  AWS EC2, Docker, CI/CD, and Serverless computing
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Profile Image Card - Tall */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-card p-2 relative overflow-hidden group min-h-75 md:min-h-full"
          >
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-overlay"></div>
            <Image
              src={gourav}
              fill
              alt="Gourav Kashiv"
              className="object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </motion.div>

          {/* Location & Status Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-4 lg:col-span-4 glass-card p-6 flex flex-col justify-center items-center text-center group hover:border-accent/40 hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 text-accent mb-4 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-500 relative z-10">
              <MapPin size={24} />
            </div>
            <h3 className="text-light font-bold mb-1 relative z-10">
              Chandigarh, IN
            </h3>
            <p className="text-gray text-xs font-mono mb-4 relative z-10">
              Panjab University
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 relative z-10 shadow-[0_0_10px_rgba(100,255,218,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Open to work
            </div>
          </motion.div>

          {/* Tech Marquee Card - Wide */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-4 lg:col-span-6 glass-card p-6 flex flex-col justify-center group hover:border-accent/40 transition-colors duration-500 overflow-hidden relative"
          >
            <h3 className="text-light text-sm font-bold mb-4 flex items-center gap-2 opacity-80 uppercase tracking-wider font-mono">
              <Cpu size={16} className="text-accent" />
              Technical Arsenal
            </h3>

            {/* Gradient masks for smooth fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-dark/90 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-dark/90 to-transparent z-10"></div>

            {/* Infinite Marquee Container */}
            <div className="flex overflow-hidden relative">
              <motion.div
                className="flex gap-4 whitespace-nowrap min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20, // Adjust speed here
                }}
              >
                {/* Double the array for seamless looping */}
                {[...techStack, ...techStack].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full font-mono text-xs md:text-sm text-gray hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-colors duration-300 cursor-default"
                  >
                    <span className="text-accent">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
