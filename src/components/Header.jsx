import React from 'react';
import { MdWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = ({ darkMode, setDarkMode }) => {
  const NavButtons = [
    { id: 1, link: "home" },
    { id: 2, link: "projects" },
    { id: 3, link: "tech" },
    { id: 4, link: "contact" }
  ];

  return (
    // Full-width header background with transparency and blur
    <header className="sticky top-0 z-50 w-full bg-gray-300/50 dark:bg-zinc-900/50 backdrop-blur-md transition-none">
      {/* Centered container for the content */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="p-4">
          <nav className="flex justify-between items-center">
            {/* Navigation links (dimmed text) */}
            <ul className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
              {NavButtons.map(({ id, link }) => (
                <li
                  key={id}
                  className="cursor-pointer capitalize font-light hover:scale-105 hover:duration-200"
                >
                  <Link to={link} smooth duration={200} offset={-50}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Dark mode toggle */}
            <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer text-yellow-500" />
            ) : (
              <BsFillMoonStarsFill className="text-2xl cursor-pointer text-blue-900 dark:text-cyan-600" />
            )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
