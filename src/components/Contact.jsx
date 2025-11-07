import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="mb-12">
          <a
            href="mailto:atikshariaropu@gmail.com"
            className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-pink-500 transition-all hover:scale-105"
          >
            <Mail size={40} className="mx-auto mb-4 text-pink-400" />
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-gray-400">atikshahriaopu@gmail.com</p>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/atikshahriaopu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/atikshahriaopu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://facebook.com/atikshahriaopu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-full hover:bg-blue-500 transition-all hover:scale-110"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
