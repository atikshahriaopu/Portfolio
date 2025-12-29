import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const animationRef = useRef(null);

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

  // Combine tech and domain skills
  const allSkills = [...techSkills, ...domainSkills];

  // Create a circular array with enough copies for infinite seamless loop
  const duplicatedSkills = [
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
    ...allSkills,
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const itemWidth = 112; // Adjusted for mobile: smaller item width (80px) + gap (32px)
    const singleSetWidth = allSkills.length * itemWidth;

    const startAutoScroll = () => {
      const currentX = x.get();

      // Animate one full set of skills
      animationRef.current = controls
        .start({
          x: currentX - singleSetWidth,
          transition: {
            duration: allSkills.length * 2.5, // Smooth consistent speed
            ease: "linear",
          },
        })
        .then(() => {
          // Seamlessly loop by resetting position to middle copies
          const newX = x.get() % -singleSetWidth;
          const middleOffset = -singleSetWidth * 3;
          x.set(newX + middleOffset);
          if (!isDragging && !isHovering) {
            startAutoScroll();
          }
        });
    };

    if (!isDragging && !isHovering) {
      startAutoScroll();
    } else {
      controls.stop();
    }

    return () => {
      if (animationRef.current) {
        controls.stop();
      }
    };
  }, [isDragging, isHovering, controls, allSkills.length, x]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Normalize position after dragging to ensure seamless loop
    const itemWidth = 112; // Match the itemWidth from useEffect
    const singleSetWidth = allSkills.length * itemWidth;
    const currentX = x.get();

    // Calculate normalized position within the middle sets (never at edges)
    const normalizedX = currentX % -singleSetWidth;
    const middleOffset = -singleSetWidth * 3; // Keep in middle copies
    x.set(normalizedX + middleOffset);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-10 sm:pb-12 md:pb-18 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            Skills & Technologies.
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            These are the technologies and tools I work with regularly. From
            programming languages to frameworks and databases, each skill
            represents hands-on experience in building real-world applications
            and solving complex problems.
          </motion.p>
        </div>

        {/* Scrolling Skills Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden mt-20"
        >
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={false}
            dragElastic={0}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            className="flex gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 cursor-grab active:cursor-grabbing"
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer w-20 sm:w-24 md:w-32"
              >
                {/* Image Container */}
                <div className="relative mb-2 sm:mb-3">
                  <div className="transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-2xl">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain pointer-events-none"
                      draggable="false"
                    />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300"></div>
                </div>

                {/* Skill Name */}
                <p className="text-xs sm:text-sm md:text-base font-medium text-solarized-base1 group-hover:text-solarized-cyan transition-colors duration-300 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
