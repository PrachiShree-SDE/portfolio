import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div
      className="min-h-screen px-6 md:px-20 py-14
      bg-gradient-to-b from-blue-50 via-white to-blue-50
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      text-gray-900 dark:text-gray-100 transition-all duration-300"
    >
      {/* TITLE */}
      <h1
        className="text-5xl font-extrabold text-center
        text-blue-700 dark:text-blue-400 mb-14"
      >
        Skills & Learning Journey
      </h1>

      {/* SKILLS SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* FRONTEND */}
        <div
          className="rounded-2xl p-6 shadow-md border transition
          bg-white dark:bg-gray-900
          border-gray-200 dark:border-gray-800
          hover:border-blue-500 dark:hover:border-blue-500"
        >
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
            Frontend Development 
          </h2>

          <div className="flex items-center gap-4 text-3xl mb-4">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJs className="text-yellow-400" />
            <FaReact className="text-cyan-500" />
            <SiTailwindcss className="text-sky-400" /> {/* Tailwind added */}
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            I specialize in building modern, responsive UI using React, JavaScript,
            HTML, CSS, and Tailwind CSS.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Focused on reusable components and clean architecture.
          </p>
        </div>

        {/* PROGRAMMING */}
        <div
          className="rounded-2xl p-6 shadow-md border transition
          bg-white dark:bg-gray-900
          border-gray-200 dark:border-gray-800
          hover:border-purple-500"
        >
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-3">
            Programming Languages 
          </h2>

          <div className="flex gap-6 mb-4 font-bold text-lg">
            <span className="text-blue-600 dark:text-blue-400">C</span>
            <span className="text-purple-600 dark:text-purple-400">Java</span>
            <span className="text-green-600 dark:text-green-400">Python</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Strong fundamentals in DSA and problem solving.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Practicing coding daily to improve logic building.
          </p>
        </div>

        {/* TOOLS */}
        <div
          className="rounded-2xl p-6 shadow-md border transition
          bg-white dark:bg-gray-900
          border-gray-200 dark:border-gray-800
          hover:border-orange-500"
        >
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
            Development Tools 
          </h2>

          <div className="flex items-center gap-4 text-3xl mb-4">
            <FaGitAlt className="text-orange-500" />
            <span className="font-bold text-lg">Git & GitHub</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Version control and project management using Git.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Regularly pushing projects on GitHub.
          </p>
        </div>
      </div>

      {/* LEARNING SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2
          className="text-4xl font-bold text-center
          text-blue-700 dark:text-blue-400 mb-10"
        >
          What I'm Currently Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BACKEND */}
          <div
            className="p-8 rounded-2xl shadow-md border transition
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Full Stack Backend Development
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Learning Node.js, Express.js, and MongoDB.
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              APIs, server logic, database handling.
            </p>

            <p className="mt-3 text-blue-600 dark:text-blue-400 font-semibold">
              Goal: Production-ready full-stack apps.
            </p>
          </div>

          {/* AI SECTION */}
          <div
            className="p-8 rounded-2xl shadow-md border transition
            bg-white dark:bg-gray-900
            border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              AI & Agentic Systems
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Exploring LLMs, LangChain, and AI agents.
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Learning prompt engineering and automation.
            </p>

            <p className="mt-3 text-purple-600 dark:text-purple-400 font-semibold">
              Goal: Build AI-powered applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;