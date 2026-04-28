import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// assets imports
import image from "../assets/image.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import about from "../assets/about.png";
import exp from "../assets/exp.svg";
import location from "../assets/location.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import git from "../assets/git.png";
import textutil from "../assets/textutil.png";
import newsmonkey from "../assets/newsmonkey.png";
import inotebook from "../assets/inotebook.png";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import Footer from "./Footer";

const Body = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6dmxmi",
        "template_811h7hi",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="bg-blue-100 dark:bg-slate-900 transition-colors duration-300">

      {/* HERO SECTION */}
      <div className="pt-10 flex justify-around bg-blue-100 dark:bg-slate-900 transition">
        <div className="m-10 p-5">
          <h3 className="font-bold text-2xl text-blue-800 dark:text-blue-300">
            Hi, I'm
          </h3>

          <h1 className="font-bold text-5xl text-blue-950 dark:text-white py-2">
            Prachi Shree
          </h1>

          <h2 className="font-semibold text-3xl text-blue-800 dark:text-blue-300 pb-2">
            Frontend Developer
          </h2>

          <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
            I build responsive and user-friendly website with modern technologies.
          </p>

          <div className="py-3">
            <Link to="/contact">
              <button className="border px-6 py-2 bg-blue-500 rounded-full text-white font-bold mr-3">
                Hire Me
              </button>
            </Link>

            <Link to="/project">
              <button className="border border-gray-800 dark:border-gray-400 px-4 py-2 rounded-full font-bold text-black dark:text-white">
                View Project
              </button>
            </Link>
          </div>

          <div className="py-5 flex gap-3">

  <a href="https://github.com/PrachiShree-SDE" target="_blank">
    <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-md">
      <img src={github} className="w-6 h-6 dark:invert" />
    </div>
  </a>

  <a href="https://www.linkedin.com/in/prachishree111/" target="_blank">
    <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-md">
      <img src={linkedin} className="w-6 h-6 dark:invert" />
    </div>
  </a>

  <a href="https://x.com/prachishree15" target="_blank">
    <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-md">
      <img src={twitter} className="w-6 h-6 dark:invert" />
    </div>
  </a>

</div>
       </div>
        <img className="w-80 h-85 mt-3 rounded-full border-2 border-gray-500 bg-slate-400" src={image} />
      </div>

      {/* ABOUT */}
      <div className="flex gap-10 bg-blue-50 dark:bg-slate-800 transition">
        <img className="w-70 h-70 m-5" src={about} />

        <div className="ml-10 p-10">
          <h1 className="font-bold text-4xl text-blue-900 dark:text-blue-300 underline p-5">
            About Me
          </h1>

          <p className="font-semibold text-gray-800 dark:text-gray-300">
            I am a passionate Frontend Developer skilled in React.js and modern web technologies.
          </p>

          <div className="flex gap-10 mt-20">

            <div className="flex gap-2 border p-3 rounded-lg dark:border-gray-600">
              <img className="w-8 h-8" src={exp} />
              <h1 className="font-semibold text-black dark:text-white">
                Experience <br /> Fresher
              </h1>
            </div>

            <div className="flex gap-2 border p-3 rounded-lg dark:border-gray-600">
              <img className="w-8 h-8" src={location} />
              <h1 className="font-semibold text-black dark:text-white">
                Location <br /> India
              </h1>
            </div>

          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="bg-blue-100 dark:bg-slate-900 transition">
        <h1 className="text-center font-bold text-3xl text-blue-900 dark:text-blue-300 underline p-5">
          My Skills
        </h1>

        <div className="flex justify-around py-5 text-black dark:text-white">
          <div><img src={html} className="h-20 w-20" /><p>HTML</p></div>
          <div><img src={css} className="h-20 w-20" /><p>CSS</p></div>
          <div><img src={javascript} className="h-20 w-20" /><p>JS</p></div>
          <div><img src={react} className="h-20 w-20" /><p>React</p></div>
          <div><img src={tailwindcss} className="h-20 w-20" /><p>Tailwind</p></div>
          <div><img src={git} className="h-20 w-20" /><p>Git</p></div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="bg-blue-50 dark:bg-slate-800 transition">
        <h1 className="text-center font-bold text-3xl text-blue-900 dark:text-blue-300 p-10">
          My Projects
        </h1>

        <div className="flex justify-evenly pb-7">

          <div className="border p-5 bg-blue-100 dark:bg-slate-700">
            <img src={textutil} className="h-40" />
            <Link to="/projects/textutils">
              <button className="bg-blue-200 dark:bg-blue-600 px-4 py-2 mt-4 text-black dark:text-white">
                View Project →
              </button>
            </Link>
          </div>

          <div className="border p-5 bg-blue-100 dark:bg-slate-700">
            <img src={newsmonkey} className="h-40" />
            <Link to="/projects/newsmonkey">
              <button className="bg-blue-200 dark:bg-blue-600 px-4 py-2 mt-4 text-black dark:text-white">
                View Project →
              </button>
            </Link>
          </div>

          <div className="border p-5 bg-blue-100 dark:bg-slate-700">
            <img src={inotebook} className="h-40" />
            <Link to="/projects/inotebook">
              <button className="bg-blue-200 dark:bg-blue-600 px-4 py-2 mt-4 text-black dark:text-white">
                View Project →
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* CONTACT (FIXED ICON VISIBILITY) */}
      <div className="bg-blue-100 dark:bg-slate-900 flex justify-around p-10 transition">

        <div className="text-black dark:text-white">

          <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-300 underline">
            Contact Me
          </h1>

          {/* EMAIL */}
          <div className="flex gap-2 mt-3 items-center">
            <div className="bg-white dark:bg-slate-600 p-2 rounded-full">
              <img src={email} className="h-6 w-6" />
            </div>
            <p className=" hover:underline">prachishree111@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="flex gap-2 items-center mt-2">
            <div className="bg-white dark:bg-slate-600 p-2 rounded-full">
              <img src={phone} className="h-6 w-6" />
            </div>
            <p className=" hover:underline">+91 9693409128</p>
          </div>

          {/* LOCATION */}
          <div className="flex gap-2 items-center mt-2">
            <div className="bg-white dark:bg-slate-600 p-2 rounded-full">
              <img src={location} className="h-6 w-6" />
            </div>
            <p className=" hover:underline">India</p>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col">

          <input name="user_name" placeholder="Your Name"
            className="p-2 m-2 border dark:bg-slate-800 dark:text-white" required />

          <input name="user_email" placeholder="Your Email"
            className="p-2 m-2 border dark:bg-slate-800 dark:text-white" required />

          <textarea name="message" placeholder="Your Message"
            className="p-2 m-2 border dark:bg-slate-800 dark:text-white" required />

          <button className="bg-blue-600 text-white p-2 rounded">
            Send Message 🚀
          </button>

        </form>
      </div>

      <Footer />

    </div>
  );
};

export default Body;