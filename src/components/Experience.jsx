import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Experience = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const experiences = [
    {
      title: "ICPC Dhaka Regional Preliminary 2024",
      team: "UITS AIMERS",
      icon: "🏆",
      year: "2024",
      gradient: "from-white to-white",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2023",
      team: "UITS noob3Programmers",
      icon: "🏆",
      year: "2023",
      gradient: "from-white to-white",
    },
    {
      title: "UITS Intra Programming Contest",
      team: "Ranked 6th out of 60+ teams",
      icon: "🥈",
      year: "2025",
      gradient: "from-white to-white",
    },
    {
      title: "Competitive Programming Mentor",
      team: "Mentored junior students in algorithms",
      icon: "👨‍🏫",
      year: "Ongoing",
      gradient: "from-white to-white",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section ref={sectionRef} id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
          Achievements & Experience
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="space-y-4 sm:space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative glass-effect rounded-2xl p-5 sm:p-6 md:p-8 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:scale-[1.02]">
                {/* Gradient glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                ></div>

                <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 pr-2`}>
                        {exp.title}
                      </h3>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 glass-effect rounded-full text-xs sm:text-sm font-semibold text-white border border-solarized-blue/30 whitespace-nowrap self-start">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-solarized-base0 text-sm sm:text-base leading-relaxed">{exp.team}</p>
                  </div>
                </div>

                {/* Decorative element */}
                <div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={
            animationState === "visible" 
              ? { opacity: 1, y: 0 } 
              : animationState === "fadeOut"
              ? { opacity: 0, y: 20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            
            <div className="relative glass-effect rounded-3xl p-10 sm:p-12 border-2 border-solarized-blue/40 bg-gradient-to-br from-solarized-base03/95 via-solarized-base02/90 to-solarized-base03/95 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-solarized-cyan/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-solarized-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              <h3 className="text-center text-2xl sm:text-3xl font-bold mb-10 bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent relative z-10">
                Competitive Programming Stats
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Stat 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-blue/30 to-solarized-cyan/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-2xl p-6 border border-solarized-blue/30 hover:border-solarized-blue transition-all duration-300">
                    <div className="text-6xl sm:text-7xl font-black mb-3 bg-gradient-to-br from-solarized-cyan to-solarized-blue bg-clip-text text-transparent leading-tight">
                      650+
                    </div>
                    <div className="text-solarized-base0 text-sm sm:text-base font-medium mb-1">Problems Solved</div>
                    <div className="text-solarized-cyan text-xs sm:text-sm font-semibold">Codeforces</div>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-violet/30 to-solarized-magenta/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-2xl p-6 border border-solarized-violet/30 hover:border-solarized-violet transition-all duration-300">
                    <div className="text-6xl sm:text-7xl font-black mb-3 bg-gradient-to-br from-solarized-violet to-solarized-magenta bg-clip-text text-transparent leading-tight">
                      1200+
                    </div>
                    <div className="text-solarized-base0 text-sm sm:text-base font-medium mb-1">Total Problems</div>
                    <div className="text-solarized-violet text-xs sm:text-sm font-semibold">All Platforms</div>
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-green/30 to-solarized-cyan/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-2xl p-6 border border-solarized-green/30 hover:border-solarized-green transition-all duration-300">
                    <div className="text-6xl sm:text-7xl font-black mb-3 bg-gradient-to-br from-solarized-green to-solarized-cyan bg-clip-text text-transparent leading-tight">
                      100+
                    </div>
                    <div className="text-solarized-base0 text-sm sm:text-base font-medium mb-1">Contests</div>
                    <div className="text-solarized-green text-xs sm:text-sm font-semibold">Participated</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
