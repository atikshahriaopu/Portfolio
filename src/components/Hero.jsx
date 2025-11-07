import React, { useState, useEffect } from "react";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Hi There! <span className="inline-block animate-wave">👋</span>
          </h1>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              ATIK SHAHRIA OPU
            </span>
          </h2>

          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 min-h-[4rem] flex items-center justify-center">
            <span>{text}</span>
            <span className="animate-blink">|</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center pt-8">
            <a
              href="https://github.com/atikshahriaopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110 shadow-lg hover:shadow-purple-500/50"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/atikshahriaopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://facebook.com/atikshahriaopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 rounded-full hover:bg-blue-500 transition-all hover:scale-110 shadow-lg hover:shadow-blue-400/50"
            >
              <Facebook size={28} />
            </a>
            <a
              href="mailto:atikshariaropu@gmail.com"
              className="p-4 bg-slate-800 rounded-full hover:bg-pink-600 transition-all hover:scale-110 shadow-lg hover:shadow-pink-500/50"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg hover:shadow-purple-500/50"
            >
              Contact Me
            </button>
            <a
              href="\CV\Atik_Shahria_Opu.pdf"
              download
              className="px-10 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/20 transition-all flex items-center gap-2 hover:scale-105 text-lg shadow-lg hover:shadow-cyan-500/50"
            >
              <Download size={22} /> Get Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
