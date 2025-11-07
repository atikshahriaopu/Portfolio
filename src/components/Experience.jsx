import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "ICPC Dhaka Regional Preliminary 2024",
      team: "UITS AIMERS",
      icon: "🏆",
      year: "2024",
    },
    {
      title: "ICPC Dhaka Regional Preliminary 2023",
      team: "UITS noob3Programmers",
      icon: "🏆",
      year: "2023",
    },
    {
      title: "UITS Intra Programming Contest",
      team: "Ranked 6th out of 60+ teams",
      icon: "🥈",
      year: "2025",
    },
    {
      title: "Competitive Programming Mentor",
      team: "Mentored junior students in algorithms",
      icon: "👨‍🏫",
      year: "Ongoing",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Achievements & Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-pink-500 transition-all hover:scale-102"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{exp.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {exp.title}
                    </h3>
                    <span className="text-purple-400 font-semibold">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-2">{exp.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30">
          <p className="text-center text-lg text-gray-300">
            <span className="text-cyan-400 font-bold">650+</span> problems
            solved on Codeforces •
            <span className="text-pink-400 font-bold"> 1200+</span> total
            problems across platforms •
            <span className="text-green-400 font-bold"> 100+</span> online
            contests participated
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
