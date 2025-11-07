import React from "react";

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
      link: "https://atikshahriaopu.github.io/PetPals/",
      icon: "🐾",
    },
  ];

  return (
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
  );
};

export default Projects;
