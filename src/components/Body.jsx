

import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
import newsmonkey from "../assets/newsMonkey.png";
import inotebook from "../assets/inotebook.png";
import pokedex from "../assets/pokedex.png";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import Footer from "./Footer";
import ProjectCarousel from "./ProjectCarousel.jsx";


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
    <div className="w-full overflow-x-hidden transition-colors duration-300">
      
      {/* HERO SECTION - Exact Colors: Blue-100 / Slate-900 */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 md:px-16 lg:px-24 bg-blue-100 dark:bg-slate-900">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h3 className="font-bold text-2xl text-blue-800 dark:text-blue-300">Hi, I'm</h3>
          <h1 className="font-extrabold text-5xl sm:text-6xl text-blue-950 dark:text-white leading-tight tracking-tight">
            Prachi Shree
          </h1>
          <h2 className="font-semibold text-2xl sm:text-4xl text-blue-700 dark:text-blue-400">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
            I build responsive and user-friendly websites with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-10 py-3.5 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl text-white font-bold shadow-lg active:scale-95">
                Hire Me
              </button>
            </Link>
            <Link to="/project">
              <button className="w-full sm:w-auto px-10 py-3.5 border-2 border-slate-800 dark:border-slate-400 rounded-xl font-bold text-black dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95">
                View Project
              </button>
            </Link>
          </div>

          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            {[
              { src: github, link: "https://github.com/PrachiShree-SDE" },
              { src: linkedin, link: "https://www.linkedin.com/in/prachishree111/" },
              { src: twitter, link: "https://x.com/prachishree15" }
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-700 p-3.5 rounded-2xl shadow-md hover:scale-110 hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-all">
                <img src={item.src} className="w-6 h-6 dark:invert" alt="social" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30 rounded-full scale-110 transition-transform group-hover:scale-125 duration-700"></div>
            <img 
              className="relative w-72 h-85 md:w-80 md:h-[450px] rounded-full md:rounded-full border-4 border-white dark:border-slate-700 shadow-2xl object-cover transition-all duration-500" 
              src={image} 
              alt="Prachi" 
            /> 
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Exact Colors: Blue-50 / Slate-800 */}
      <section className="bg-blue-50 dark:bg-slate-800 px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <img className="w-full max-w-sm rounded-3xl shadow-2xl" src={about} alt="About" />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 underline decoration-blue-500 underline-offset-[12px] mb-10">
              About Me
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed font-medium">
              I am a passionate Frontend Developer skilled in React.js and modern web technologies. I love creating seamless digital experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-5 p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-600">
                <img src={exp} className="w-10 h-10" alt="Exp" />
                <div>
                  <p className="text-xs uppercase text-gray-500 font-black tracking-widest">Experience</p>
                  <p className="font-bold text-lg dark:text-white">Fresher</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-600">
                <img src={location} className="w-10 h-10" alt="Loc" />
                <div>
                  <p className="text-xs uppercase text-gray-500 font-black tracking-widest">Location</p>
                  <p className="font-bold text-lg dark:text-white">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - Exact Colors: Blue-100 / Slate-900 */}
      <section className="py-24 px-6 bg-blue-100 dark:bg-slate-900">
        <h1 className="text-center font-bold text-4xl text-blue-900 dark:text-blue-300 underline decoration-blue-500 underline-offset-[12px] mb-16">
          My Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {[
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: javascript, name: "JavaScript" },
            { img: react, name: "React" },
            { img: tailwindcss, name: "Tailwind CSS" },
            { img: git, name: "Git" }
          ].map((skill, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="bg-white dark:bg-slate-800 p-7 rounded-[2rem] shadow-md group-hover:shadow-blue-300 dark:group-hover:shadow-blue-900 group-hover:-translate-y-3 transition-all duration-300">
                <img src={skill.img} className="h-16 w-16 object-contain" alt={skill.name} />
              </div>
              <p className="mt-4 font-bold text-slate-700 dark:text-white uppercase text-xs tracking-widest">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION - Exact Colors: Blue-50 / Slate-800 */}
     <ProjectCarousel />

      {/* CONTACT SECTION - Exact Colors: Blue-100 / Slate-900 */}
      <section className="bg-blue-100 dark:bg-slate-900 px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-10">
            <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-300 underline decoration-blue-500 underline-offset-[12px]">
              Contact Me
            </h1>
            <div className="space-y-6">
              {[
                { img: email, val: "prachishree111@gmail.com" },
                { img: phone, val: "+91 9693409128" },
                { img: location, val: "India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-lg text-gray-800 dark:text-gray-200 group">
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-sm group-hover:bg-blue-600 transition-colors">
                    <img src={item.img} className="h-6 w-6 dark:invert group-hover:invert-0" alt="icon" />
                  </div>
                  <p className="font-semibold hover:text-blue-500 transition-colors cursor-pointer">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex-1 bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl space-y-5 border border-blue-50 dark:border-slate-700">
            <input name="user_name" placeholder="Your Name" className="w-full p-4.5 py-2 px-2 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" required />
            <input name="user_email" type="email" placeholder="Your Email" className="w-full p-4.5 py-2 px-2 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" required />
            <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-4.5 py-2 px-2 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none font-medium" required />
            <button className="w-full py-4.5 py-2 px-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl transition-all active:scale-95 text-lg">
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Body;






// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";

// import image from "../assets/image.png";
// import github from "../assets/github.svg";
// import linkedin from "../assets/linkedin.svg";
// import twitter from "../assets/twitter.svg";
// import about from "../assets/about.png";
// import exp from "../assets/exp.svg";
// import location from "../assets/location.svg";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import react from "../assets/react.png";
// import tailwindcss from "../assets/tailwindcss.png";
// import git from "../assets/git.png";
// import email from "../assets/email.svg";
// import phone from "../assets/phone.svg";

// import Footer from "./Footer";

// /* ✅ CORRECT IMPORT */
// import ProjectCarousel from "./ProjectCarousel";

// const Body = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_l6dmxmi",
//         "template_811h7hi",
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         alert("Message sent successfully 🚀");
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Failed to send message ❌");
//       });
//   };

//   return (
//     <div className="w-full overflow-x-hidden">

//       {/* HERO */}
//       <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 bg-blue-100 dark:bg-slate-900">
//         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-5xl font-bold text-blue-900 dark:text-white">
//             Prachi Shree
//           </h1>
//           <h2 className="text-3xl text-blue-600 dark:text-blue-300">
//             Frontend Developer
//           </h2>

//           <div className="flex gap-4 justify-center md:justify-start">
//             <Link to="/contact">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
//                 Hire Me
//               </button>
//             </Link>

//             <Link to="/project">
//               <button className="px-6 py-3 border rounded-xl">
//                 View Projects
//               </button>
//             </Link>
//           </div>
//         </div>

//         <img src={image} className="w-72 rounded-full shadow-xl" />
//       </section>

//       {/* ABOUT */}
//       <section className="bg-blue-50 dark:bg-slate-800 px-6 py-24">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
//           <img src={about} className="w-80 rounded-2xl" />

//           <div>
//             <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
//               About Me
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 text-lg">
//               I am a React Frontend Developer who loves building modern UI.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section className="bg-blue-100 dark:bg-slate-900 py-20">
//         <h2 className="text-center text-4xl font-bold mb-10 text-blue-900 dark:text-blue-300">
//           Skills
//         </h2>

//         <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
//           {[html, css, javascript, react, tailwindcss, git].map((img, i) => (
//             <img key={i} src={img} className="w-16 mx-auto" />
//           ))}
//         </div>
//       </section>

//       {/* ✅ PROJECT CAROUSEL */}
//       <ProjectCarousel />

//       {/* CONTACT */}
//       <section className="bg-blue-100 dark:bg-slate-900 px-6 py-24">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

//           <div>
//             <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
//               Contact Me
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300">
//               Let’s build something amazing 🚀
//             </p>
//           </div>

//           <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-slate-800 p-6 rounded-xl space-y-4">
//             <input name="user_name" placeholder="Name" className="w-full p-3 rounded" />
//             <input name="user_email" placeholder="Email" className="w-full p-3 rounded" />
//             <textarea name="message" placeholder="Message" className="w-full p-3 rounded"></textarea>

//             <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
//               Send
//             </button>
//           </form>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Body;