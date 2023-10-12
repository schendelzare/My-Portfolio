import React from "react";
import About from "./components/About";
import Conclusion from "./components/Conclusion";
import DownloadCV from "./components/DownloadCV";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SkillsResume from "./components/SkillsResume";

const App = () => {
  return (
    <div className="">
      <Nav />
      <div className="2xl:px-52">
        <Hero />
        <About />
        {/* <Skills /> */}
        <Projects />
        <SkillsResume />
        <Learning />
        <Conclusion />
        <Footer />
      </div>
    </div>
  );
};

export default App;
