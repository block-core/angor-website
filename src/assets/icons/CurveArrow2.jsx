import React from "react";

const CurveArrow2 = ({ width, id }) => {
  return (
    <svg
      width={width}
      id={id}
      className="w-0"
      height="300"
      viewBox="0 0 178 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M177.506 245.565C177.871 245.828 177.871 246.371 177.506 246.634L162.082 257.705C161.212 258.329 160 257.707 160 256.636L160 235.563C160 234.492 161.212 233.87 162.082 234.495L177.506 245.565Z"
        fill="#022229"
      />
      <path
        d="M4 4V216C4 232.569 17.4315 246 34 246H163"
        stroke="#022229"
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CurveArrow2;
