import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path) => 
    location.pathname === path 
      ? "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 md:border-none" 
      : "text-gray-700 dark:text-gray-200 hover:text-blue-500 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-blue-900 dark:text-white tracking-tight">
          MyPortfolio
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={linkClass("/about")}>About</Link></li>
          <li><Link to="/skills" className={linkClass("/skills")}>Skills</Link></li>
          <li><Link to="/project" className={linkClass("/project")}>Projects</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>

        {/* RIGHT SIDE: TOGGLE + HAMBURGER */}
        <div className="flex items-center gap-3">
          
          {/* THEME TOGGLE BUTTON (Integrated) */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-slate-800 text-sm font-bold flex items-center gap-2 border border-blue-200 dark:border-slate-700 transition active:scale-90"
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="hidden sm:inline">{theme === "light" ? "Dark" : "Light"}</span>
          </button>

          {/* HAMBURGER ICON (Mobile Only) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-blue-900 dark:text-white"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden md:hidden bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out`}>
        <ul className="flex flex-col p-6 space-y-4 font-semibold text-lg border-t border-gray-100 dark:border-slate-700">
          <li><Link to="/" onClick={toggleMenu} className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className={linkClass("/about")}>About</Link></li>
          <li><Link to="/skills" onClick={toggleMenu} className={linkClass("/skills")}>Skills</Link></li>
          <li><Link to="/project" onClick={toggleMenu} className={linkClass("/project")}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className={linkClass("/contact")}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;