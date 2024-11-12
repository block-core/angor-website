import React from "react";

const LongArrow = ({ color, id, width }) => {
  return (
    <svg
      id={id}
      width={width}
      height="27"
      viewBox="0 0 331 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-0"
    >
      <rect y="9.09961" width="312.75" height="8" fill={color} />
      <path
        d="M330.256 12.5653C330.621 12.8277 330.621 13.3715 330.256 13.6339L314.832 24.7046C313.962 25.3292 312.75 24.7073 312.75 23.636L312.75 2.5632C312.75 1.49196 313.962 0.869993 314.832 1.49465L330.256 12.5653Z"
        fill={color}
      />
    </svg>
  );
};

export default LongArrow;
