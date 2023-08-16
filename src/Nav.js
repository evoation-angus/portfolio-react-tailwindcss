import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import houseicon from "./img/home.png";
import playicon from "./img/toboggan.png";
import coursesicon from "./img/learning.png";
import projecticon from "./img/project.png";
import usericon from "./img/user.png";


export default function Navbar() {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName(
      "block px-3 py-2 rounded-md bg-slate-50 inline-flex dark:bg-neutral-900"
    );
  }, []);

  const toggleVisibility = () => {
    if (
      document.getElementById("navbar-hamburger").classList.contains("hidden")
    ) {
      document.getElementById("navbar-hamburger").classList.remove("hidden");
    } else {
      document.getElementById("navbar-hamburger").classList.add("hidden");
    }
  };
  return (
    <nav className="bg-slate-50 dark:bg-neutral-900 py-4 px-6 text-sm font-medium fixed z-10 w-full ">
      <ul className="hidden md:flex space-x-3 justify-center">
        <NavLink id="home" to="/portfolio-react-tailwindcss"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={houseicon} alt="" />
          <span className="text-black dark:text-white">Home</span>
        </NavLink>
        <NavLink id="play" to="/portfolio-react-tailwindcss/playground"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={playicon} alt="" />
          <span className="text-black dark:text-white">Playground</span>
        </NavLink>
        <NavLink id="projects" to="/portfolio-react-tailwindcss/projects"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={projecticon} alt="" />
          <span className="text-black dark:text-white">Projects</span>
        </NavLink>
        <NavLink id="courses" to="/portfolio-react-tailwindcss/courses"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={coursesicon} alt="" />
          <span className="text-black dark:text-white">Courses</span>
        </NavLink>
        <NavLink id="about-me" to="/portfolio-react-tailwindcss/about-me"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={usericon} alt="" />
          <span className="text-black dark:text-white">About me</span>
        </NavLink>
        <div className="flex-grow"></div>{" "}
        <Toggle />
      </ul>
      
      <div className="md:hidden flex-row text-start">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 w-10 h-10  text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleVisibility}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full min-h-screen text-center" id="navbar-hamburger">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <NavLink 
              to="/portfolio-react-tailwindcss"
              className="text-3xl block py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page"
              onClick={toggleVisibility}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio-react-tailwindcss/playground"
              className="text-3xl block py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleVisibility}
            >
              Playground
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio-react-tailwindcss/projects"
              className="text-3xl block py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleVisibility}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio-react-tailwindcss/courses"
              className="text-3xl block py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleVisibility}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio-react-tailwindcss/about-me"
              className="text-3xl block py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleVisibility}
            >
              About me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>


      
    </nav>
  );
}
