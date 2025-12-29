import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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

      <div className="max-w-4xl mx-auto relative z-10">
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
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            animationState === "visible"
              ? { opacity: 1, y: 0 }
              : animationState === "fadeOut"
              ? { opacity: 0, y: 20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
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
                      className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/30"
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
