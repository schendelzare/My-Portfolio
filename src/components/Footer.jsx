import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-5">
      <div
        className={` ${"animate-fade-left opacity-0"} w-20 m-auto flex gap-5 animate-delay-700`}
      >
        <a href="https://github.com/schendelzare" className="hover:scale-105">
          <BsGithub size={35} />
        </a>
        <a
          href="https://www.facebook.com/raymark.s.vergara"
          className="hover:scale-105"
        >
          <BsFacebook size={35} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
