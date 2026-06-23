import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaTerminal,
  FaCode,
  FaBrain,
  FaServer,
  FaRocket,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const hoverEffect = "group-hover:scale-110 transition-transform duration-300";

  return (
    <div className="min-h-screen px-6 py-20 md:px-20 bg-blue-50 dark:bg-gray-950 text-slate-800 dark:text-slate-200">
      {/* HEADER */}
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          My <span className="text-blue-600">Skills</span> & Expertise
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Full Stack MERN Developer specializing in building scalable web
          applications, backend APIs, and modern UI systems.
        </p>
      </header>

      {/* CORE SKILLS GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* FRONTEND */}
        <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 shadow hover:shadow-2xl transition">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <FaCode /> Frontend Development
          </div>

          <div className="flex flex-wrap gap-4 text-4xl mb-6">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJs className="text-yellow-400" />
            <FaReact className="text-cyan-400" />
            <SiTailwindcss className="text-sky-400" />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Strong in React.js, component-based architecture, hooks, and
            responsive UI design using Tailwind CSS and modern JavaScript
            (ES6+).
          </p>
        </div>

        {/* BACKEND */}
        <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 shadow hover:shadow-2xl transition">
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <FaServer /> Backend Development
          </div>

          <div className="flex flex-wrap gap-4 text-4xl mb-6">
            <SiNodedotjs className="text-green-500" />
            <SiExpress className="text-gray-500 dark:text-white" />
            <SiMongodb className="text-green-600" />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Experience building REST APIs using Node.js & Express.js with
            MongoDB for database design, authentication, and scalable backend
            architecture.
          </p>
        </div>

        {/* STATE MANAGEMENT */}
        <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 shadow hover:shadow-2xl transition">
          <div className="flex items-center gap-2 text-purple-600 mb-4">
            <SiRedux /> State Management
          </div>

          <div className="flex flex-wrap gap-4 text-4xl mb-6">
            <SiRedux className="text-purple-500" />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Skilled in Redux & Redux Toolkit for managing complex application
            state, API handling, and predictable data flow in large-scale React
            apps.
          </p>
        </div>
      </div>

      {/* EXTRA SKILLS */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        {/* DEV TOOLS */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow">
          <h2 className="text-xl font-bold mb-4">Dev Tools</h2>
          <div className="flex items-center gap-4 text-3xl">
            <FaGitAlt className="text-orange-600" />
            <FaTerminal className="text-gray-500" />
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Git, GitHub, CLI tools, debugging, and version control workflows.
          </p>
        </div>

        {/* PROGRAMMING FUNDAMENTALS */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow">
          <h2 className="text-xl font-bold mb-4">Programming Fundamentals</h2>
          <div className="flex gap-4 text-xl font-bold text-purple-600">
            <span>C++</span>
            <span>Java</span>
            <span>JavaScript</span>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Strong understanding of DSA, OOP, and problem-solving for efficient
            coding.
          </p>
        </div>
      </div>

      {/* LEARNING SECTION */}
      {/* LEARNING SECTION */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Currently Learning
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-4xl">
          {/* AI / AGENTIC AI */}
          <div className="flex flex-col items-center">
            <FaBrain className="text-purple-500" />
            <span className="text-xs mt-1">Agentic AI</span>
          </div>

          {/* TYPESCRIPT */}
          <div className="flex flex-col items-center">
            <span className="text-blue-600 font-bold text-2xl">TS</span>
            <span className="text-xs mt-1">TypeScript</span>
          </div>

          {/* NEXT.JS */}
          <div className="flex flex-col items-center">
            <span className="text-black dark:text-white font-bold text-2xl">
              N
            </span>
            <span className="text-xs mt-1">Next.js</span>
          </div>

          {/* PHP */}
          <div className="flex flex-col items-center">
            <span className="text-purple-700 font-bold text-2xl">PHP</span>
            <span className="text-xs mt-1">PHP</span>
          </div>

          {/* ROCKET ICON */}
          <div className="flex flex-col items-center">
            <FaRocket className="text-blue-500" />
            <span className="text-xs mt-1">Scaling Systems</span>
          </div>
        </div>

        <p className="mt-6 text-slate-500 dark:text-slate-400">
          Expanding into modern full-stack ecosystems including Next.js SSR
          apps, TypeScript safety, backend PHP systems, and Agentic AI workflows
          using LLM-powered automation.
        </p>
      </div>
    </div>
  );
};

export default Skills;
