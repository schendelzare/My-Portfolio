import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-[260px] h-[300px] bg-black/60 backdrop-blur-lg rounded-xl m-auto py-2 px-2 text-center ">
      {children}
    </div>
  );
};

export default Card;
