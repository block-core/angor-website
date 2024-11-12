import React from "react";

const CurveArrow = ({ color, width, id }) => {
  return (
    <svg
      width={width}
      height="103"
      viewBox="0 0 161 103"
      fill="none"
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      className="w-0"
    >
      <path
        d="M11.5653 0.744333C11.8277 0.378781 12.3715 0.37878 12.6339 0.744332L23.7046 16.1677C24.3292 17.038 23.7073 18.25 22.636 18.25H1.56319C0.491959 18.25 -0.130009 17.038 0.494649 16.1677L11.5653 0.744333Z"
        fill="#D8B9FF"
      />
      <path
        d="M16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13H16ZM8 13V69H16V13H8ZM42 103H161V95H42V103ZM8 69C8 87.7777 23.2223 103 42 103V95C27.6406 95 16 83.3594 16 69H8Z"
        fill="#D8B9FF"
      />
    </svg>

    // <svg
    //   width={width}
    //   height="200"
    //   viewBox="0 0 160 100"
    //   fill="none"
    //   id={id}
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="w-0"
    // >
    //   {/* <!-- Line Path --> */}
    //   <path
    //     d="M8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4H8ZM0 4V60H8V4H0ZM34 94H153V86H34V94ZM0 60C0 78.7777 15.2223 94 34 94V86C19.6406 86 8 74.3594 8 60H0Z"
    //     fill={color}
    //   />

    //   {/* <!-- Arrowhead Path with Adjusted Positioning --> */}
    //   <path
    //     d="M11.5653 0.744333C11.8277 0.378781 12.3715 0.37878 12.6339 0.744332L23.7046 16.1677C24.3292 17.038 23.7073 18.25 22.636 18.25H1.56319C0.491959 18.25 -0.130009 17.038 0.494649 16.1677L11.5653 0.744333Z"
    //     fill={color}
    //     transform="translate(-10, -10)"
    //   />
    // </svg>
  );
};

export default CurveArrow;
