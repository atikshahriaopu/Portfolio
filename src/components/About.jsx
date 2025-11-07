import React from "react";

const About = () => {
  return (
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
              1200+ problems solved
            </span>{" "}
            across multiple platforms including Codeforces, LeetCode, CodeChef,
            UVA, LightOJ, SPOJ, and, CSS I've honed my problem-solving skills
            through participation in{" "}
            <span className="text-purple-400 font-semibold">
              100+ programming contests
            </span>
            . My experience includes competing in ICPC Dhaka Regional
            Preliminaries and achieving top rankings in university contests.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in building modern web applications using React,
            Node.js, and MongoDB, with a keen interest in AI-driven development
            and scalable architectures. Beyond coding, I'm passionate about
            mentoring junior students in competitive programming and helping
            them develop strong algorithmic thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
