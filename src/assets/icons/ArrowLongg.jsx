import React from "react";

const ArrowLongg = ({ color, id, width }) => {
  return (
    <svg
      width={width}
      height="173"
      id={id}
      viewBox="0 0 672 173"
      fill="none"
      className="w-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.38672"
        y="9.50049"
        width="662.648"
        height="8"
        transform="rotate(12.3819 4.38672 9.50049)"
        fill={color}
      />
      <path
        d="M667.977 158.729C668.278 159.064 668.161 159.595 667.748 159.773L650.309 167.279C649.326 167.702 648.275 166.835 648.505 165.789L653.023 145.206C653.253 144.16 654.57 143.812 655.286 144.609L667.977 158.729Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLongg;
