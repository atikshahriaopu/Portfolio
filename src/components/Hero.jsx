import React, { useState, useEffect } from "react";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ scrollToSection }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Competitive Programmer", "Software Developer"];

  useEffect(() => {
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
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-16 pb-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-cyan/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-violet/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Half - Professional Portrait Image (First on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end lg:order-2"
          >
            <div className="relative group">
              {/* Animated gradient border container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              {/* Image container with glass effect */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border-4 border-solarized-cyan/30 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-solarized-blue/10 to-solarized-violet/10 p-2">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-3xl shadow-inner shadow-solarized-cyan/20"></div>
                  
                  {/* Portrait image */}
                  <img
                    src="/Image/opu.png"
                    alt="Atik Shahria Opu"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-solarized-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-solarized-cyan rounded-tl-lg"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-solarized-violet rounded-tr-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-solarized-violet rounded-bl-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-solarized-cyan rounded-br-lg"></div>
              </div>
            </div>
          </motion.div>

          {/* Left Half - Content (Second on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left lg:order-1"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Hi There! <span className="inline-block animate-wave">👋</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 lg:px-0"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent">
                ATIK SHAHRIA OPU
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-solarized-cyan min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start px-2 lg:px-0"
            >
              <span>{text}</span>
              <span className="animate-blink">|</span>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap space-x-3 sm:space-x-4 justify-center lg:justify-start pt-2 sm:pt-4"
            >
              <a
                href="https://github.com/atikshahriaopu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass-effect rounded-full hover:bg-blue-800/20 transition-all hover:scale-110 shadow-lg"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/atikshahriaopu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass-effect rounded-full hover:bg-blue-800/20 transition-all hover:scale-110 shadow-lg"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://facebook.com/atikshahriaopu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass-effect rounded-full hover:bg-blue-800/20 transition-all hover:scale-110 shadow-lg"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:atikshariaropu@gmail.com"
                className="p-3 sm:p-4 glass-effect rounded-full hover:bg-blue-800/20 transition-all hover:scale-110 shadow-lg"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-solarized-cyan text-white rounded-full font-semibold hover:bg-solarized-blue hover:scale-105 transition-all text-sm sm:text-base shadow-lg hover:shadow-solarized-cyan/50 hover:shadow-2xl"
              >
                Contact Me
              </button>
              <a
                href="\CV\Atik_Shahria_Opu.pdf"
                download
                className="px-8 sm:px-10 py-3 sm:py-4 glass-effect rounded-full font-semibold text-white hover:bg-solarized-violet hover:text-white transition-all flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base shadow-lg border-2 border-solarized-violet"
              >
                <Download size={18} className="sm:w-5 sm:h-5" /> Get Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
