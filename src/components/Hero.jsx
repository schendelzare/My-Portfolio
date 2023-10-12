import React, { useRef } from "react";
import dp from "../assets/DP.jpg";
import dpr from "../assets/DP.png";

import reacticon from "../assets/icon/react.png";
import js from "../assets/icon/js.png";
import html from "../assets/icon/html.png";
import css from "../assets/icon/css.png";
import tw from "../assets/icon/tw.png";
import next from "../assets/icon/next.png";
import node from "../assets/icon/node.png";
import { useIsVisible } from "./useVisible";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="flex flex-col xl:flex-row md:pt-28  2xl:pb-72 justify-center align-middle m-auto mt-20"
      id="hero"
      ref={ref1}
    >
      <div
        ref={ref1}
        className={` ${
          isVisible1 ? "animate-fade-right" : "opacity-0"
        } flex flex-col p-5 md:p-10 m-auto  lg:w-[900px] animate-delay-200`}
      >
        <h3 className="font-bold font-Obitron text-sm md:text-base tracking-tighter text-center lg:text-left  w-full m-auto">
          Crafting the Web: A Junior Web Developer's Portfolio
        </h3>
        <h1 className="font-bold font-Obitron text-4xl md:text-7xl tracking-tighter text-center lg:text-left  w-full m-auto">
          <span className="text-2xl md:text-5xl">Greetings! My name is </span>
          Raymark S. Vergara
        </h1>
        <h3
          ref={ref1}
          className={` ${
            isVisible1 ? "animate-fade" : "opacity-0"
          } font-bold text-xl md:text-2xl py-2 tracking-tighter text-center text-blue-500 animate-delay-1000`}
        >
          Front End Developer
        </h3>
        <p className="font-medium md:text-lg py-5 tracking-tight text-justify md:text-center">
          Hello and welcome to my junior web developer portfolio! I'm Raymark
          Vergara, a passionate and driven web developer who is enthusiastic
          about creating web experiences that are not only visually appealing
          but also functional and user-friendly. This portfolio serves as a
          window into my journey as a junior web developer, showcasing the
          projects and skills I've been building as I embark on this exciting
          career path.
        </p>
        <div
          ref={ref1}
          className={` ${
            isVisible1 ? "animate-fade-up" : "opacity-0"
          } flex flex-col lg:flex-row gap-2 p-5 cursor-pointer m-auto animate-delay-700`}
        >
          <div className="flex gap-2">
            <img src={js} alt="js" className="w-14" />
            <img src={html} alt="html" className="w-14" />
            <img src={css} alt="css" className="w-14" />
            <img src={reacticon} alt="reacticon" className="w-14" />
            <img src={next} alt="next" className="w-14" />
          </div>
          <div className="flex gap-2 m-auto">
            <img src={tw} alt="tw" className="w-14" />

            <img src={node} alt="node" className="w-14" />
          </div>
        </div>
        {/* <div className="m-auto py-10 hover:scale-105 active:scale-95">
          <a
            href="#resume"
            className="py-3 px-10 border-2 border-blue-500 text-blue-500 font-semibold rounded-md "
          >
            Download CV
          </a>
        </div> */}
      </div>
      <div className="w-[300px] lg:w-[400px] m-auto ">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list-style"
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
        >
          <img
            src={dp}
            alt="dp"
            ref={ref1}
            className={` ${
              isVisible1 ? "animate-fade-left" : "opacity-0"
            } rounded-full w-[400px] animate-delay-500 border-2 `}
          />
          <img
            src={dpr}
            alt="dp"
            ref={ref1}
            className={` ${
              isVisible1 ? "animate-fade-left" : "opacity-0"
            } rounded-full w-[400px] animate-delay-500 border-2`}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
