import React from "react";
import arrowLeft from "../assets/images/arrow-left.png";
const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      class="w-16 h-12 rounded-md flex justify-center bg-angorPrimary items-center"
    >
      <img src={arrowLeft.src} width="36" height="36" />
    </button>
  );
};

export default BackButton;
