import { useParams, Link } from "react-router-dom";
import { projectData } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <h1 className="text-center text-2xl text-red-500 mt-20">
        Project not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4
      bg-gray-50 dark:bg-gray-950 transition-all duration-300">

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border
        bg-white dark:bg-gray-900
        border-gray-200 dark:border-gray-700">

        {/* BACK BUTTON */}
        <div className="p-5">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 font-semibold hover:underline
              text-blue-600 dark:text-blue-400"
          >
            <span className="text-2xl">←</span> Back to Projects
          </Link>
        </div>

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-8">

          {/* TITLE */}
          <h1 className="text-5xl font-extrabold mb-3
            text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg leading-relaxed mb-8
            text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {/* TECH STACK */}
          <h2 className="text-2xl font-bold mb-3
            text-blue-700 dark:text-blue-400">
            Tech Stack ⚡
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1 rounded-full font-semibold transition
                  bg-gray-100 dark:bg-gray-800
                  text-blue-700 dark:text-blue-300
                  border border-gray-300 dark:border-gray-700
                  hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* FEATURES */}
          <h2 className="text-2xl font-bold mb-3
            text-blue-700 dark:text-blue-400">
            Key Features 
          </h2>

          <ul className="grid md:grid-cols-2 gap-3 mb-10">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="p-3 rounded-lg border transition
                  bg-gray-100 dark:bg-gray-800
                  border-gray-200 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:shadow-md"
              >
                ✔ {feature}
              </li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href={project.live}
              target="_blank"
              className="px-6 py-3 rounded-xl font-bold shadow-md transition
                bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
            >
              🚀 Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="px-6 py-3 rounded-xl font-bold shadow-md transition
                bg-gray-200 dark:bg-gray-700
                text-gray-900 dark:text-white
                hover:bg-gray-300 dark:hover:bg-gray-800
                hover:scale-105"
            >
              💻 GitHub
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;