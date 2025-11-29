import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const skillCategories = [
    {
      category: "Languages",
      icon: "/Image/code.png",
      tags: ["C", "C++", "JavaScript"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Frameworks",
      icon: "/Image/framwork.png",
      tags: ["Node.js", "React"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Database",
      icon: "/Image/database.png",
      tags: ["MongoDB", "Firebase"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Domain",
      icon: "/Image/domain.png",
      tags: ["OOP", "Algorithms", "Problem Solving", "DSA"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Tools",
      icon: "🛠️",
      tags: ["CMS Tools", "AI Tools"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={sectionRef} id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-solarized-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-solarized-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={
            animationState === "visible" 
              ? { opacity: 1, y: 0 } 
              : animationState === "fadeOut"
              ? { opacity: 0, y: -20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative glass-effect rounded-2xl p-5 sm:p-6 md:p-8 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:scale-105 h-full">
                {/* Gradient glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter drop-shadow-2xl">
                    {typeof category.icon === "string" &&
                    category.icon.startsWith("/") ? (
                      <img
                        src={category.icon}
                        alt={category.category}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    ) : (
                      category.icon
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.category}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium border
                        ${category.tagColor}
                        transition-all duration-300 cursor-default hover:scale-105`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"
                ></div>
                <div
                  className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
