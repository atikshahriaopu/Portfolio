import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { styles } from "../styles";

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

const Skills = () => {
  const { sectionRef } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", image: "/Image/cpp.png" },
        { name: "JavaScript", image: "/Image/js.png" },
        { name: "Java", image: "/Image/java.png" },
        { name: "SQL", image: "/Image/sql.png" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", image: "/Image/node-js.png" },
        { name: "Express", image: "/Image/express.png" },
        { name: "Mongoose", image: "/Image/mongoose.png" },
        { name: "REST APIs", image: "/Image/api.png" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", image: "/Image/mongodb.png" },
        { name: "Firebase", image: "/Image/firebase.png" },
        { name: "PostgreSQL", image: "/Image/PostgreSQL.png" },
        { name: "MySQL", image: "/Image/mysql.png" },
        { name: "Cloudinary", image: "/Image/cloud.png" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", image: "/Image/git.png" },
        { name: "Postman", image: "/Image/postman.png" },
        { name: "Socket.IO", image: "/Image/socket.png" },
        { name: "Mapbox", image: "/Image/mapbox.png" },
        { name: "Multer", image: "/Image/multer.png" },
        { name: "Codex", image: "/Image/Codex.png" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-12 md:pb-18 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am a backend developer and competitive problem-solver with
            production experience. I specialize in scalable system architecture,
            algorithm optimization, and modern development practices. I combine
            strong computer science fundamentals with practical software
            engineering skills.
          </motion.p>
        </div>

        {/* Categorized Skills */}
        <div className="mt-12 sm:mt-16 md:mt-20 space-y-10 sm:space-y-12 md:space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", "spring", categoryIndex * 0.15, 0.5)}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 sm:gap-8 md:gap-12 items-start"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white self-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group md:cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-tertiary/30 to-tertiary/10 md:backdrop-blur-sm border border-white/10 flex items-center justify-center md:transform md:group-hover:scale-110 md:transition-all md:duration-300 drop-shadow-lg md:group-hover:drop-shadow-2xl">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain"
                        />
                      </div>
                      {/* Glow effect on hover - desktop only */}
                      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-300"></div>
                    </div>

                    {/* Skill Name */}
                    <p className="text-sm sm:text-base md:text-lg font-medium text-secondary md:group-hover:text-white md:transition-colors md:duration-300 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
