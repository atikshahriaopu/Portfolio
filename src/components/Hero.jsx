import { useState, useEffect } from "react";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Hero = ({ scrollToSection }) => {
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
        <div className="flex items-center justify-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center"
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
              I&apos;m{" "}
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

Hero.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Hero;
