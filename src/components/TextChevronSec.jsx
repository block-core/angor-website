import React from "react";
import ChevronIcon from "../assets/icons/ChevronIcon";

const TextChevronSec = ({ color, text, id }) => {
  return (
    <div id={id} class="flex flex-col items-center w-[108px]">
      <p className="text-[#595959] text-center text-base">{text}</p>
      <ChevronIcon color={color} />
    </div>
  );
};

export default TextChevronSec;
