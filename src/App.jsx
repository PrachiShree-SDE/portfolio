import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  // 🌗 THEME STATE
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 🌗 APPLY THEME TO HTML TAG
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🌗 TOGGLE FUNCTION
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>

      {/* 🌗 THEME TOGGLE BUTTON */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-blue-600 text-white shadow-md hover:scale-105 transition"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;