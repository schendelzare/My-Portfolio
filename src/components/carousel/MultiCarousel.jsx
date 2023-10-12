import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../UI/Card";

const MultiCarousel = ({ slider }) => {
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

  return (
    <div className="w-[350px] sm:w-[600px]   md:w-[900px] bg-slate-300 shadow-2xl p-5 lg:p-10">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
      >
        {slider.map((s, i) => (
          <Card key={i}>
            <img src={s.img} className="hover:scale-105" />
            <h2 className="font-semibold text-center text-blue-500">
              {s.name}
            </h2>

            <div className="py-4 cursor-pointer font-semibold text-center text-white">
              <a href={s.gitlink}>
                {" "}
                <h2 className="hover:scale-105">Github Link</h2>
              </a>
              <a href={s.link}>
                {" "}
                <h2 className="hover:scale-105">Website Link</h2>
              </a>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
