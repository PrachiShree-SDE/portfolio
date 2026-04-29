import { projectData } from "./ProjectData";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-blue-50 dark:bg-gray-950 transition-all duration-500 md:px-20">
      
      {/* 1. REFINED TITLE: Minimalist & Strong */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
          Project  <span className="text-blue-600 dark:text-blue-500">Gallery</span>
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">
          A showcase of my recent full-stack applications and engineering projects.
        </p>
      </div>

      {/* 2. GRID: Precise Spacing */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

        {projectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="group block">

            {/* CARD: Glassmorphism & Depth */}
            <div className="h-full rounded-[2rem] p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-3 overflow-hidden">
              
              {/* IMAGE: Refined with Hover Zoom */}
              <div className="overflow-hidden rounded-[1.6rem] h-48 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT AREA */}
              <div className="px-5 pb-6">
                <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm leading-relaxed mb-6 text-slate-500 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH STACK: Pill Style */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FOOTER: Minimalist Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                    Check it out →
                  </span>
                </div>
              </div>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default Project;