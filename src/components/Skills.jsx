import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, 
  FaTerminal, FaCode, FaBrain, FaServer, FaRocket 
} from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const blinkOnHover = "group-hover:animate-pulse";

  return (
    <div className="min-h-screen px-6 py-20 transition-all duration-500 md:px-20 bg-blue-50 dark:bg-gray-950 text-slate-800 dark:text-slate-200">
      
      {/* 1. HEADER SECTION */}
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Expertise & <span className="text-blue-600 dark:text-blue-500">Specializations</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
          A detailed breakdown of my engineering capabilities, core logic fundamentals, 
          and my current trajectory into Full-Stack and AI systems.
        </p>
      </header>

      {/* 2. PRIMARY SKILLS: Bento Grid Style */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* FRONTEND CARD */}
        <div className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center gap-2 mb-6 text-blue-600 font-semibold text-xs tracking-wider uppercase">
            <FaCode size={14}/> Client-Side Engineering
          </div>
          <h2 className="mb-4 text-2xl font-semibold">Frontend Development</h2>
          <div className={`flex flex-wrap gap-4 mb-8 text-3xl ${blinkOnHover}`}>
            <FaHtml5 className="text-orange-600" />
            <FaCss3Alt className="text-blue-600" />
            <FaJs className="text-yellow-400" />
            <FaReact className="text-cyan-400" />
            <SiTailwindcss className="text-sky-400" />
          </div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I specialize in building modern, responsive interfaces using **React** and **Tailwind CSS**. 
            My focus is on creating reusable components and a clean architecture that ensures 
            scalability and high performance across all devices.
          </p>
        </div>

        {/* LOGIC CARD */}
        <div className="group p-8 rounded-[2.5rem]  bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center gap-2 mb-6 text-purple-600 font-semibold text-xs tracking-wider uppercase">
            <FaTerminal size={14}/> Computational Logic
          </div>
          <h2 className="mb-4 text-2xl font-semibold">Core Programming</h2>
          <div className={`flex gap-4 mb-8 font-mono font-bold text-purple-600 dark:text-purple-400 ${blinkOnHover}`}>
            <span>C</span> <span>Java</span> <span>Python</span>
          </div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Beyond tools, I prioritize strong fundamentals in **Data Structures and Algorithms (DSA)**. 
            I practice daily problem-solving to refine my logic-building capabilities, ensuring 
            that the code I write is not just functional, but efficient.
          </p>
        </div>

        {/* WORKFLOW CARD */}
        <div className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center gap-2 mb-6 text-orange-600 font-semibold text-xs tracking-wider uppercase">
            <FaGitAlt size={14}/> Environment
          </div>
          <h2 className="mb-4 text-2xl font-semibold">Dev Ecosystem</h2>
          <div className={`flex items-center gap-4 mb-8 ${blinkOnHover}`}>
            <FaGitAlt size={30} className="text-orange-600" />
            <span className="font-bold tracking-tight">Git & GitHub</span>
          </div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I utilize **Git** for version control and project management, maintaining a 
            consistent workflow by regularly pushing projects to **GitHub**. This ensures 
            collaborative readiness and clean history tracking for every application I build.
          </p>
        </div>
      </div>

      {/* 3. FUTURE LEARNING SECTION */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-center text-xl font-extrabold uppercase tracking-[0.2em] text-orange-600 mb-12">
          Ongoing Specializations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BACKEND LEARNING */}
          <div className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <FaServer className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Full-Stack Backend</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Currently mastering **Node.js, Express.js, and MongoDB**. My goal is to build 
              production-ready full-stack applications, handling everything from secure 
              API server logic to complex database management and integration.
            </p>
            <div className={`flex gap-6 ${blinkOnHover}`}>
              <SiNodedotjs size={32} className="text-green-600" /> 
              <SiExpress size={32} className="text-gray-600 dark:text-slate-200" /> 
              <SiMongodb size={32} className="text-green-500" />
            </div>
            <FaRocket className="absolute -bottom-4 -right-4 text-blue-200 dark:text-slate-800 opacity-20 group-hover:rotate-12 transition-transform duration-700" size={150} />
          </div>

          {/* AI LEARNING */}
          <div className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <FaBrain className="text-purple-600" size={28} />
              <h3 className="text-2xl font-semibold">AI & Agentic Systems</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Exploring the frontier of **Large Language Models (LLMs)** and AI Agents. 
              I am focused on learning prompt engineering and automation to integrate 
              intelligent agentic behaviors into modern software solutions.
            </p>
            <div className={`inline-flex px-4 py-1 rounded-full border border-purple-200 dark:border-purple-800 text-xs font-bold uppercase tracking-wider text-purple-600 ${blinkOnHover}`}>
              Future-Proofing
            </div>
            <FaBrain className="absolute -bottom-4 -right-4 text-blue-200 dark:text-slate-800 opacity-20 group-hover:rotate-12 transition-transform duration-700" size={150} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;