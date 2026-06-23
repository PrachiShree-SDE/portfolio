import {
  FaCode,
  FaUserAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaPalette,
  FaBook,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

import image from "../assets/image.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 px-4 sm:px-6 transition-all duration-500">

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-white mb-4">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h1>

        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">

        {/* MAIN SECTION */}

        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-[2.5rem] p-8 md:p-12 border border-blue-100 dark:border-slate-800 flex flex-col lg:flex-row items-center gap-12 hover:shadow-2xl transition-all duration-300">

          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>

            <img
              src={image}
              alt="Prachi Shree"
              className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-3xl object-cover shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Hi, I'm <span className="text-blue-600">Prachi Shree 👋</span>
            </h2>

            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
              Full Stack MERN Developer
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a passionate MERN Stack Developer focused on building
              modern, scalable, and user-friendly web applications.
              My expertise includes React.js, Redux Toolkit, Node.js,
              Express.js, MongoDB, REST APIs, JWT Authentication,
              JavaScript, Tailwind CSS, Git, and GitHub.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I enjoy developing complete end-to-end applications,
              from crafting beautiful user interfaces to designing
              secure backend systems and managing databases.
              I am constantly learning new technologies and improving
              my problem-solving skills to become a better software engineer.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-sm">
              My goal is to create impactful software solutions that solve
              real-world problems while delivering exceptional user experiences.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-4 py-4">

              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 text-center">
                <FaLayerGroup className="mx-auto text-blue-600 mb-2 text-xl" />

                <p className="text-xl font-black text-blue-900 dark:text-white">
                  MERN
                </p>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold dark:text-slate-400">
                  MongoDB • Express • React • Node
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 text-center">
                <FaCode className="mx-auto text-blue-600 mb-2 text-xl" />

                <p className="text-xl font-black text-blue-900 dark:text-white">
                  10+
                </p>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold dark:text-slate-400">
                  Full Stack Projects
                </p>
              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="https://drive.google.com/file/d/1f1idLARHhZ_66gaVYIZzcKjuFMLHkEfP/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
              >
                <FaLaptopCode />
                View Resume
              </a>

              <a
                href="https://github.com/PrachiShree-SDE"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
              >
                <FaExternalLinkAlt className="text-sm" />
                Visit GitHub
              </a>

            </div>

          </div>
        </div>

        {/* EXPERTISE */}

        <div className="space-y-8 pt-8">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white uppercase tracking-wider">
            Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <ServiceCard
              Icon={FaLaptopCode}
              title="Frontend Development"
              desc="Building modern, responsive and interactive applications using React.js, Redux Toolkit, JavaScript and Tailwind CSS."
            />

            <ServiceCard
              Icon={FaServer}
              title="Backend Development"
              desc="Creating scalable REST APIs with Node.js, Express.js, JWT Authentication, Middleware and MongoDB."
            />

            <ServiceCard
              Icon={FaDatabase}
              title="Full Stack Solutions"
              desc="Developing complete MERN applications with frontend, backend, database integration and deployment."
            />

          </div>
        </div>

        {/* TECH STACK */}

        <div className="space-y-8 pt-8">

          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white uppercase tracking-wider">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "React.js",
              "Redux Toolkit",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git & GitHub",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl text-center shadow-md border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-all"
              >
                <p className="font-bold text-slate-900 dark:text-white">
                  {tech}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* HOBBIES */}

        <div className="space-y-8 pt-8">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white uppercase tracking-wider">
            Creative Outlets
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <HobbyCard
              Icon={FaPaintBrush}
              title="Sketching"
              desc="Detailed portraits that reflect my focus on precision and creativity."
            />

            <HobbyCard
              Icon={FaPalette}
              title="Painting"
              desc="A creative activity that inspires my UI design and visual thinking."
            />

            <HobbyCard
              Icon={FaBook}
              title="Continuous Learning"
              desc="Exploring new technologies, frameworks and software development practices."
            />

          </div>
        </div>

      </div>
    </div>
  );
};

const ServiceCard = ({ Icon, title, desc }) => (
  <div className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-900 transition-all duration-300 text-center md:text-left">
    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform mx-auto md:mx-0">
      <Icon className="text-2xl text-blue-600" />
    </div>

    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h4>

    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

const HobbyCard = ({ Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-6 bg-blue-50/50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-blue-200 dark:hover:border-slate-700 transition-all">
    <Icon className="text-2xl text-blue-500 mt-1 flex-shrink-0" />

    <div>
      <h4 className="font-bold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        {desc}
      </p>
    </div>
  </div>
);

export default About;