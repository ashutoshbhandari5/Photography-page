import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Accordian = ({ header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[25em]">
      <div
        style={{ background: "rgb(254, 214, 16)" }}
        className="bg-rose-100 border-gray-200 p-5 rounded-md mb-2"
      >
        <div className="flex justify-between ">
          <h2 className="font-bold">{header}</h2>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        </div>
      </div>
      <div
        style={{ background: "#E8A735" }}
        className={`mb-2 text-white text-justify p-2 rounded-md shadow-lg  ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <p className="p-2">{body}</p>
      </div>
    </div>
  );
};

const AccordianLayout = ({ items }) => {
  return (
    <div className="bg-white p-8 rounded lg:hidden border-neutral-300">
      {items.map((el, i) => (
        <Accordian key={i} header={el.header} body={el.body} />
      ))}
    </div>
  );
};

export default AccordianLayout;
