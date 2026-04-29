import { useParams, Link } from "react-router-dom";
import { projectData } from "./ProjectData";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-950">
        <h1 className="text-2xl font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-8 py-4 rounded-2xl border border-red-200 dark:border-red-800">
          Project not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50 dark:bg-gray-950 transition-all duration-500 md:px-20">
      
      {/* 1. BACK NAVIGATION */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          to="/project"
          className="group inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* 2. MAIN CASE STUDY CONTAINER */}
      <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        
        {/* HERO IMAGE SECTION (FIXED: Added object-top and reduced hover scale) */}
        <div className="relative group overflow-hidden h-[350px] bg-slate-100 dark:bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          {/* Subtle bottom gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Smaller, clean title overlay */}
          <div className="absolute bottom-6 left-6 px-5 py-3 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-12">
          
          {/* DESCRIPTION BLOCK */}
          <div className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4">
              Overview
            </h2>
            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium italic border-l-4 border-blue-600 pl-6 py-2">
              {project.description}
            </p>
          </div>

          {/* TECH STACK SECTION */}
          <div className="mb-12">
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* KEY FEATURES SECTION */}
          <div className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
              Key Features & Functionality
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 transition-all"
                >
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium italic group-hover:text-slate-900 dark:group-hover:text-white">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            >
              <FaExternalLinkAlt /> Launch Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:-translate-y-1 transition-all"
            >
              <FaGithub size={20} /> View Source Code
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;