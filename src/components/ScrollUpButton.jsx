import { useEffect, useState } from "react";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
<<<<<<< HEAD
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
=======
>>>>>>> 6a36a36 (first commit)
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: "smooth", // Ensure smooth scrolling
=======
      behavior: "smooth",
>>>>>>> 6a36a36 (first commit)
    });
  };

  return (
    <>
<<<<<<< HEAD
      <button
        className={`w-12 h-12 fixed bottom-6 right-6 main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 cursor-pointer flex justify-center items-center transition-opacity duration-300 ease-in-out z-50 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
          viewBox="0 0 20 20"
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(203, 221, 225)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
=======
      {isVisible && (
        <button
          className="w-12 h-12 fixed bottom-6 right-6 main-border-gray rounded-xl  bg-bgDark2 hover:bg-bgDark3 cursor-pointer flex justify-center items-center transition z-50"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="rgb(203, 221, 225)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      )}
>>>>>>> 6a36a36 (first commit)
    </>
  );
};
