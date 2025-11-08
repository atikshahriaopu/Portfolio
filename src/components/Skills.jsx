import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      tags: ["C", "C++", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "cyan-500/50",
    },
    {
      category: "Frameworks",
      icon: "🧩",
      tags: ["Node.js", "React"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple-500/50",
    },
    {
      category: "Database",
      icon: "🗄️",
      tags: ["MongoDB", "Firebase"],
      gradient: "from-green-500 to-emerald-500",
      glowColor: "green-500/50",
    },
    {
      category: "Domain",
      icon: "🎓",
      tags: ["OOP", "Algorithms", "Problem Solving", "DSA"],
      gradient: "from-orange-500 to-red-500",
      glowColor: "orange-500/50",
    },
    {
      category: "Tools",
      icon: "🛠️",
      tags: ["CMS Tools", "AI Tools"],
      gradient: "from-indigo-500 to-blue-500",
      glowColor: "indigo-500/50",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const getShadowColor = () => {
              if (category.gradient.includes("blue-500")) {
                return "0 25px 50px -12px rgba(6, 182, 212, 0.5)";
              } else if (category.gradient.includes("purple-500")) {
                return "0 25px 50px -12px rgba(168, 85, 247, 0.5)";
              } else if (category.gradient.includes("green-500")) {
                return "0 25px 50px -12px rgba(34, 197, 94, 0.5)";
              } else if (category.gradient.includes("orange-500")) {
                return "0 25px 50px -12px rgba(249, 115, 22, 0.5)";
              } else {
                return "0 25px 50px -12px rgba(99, 102, 241, 0.5)";
              }
            };

            return (
              <div
                key={index}
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 
                  hover:border-transparent transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = getShadowColor();
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg`}
                  >
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.category}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 rounded-full text-xs font-medium 
                        bg-slate-700/50 text-slate-200 border border-slate-600/50
                        hover:border-transparent
                        transition-all duration-300 cursor-default hover:scale-105"
                        onMouseEnter={(e) => {
                          const gradientColors = category.gradient.includes(
                            "blue-500"
                          )
                            ? {
                                gradient: "#3b82f6, #06b6d4",
                                shadow:
                                  "0 10px 25px -5px rgba(6, 182, 212, 0.8), 0 4px 10px -2px rgba(6, 182, 212, 0.5)",
                              }
                            : category.gradient.includes("purple-500")
                            ? {
                                gradient: "#a855f7, #ec4899",
                                shadow:
                                  "0 10px 25px -5px rgba(168, 85, 247, 0.8), 0 4px 10px -2px rgba(168, 85, 247, 0.5)",
                              }
                            : category.gradient.includes("green-500")
                            ? {
                                gradient: "#22c55e, #10b981",
                                shadow:
                                  "0 10px 25px -5px rgba(34, 197, 94, 0.8), 0 4px 10px -2px rgba(34, 197, 94, 0.5)",
                              }
                            : category.gradient.includes("orange-500")
                            ? {
                                gradient: "#f97316, #ef4444",
                                shadow:
                                  "0 10px 25px -5px rgba(249, 115, 22, 0.8), 0 4px 10px -2px rgba(249, 115, 22, 0.5)",
                              }
                            : {
                                gradient: "#6366f1, #3b82f6",
                                shadow:
                                  "0 10px 25px -5px rgba(99, 102, 241, 0.8), 0 4px 10px -2px rgba(99, 102, 241, 0.5)",
                              };

                          e.currentTarget.style.background = `linear-gradient(to right, ${gradientColors.gradient})`;
                          e.currentTarget.style.boxShadow =
                            gradientColors.shadow;
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.color = "";
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
