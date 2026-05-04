import { useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "./ProjectData";
import { FaArrowRight } from "react-icons/fa";

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  // RESPONSIVE CARDS COUNT
  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // update on resize
  useState(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projectData.length - itemsPerView);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleProjects = projectData.slice(index, index + itemsPerView);

  return (
    <section className="relative bg-blue-50 dark:bg-slate-900 py-24 px-4 sm:px-6">

      {/* TITLE */}
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-14 text-blue-900 dark:text-blue-300">
        My Projects
      </h2>

      {/* WRAPPER */}
      <div className="relative max-w-7xl mx-auto flex items-center">

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-all duration-700">

          {visibleProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`} key={project.id} 
              className="group"
            >
              <div className="h-full bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/30 dark:border-slate-700 hover:-translate-y-2 transition-all duration-500">

                {/* IMAGE */}
                <div className="h-48 flex items-center justify-center bg-white dark:bg-slate-900 p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full object-contain group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description.slice(0, 90)}...
                  </p>
              
                    <button className="w-full mt-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                    View Project
                  </button>
                  
                </div>
                

              </div>
            </Link>
          ))}

        </div>

        {/* BIG RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute -right-2 sm:-right-6 lg:-right-10 top-1/2 -translate-y-1/2
                     w-14 h-14 sm:w-16 sm:h-16 rounded-full 
                     bg-white/30 dark:bg-slate-700/40 
                     backdrop-blur-2xl 
                     border border-white/40 dark:border-slate-600
                     shadow-2xl
                     flex items-center justify-center
                     hover:scale-110 active:scale-95
                     transition-all duration-300"
        >
          <FaArrowRight className="text-xl sm:text-2xl text-blue-700 dark:text-blue-300" />
        </button>

      </div>
    </section>
  );
};

export default ProjectCarousel;