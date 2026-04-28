
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-between px-10 py-4 border border-gray-300 bg-blue-50 dark:bg-slate-900 dark:border-gray-700 transition">

      {/* LEFT - LOGO + NAME */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-blue-900 dark:text-white">
          MyPortfolio
        </h1>
      </div>

      {/* CENTER - NAV LINKS */}
      <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">

        <Link to="/">
          <li className={location.pathname === "/" ? "underline font-bold text-blue-600 dark:text-blue-400" : ""}>
            Home
          </li>
        </Link>

        <Link to="/about">
          <li className={location.pathname === "/about" ? "underline font-bold text-blue-600 dark:text-blue-400" : ""}>
            About
          </li>
        </Link>

        <Link to="/skills">
          <li className={location.pathname === "/skills" ? "underline font-bold text-blue-600 dark:text-blue-400" : ""}>
            Skills
          </li>
        </Link>

        <Link to="/project">
          <li className={location.pathname === "/project" ? "underline font-bold text-blue-600 dark:text-blue-400" : ""}>
            Projects
          </li>
        </Link>

        <Link to="/contact">
          <li className={location.pathname === "/contact" ? "underline font-bold text-blue-600 dark:text-blue-400" : ""}>
            Contact
          </li>
        </Link>

      </ul>

      {/* RIGHT - REMOVED TOGGLE TEXT (EMPTY SPACE BALANCED) */}
      <div className="w-10"></div>

    </div>
  );
};

export default Navbar;