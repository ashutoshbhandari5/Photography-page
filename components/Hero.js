import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-cover bg-center bg-fixed custom-img">
      <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="p-5 z-[2] text-white">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
