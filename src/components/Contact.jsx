import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16
      bg-gray-50 dark:bg-gray-950 transition-all duration-300">

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold leading-tight
            text-gray-900 dark:text-white">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed
            text-gray-700 dark:text-gray-300">
            I’m open to internships, freelance work, and collaboration.
            Let’s build something impactful together.
          </p>

          <div className="mt-10 space-y-4">

            {/* EMAIL */}
            <div className="p-4 rounded-xl shadow-lg border
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-700">

              <p className="text-sm text-blue-600 dark:text-blue-400">
                Email
              </p>
              <p className="font-semibold
                text-gray-900 dark:text-white hover:text-blue-600 hover:underline">
                prachishree111@gmail.com
              </p>
            </div>

            {/* LOCATION */}
            <div className="p-4 rounded-xl shadow-lg border
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-700">

              <p className="text-sm text-blue-600 dark:text-blue-400">
                Location
              </p>
              <p className="font-semibold
                text-gray-900 dark:text-white hover:underline">
                India
              </p>
            </div>

            {/* STATUS */}
            <div className="p-4 rounded-xl shadow-lg border
              bg-white dark:bg-gray-900
              border-gray-200 dark:border-gray-700">

              <p className="text-sm text-blue-600 dark:text-blue-400">
                Status
              </p>
              <p className="font-semibold text-green-600 dark:text-green-400">
                Available for opportunities
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-2xl shadow-xl p-10 border
          bg-white dark:bg-gray-900
          border-gray-200 dark:border-gray-700 transition-all">

          <h2 className="text-2xl font-bold mb-6
            text-blue-600 dark:text-blue-400">
            Send Message 💬
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="6"
              className="w-full p-4 rounded-xl border resize-none
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold transition
                bg-blue-600 hover:bg-blue-700
                text-white">
              🚀 Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;