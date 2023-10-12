import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./UI/Card";

const CardSkill = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <div className="w-[350px] sm:w-[600px]  md:w-[900px] m-auto bg-slate-300 shadow-2xl p-5 lg:p-10">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        dotListClass="custom-dot-list-style"
      >
        {data.map((s, i) => (
          <Card className="" key={i}>
            <h1 className="font-bold text-2xl md:text-xl tracking-tighter font-Obitron text-center text-blue-500">
              {s[0].name}
            </h1>
            <br />

            <ul className="list-disc list-inside font-medium text-left text-white">
              {s[1].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <span className="md:text-lg font-medium text-left text-blue-600"></span>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSkill;
