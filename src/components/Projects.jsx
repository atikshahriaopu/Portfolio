import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
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

const ProjectCard = ({
  index,
  title,
  description,
  image,
  tech,
  projectLink,
  githubLink,
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
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[360px] group transition-shadow duration-200 shadow-lg shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/30 will-change-transform transform-gpu"
      >
        <div className="relative w-full h-[180px] sm:h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-200 ease-out sm:group-hover:scale-110 will-change-transform transform-gpu"
          />

          <div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover">
            <div
              onClick={() => window.open(githubLink, "_blank")}
              className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-[transform,opacity] duration-150 ease-out sm:hover:scale-110 opacity-100 sm:opacity-0 sm:hover:opacity-100 sm:group-hover:opacity-100 will-change-[transform,opacity] transform-gpu"
            >
              <Code size={18} className="text-white sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
            {title}
          </h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">
            {description}
          </p>
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
          {projectLink !== "#" && (
            <button
              onClick={() => window.open(projectLink, "_blank")}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium text-xs sm:text-sm transition-[transform,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu"
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              Live Demo
            </button>
          )}
          <button
            onClick={() => window.open(githubLink, "_blank")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs sm:text-sm transition-[transform,background-color,box-shadow] duration-150 ease-out sm:hover:scale-105 hover:shadow-lg hover:shadow-gray-700/50 active:scale-95 touch-manipulation will-change-[transform,box-shadow] transform-gpu"
          >
            <Code size={14} className="sm:w-4 sm:h-4" />
            Code
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
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
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
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
};

export default Projects;
