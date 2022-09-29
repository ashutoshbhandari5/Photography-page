import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const setNext = () => {
    const newSlide = current === length - 1 ? 0 : current + 1;
    setCurrent(newSlide);
  };

  const setPrevious = () => {
    const newSlide = current === 0 ? length - 1 : current - 1;
    setCurrent(newSlide);
  };

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {sliderData.map((el, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              onClick={setPrevious}
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <Image
                width="1440"
                height="600"
                objectFit="cover"
                src={el.image}
              />
            )}
            <FaArrowCircleRight
              onClick={setNext}
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
