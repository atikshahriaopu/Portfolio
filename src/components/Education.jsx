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
          <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            My academic background in Computer Science & Engineering has
            provided me with a strong foundation in software development,
            algorithms, and problem-solving. Here&apos;s my educational journey
            and key coursework that shaped my technical skills.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-20 group relative"
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
            {/* Gradient glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 md:gap-8">
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
                className="bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0"
              >
                <GraduationCap
                  size={32}
                  className="text-white sm:w-10 sm:h-10 md:w-12 md:h-12"
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
                  className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3"
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
                  className="text-cyan-400 font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <BookOpen size={18} className="flex-shrink-0 sm:w-5 sm:h-5" />
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
                  className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base"
                >
                  Dhaka, Bangladesh • Expected Graduation: 2026
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
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-solarized-cyan/20 text-solarized-cyan border border-solarized-cyan/40 transition-all duration-300 hover:scale-105 hover:bg-solarized-cyan/30"
                    >
                      {course.name}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-32 h-32 bg-gray-800 opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-500"></div>
            <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
