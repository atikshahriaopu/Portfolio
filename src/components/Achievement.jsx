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

const Achievement = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const achievements = [
    {
      title: "ICPC Dhaka Regional Preliminary 2025",
      team: "Team UITS AIMERS | Competed among 700+ teams, demonstrated advanced problem-solving and team collaboration under time constraints",
      icon: "/Image/icpc.png",
      year: "2025",
      gradient: "from-orange-500 via-orange-600 to-red-600",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2024",
      team: "Achieved strong ranking among 600+ competing teams with 'UITS AIMERS' through efficient collaboration and structured problem-solving in a time-constrained environment.",
      icon: "/Image/icpc.png",
      year: "2024",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2023",
      team: "Team UITS noob3Programmers | First ICPC participation, established foundation for consecutive qualifications",
      icon: "/Image/icpc.png",
      year: "2023",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
    },
    {
      title: "UITS Intra Programming Contest - Ranked 6th",
      team: "Achieved top 10% placement among 60+ teams | Solved 6 problems out of 8 problems, demonstrating consistent performance",
      icon: "/Image/rank.png",
      year: "2025",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
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
      id="achievements"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Achievements</h2>
        </motion.div>

        {/* <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Demonstrated consistent performance in competitive programming
            through three consecutive ICPC qualifications and top-tier
            university rankings, showcasing dedication and technical excellence.
          </motion.p>
        </div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
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
                  {achievement.icon.startsWith("/") ? (
                    <div className="black-gradient w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src={achievement.icon}
                        alt={achievement.title}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-4xl">{achievement.icon}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-[20px] sm:text-[24px] mb-3 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-secondary text-[14px] leading-relaxed flex-1">
                    {achievement.team}
                  </p>
                </div>

                {/* Year badge */}
                <div className="mt-4">
                  <p className="text-[14px] text-blue-400">
                    #{achievement.year}
                  </p>
                </div>
              </Tilt>
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
              <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-[#B8B8FF] relative z-10">
                Competitive Programming Stats
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
                {/* Stat 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-[#EFBF04]/30 rounded-2xl blur-xl opacity-0 md:group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#EFBF04]/30 md:hover:border-[#EFBF04] transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 text-[#EFBF04] leading-tight">
                      650+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Problems Solved
                    </div>
                    <div className="text-[#EFBF04] text-[10px] sm:text-xs md:text-sm font-semibold">
                      Codeforces
                    </div>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-[#CFECF7]/30 rounded-2xl blur-xl opacity-0 md:group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#CFECF7]/30 md:hover:border-[#CFECF7] transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 text-[#CFECF7] leading-tight">
                      1200+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Total Problems solved
                    </div>
                    <div className="text-[#CFECF7] text-[10px] sm:text-xs md:text-sm font-semibold">
                      All Platforms
                    </div>
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative group/stat"
                >
                  <div className="absolute inset-0 bg-[#DC143C]/30 rounded-2xl blur-xl opacity-0 md:group-hover/stat:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#DC143C]/30 md:hover:border-[#DC143C] transition-all duration-300">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-3 text-[#DC143C] leading-tight">
                      100+
                    </div>
                    <div className="text-solarized-base1 text-xs sm:text-sm md:text-base font-medium mb-1">
                      Contests
                    </div>
                    <div className="text-[#DC143C] text-[10px] sm:text-xs md:text-sm font-semibold">
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

export default Achievement;
