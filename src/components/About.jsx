import React from "react";
import { BookOpen } from "lucide-react";

const About = () => {
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
    <>
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Atik Shahria Opu
              </span>
              , a passionate software developer and competitive programmer from
              Dhaka, Bangladesh. Currently pursuing my BSc in Computer Science &
              Engineering at the University of Information Technology & Sciences
              (UITS), expected to graduate in 2026.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With over{" "}
              <span className="text-pink-400 font-semibold">
                1000+ problems solved
              </span>{" "}
              across multiple platforms including Codeforces, LeetCode, and
              VJudge, I've honed my problem-solving skills through participation
              in{" "}
              <span className="text-purple-400 font-semibold">
                100+ programming contests
              </span>
              . My experience includes competing in ICPC Dhaka Regional
              Preliminaries and achieving top rankings in university contests.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building modern web applications using React,
              Node.js, and MongoDB, with a keen interest in AI-driven
              development and scalable architectures. Beyond coding, I'm
              passionate about mentoring junior students in competitive
              programming and helping them develop strong algorithmic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              <span className="text-pink-400 font-bold"> 1000+</span> total
              problems across platforms •
              <span className="text-green-400 font-bold"> 60+</span> online
              contests participated
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg">
                <BookOpen size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  BSc in Computer Science & Engineering
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  University of Information Technology & Sciences (UITS)
                </p>
                <p className="text-gray-300 mb-4">
                  Dhaka, Bangladesh • Expected Graduation: 2026
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 bg-cyan-600/30 rounded-full text-sm">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 bg-pink-600/30 rounded-full text-sm">
                    OOP
                  </span>
                  <span className="px-3 py-1 bg-blue-600/30 rounded-full text-sm">
                    Software Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
