import React from "react";

const Skills = () => {
  const skills = [
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "C/C++", icon: "C++", color: "from-blue-500 to-blue-700" },
    { name: "Firebase", icon: "🔥", color: "from-orange-400 to-yellow-500" },
    { name: "CMS Tools", icon: "📝", color: "from-red-400 to-orange-500" },
    { name: "AI Tools", icon: "🤖", color: "from-purple-400 to-pink-500" },
    { name: "Algorithms", icon: "📊", color: "from-indigo-400 to-purple-500" },
    { name: "Data Structure", icon: "🧩", color: "from-pink-400 to-rose-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-cyan-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="text-5xl mb-3 font-bold filter drop-shadow-lg">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
