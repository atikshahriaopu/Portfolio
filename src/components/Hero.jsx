import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";

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
          : fullText.substring(0, text.length + 1),
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
    <section
      id="home"
      className={`relative w-full mx-auto pt-[120px] sm:pt-[140px] pb-12 sm:pb-16 md:pb-20`}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8`}
      >
        {/* Profile Picture - shows first on mobile, right on desktop */}
        <div className="flex items-center justify-center lg:justify-end lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          >
            <img
              src="/my_picture/dp.jpg"
              alt="Atik Shahria Opu"
              className="w-full h-full object-cover object-[center_30%] rounded-full border-4 border-[#B8B8FF]"
            />
          </motion.div>
        </div>

        {/* Text content - shows second on mobile, left on desktop */}
        <div className="flex flex-row items-start gap-3 sm:gap-5 z-10 flex-1 lg:order-1">
          <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
            {/* <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" /> */}
            <div className="w-1 h-12 sm:h-16 violet-gradient" />
          </div>

          <div>
            <h1 className="font-black text-white text-[28px] xs:text-[36px] sm:text-[50px] lg:text-[70px] leading-[36px] xs:leading-[44px] sm:leading-[60px] lg:leading-[88px] mt-2">
              Hi, I&apos;m{" "}
              <span className="text-[#B8B8FF]">Atik Shahria Opu</span>
            </h1>
            <p className="text-solarized-base1 font-medium text-[15px] xs:text-[18px] sm:text-[26px] lg:text-[30px] leading-[24px] xs:leading-[28px] sm:leading-[36px] lg:leading-[40px] mt-2">
              {text}
              <span className="animate-pulse text-solarized-cyan">|</span>
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="/CV/Atik_Shahria_Opu_Resume.pdf"
                download
                className="px-4 sm:px-6 py-2 sm:py-3 bg-solarized-violet text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-solarized-violet/50 transition-all duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
