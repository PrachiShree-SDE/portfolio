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
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Currently Learning 🚀
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Continuously expanding my skill set by exploring modern web
            technologies, AI-powered workflows, and scalable application
            architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Agentic AI */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaBrain className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Agentic AI</h3>
            <p className="text-sm text-slate-500 mt-2">
              Building intelligent workflows with LLMs, tools, and autonomous
              agents.
            </p>
          </div>

          {/* TypeScript */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-4">TS</div>
            <h3 className="font-semibold text-lg">TypeScript</h3>
            <p className="text-sm text-slate-500 mt-2">
              Writing scalable and type-safe applications for better
              maintainability.
            </p>
          </div>

          {/* Next.js */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-5xl font-bold dark:text-white mb-4">N</div>
            <h3 className="font-semibold text-lg">Next.js</h3>
            <p className="text-sm text-slate-500 mt-2">
              Learning SSR, SSG, API routes, and full-stack React development.
            </p>
          </div>

          {/* PHP */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-5xl font-bold text-purple-600 mb-4">PHP</div>
            <h3 className="font-semibold text-lg">PHP</h3>
            <p className="text-sm text-slate-500 mt-2">
              Exploring backend development concepts and server-side
              architecture.
            </p>
          </div>

          {/* Scaling Systems */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaRocket className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">System Design</h3>
            <p className="text-sm text-slate-500 mt-2">
              Understanding scalable architectures, performance optimization,
              and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
