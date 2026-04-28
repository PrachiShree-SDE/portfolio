import { FaCode, FaUserAlt, FaLaptopCode, FaPaintBrush, FaPalette, FaBook } from "react-icons/fa";
import image from "../assets/image.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-6 transition">

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-300 mb-14">
        About Me
      </h1>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-slate-700 transition">

        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <img
            src={image}
            alt="profile"
            className="w-80 h-96 rounded-3xl object-cover shadow-xl border-4 border-blue-200 dark:border-slate-600"
          />

          {/* INTRO */}
          <div className="flex-1">

            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
              Hi, I'm Prachi Shree 
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-5">
              I am a passionate and detail-oriented{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                Frontend Developer
              </span>{" "}
              focused on building modern, responsive, and user-friendly web applications.
              I enjoy transforming ideas into real-world products using React.js, JavaScript, and Tailwind CSS.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My journey in web development started with curiosity, and today I enjoy building
              projects that solve real problems and improve user experience. I continuously
              learn new technologies and improve my skills with every project.
            </p>

            <a
              href="https://drive.google.com/file/d/1YrG33baDek4BmhmMSu0Twe2Pw3sxHw5p/view?usp=sharing"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            >
              View Resume
            </a>

          </div>
        </div>

        {/* WHAT I DO */}
        <div className="mt-14">

          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-8 text-center">
            What I Do
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-blue-50 dark:bg-slate-700 rounded-2xl border border-blue-100 dark:border-slate-600 shadow hover:shadow-lg transition">
              <FaLaptopCode className="text-blue-700 dark:text-blue-300 text-4xl mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Frontend Development
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I build responsive, fast, and scalable UI using React.js and modern CSS frameworks.
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-slate-700 rounded-2xl border border-blue-100 dark:border-slate-600 shadow hover:shadow-lg transition">
              <FaCode className="text-blue-700 dark:text-blue-300 text-4xl mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Clean Architecture
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I focus on writing reusable, maintainable, and structured code for scalability.
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-slate-700 rounded-2xl border border-blue-100 dark:border-slate-600 shadow hover:shadow-lg transition">
              <FaUserAlt className="text-blue-700 dark:text-blue-300 text-4xl mb-3" />
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                User Experience
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I design interfaces that are intuitive, clean, and user-friendly.
              </p>
            </div>

          </div>
        </div>

        {/* HOBBIES */}
        <div className="mt-14">

          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-8 text-center">
            Beyond Coding
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-2xl shadow hover:shadow-md transition">
              <FaPaintBrush className="text-blue-600 dark:text-blue-300 text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">
                Sketching
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I enjoy sketching portraits and creative illustrations in my free time.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-2xl shadow hover:shadow-md transition">
              <FaPalette className="text-blue-600 dark:text-blue-300 text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">
                Painting
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Painting helps me express creativity and maintain focus and calmness.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-2xl shadow hover:shadow-md transition">
              <FaBook className="text-blue-600 dark:text-blue-300 text-3xl mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">
                Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I love learning new technologies and improving my skills daily.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;