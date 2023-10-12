import React from "react";
import pc from "../assets/pc.png";

const Skills = () => {
  const skills = [
    "HTML & CSS: Proficiency in creating and styling web pages using HTML and CSS/Tailwind.",
    "JavaScript: Familiarity with JavaScript for adding interactivity and functionality to websites.",
    "Responsive Design: Building responsive and mobile-friendly web interfaces with CSS and media queries.",
    "Front-End Frameworks: Basic knowledge of front-end libraries and frameworks like React and NextJS.",
    "Version Control: Experience with Git and GitHub for collaborative development.",
    "Web Development Tools: Familiarity with web development tools such as code editors, browsers developer tools, and debugging techniques.",
    "Problem Solving: A logical and analytical mindset for troubleshooting and problem-solving.",
  ];

  return (
    <section className="flex flex-col lg:flex-row md:pt-28 lg:pb-72 justify-center align-middle m-auto ">
      <div className="flex flex-col p-5 md:p-10 m-auto  lg:w-[900px]">
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
          {skills.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <span className="md:text-lg font-medium text-left text-blue-600"></span>

        {/* <h3 className="font-bold text-xl tracking-tighter py-2">
      Find me on Social Media
    </h3> */}
      </div>
      <div className=" hidden lg:flex flex-col p-5 my-auto m-auto lg:ml-auto ">
        <img src={pc} alt="pc" className="w-72" />
      </div>
    </section>
  );
};

export default Skills;
