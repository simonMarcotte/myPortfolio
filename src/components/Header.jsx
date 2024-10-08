import React from 'react';
import { MdOutlineNightlightRound, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

const Header = ({ darkMode, setDarkMode }) => {

  const NavButtons = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "work-experience"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "Technologies"
    },
    {
      id: 5,
      link: "contact"
    }
  ];

  return (
    <header className="bg-gray-300 dark:bg-zinc-900 text-zinc-950 dark:text-white rounded-md m-3 sticky top-0 z-50 duration-500">
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-2xl'>SIMON M.</h1>

        <ul className='md:flex'>
          {NavButtons.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-light hover:scale-110 duration-200">
              <Link to={link} smooth duration={500} offset={-50}>{link}</Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer" />
            ) : (
              <MdOutlineNightlightRound className="text-2xl cursor-pointer" />
            )
          }

        </div>
      </nav>
    </header>
  )
}

export default Header
