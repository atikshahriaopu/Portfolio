const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-solarized-cyan to-solarized-blue bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-solarized-base02/90 rounded-lg p-6 sm:p-8 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:bg-solarized-blue/10">
          <p className="text-sm sm:text-base text-solarized-base0 leading-relaxed mb-4 sm:mb-6">
            I&apos;m{" "}
            <span className="text-solarized-cyan font-semibold">
              Atik Shahria Opu
            </span>
            , a passionate software developer and competitive programmer from
            Dhaka, Bangladesh. Currently pursuing my BSc in Computer Science &
            Engineering at the University of Information Technology & Sciences
            (UITS), expected to graduate in 2026.
          </p>
          <p className="text-sm sm:text-base text-solarized-base0 leading-relaxed mb-4 sm:mb-6">
            With over{" "}
            <span className="text-solarized-cyan font-semibold">
              1200+ problems solved
            </span>{" "}
            across multiple platforms including Codeforces, LeetCode, CodeChef,
            UVA, LightOJ, SPOJ, and, CSS I&apos;ve honed my problem-solving
            skills through participation in{" "}
            <span className="text-solarized-cyan font-semibold">
              100+ programming contests
            </span>
            . My experience includes competing in ICPC Dhaka Regional
            Preliminaries and achieving top rankings in university contests.
          </p>
          <p className="text-sm sm:text-base text-solarized-base0 leading-relaxed">
            I specialize in building modern web applications using React,
            Node.js, and MongoDB, with a keen interest in AI-driven development
            and scalable architectures. Beyond coding, I&apos;m passionate about
            mentoring junior students in competitive programming and helping
            them develop strong algorithmic thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
