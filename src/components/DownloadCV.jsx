import React from "react";

const DownloadCV = () => {
  return (
    <section
      className="flex flex-col lg:flex-row md:pt-28 lg:pb-40  m-auto "
      id="resume"
    >
      <div className="flex flex-col p-5 md:p-10 m-auto  lg:w-[900px]">
        <div className="m-auto py-10 hover:scale-105 active:scale-95">
          <a
            href="resume"
            className="py-3 px-10 border-2 border-blue-500 text-blue-500 font-semibold rounded-md "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
