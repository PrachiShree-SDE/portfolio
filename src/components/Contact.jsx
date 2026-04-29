import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaLinkedinIn, 
  FaPaperPlane, 
  FaGithub 
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6dmxmi", // Your Service ID
        "template_811h7hi", // Your Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-50 dark:bg-gray-950 transition-all duration-500 md:px-20">
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: Identity & Professional Presence */}
        <div className="flex flex-col">
          {/* Availability Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              Open for Internships
            </span>
          </div>

          <h1 className="text-5xl md:text-5xl font-black leading-[0.85] tracking-tighter text-slate-900 dark:text-white uppercase">
            Let's <br />
            <span className="text-blue-600 dark:text-blue-500">Connect.</span>
          </h1>

          <p className="mt-10 text-lg font-medium text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Mechanical Engineering graduate specializing in Full-Stack development. 
            I am currently open to new opportunities and technical collaborations.
          </p>

          <div className="mt-12 space-y-3">
            
            {/* EMAIL BLOCK */}
            <div className="group flex items-center gap-5 p-3 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 shadow-sm transition-transform group-hover:scale-110">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Mail</p>
                <p className="font-bold text-slate-900 dark:text-white">prachishree111@gmail.com</p>
              </div>
            </div>

            {/* LINKEDIN BLOCK */}
            <a 
              href="https://www.linkedin.com/in/prachishree111" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-5 p-3 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#0077B5] shadow-sm transition-transform group-hover:scale-110">
                <FaLinkedinIn size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Network</p>
                <p className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">linkedin.com/in/prachishree111</p>
              </div>
            </a>

            {/* GITHUB BLOCK */}
            <a 
              href="https://github.com/PrachiShree-SDE" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-5 p-3 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm transition-transform group-hover:scale-110">
                <FaGithub size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Source Code</p>
                <p className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">github.com/PrachiShree-SDE</p>
              </div>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE: The Form Card */}
        <div className="relative group">
          {/* Subtle background glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[2.6rem] opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
          
          <div className="relative rounded-[2.5rem] shadow-2xl p-8 md:p-12 bg-blue-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
              Send a <span className="text-blue-600">Message</span>
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full p-4 rounded-2xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white border-slate-400 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full p-4 rounded-2xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white border-slate-400 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium"
                required
              />
              <textarea
                name="message"
                placeholder="Describe your inquiry..."
                rows="5"
                className="w-full p-4 rounded-2xl border bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white border-slate-400 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all placeholder:text-slate-400 font-medium"
                required
              />

              <button
                type="submit"
                className="group w-full mt-2 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all bg-blue-800 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 shadow-xl shadow-blue-500/10 active:scale-[0.98] flex items-center justify-center gap-3">
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Dispatch Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;