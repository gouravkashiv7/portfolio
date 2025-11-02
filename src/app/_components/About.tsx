"use client";
import { motion } from "framer-motion";
import gourav from "../../../public/gourav.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Text Content */}
        <motion.div
          className="col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-8 flex items-center">
            <span className="text-accent font-mono text-lg mr-4">01.</span>
            About Me
            <span className="ml-6 h-px bg-gray grow max-w-60"></span>{" "}
          </h2>
          <div className="space-y-4 text-gray">
            <p className="leading-relaxed">
              Hello! I'm Gourav, a passionate frontend developer specializing in
              modern web technologies. My journey in web development started
              with a curiosity about how digital experiences are built, and it
              has evolved into a love for creating fast, responsive, and
              user-friendly applications.
            </p>

            <p className="leading-relaxed">
              I specialize in the{" "}
              <span className="text-accent">React ecosystem</span>, with
              expertise in
              <span className="text-accent">
                {" "}
                Next.js, TypeScript, and Tailwind CSS
              </span>
              . I'm passionate about writing clean, maintainable code and
              creating seamless user experiences that make a difference.
            </p>

            <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning about the latest
              trends in web development. I'm always excited to take on new
              challenges and collaborate on interesting projects.
            </p>
          </div>

          {/* Skills List */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-light text-lg mb-4">
              Here are a few technologies I've been working with:
            </h3>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm text-gray">
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                JavaScript (ES6+)
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                TypeScript
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                React.js
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Next.js
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Tailwind CSS
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">▹</span>
                Node.js
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image/Profile Section */}
        <motion.div
          className="col-span-5 flex justify-center pt-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoothness
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="relative group"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* Main image container with border animation */}
            <motion.div
              className="w-64 h-64 border-2 border-accent rounded-lg overflow-hidden"
              initial={{ scale: 0.95, rotateY: -10 }}
              whileInView={{
                scale: 1,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut",
                },
              }}
              whileHover={{
                borderColor: "#64ffda",
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={gourav}
                alt="Gourav Kashiv"
                width={256}
                height={256}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Background accent element with animation */}
            <motion.div
              className="w-64 h-64 bg-accent/10 rounded-lg absolute top-3 left-3 -z-10"
              initial={{ opacity: 0, scale: 0.9, x: -10, y: -10 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.7,
                  ease: "easeOut",
                },
              }}
              whileHover={{
                backgroundColor: "rgba(100, 255, 218, 0.15)",
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
