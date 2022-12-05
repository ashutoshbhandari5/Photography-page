import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Accordian = ({ header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-[25em] border-2 border-gray-200 p-5 rounded ${
        isOpen ? "bg-gray-100" : null
      }`}
    >
      <div className="flex justify-between">
        <h2 className="font-bold">{header}</h2>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
      <div className={` ${isOpen ? "visible" : "hidden"}`}>
        <p className="p-2">{body}</p>
      </div>
    </div>
  );
};

export default Accordian;
