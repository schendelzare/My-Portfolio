import React, { useRef } from "react";

import dp from "../assets/DP.png";
import { useIsVisible } from "./useVisible";

const Data = {
  name: "Raymark S. Vergara",
  Age: "33",
  BirthDay: "Oct 3 1990",
  location: "Lian Batangas Philippines",
  email: "raymarksevillavergara@gmail.com",
};

const About = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="flex flex-col lg:flex-row 2xl:pt-56 2xl:pb-72 justify-center align-middle m-auto "
      id="about"
    >
      <div
        ref={ref1}
        className={`hidden lg:flex flex-col p-5 my-auto m-auto lg:ml-auto  animate-delay-200 ${
          isVisible1 ? "animate-fade-right" : "opacity-0"
        }`}
      >
        <img src={dp} alt="dp" className="rounded-full w-[400px]" />
      </div>
      <div className="flex flex-col  p-5 md:p-10 mr-auto  lg:w-[900px]">
        <div
          ref={ref1}
          className={` ${
            isVisible1 ? "animate-fade-left" : "opacity-0"
          } flex flex-col animate-delay-500`}
        >
          <h1 className="font-bold text-2xl md:text-4xl tracking-tighter font-Obitron">
            About Me
          </h1>
          <span className="md:text-lg font-medium text-left">
            Name: {Data.name}
          </span>
          <span className="md:text-lg font-medium text-left">
            Age: {Data.Age}
          </span>
          <span className="md:text-lg font-medium text-left">
            Birthday: {Data.BirthDay}
          </span>
          <span className="md:text-lg font-medium text-left">
            Location: {Data.location}
          </span>
          <span className="md:text-lg font-medium text-left text-blue-600">
            Email: {Data.email}
          </span>
        </div>
        <div
          ref={ref1}
          className={` ${
            isVisible1 ? "animate-fade-left" : "opacity-0"
          }  animate-delay-700`}
        >
          <h3 className="font-bold text-xl tracking-tighter py-2 mt-5">
            I am Raymark Vergara, Web Developer
          </h3>
          <p className="font-medium md:text-lg  tracking-tight">
            I am an aspiring web developer who recently embarked on this journey
            after completing my web development education. My fascination with
            technology, design, and problem-solving led me to pursue a career in
            web development. Since then, I've been dedicated to honing my skills
            and expanding my knowledge in various areas of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
