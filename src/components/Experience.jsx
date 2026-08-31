import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";

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

const Experience = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const experiences = [
    {
      title: "Backend Engineer Intern - Brain Station 23",
      team: "Industrial Attachment | Contributed to BiteNow backend development • Implemented secure RESTful APIs with Node.js, Express, MongoDB • Worked with Cloudinary, Mapbox, Socket.IO, and database transactions • Collaborated in a Git-based professional team environment",
      icon: "/Image/bs23.png",
      year: "Dec 2025",
      gradient: "from-white to-white",
    },
    {
      title: "Competitive Programming Mentor",
      team: "Mentored 20+ junior students in DSA and algorithms. • Conducted weekly sessions and code reviews to enhance problem-solving skills • Guided students in preparing for coding competitions.",
      icon: "👨‍🏫",
      year: "Ongoing",
      gradient: "from-white to-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                {/* Icon */}
                <div className="mb-5">
                  {exp.icon.startsWith("/") ? (
                    <div className="black-gradient w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src={exp.icon}
                        alt={exp.title}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-4xl">{exp.icon}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-[20px] sm:text-[24px] mb-3 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-secondary text-[14px] leading-relaxed flex-1">
                    {exp.team}
                  </p>
                </div>

                {/* Year badge */}
                <div className="mt-4">
                  <p className="text-[14px] text-blue-400">#{exp.year}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
