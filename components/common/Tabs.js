import React, { useState } from "react";

const Tabs = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="border-2 border-gray-200 rounded max-w-[80em] hidden lg:block">
      <div className="flex justify-items-center">
        {items.map((el, i) => (
          <h2
            onClick={() => setSelectedItem(el)}
            className="h-full w-full text-center p-2 hover:bg-gray-400 cursor-pointer"
            key={i}
          >
            {el.header}
          </h2>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center min-h-[20em]">
        <p className="w-96">{selectedItem.body}</p>
      </div>
    </div>
  );
};

export default Tabs;
