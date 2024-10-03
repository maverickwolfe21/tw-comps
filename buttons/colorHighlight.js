import React from "react";

const colorHighlight = ({ handleClick, title }) => {
  return (
    <button
      onClick={handleClick}
      className="w-52 cursor-pointer font-medium hover:text-black hover:bg-white border-2 py-3 mt-5 rounded-lg border-white transition:all duration-200"
    >
      <h2 className="">{title}</h2>
    </button>
  );
};

export default colorHighlight;
