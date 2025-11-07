import React from "react";
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
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
  );
};

export default Education;
