"use client";
import { motion } from "framer-motion";
import gourav from "../../../public/gourav.jpg";
import Image from "next/image";
import {
  Terminal,
  Code2,
  Cpu,
  Globe2,
  MapPin,
  Database,
  Zap,
  Layout,
  GitBranch,
  Sparkles,
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-5xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
        >
          {/* Main Text Card - Takes up 2 columns */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center group hover:border-accent/30 transition-colors duration-500"
          >
            <div className="space-y-6 text-gray/90 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I'm Gourav, a passionate DevOps Developer specializing in
                scalable cloud infrastructure and deployment automation. My
                journey in tech started with robust software development and
                evolved into a love for designing resilient, secure, and highly
                available systems.
              </p>
              <p>
                I specialize in modern{" "}
                <span className="text-accent font-medium">
                  Cloud Architecture
                </span>
                , with expertise in{" "}
                <span className="text-accent font-medium">
                  AWS, Docker, CI/CD, and Serverless computing
                </span>
                . I'm passionate about automating operations and delivering
                efficient systems. I am currently open to new projects!
              </p>
            </div>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-2 relative overflow-hidden group min-h-75 md:min-h-0"
          >
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-overlay"></div>
            <Image
              src={gourav}
              alt="Gourav Kashiv"
              fill
              className="object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Technical Arsenal Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 glass-card p-8 group hover:border-accent/30 transition-colors duration-500"
          >
            <h3 className="text-light text-lg font-bold mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-accent" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 font-mono text-xs md:text-sm text-gray">
              <div className="flex items-center gap-2">
                <Code2 size={14} className="text-accent" /> MERN Stack
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={14} className="text-accent" /> Next.js & TS
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-accent" /> AWS (S3, EC2)
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={14} className="text-accent" /> Route 53 & Lambda
              </div>
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent" /> Docker & CI/CD
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-accent" /> Prompt Engineering
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-accent" /> Gen AI & LLMs
              </div>
              <div className="flex items-center gap-2">
                <Layout size={14} className="text-accent" /> UI/UX & Framer
                Motion
              </div>
              <div className="flex items-center gap-2">
                <GitBranch size={14} className="text-accent" /> Git & Open
                Source
              </div>
            </div>
          </motion.div>

          {/* Location & Status Card */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8 flex flex-col justify-center items-center text-center group hover:border-accent/30 hover:bg-white/5 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 text-accent mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
              <MapPin size={24} />
            </div>
            <h3 className="text-light font-bold mb-1 border-b border-accent/30 pb-1 inline-block">
              Chandigarh, IN
            </h3>
            <p className="text-gray text-xs font-mono mb-4 border-t border-accent/20 pt-2 border-dashed">
              Panjab University
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Open to work
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
