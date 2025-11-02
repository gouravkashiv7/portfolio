"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
      level: "Secondary Education (Science Stream)",
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
      level: "Bachelor of Technology in Computer Science",
      institute: "Chitkara University, Rajpura",
      duration: "2018 – 2022",
      details: [
        "Graduated with distinction (CGPA: 9.58/10) focusing on software engineering principles",
        "Built multiple full-stack projects using React.js and Node.js",
        "Achieved Quarter-finalist in Smart India Hackathon with IoT-based agricultural monitoring system",
        "Secured Semi-finalist position in IICDC for the same project featuring image processing capabilities",
        "Guided team to runners-up position in Octahacks hackathon, demonstrating leadership and technical expertise",
      ],
    },
    {
      level: "Master of Technology in Computer Science",
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
        <h2 className="text-2xl md:text-3xl font-bold text-light mb-12 flex items-center">
          <span className="text-accent font-mono text-lg mr-4">02.</span>
          Education
          <span className="ml-6 h-px bg-gray grow max-w-60"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left side: Institutions list */}
          <div className="md:w-1/4">
            <ul className="flex md:flex-col gap-0 border-l-2 border-gray/20">
              {educationData.map((edu, i) => (
                <li
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer py-3 px-4 border-l-2 transition-all duration-300 font-mono text-sm ${
                    activeIndex === i
                      ? "text-accent border-accent bg-accent/5"
                      : "text-gray border-transparent hover:text-accent hover:bg-accent/5"
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
              <h3 className="text-xl font-bold text-light mb-1">
                {educationData[activeIndex].level}
              </h3>
              <p className="text-accent text-lg mb-2">
                {educationData[activeIndex].institute}
              </p>
              <p className="text-gray text-sm mb-6 font-mono">
                {educationData[activeIndex].duration}
              </p>
              <ul className="space-y-3">
                {educationData[activeIndex].details.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray">
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
