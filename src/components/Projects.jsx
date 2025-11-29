import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const projects = [
    {
      title: "UITS ACI Student Chapter Website",
      description:
        "Comprehensive web platform for UITS ACI Student Chapter - a professional civil engineering community website.",
      tech: ["React.js", "Firebase", "Sanity CMS", "Tailwind CSS"],
      link: "https://aciuits.netlify.app",
      icon: "/Image/ACI_UITS.ico",
      gradient: "from-solarized-cyan to-solarized-blue",
    },
    {
      title: "PetPals",
      description:
        "Animal information web application with API integration, authentication, and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      link: "https://atikshahriaopu.github.io/PetPals/",
      icon: "🐾",
      gradient: "from-solarized-blue to-solarized-violet",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section ref={sectionRef} id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-magenta/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-violet/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
          Featured Projects
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative glass-effect rounded-2xl p-5 sm:p-6 md:p-8 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:scale-105 h-full flex flex-col">
                {/* Gradient glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-5 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    {project.icon.startsWith("/") ? (
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    ) : (
                      project.icon
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-solarized-base0 text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-solarized-blue/20 text-white border border-solarized-blue/30 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-base sm:text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
                    >
                      View Project <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute -top-3 -right-3 w-24 h-24 bg-solarized-base01 opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500"
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-solarized-base00 text-xl mb-6">
            More projects coming soon...
          </p>
          <div className="inline-block glass-effect px-8 py-4 rounded-full border border-solarized-base01 hover:border-solarized-blue hover:bg-solarized-blue/20 transition-all duration-300 hover:scale-105">
            <span className="text-solarized-magenta font-medium text-lg">
              🚀 Currently building amazing things
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
