import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const { animationState, sectionRef } = useScrollAnimation();
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

    const itemWidth = 160; // item width (128px) + gap (32px)
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
    const itemWidth = 160;
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
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
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

        {/* Scrolling Skills Container */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={false}
            dragElastic={0}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            className="flex gap-8 py-8 cursor-grab active:cursor-grabbing"
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer w-24 sm:w-32"
              >
                {/* Image Container */}
                <div className="relative mb-3">
                  <div className="transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-2xl">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain pointer-events-none"
                      draggable="false"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
