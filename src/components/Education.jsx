import { BookOpen, GraduationCap } from "lucide-react";
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

const Education = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const courses = [
    { name: "Data Structures", color: "purple" },
    { name: "Algorithms", color: "cyan" },
    { name: "OOP", color: "pink" },
    { name: "Software Engineering", color: "blue" },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Education</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-20"
        >
          <div className="bg-tertiary p-6 sm:p-8 rounded-2xl w-full group transition-shadow duration-200 shadow-lg shadow-violet-500/10 md:hover:shadow-2xl md:hover:shadow-violet-500/30">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={
                  animationState === "visible"
                    ? { scale: 1, rotate: 0 }
                    : animationState === "fadeOut"
                      ? { scale: 0.8, rotate: -10 }
                      : animationState === "static"
                        ? { scale: 1, rotate: 0 }
                        : {}
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="black-gradient w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <GraduationCap
                  size={32}
                  className="text-white sm:w-10 sm:h-10"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    animationState === "visible"
                      ? { opacity: 1, x: 0 }
                      : animationState === "fadeOut"
                        ? { opacity: 0, x: -20 }
                        : animationState === "static"
                          ? { opacity: 1, x: 0 }
                          : {}
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-white font-bold text-[20px] sm:text-[24px] mb-3"
                >
                  BSc in Computer Science & Engineering
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    animationState === "visible"
                      ? { opacity: 1, x: 0 }
                      : animationState === "fadeOut"
                        ? { opacity: 0, x: -20 }
                        : animationState === "static"
                          ? { opacity: 1, x: 0 }
                          : {}
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-secondary text-[14px] mb-2 flex items-center gap-2"
                >
                  <BookOpen size={16} className="flex-shrink-0" />
                  <span className="break-words">
                    University of Information Technology & Sciences (UITS)
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    animationState === "visible"
                      ? { opacity: 1, x: 0 }
                      : animationState === "fadeOut"
                        ? { opacity: 0, x: -20 }
                        : animationState === "static"
                          ? { opacity: 1, x: 0 }
                          : {}
                  }
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-secondary text-[14px] mb-4"
                >
                  Dhaka, Bangladesh • Graduated: August 2026
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    animationState === "visible"
                      ? { opacity: 1, y: 0 }
                      : animationState === "fadeOut"
                        ? { opacity: 0, y: 20 }
                        : animationState === "static"
                          ? { opacity: 1, y: 0 }
                          : {}
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap gap-2"
                >
                  {courses.map((course, index) => (
                    <span key={index} className="text-[14px] text-blue-400">
                      #{course.name}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
