"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      level: "Primary Education",
      institute: "St. Mary's Senior Secondary School, Kasauli",
      duration: "2008 – 2016",
      details: [
        "Completed foundational education with outstanding academic performance (CGPA: 9.8/10)",
        "Actively participated in inter-school competitions and cultural events",
        "Developed strong foundational knowledge and extracurricular skills",
      ],
    },
    {
      level: "Secondary Education",
      institute: "St. Mary's Senior Secondary School, Kasauli",
      duration: "2016 – 2018",
      details: [
        "Specialized in Physics, Chemistry, and Mathematics (PCM)",
        "Achieved 82.2% in CBSE Board examinations",
        "Secured 2nd position in district-level Mathematics Olympiad",
        "Demonstrated strong analytical and problem-solving abilities",
      ],
    },
    {
      level: "B.E. in CSE",
      institute: "Chitkara University, Rajpura",
      duration: "2018 – 2022",
      details: [
        "Graduated with distinction (CGPA: 9.58/10) focusing on software engineering principles",
        "Built multiple scalable cloud projects using AWS, Node.js, and CI/CD pipelines",
        "Achieved Quarter-finalist in Smart India Hackathon with IoT-based agricultural monitoring system",
        "Secured Semi-finalist position in IICDC for the same project featuring image processing capabilities",
        "Guided team to runners-up position in Octahacks hackathon, demonstrating leadership and technical expertise",
      ],
    },
    {
      level: "M.Tech in CSE",
      institute: "Panjab University, Chandigarh",
      duration: "2023 – 2025",
      details: [
        "Currently pursuing advanced studies in computer science",
        "Research focus on Large Language Models and generative AI",
        "Published research paper on text-to-video generative models",
        "Exploring cutting-edge AI technologies and their applications",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-5xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-light mb-8 md:mb-12 flex items-center">
          <span className="text-accent font-mono text-base md:text-lg mr-3 md:mr-4">
            02.
          </span>
          Education
          <span className="ml-4 md:ml-6 h-px bg-gray grow max-w-20 md:max-w-60"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
          {/* Left side: Institutions list */}
          <div className="md:w-1/4">
            <ul className="flex md:flex-col gap-0 overflow-x-auto md:overflow-visible border-l-0 md:border-l-2 border-gray/20 pb-2 md:pb-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {educationData.map((edu, i) => (
                // biome-ignore lint/a11y/useKeyWithClickEvents: List items in this menu are visually interactive without strict keyboard requirements.
                <li
                  key={edu.level}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap ${
                    activeIndex === i
                      ? "text-accent border-accent bg-accent/5"
                      : "text-gray border-gray/20 md:border-transparent hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {edu.level}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Education details */}
          <div className="md:w-3/4">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-light mb-1">
                {educationData[activeIndex].level}
              </h3>
              <p className="text-accent text-base md:text-lg mb-2">
                {educationData[activeIndex].institute}
              </p>
              <p className="text-gray text-xs md:text-sm mb-4 md:mb-6 font-mono">
                {educationData[activeIndex].duration}
              </p>
              <ul className="space-y-2 md:space-y-3">
                {educationData[activeIndex].details.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-gray text-sm md:text-base"
                  >
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
