"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  School,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the central line based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const educationData = [
    {
      level: "M.Tech in CSE",
      institute: "Panjab University, Chandigarh",
      duration: "2023 – 2025",
      icon: <GraduationCap size={24} className="text-accent" />,
      details: [
        "Completed advanced studies in computer science",
        "Research focus on Large Language Models and generative AI",
        "Published research paper on text-to-video generative models",
        "Exploring cutting-edge AI technologies and their applications",
      ],
    },
    {
      level: "B.E. in CSE",
      institute: "Chitkara University, Rajpura",
      duration: "2018 – 2022",
      icon: <Award size={24} className="text-accent" />,
      details: [
        "Graduated with distinction (CGPA: 9.58/10) focusing on software engineering principles",
        "Built multiple scalable cloud projects using AWS, Node.js, and CI/CD pipelines",
        "Achieved Quarter-finalist in Smart India Hackathon with IoT-based agricultural monitoring system",
        "Secured Semi-finalist position in IICDC for the same project featuring image processing capabilities",
        "Guided team to runners-up position in Octahacks hackathon",
      ],
    },
    {
      level: "Secondary Education",
      institute: "St. Mary's Senior Secondary School, Kasauli",
      duration: "2016 – 2018",
      icon: <BookOpen size={24} className="text-accent" />,
      details: [
        "Specialized in Physics, Chemistry, and Mathematics (PCM)",
        "Achieved 82.2% in CBSE Board examinations",
        "Secured 2nd position in district-level Mathematics Olympiad",
        "Demonstrated strong analytical and problem-solving abilities",
      ],
    },
    {
      level: "Primary Education",
      institute: "St. Mary's Senior Secondary School, Kasauli",
      duration: "2008 – 2016",
      icon: <School size={24} className="text-accent" />,
      details: [
        "Completed foundational education with outstanding academic performance (CGPA: 9.8/10)",
        "Actively participated in inter-school competitions and cultural events",
        "Developed strong foundational knowledge and extracurricular skills",
      ],
    },
  ];

  const displayedEducation = isExpanded
    ? educationData
    : educationData.slice(0, 2);

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-16 md:py-20 max-w-5xl mx-auto"
      ref={containerRef}
    >
      <div className="w-full">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-light mb-10 md:mb-16 flex items-center"
        >
          <span className="text-accent font-mono text-base md:text-lg mr-3 md:mr-4">
            02.
          </span>
          Education
          <span className="ml-4 md:ml-6 h-px bg-gray grow max-w-20 md:max-w-60"></span>
        </motion.h2>

        <div className="relative w-full">
          {/* Vertical Timeline Background Line */}
          <div className="absolute left-5 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 z-0" />

          {/* Vertical Timeline Animated Line */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-accent/80 to-accent/20 -translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(100,255,218,0.5)]"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-8 md:gap-12 w-full">
            <AnimatePresence>
              {displayedEducation.map((edu, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={edu.duration}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col md:flex-row items-center w-full ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Glowing Node on Timeline */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute left-5 md:left-1/2 w-10 h-10 rounded-full bg-dark border-2 border-accent text-accent flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(100,255,218,0.6)] hover:bg-accent/10 cursor-default"
                    >
                      {edu.icon}
                    </motion.div>

                    {/* Content Card */}
                    <div
                      className={`w-full pl-15 md:pl-0 md:w-[45%] ${
                        isEven ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.6,
                          type: "spring",
                          stiffness: 70,
                          damping: 15,
                        }}
                        className="glass-card p-5 md:p-6 rounded-xl relative overflow-hidden group hover:border-accent/40 transition-colors duration-500"
                      >
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-light mb-1">
                            {edu.level}
                          </h3>
                          <p className="text-accent text-sm md:text-base font-medium mb-3">
                            {edu.institute}
                          </p>

                          <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
                            <p className="text-gray text-xs font-mono">
                              {edu.duration}
                            </p>
                          </div>

                          <ul className="space-y-2 md:space-y-3">
                            {edu.details.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-3 text-gray text-xs md:text-sm"
                              >
                                <span className="text-accent mt-0.5 shrink-0 opacity-70">
                                  ▹
                                </span>
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Toggle Expand Button */}
        <div className="mt-12 flex justify-center relative z-20">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 text-accent font-mono text-sm hover:bg-accent hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.1)] hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show Early Education <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
