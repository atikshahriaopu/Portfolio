import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const skillCategories = [
    {
      category: "Languages",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 4L20 4L20 20L4 20L4 4Z"
              fill="url(#codeGradient)"
              opacity="0.2"
            />
            <path
              d="M8 8L12 12L8 16M12 16L16 16"
              stroke="url(#codeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="codeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#2aa198" />
                <stop offset="100%" stopColor="#268bd2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
      tags: ["C", "C++", "JavaScript"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Frameworks",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="url(#frameworkGradient)"
              strokeWidth="2"
              opacity="0.3"
            />
            <path
              d="M12 3C12 3 8 8 8 12C8 16 12 21 12 21C12 21 16 16 16 12C16 8 12 3 12 3Z"
              stroke="url(#frameworkGradient)"
              strokeWidth="2"
              fill="url(#frameworkGradient)"
              fillOpacity="0.2"
            />
            <path
              d="M3 12C3 12 8 8 12 8C16 8 21 12 21 12C21 12 16 16 12 16C8 16 3 12 3 12Z"
              stroke="url(#frameworkGradient)"
              strokeWidth="2"
              fill="url(#frameworkGradient)"
              fillOpacity="0.2"
            />
            <circle cx="12" cy="12" r="2" fill="url(#frameworkGradient)" />
            <defs>
              <linearGradient
                id="frameworkGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#268bd2" />
                <stop offset="100%" stopColor="#6c71c4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
      tags: ["Node.js", "React"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Database",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <ellipse
              cx="12"
              cy="6"
              rx="8"
              ry="3"
              stroke="url(#dbGradient)"
              strokeWidth="2"
              fill="url(#dbGradient)"
              fillOpacity="0.2"
            />
            <path
              d="M4 6V18C4 19.657 7.582 21 12 21C16.418 21 20 19.657 20 18V6"
              stroke="url(#dbGradient)"
              strokeWidth="2"
            />
            <path
              d="M4 12C4 13.657 7.582 15 12 15C16.418 15 20 13.657 20 12"
              stroke="url(#dbGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="dbGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#859900" />
                <stop offset="100%" stopColor="#2aa198" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
      tags: ["MongoDB", "Firebase"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Domain",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="url(#domainGradient)"
              strokeWidth="2"
              fill="url(#domainGradient)"
              fillOpacity="0.1"
            />
            <path
              d="M9 9L12 12M12 12L15 9M12 12L9 15M12 12L15 15"
              stroke="url(#domainGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2" fill="url(#domainGradient)" />
            <defs>
              <linearGradient
                id="domainGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d33682" />
                <stop offset="100%" stopColor="#6c71c4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
      tags: ["OOP", "Algorithms", "Problem Solving", "DSA"],
      gradient: "from-white to-white",
      glowColor: "solarized-blue/50",
      tagColor: "bg-solarized-blue/20 text-white border-solarized-blue/30",
    },
    {
      category: "Tools",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              stroke="url(#toolGradient)"
              strokeWidth="2"
              fill="url(#toolGradient)"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="toolGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#cb4b16" />
                <stop offset="100%" stopColor="#dc322f" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
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
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
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
              <div className="relative glass-effect rounded-2xl p-4 sm:p-5 md:p-6 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:scale-105 h-full">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter drop-shadow-2xl">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.category}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border
                        ${category.tagColor}
                        transition-all duration-300 cursor-default hover:scale-105`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
