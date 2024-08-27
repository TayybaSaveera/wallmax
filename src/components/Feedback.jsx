import React from "react";
import customerFeedback from "../assets/feedback";

function Feedback() {
  const slideLeft = () => {
    const slider = document.getElementById("sliderfeedback");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("sliderfeedback");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mb-10 lg:mx-5 sm:mx-0">
      <div className="my-10">
        <h1 className="font-bold text-3xl capitalize text-center">
          Customer Feedback
        </h1>
      </div>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <svg
          onClick={slideLeft}
          className="opacity-50 cursor-pointer hover:opacity-100 bg-red-500 p-2 rounded-full lg:mx-4 sm:mx-4 shadow-md"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>

        {/* Feedback Cards */}
        <div
          id="sliderfeedback"
          className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {customerFeedback.map((item) => (
            <div
              key={item.id}
              className="bg-white w-80 h-48 rounded-lg shadow-lg inline-block m-4 p-5 transform transition-all hover:scale-105"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-700 text-lg mb-4 italic text-wrap">
                  "{item.feedback}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">
                    Rating: {item.rating}/5
                  </span>
                  <div className="text-sm text-gray-500">#{item.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <svg
          onClick={slideRight}
          className="opacity-50 cursor-pointer hover:opacity-100 bg-red-500 p-2 rounded-full lg:mx-4 sm:mx-4 shadow-md"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </div>
    </div>
  );
}

export default Feedback;
