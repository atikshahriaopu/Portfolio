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

const Experience = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const experiences = [
    {
      title: "ICPC Dhaka Regional Preliminary 2025",
      team: "UITS AIMERS",
      icon: "/Image/icpc.png",
      year: "2025",
      gradient: "from-white to-white",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2024",
      team: "UITS AIMERS",
      icon: "/Image/icpc.png",
      year: "2024",
      gradient: "from-white to-white",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2023",
      team: "UITS noob3Programmers",
      icon: "/Image/icpc.png",
      year: "2023",
      gradient: "from-white to-white",
    },
    {
      title: "UITS Intra Programming Contest",
      team: "Ranked 6th out of 60+ teams",
      icon: "/Image/rank.png",
      year: "2025",
      gradient: "from-white to-white",
    },
    {
      title: "Competitive Programming Mentor",
      team: "Mentored junior students in algorithms",
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
          <h2 className={`${styles.sectionHeadText}`}>
            Achievements & Experience.
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            My journey in competitive programming and software development has
            been marked by consistent participation in prestigious coding
            competitions and mentoring roles. These experiences have shaped my
            problem-solving abilities and technical expertise.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 space-y-4 sm:space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative glass-effect rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
                {/* Gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-all duration-500">
                    {exp.icon.startsWith("/") ? (
                      <img
                        src={exp.icon}
                        alt={exp.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                      />
                    ) : (
                      <span className="text-4xl sm:text-5xl md:text-6xl">
                        {exp.icon}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-solarized-base2 group-hover:scale-105 transition-transform duration-300 pr-2">
                        {exp.title}
                      </h3>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 glass-effect rounded-full text-xs sm:text-sm font-semibold text-solarized-cyan border border-solarized-cyan/40 whitespace-nowrap self-start">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-solarized-base1 text-sm sm:text-base leading-relaxed">
                      {exp.team}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-500"></div>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-solarized-blue/40 bg-black/20 overflow-hidden">
              <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent relative z-10">
                Competitive Programming Stats
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
                {/* Stat 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-blue/30 to-solarized-cyan/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-solarized-cyan/30 hover:border-solarized-cyan transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-solarized-cyan to-solarized-blue bg-clip-text text-transparent leading-tight">
                      650+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Problems Solved
                    </div>
                    <div className="text-solarized-cyan text-[10px] sm:text-xs md:text-sm font-semibold">
                      Codeforces
                    </div>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-violet/30 to-solarized-magenta/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-solarized-violet/30 hover:border-solarized-violet transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-solarized-violet to-solarized-magenta bg-clip-text text-transparent leading-tight">
                      1200+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Total Problems
                    </div>
                    <div className="text-solarized-violet text-[10px] sm:text-xs md:text-sm font-semibold">
                      All Platforms
                    </div>
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-solarized-green/30 to-solarized-cyan/30 rounded-2xl blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-solarized-green/30 hover:border-solarized-green transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-solarized-green to-solarized-cyan bg-clip-text text-transparent leading-tight">
                      100+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Contests
                    </div>
                    <div className="text-solarized-green text-[10px] sm:text-xs md:text-sm font-semibold">
                      Participated
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
