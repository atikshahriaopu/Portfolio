import { useState } from "react";
import Tilt from "react-tilt";
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
    title: "UITS ACI Student Chapter Website",
    image: "/project_img/uitsCIVIL.png",
    description:
      "Comprehensive web platform for UITS ACI Student Chapter - a professional civil engineering community website featuring dynamic content management with Sanity CMS, responsive design using Tailwind CSS, and seamless deployment on Netlify.",
    tech: ["React.js", "Firebase", "Sanity CMS", "Tailwind CSS", "Netlify"],
    projectLink: "https://aciuits.netlify.app",
    githubLink: "https://github.com/AkibReza/uitsCIVIL",
  },
  {
    title: "Taza Bazar",
    image: "/project_img/TazaBazar.png",
    description:
      "Agricultural marketplace platform with React frontend featuring farmer and consumer dashboards with real-time notifications. Implemented responsive UI/UX for dual marketplace system enabling 3 user roles with dynamic routing and CRUD operations.",
    tech: ["React", "Tailwind CSS", "Vite", "REST API"],
    projectLink: "https://taza-bazar.netlify.app/",
    githubLink: "https://github.com/chatok-jnr/taza-bazar-app",
  },
  {
    title: "PetPals",
    image: "/project_img/PetPals.png",
    description:
      "Animal information web application featuring RESTful API integration for fetching and displaying animal data with dynamic content loading. Implemented user authentication system with secure login/signup functionality and smooth CSS animations.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    projectLink: "https://atikshahriaopu.github.io/PetPals/",
    githubLink: "https://github.com/AtikShahriaOpu/PetPals",
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-violet-500/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {project.title}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((techItem, i) => (
              <span
                key={`modal-${project.title}-${techItem}-${i}`}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((techItem, i) => (
              <p
                key={`tag-${project.title}-${techItem}-${i}`}
                className="text-sm text-violet-400"
              >
                #{techItem}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {project.projectLink !== "#" && (
              <button
                onClick={() => window.open(project.projectLink, "_blank")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50"
              >
                <ExternalLink size={18} />
                Live Demo
              </button>
            )}
            <button
              onClick={() => window.open(project.githubLink, "_blank")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50"
            >
              <Code size={18} />
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
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[360px] h-[520px] sm:h-[560px] flex flex-col group transition-shadow duration-200 shadow-lg shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/30 will-change-transform transform-gpu"
      >
        <div
          className="flex flex-col h-full cursor-pointer"
          onClick={onViewDetails}
        >
          <div className="relative w-full h-[180px] sm:h-[230px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-200 ease-out sm:group-hover:scale-110 will-change-transform transform-gpu"
            />

            <div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubLink, "_blank");
                }}
                className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-[transform,opacity] duration-150 ease-out sm:hover:scale-110 opacity-100 sm:opacity-0 sm:hover:opacity-100 sm:group-hover:opacity-100 will-change-[transform,opacity] transform-gpu"
              >
                <Code size={18} className="text-white sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
              {title}
            </h3>
          </div>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {tech.map((techItem, i) => (
              <p
                key={`${title}-${techItem}-${i}`}
                className="text-[12px] sm:text-[14px] text-blue-400"
              >
                #{techItem}
              </p>
            ))}
          </div>

          <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs sm:text-sm transition-[transform,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu"
            >
              <Eye size={14} className="sm:w-4 sm:h-4" />
              View Details
            </button>
            {projectLink !== "#" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(projectLink, "_blank");
                }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs sm:text-sm transition-[transform,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu"
              >
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                Live Demo
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubLink, "_blank");
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#1a2742] hover:bg-[#0f1d30] text-white font-medium text-xs sm:text-sm transition-[transform,background-color,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-[#1a2742]/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu"
            >
              <Code size={14} className="sm:w-4 sm:h-4" />
              Code
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
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center"
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
