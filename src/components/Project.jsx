import { projectData } from "./ProjectData";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="min-h-screen py-10 px-6
      bg-gray-50 dark:bg-gray-950
      transition-all duration-300">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-12 underline
        text-blue-700 dark:text-blue-400">
        My Projects
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

        {projectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="block">

            {/* CARD */}
            <div className="rounded-xl p-5 shadow-lg border transition-all duration-300
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-700
              hover:shadow-blue-400/20 hover:scale-105">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4
                  border border-gray-200 dark:border-gray-700"
              />

              <h2 className="text-xl font-semibold mb-2
                text-blue-700 dark:text-blue-300">
                {project.title}
              </h2>

              <p className="text-sm mb-4
                text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded border
                      bg-gray-100 dark:bg-gray-800
                      text-blue-700 dark:text-blue-300
                      border-gray-300 dark:border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>

              {/* FOOTER */}
              <div className="flex justify-between mt-3">
                <span className="font-semibold cursor-pointer
                  text-blue-600 dark:text-blue-400 hover:underline">
                  View More →
                </span>
              </div>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default Project;