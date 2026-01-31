const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-solarized-violet to-solarized-cyan bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-solarized-base02/90 rounded-lg p-6 sm:p-8 border border-solarized-base01 md:hover:border-solarized-cyan transition-all duration-500 md:hover:bg-solarized-cyan/10">
          <p className="text-sm sm:text-base text-solarized-base1 leading-relaxed mb-4 sm:mb-6">
            I&apos;m a{" "}
            <span className="text-solarized-cyan font-semibold">
              results-driven Full-Stack Developer
            </span>{" "}
            specializing in building scalable web applications with modern
            technologies. Currently pursuing BSc in Computer Science &
            Engineering at UITS (Expected graduation: 2026).
          </p>
          <p className="text-sm sm:text-base text-solarized-base1 leading-relaxed mb-4 sm:mb-6">
            <span className="text-solarized-cyan font-semibold">
              Technical Expertise:
            </span>{" "}
            Proficient in React.js, Node.js, Express.js, and MongoDB with
            hands-on experience in building RESTful APIs, implementing
            authentication systems, and integrating CMS platforms. Delivered
            multiple production-ready applications with responsive UI/UX and
            optimized performance.
          </p>
          <p className="text-sm sm:text-base text-solarized-base1 leading-relaxed mb-4 sm:mb-6">
            <span className="text-solarized-cyan font-semibold">
              Problem-Solving Track Record:
            </span>{" "}
            Solved 1200+ competitive programming problems across multiple
            platforms (Codeforces, LeetCode, CodeChef, SPOJ), demonstrating
            strong algorithmic thinking. Competed in 3 consecutive ICPC Dhaka
            Regional Preliminaries and ranked 6th in UITS Intra Contest among
            60+ teams, showcasing ability to perform under pressure.
          </p>
          <p className="text-sm sm:text-base text-solarized-base1 leading-relaxed">
            <span className="text-solarized-cyan font-semibold">
              Value Proposition:
            </span>{" "}
            I combine strong technical skills with proven problem-solving
            abilities to deliver efficient, maintainable solutions. My
            experience mentoring junior developers and competing in team-based
            contests demonstrates collaboration and communication skills
            essential for modern development teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
