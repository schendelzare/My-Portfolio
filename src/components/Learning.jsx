import { useIsVisible } from "./useVisible";
import React, { useRef } from "react";
import learning from "../assets/bot.png";

const Learning = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <section
      className="flex flex-col lg:flex-row md:pt-28 lg:pb-40  m-auto "
      id="learning"
    >
      <div className="flex flex-col p-5 md:p-10 m-auto  lg:w-[900px]">
        <h1
          ref={ref1}
          className={`font-bold text-2xl md:text-4xl tracking-tighter font-Obitron ${
            isVisible1 ? "animate-fade-down" : "opacity-0"
          }  animate-delay-200`}
        >
          Learning Journey
        </h1>
        <br />
        <p
          ref={ref1}
          className={`font-medium md:text-lg  tracking-tight ${
            isVisible1 ? "animate-fade-right" : "opacity-0"
          }  animate-delay-500`}
        >
          I am <span className="text-blue-500">committed</span> to continuous
          learning and growth in the field of web development. In this section,
          I'll share details about the courses, tutorials, and resources I've
          used to enhance my skills. I'll also outline my future learning goals
          and areas of interest within web development.
        </p>
        <br />

        <span className="md:text-lg font-medium text-left text-blue-600"></span>
      </div>
      <div
        ref={ref1}
        className={` lg:flex flex-col p-5 my-auto m-auto lg:ml-auto ${
          isVisible1 ? "animate-fade-left" : "opacity-0"
        }  animate-delay-700`}
      >
        <img src={learning} alt="pc" className="w-72" />
      </div>
    </section>
  );
};

export default Learning;
