import React from "react";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";
import CodeBlock from "./CodeBlock";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="space-y-6 animate-fade-in">
          <p className="text-xl text-gray-300">Hello,</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            This is{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              ATIK SHAHRIA OPU
            </span>
            <br />
            I'm a Professional{" "}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Software Developer
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            I'm passionate about building modern web applications, exploring
            AI-driven development, and creating scalable digital solutions that
            make an impact.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/atikopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/atikshahriaopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://facebook.com/atikshahriaopu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-all hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:atikshahriaopu@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Contact Me
            </button>
            <a
              href="/Atik_Shahria_Opu.pdf"
              download
              className="px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/20 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Download size={20} /> Get Resume
            </a>
          </div>
        </div>

        {/* Right Side - Code Block */}
        <CodeBlock />
      </div>
    </section>
  );
};

export default Hero;
