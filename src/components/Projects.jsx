import Carousel from "./carousel/Carousel";
import Card from "./UI/Card";
import laz from "../assets/projects/lashopee.png";
import exp from "../assets/projects/et.png";
import anime from "../assets/projects/animemovie.png";
import epx from "../assets/projects/epx.png";

import { useIsVisible } from "./useVisible";
import React, { useRef } from "react";

import MultiCarousel from "./carousel/MultiCarousel";

const data = [
  {
    img: laz,
    name: "Lashopee",
    gitlink: "https://github.com/schendelzare/Lazashopee/tree/main",
    link: "https://lazashopee-updated-6j4fncz9s-schendelzare.vercel.app/",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis cumque rem consequatur, rerum harum repellendus tenetur reprehenderit debitis ducimus vero modi eveniet adipisci veniam voluptatum voluptates quidem nam saepe.",
  },
  {
    img: exp,
    gitlink: "https://github.com/schendelzare/Expense-Tracker-Website",
    name: "Expense Tracker",
    link: "https://expense-tracker-website-ipvejuiol-schendelzare.vercel.app/",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis cumque rem consequatur, rerum harum repellendus tenetur reprehenderit debitis ducimus vero modi eveniet adipisci veniam voluptatum voluptates quidem nam saepe.",
  },
  {
    img: anime,
    gitlink: "https://github.com/schendelzare/Project",
    name: "Anime Site",
    link: "https://movie-project-iz4ijja88-schendelzare.vercel.app/",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis cumque rem consequatur, rerum harum repellendus tenetur reprehenderit debitis ducimus vero modi eveniet adipisci veniam voluptatum voluptates quidem nam saepe.",
  },
  {
    img: epx,
    gitlink: "https://github.com/schendelzare/Epsilon-X",
    name: "Epsilon X",
    link: "https://epsilon-x-n6r4-7rya49m5h-schendelzare.vercel.app/",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis cumque rem consequatur, rerum harum repellendus tenetur reprehenderit debitis ducimus vero modi eveniet adipisci veniam voluptatum voluptates quidem nam saepe.",
  },
];
const projects = [
  "Personal Website: Designed and developed my personal website using HTML, CSS, and JavaScript to showcase my skills and projects.",
  "Portfolio Website: Created a portfolio website for a fictional client, demonstrating my ability to translate design concepts into a fully functional website.",
  "Web Application: Developed a simple web application using HTML, CSS, and JavaScript that provides a specific function or service.",
  "Responsive Redesign: Took an existing website and redesigned it to be responsive and mobile-friendly.",
  "Code Samples: Included code snippets and explanations to demonstrate my understanding of web development concepts and techniques.",
];

const Projects = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="flex flex-col  md:pt-28 2xl:pb-72 m-auto "
      id="projects"
    >
      <div className="flex flex-col p-5 md:p-10 m-auto  lg:w-[900px]">
        <h3
          ref={ref1}
          className={`text-4xl font-Obitron font-extrabold text-center shadow-2xl ${
            isVisible1 ? "animate-fade-down" : "opacity-0"
          }  animate-delay-200`}
        >
          Projects
        </h3>
        <br />
        <p
          ref={ref1}
          className={`text-lg font-medium  m-auto text-center ${
            isVisible1 ? "animate-fade-down" : "opacity-0"
          }  animate-delay-500`}
        >
          Within this portfolio, you'll find a selection of projects that
          showcase my growth as a junior web developer and my ability to apply
          my skills to{" "}
          <span className="text-blue-500">real-world scenarios</span>.
        </p>
        <br />
      </div>
      <div
        ref={ref1}
        className={`m-auto ${
          isVisible1 ? "animate-fade-right" : "opacity-0"
        }  animate-delay-200`}
      >
        <MultiCarousel slider={data} />
      </div>
    </section>
  );
};

export default Projects;
