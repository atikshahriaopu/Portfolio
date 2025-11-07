import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "UITS ACI Student Chapter Website",
      description:
        "Comprehensive web platform for UITS ACI Student Chapter - a professional civil engineering community website.",
      tech: ["React.js", "Firebase", "Sanity CMS", "Tailwind CSS"],
      link: "https://aciuits.netlify.app",
      icon: "🏗️",
    },
    {
      title: "PetPals",
      description:
        "Animal information web application with API integration, authentication, and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
      link: "#",
      icon: "🐾",
    },
  ];

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-cyan-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg mb-4">
              More projects coming soon...
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-500/30">
              <span className="text-purple-300">
                🚀 Currently building amazing things
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:atikshahriaopu@gmail.com"
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-pink-500 transition-all hover:scale-105"
            >
              <Mail size={40} className="mx-auto mb-4 text-pink-400" />
              <h3 className="text-lg font-semibold mb-2">Email Me</h3>
              <p className="text-gray-400">atikshahriaopu@gmail.com</p>
            </a>

            <a
              href="tel:+8801645970035"
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-cyan-500 transition-all hover:scale-105"
            >
              <div className="text-4xl mx-auto mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Call Me</h3>
              <p className="text-gray-400">+88 01645970035</p>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/atikopu"
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
    </>
  );
};

export default Projects;
