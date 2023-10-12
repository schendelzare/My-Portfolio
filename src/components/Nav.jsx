import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";
import webdev from "../assets/webdev.png";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div
        className="flex justify-between  p-4 2xl:px-[200px]
      "
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setIsClicked(false)}
        >
          <img src={webdev} alt="webdev" className="w-20 lg:w-24" />
        </Link>
        <ul className="hidden md:flex my-auto gap-2 font-medium cursor-pointer font-Obitron">
          <li className="nli">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nli">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nli">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nli text-base font-inter border-2 border-blue-500 text-blue-500 tracking-tighter rounded-md hover:bg-black hover:text-white hover:border-black">
            <Link
              to="conclusion"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Download CV
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          {isClicked ? (
            <IoMdArrowDropdownCircle
              size={35}
              onClick={() => setIsClicked((prev) => !prev)}
            />
          ) : (
            <IoMdArrowDropdown
              size={35}
              onClick={() => setIsClicked((prev) => !prev)}
              className=""
            />
          )}

          <ul
            className={
              isClicked
                ? "absolute top-[70px] left-0 h-screen w-full  ease-in-out duration-300 bg-black/90  backdrop-blur-sm "
                : "absolute top-[70px] left-[-100%] h-screen  w-full  ease-in-out duration-300 bg-black/90 backdrop-blur-sm "
            }
            onClick={() => setIsClicked((prev) => !prev)}
          >
            <li className="text-white p-5 border-blue-600 border-b-2 font-Obitron cursor-pointer hover:text-blue-500">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Projects
              </Link>
            </li>
            <li className="text-white p-5 border-blue-600 border-b-2 font-Obitron cursor-pointer hover:text-blue-500">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsClicked((prev) => !prev)}
              >
                About
              </Link>
            </li>
            <li className="text-white p-5 border-blue-600 border-b-2 font-Obitron cursor-pointer hover:text-blue-500">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Skills
              </Link>
            </li>
            <li className="text-white p-5 border-blue-600 border-b-2 font-Obitron cursor-pointer hover:text-blue-500">
              <Link
                to="conclusion"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
