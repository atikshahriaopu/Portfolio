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
          <span className="text-purple-400">#include</span>
          <span className="text-yellow-300">&lt;bits/stdc++.h&gt;</span>
          {"\n"}
          <span className="text-purple-400">using namespace</span>{" "}
          <span className="text-cyan-400">std</span>;{"\n\n"}
          <span className="text-purple-400">class</span>{" "}
          <span className="text-cyan-400">Coder</span> {"{\n"}
          <span className="text-purple-400">public</span>:{"\n"}
          {"    "}
          <span className="text-cyan-400">string</span>{" "}
          <span className="text-green-400">name</span> ={" "}
          <span className="text-yellow-300">"Atik Shahria Opu"</span>;{"\n"}
          {"    "}
          <span className="text-cyan-400">vector</span>
          {"<"}
          <span className="text-cyan-400">string</span>
          {">"} <span className="text-green-400">skills</span> = {"{\n"}
          {"        "}
          <span className="text-yellow-300">"C++"</span>,{" "}
          <span className="text-yellow-300">"C"</span>,{"\n"}
          {"        "}
          <span className="text-yellow-300">"Node.js"</span>,{" "}
          <span className="text-yellow-300">"MongoDB"</span>,{"\n"}
          {"        "}
          <span className="text-yellow-300">"JavaScript"</span>
          {"\n"}
          {"    "}
          {"};"}
          {"\n"}
          {"    "}
          <span className="text-cyan-400">bool</span>{" "}
          <span className="text-green-400">hardWorker</span> ={" "}
          <span className="text-orange-400">true</span>;{"\n"}
          {"    "}
          <span className="text-cyan-400">bool</span>{" "}
          <span className="text-green-400">quickLearner</span> ={" "}
          <span className="text-orange-400">true</span>;{"\n"}
          {"    "}
          <span className="text-cyan-400">bool</span>{" "}
          <span className="text-green-400">problemSolver</span> ={" "}
          <span className="text-orange-400">true</span>;{"\n\n"}
          {"    "}
          <span className="text-cyan-400">bool</span>{" "}
          <span className="text-green-400">isHireable</span>() {"{\n"}
          {"        "}
          <span className="text-purple-400">return</span>{" "}
          <span className="text-green-400">hardWorker</span> &&{"\n"}
          {"               "}
          <span className="text-green-400">problemSolver</span> &&{"\n"}
          {"               "}
          <span className="text-green-400">skills</span>.
          <span className="text-green-400">size</span>() {"> "}
          <span className="text-orange-400">3</span>;{"\n"}
          {"    "}
          {"}\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
