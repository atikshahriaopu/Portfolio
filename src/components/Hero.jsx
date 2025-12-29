import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = ["Competitive Programmer", "Backend Developer"];
    const handleTyping = () => {
      const currentIndex = loopNum % roles.length;
      const fullText = roles[currentIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-full mx-auto ${styles.paddingX} flex flex-col`}
      >
        {/* Top: Text content */}
        <div className="flex flex-row items-start gap-5 z-10">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-20 h-16 violet-gradient" />
          </div>

          <div>
            <h1 className="font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[88px] mt-2">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-solarized-violet via-solarized-blue to-solarized-cyan bg-clip-text text-transparent">
                Atik Shahria Opu
              </span>
            </h1>
            <p className="text-solarized-base1 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              {text}
              <span className="animate-pulse text-solarized-cyan">|</span>
            </p>
          </div>
        </div>

        {/* Center: 3D Computer - taking more space */}
        <div className="flex-1 w-full mt-2 flex items-center justify-center">
          <div className="w-full h-full max-h-[800px]">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      <div className="absolute xs:-bottom-5 -bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[56px] rounded-3xl border-4 border-solarized-cyan flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-solarized-cyan mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
