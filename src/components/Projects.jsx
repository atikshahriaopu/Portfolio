import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Info, X } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

const Projects = () => {
  const { animationState, sectionRef } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "UITS ACI Student Chapter Website",
      image: "/project_img/uitsCIVIL.png",
      description:
        "Comprehensive web platform for UITS ACI Student Chapter - a professional civil engineering community website.",
      fullDescription:
        "Developed a comprehensive web platform for the UITS chapter of the American Concrete Institute (ACI) to enhance member engagement and showcase chapter activities. The platform features dynamic content management with Sanity CMS, responsive design using Tailwind CSS, and seamless deployment on Netlify.",
      tech: ["React.js", "Firebase", "Sanity CMS", "Tailwind CSS", "Netlify"],
      tags: [
        "Content Management System",
        "Responsive Design",
        "Real-time Updates",
        "Authentication",
      ],
      projectLink: "https://aciuits.netlify.app",
      githubLink: "https://github.com/AkibReza/uitsCIVIL",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Taza Bazar",
      image: "/project_img/TazaBazar.png",
      description:
        "Agricultural marketplace platform with React frontend featuring farmer and consumer dashboards with real-time notifications.",
      fullDescription:
        "Developed frontend interfaces for farmer and consumer dashboards with product listing, bidding modals, and real-time notifications using React, Tailwind CSS, and REST API integration via Axios. Implemented responsive UI/UX for dual marketplace system enabling 3 user roles (Farmer, Consumer, Admin) with dynamic routing, authentication flows, and CRUD operations across 15+ pages.",
      tech: ["React", "Tailwind CSS", "Vite", "REST API"],
      tags: [
        "Dual Marketplace System",
        "3 User Roles",
        "Responsive UI/UX",
        "Real-time Notifications",
        "Dynamic Routing",
        "CRUD Operations",
      ],
      projectLink: "https://taza-bazar.netlify.app/",
      githubLink: "https://github.com/chatok-jnr/taza-bazar-app",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "PetPals",
      image: "/project_img/PetPals.png",
      description:
        "Animal information web application with API integration, authentication, and smooth animations.",
      fullDescription:
        "Developed an animal information web application featuring RESTful API integration for fetching and displaying animal data with dynamic content loading. Implemented a user authentication system with secure login/signup functionality and session management. Enhanced user experience with smooth CSS animations and transitions for fluid page interactions and navigation.",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      tags: ["API Integration", "Authentication System", "Smooth Animations"],
      projectLink: "https://atikshahriaopu.github.io/PetPals/",
      githubLink: "https://github.com/AtikShahriaOpu/PetPals",
      gradient: "from-blue-400 to-indigo-500",
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/3 rounded-full blur-3xl"></div>
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animationState}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col cursor-pointer"
                >
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  {/* Project Image */}
                  <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-4 sm:p-5 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-white min-h-[3.5rem]">
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4 justify-center min-h-[4rem] items-center">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.projectLink !== "#" && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium text-xs transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink size={14} />
                          View Project
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium text-xs border border-gray-600/50 transition-all duration-300 hover:scale-105"
                      >
                        <Code size={14} />
                        View Code
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-medium text-xs border border-purple-400/40 transition-all duration-300 hover:scale-105"
                      >
                        <Info size={14} />
                        Details
                      </button>
                    </div>
                  </div>
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
            <p className="text-gray-200 text-xl mb-6">
              More projects coming soon...
            </p>
            <div className="inline-block glass-effect px-8 py-4 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
              <span className="text-cyan-400 font-medium text-lg">
                🚀 Currently building amazing things
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto glass-effect rounded-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800/80 text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Project Image */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <p className="text-gray-200 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tags/Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-400/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  {selectedProject.projectLink !== "#" && (
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      View Live Project
                    </a>
                  )}
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium border border-gray-600/50 transition-all duration-300 hover:scale-105"
                  >
                    <Code size={18} />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
