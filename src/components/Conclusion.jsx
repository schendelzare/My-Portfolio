import React, { useRef } from "react";
import { useIsVisible } from "./useVisible";
import bot1 from "../assets/bot1.png";
import dfile from "../assets/CV/CV-Raymark-Vergara.pdf";
import { BsGithub, BsFacebook } from "react-icons/bs";

const Conclusion = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="flex flex-col lg:flex-row md:pt-28 lg:pb-60 justify-center align-middle m-auto "
      id="conclusion"
    >
      <div
        ref={ref1}
        className={` hidden lg:flex flex-col p-5 my-auto m-auto lg:ml-auto  ${
          isVisible1 ? "animate-fade-right" : "opacity-0"
        }  animate-delay-700`}
      >
        <img src={bot1} alt="pc" className="w-72" />
      </div>
      <div className="flex flex-col p-5 md:p-10 m-auto  lg:w-[900px]">
        <h1
          ref={ref1}
          className={`font-bold text-2xl md:text-4xl tracking-tighter font-Obitron ${
            isVisible1 ? "animate-fade-right" : "opacity-0"
          }  animate-delay-300`}
        >
          Conclusion:
        </h1>
        <br />
        <p
          ref={ref1}
          className={`font-medium md:text-lg  tracking-tight ${
            isVisible1 ? "animate-fade-right" : "opacity-0"
          }  animate-delay-500`}
        >
          <span className="text-blue-500">Thank you</span> for exploring my
          junior web developer portfolio. I'm excited about the opportunities
          ahead and eager to contribute my skills to web development projects
          that make a positive impact. If you'd like to connect or collaborate,
          please feel free to reach out via the contact information provided. I
          look forward to joining the web development community and working on
          exciting projects together.
        </p>
        <div
          className="m-auto py-10 hover:scale-105 active:scale-95 animate-wiggle animate-infinite"
          id="resume"
        >
          <a
            className="py-3 px-10 border-2 border-blue-500 text-blue-500 font-semibold rounded-md  hover:bg-black hover:text-white hover:border-black"
            href={dfile}
            download="Raymark-Vergara-Resume/CV"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
