import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  // 1. THEME STATE: Initialize from LocalStorage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 2. APPLY THEME: Update the <html> class whenever the theme state changes
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save choice so it persists on page refresh
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. TOGGLE FUNCTION: Passed to Navbar to handle the click
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blue-100 dark:bg-slate-900 transition-colors duration-300">
        
        {/* NAVBAR: Now contains the toggle button internally. 
          We pass 'theme' to show the right icon and 'toggleTheme' to change it.
        */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* PAGE CONTENT */}
        <main>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;