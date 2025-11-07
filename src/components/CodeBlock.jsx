import React from "react";

const CodeBlock = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="overflow-x-auto">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-400">coder</span> = {"{\n"}
          {"  "}
          <span className="text-green-400">name</span>:{" "}
          <span className="text-yellow-300">'Atik Shahria Opu'</span>,{"\n"}
          {"  "}
          <span className="text-green-400">skills</span>: [{"\n"}
          {"    "}
          <span className="text-yellow-300">'React'</span>,{" "}
          <span className="text-yellow-300">'Next.js'</span>,{"\n"}
          {"    "}
          <span className="text-yellow-300">'Node.js'</span>,{" "}
          <span className="text-yellow-300">'MongoDB'</span>,{"\n"}
          {"    "}
          <span className="text-yellow-300">'Tailwind'</span>,{" "}
          <span className="text-yellow-300">'Docker'</span>,{"\n"}
          {"    "}
          <span className="text-yellow-300">'AI Tools'</span>
          {"\n"}
          {"  "}],{"\n"}
          {"  "}
          <span className="text-green-400">hardWorker</span>:{" "}
          <span className="text-orange-400">true</span>,{"\n"}
          {"  "}
          <span className="text-green-400">quickLearner</span>:{" "}
          <span className="text-orange-400">true</span>,{"\n"}
          {"  "}
          <span className="text-green-400">problemSolver</span>:{" "}
          <span className="text-orange-400">true</span>,{"\n"}
          {"  "}
          <span className="text-green-400">hireable</span>:{" "}
          <span className="text-purple-400">function</span>() {"{\n"}
          {"    "}
          <span className="text-purple-400">return</span>{" "}
          <span className="text-cyan-400">this</span>.
          <span className="text-green-400">hardWorker</span> &&{"\n"}
          {"           "}
          <span className="text-cyan-400">this</span>.
          <span className="text-green-400">problemSolver</span> &&{"\n"}
          {"           "}
          <span className="text-cyan-400">this</span>.
          <span className="text-green-400">skills</span>.
          <span className="text-green-400">length</span> {"> "}5;{"\n"}
          {"  "}
          {"}\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
