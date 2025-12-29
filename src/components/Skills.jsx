import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const techSkills = [
    { name: "C", image: "/Image/c.png" },
    { name: "C++", image: "/Image/cpp.png" },
    { name: "JavaScript", image: "/Image/js.png" },
    { name: "Node.js", image: "/Image/node-js.png" },
    { name: "Express.js", image: "/Image/express.png" },
    { name: "Mongoose", image: "/Image/mongoose.png" },
    { name: "MongoDB", image: "/Image/mongodb.png" },
    { name: "Firebase", image: "/Image/firebase.png" },
    { name: "Sanity CMS", image: "/Image/Sanity.png" },
    { name: "Postman", image: "/Image/postman.png" },
    { name: "Git/Github", image: "/Image/git.png" },
    { name: "AI", image: "/Image/AI.png" },
  ];

  const domainSkills = [
    {
      name: "Data Structure",
      image: "/Image/data_structure.png",
    },
    {
      name: "OOP",
      image: "/Image/oop.png",
    },
    {
      name: "Algorithms",
      image: "/Image/algorithm.png",
    },
    {
      name: "Problem Solving",
      image: "/Image/problem-solving.png",
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
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/3 rounded-full blur-3xl"></div>
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="space-y-16 max-w-6xl mx-auto"
        >
          {/* Tech Skills Section - 2x5 Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 mb-8">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative mb-3">
                    <div className="transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-2xl">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300"></div>
                  </div>

                  {/* Skill Name */}
                  <p className="text-sm sm:text-base font-medium text-white/80 group-hover:text-cyan-300 transition-colors duration-300 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Domain Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-cyan-400">
              Domain
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {domainSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative mb-3">
                    <div className="transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-2xl">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300"></div>
                  </div>

                  {/* Skill Name */}
                  <p className="text-sm sm:text-base font-medium text-white/80 group-hover:text-cyan-300 transition-colors duration-300 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
