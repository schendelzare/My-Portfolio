import CardSkill from "./CardSkill";
import { useIsVisible } from "./useVisible";
import React, { useRef } from "react";
import Carousel from "./carousel/Carousel";
import rcert from "../assets/certificates/reactCert.jpg";
import ncert from "../assets/certificates/nodeCert.jpg";

const slides = [rcert, ncert];

const skill = [
  [
    { name: "Industry Knowledge" },
    [
      "Web Development",
      "Responsive WebDesign",
      "E-Commerce",
      "Full-Stack Web Development",
      "React Website",
    ],
  ],
  [
    { name: "Coding Skills" },
    ["HTML/CSS/Tailwind", "Javascript/React/NextJs", "Node/Express", "MongoDB"],
  ],

  [
    { name: "Tools and Technologies" },
    ["Visual Studio", "FireBase", "Netlify", "Vercel", "Git/Github"],
  ],
  [
    { name: "Others Skills" },
    [
      "Basic Computer",
      "Computer Hardware",
      "Learning Attitude",
      "And so on...",
    ],
  ],
  [{ name: "Laguage Skills" }, ["English", "Tagalog"]],
  [
    { name: "Interests" },
    ["Coding", "Learn New Things", "Gaming", "Singing", "Eating"],
  ],
];

const skills = [
  "HTML & CSS: Proficiency in creating and styling web pages using HTML and CSS/Tailwind.",
  "JavaScript: Familiarity with JavaScript for adding interactivity and functionality to websites.",
  "Responsive Design: Building responsive and mobile-friendly web interfaces with CSS and media queries.",
  "Front-End Frameworks: Basic knowledge of front-end libraries and frameworks like React and NextJS.",
  "Version Control: Experience with Git and GitHub for collaborative development.",
  "Web Development Tools: Familiarity with web development tools such as code editors, browsers developer tools, and debugging techniques.",
  "Problem Solving: A logical and analytical mindset for troubleshooting and problem-solving.",
];

const SkillsResume = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="flex flex-col md:w-full pt-10 md:pt-28 lg:pb-40 justify-center align-middle m-auto gap-2 "
      id="skills"
    >
      <h1
        ref={ref1}
        className={`text-center font-Obitron text-2xl p-4 ${
          isVisible1 ? "animate-fade-left" : "opacity-0"
        }  animate-delay-200`}
      >
        My Skills and Resume
      </h1>
      <br />
      <div
        className={`text-center   p-4 ${
          isVisible1 ? "animate-fade-up" : "opacity-0"
        }  animate-delay-300`}
      >
        <CardSkill data={skill} />
      </div>
      <div
        ref={ref1}
        className={` flex flex-col p-5 md:p-10 m-auto lg:w-[900px] ${
          isVisible1 ? "animate-fade-right" : "opacity-0"
        }  animate-delay-200`}
      >
        <h1 className="font-bold text-2xl md:text-4xl tracking-tighter font-Obitron">
          Skills:
        </h1>
        <br />
        <p className="font-medium md:text-lg  tracking-tight">
          As a <span className="text-blue-500">Junior Web Developer</span>, I've
          acquired a foundational set of skills and a solid understanding of the
          core technologies that power the web. My skills include:
        </p>
        <br />
        <ul className="list-disc list-inside text-gray-600 font-medium">
          {skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="m-auto">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tighter font-Obitron text-center border-2 border-blue-500">
          Certificates
        </h1>
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default SkillsResume;
