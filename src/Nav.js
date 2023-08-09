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
  return (
    <nav className="py-4 px-6 text-sm font-medium ">
      <ul className="flex space-x-3 justify-center">
        <NavLink id="home" to="/"  className={({isActive}) => [className, isActive ? "!bg-green-500" : null, ].filter(Boolean).join(" ")}>
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


      
    </nav>
  );
}
