import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const GridImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group" />
      <p>
        <FaInstagram size={30} className="z-10" />
      </p>
    </div>
  );
};

export default GridImg;
