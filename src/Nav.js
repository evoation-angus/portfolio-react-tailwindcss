import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import houseicon from "./img/home.png";
import playicon from "./img/toboggan.png";
import coursesicon from "./img/learning.png";
import projecticon from "./img/project.png";
import usericon from "./img/user.png";
import Hamburger from "./components/Hamburger";

export default function Navbar() {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName(
      "block px-3 py-2 rounded-md bg-slate-50 inline-flex dark:bg-neutral-900"
    );
  }, []);
  return (
    <nav className="bg-slate-100 dark:bg-neutral-900 py-4 px-6 text-sm font-medium fixed z-10 w-full ">
      <ul className="hidden md:flex space-x-3 justify-center">
        <NavLink id="home" to="/portfolio-react-tailwindcss"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={houseicon} alt="" />
          <span className="text-black dark:text-white">Home</span>
        </NavLink>
        <NavLink id="play" to="/playground"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={playicon} alt="" />
          <span className="text-black dark:text-white">Playground</span>
        </NavLink>
        <NavLink id="projects" to="/projects"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={projecticon} alt="" />
          <span className="text-black dark:text-white">Projects</span>
        </NavLink>
        <NavLink id="courses" to="/courses"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={coursesicon} alt="" />
          <span className="text-black dark:text-white">Courses</span>
        </NavLink>
        <NavLink id="about-me" to="/about-me"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
          <img className="h-5 icon dark:invert mr-1" src={usericon} alt="" />
          <span className="text-black dark:text-white">About me</span>
        </NavLink>
        <div className="flex-grow"></div>{" "}
        <Toggle />
      </ul>
      <Hamburger/>


      
    </nav>
  );
}
