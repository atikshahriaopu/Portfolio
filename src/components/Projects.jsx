import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Code, Eye, X } from "lucide-react";
import { styles } from "../styles";
import PropTypes from "prop-types";

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const projects = [
  {
    title: "BiteNow - Food Delivery Platform",
    image: "/project_img/bitenow.png",
    description:
      "Problem: Food delivery platforms require complex backend systems for managing restaurants, riders, and real-time order tracking.\n\n" +
      "Solution: Developed production-grade backend APIs during industrial attachment at Brain Station 23 for a full-scale food delivery platform.\n\n" +
      "Key Technical Achievements:\n\n" +
      "🔹 RESTful API Architecture\n" +
      "• Built modular CRUD APIs for Restaurant Owner, Restaurant, and Rider management\n" +
      "• Implemented document verification workflows and status management systems\n" +
      "• Designed advanced query engine with pagination, sorting, and filtering\n\n" +
      "🔹 Database & Geospatial Systems\n" +
      "• MongoDB database design with GeoJSON schema for location-based queries\n" +
      "• Built aggregation pipelines for real-time analytics (revenue, orders, ratings)\n" +
      "• Integrated Mapbox API for geocoding and distance-based restaurant/rider matching\n\n" +
      "🔹 Real-Time Features\n" +
      "• WebSocket implementation (Socket.IO) for live order tracking and notifications\n" +
      "• Rider location broadcasting with ETA calculations\n\n" +
      "🔹 Cloud Integration\n" +
      "• Cloudinary + Multer for image/document uploads with validation and optimization\n\n" +
      "Result: Delivered scalable backend supporting restaurant onboarding, order management, and real-time rider tracking with optimized geospatial queries.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Mapbox",
      "Cloudinary",
      "Multer",
    ],
    projectLink: "https://bite-now.netlify.app/",
    githubLink: "https://github.com/atikshahriaopu/BiteNow",
  },
  {
    title: "UITS ACI Student Chapter Website",
    image: "/project_img/uitsCIVIL.png",
    description:
      "Problem: Civil engineering student chapter needed a professional web presence to showcase events and activities.\n\nSolution: Developed a comprehensive web platform with Sanity CMS integration for non-technical content updates, event management system, and responsive design.\n\nResult: Increased chapter visibility by 200%, streamlined event registrations, and enabled chapter officers to update content independently.",
    tech: ["React.js", "Firebase", "Sanity CMS", "Tailwind CSS", "Netlify"],
    projectLink: "https://aciuits.netlify.app",
    githubLink: "https://github.com/AkibReza/uitsCIVIL",
  },
  {
    title: "Taza Bazar - Agricultural Marketplace",
    image: "/project_img/TazaBazar.png",
    description:
      "Problem: Farmers struggled to connect directly with consumers, losing profit to middlemen.\n\nSolution: Created a dual marketplace platform with role-based dashboards (farmer/consumer/admin), real-time notifications, and CRUD operations for product listings.\n\nResult: Connected 50+ farmers directly with consumers, improving farmer margins by 30%.",
    tech: ["React", "Tailwind CSS", "Vite", "REST API", "Context API"],
    projectLink: "https://taza-bazar.netlify.app/",
    githubLink: "https://github.com/chatok-jnr/taza-bazar-app",
  },
  {
    title: "PetPals - Animal Information Hub",
    image: "/project_img/PetPals.png",
    description:
      "Problem: Pet adoption platforms lacked comprehensive animal care information.\n\nSolution: Built a responsive web application with RESTful API integration, secure authentication system, and dynamic content loading.\n\nResult: Provided educational content to 500+ users, improved adoption decision-making with detailed animal profiles.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Local Storage"],
    projectLink: "https://atikshahriaopu.github.io/PetPals/",
    githubLink: "https://github.com/AtikShahriaOpu/PetPals",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md sm:max-w-2xl lg:max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl shadow-violet-500/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-1.5 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors duration-200 border border-white/20"
        >
          <X size={20} className="text-white sm:w-6 sm:h-6" />
        </button>

        {/* Image */}
        <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            {project.title}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.tech.map((techItem, i) => (
              <span
                key={`modal-${project.title}-${techItem}-${i}`}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
            {project.description.split("\n").map((line, index) => {
              const trimmedLine = line.trim();

              // Empty line - vertical spacing
              if (trimmedLine === "") {
                return <div key={index} className="h-2" />;
              }

              // Bullet point - use flexbox for proper alignment
              if (trimmedLine.startsWith("•")) {
                return (
                  <div key={index} className="flex items-start gap-2 mb-2 ml-4">
                    <span className="text-gray-300 flex-shrink-0 leading-relaxed">
                      •
                    </span>
                    <span className="flex-1 leading-relaxed">
                      {trimmedLine.substring(1).trim()}
                    </span>
                  </div>
                );
              }

              // Section header (starts with emoji)
              if (trimmedLine.startsWith("🔹")) {
                return (
                  <p key={index} className="font-semibold mb-2 mt-4 first:mt-0">
                    {trimmedLine}
                  </p>
                );
              }

              // Regular paragraph
              return (
                <p key={index} className="mb-2">
                  {trimmedLine}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {project.tech.map((techItem, i) => (
              <p
                key={`tag-${project.title}-${techItem}-${i}`}
                className="text-xs sm:text-sm text-violet-400"
              >
                #{techItem}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
            {project.projectLink !== "#" && (
              <button
                onClick={() => window.open(project.projectLink, "_blank")}
                className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#1a2742] md:hover:bg-[#0f1d30] text-white font-medium text-xs sm:text-sm lg:text-base transition-all duration-200 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-[#1a2742]/50"
              >
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                Live Demo
              </button>
            )}
            <button
              onClick={() => window.open(project.githubLink, "_blank")}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#1a2742] md:hover:bg-[#0f1d30] text-white font-medium text-xs sm:text-sm lg:text-base transition-all duration-200 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-[#1a2742]/50"
            >
              <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
              Code
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

const ProjectCard = ({
  index,
  title,
  image,
  tech,
  projectLink,
  githubLink,
  onViewDetails,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 450,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          perspective: 1000,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col group transition-shadow duration-200 shadow-lg shadow-violet-500/10 md:hover:shadow-2xl md:hover:shadow-violet-500/30 will-change-transform transform-gpu"
      >
        <div
          className="flex flex-col h-full cursor-pointer"
          onClick={onViewDetails}
        >
          <div className="relative w-full h-[120px] sm:h-[140px] overflow-hidden rounded-2xl mb-5">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-200 ease-out md:group-hover:scale-110 will-change-transform transform-gpu"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px] mb-3 leading-tight">
              {title}
            </h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((techItem, i) => (
              <p
                key={`${title}-${techItem}-${i}`}
                className="text-[14px] text-blue-400"
              >
                #{techItem}
              </p>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs transition-[transform,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu flex-1"
            >
              <Eye size={14} />
              <span className="hidden sm:inline">View</span>
            </button>
            {projectLink !== "#" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(projectLink, "_blank");
                }}
                className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs transition-[transform,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu flex-1"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Demo</span>
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubLink, "_blank");
              }}
              className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs transition-[transform,background-color,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu flex-1"
            >
              <Code size={14} />
              <span className="hidden sm:inline">Code</span>
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default Projects;
