import React from "react";

const CodeBlock = () => {
  return (
    <div className="bg-solarized-base02/90 rounded-lg p-6 border border-solarized-base01 font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-solarized-red"></div>
        <div className="w-3 h-3 rounded-full bg-solarized-yellow"></div>
        <div className="w-3 h-3 rounded-full bg-solarized-green"></div>
      </div>
      <pre className="overflow-x-auto">
        <code>
          <span className="text-solarized-blue">#include</span>
          <span className="text-solarized-yellow">&lt;bits/stdc++.h&gt;</span>
          {"\n"}
          <span className="text-solarized-blue">using namespace</span>{" "}
          <span className="text-solarized-cyan">std</span>;{"\n\n"}
          <span className="text-solarized-blue">class</span>{" "}
          <span className="text-solarized-cyan">Coder</span> {"{\n"}
          <span className="text-solarized-blue">public</span>:{"\n"}
          {"    "}
          <span className="text-solarized-cyan">string</span>{" "}
          <span className="text-solarized-green">name</span> ={" "}
          <span className="text-solarized-yellow">"Atik Shahria Opu"</span>;{"\n"}
          {"    "}
          <span className="text-solarized-cyan">vector</span>
          {"<"}
          <span className="text-solarized-cyan">string</span>
          {">"} <span className="text-solarized-green">skills</span> = {"{\n"}
          {"        "}
          <span className="text-solarized-yellow">"C++"</span>,{" "}
          <span className="text-solarized-yellow">"C"</span>,{"\n"}
          {"        "}
          <span className="text-solarized-yellow">"Node.js"</span>,{" "}
          <span className="text-solarized-yellow">"MongoDB"</span>,{"\n"}
          {"        "}
          <span className="text-solarized-yellow">"JavaScript"</span>
          {"\n"}
          {"    "}
          {"};"}
          {"\n"}
          {"    "}
          <span className="text-solarized-cyan">bool</span>{" "}
          <span className="text-solarized-green">hardWorker</span> ={" "}
          <span className="text-solarized-orange">true</span>;{"\n"}
          {"    "}
          <span className="text-solarized-cyan">bool</span>{" "}
          <span className="text-solarized-green">quickLearner</span> ={" "}
          <span className="text-solarized-orange">true</span>;{"\n"}
          {"    "}
          <span className="text-solarized-cyan">bool</span>{" "}
          <span className="text-solarized-green">problemSolver</span> ={" "}
          <span className="text-solarized-orange">true</span>;{"\n\n"}
          {"    "}
          <span className="text-solarized-cyan">bool</span>{" "}
          <span className="text-solarized-green">isHireable</span>() {"{\n"}
          {"        "}
          <span className="text-solarized-blue">return</span>{" "}
          <span className="text-solarized-green">hardWorker</span> &&{"\n"}
          {"               "}
          <span className="text-solarized-green">problemSolver</span> &&{"\n"}
          {"               "}
          <span className="text-solarized-green">skills</span>.
          <span className="text-solarized-green">size</span>() {"> "}
          <span className="text-solarized-orange">3</span>;{"\n"}
          {"    "}
          {"}\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
