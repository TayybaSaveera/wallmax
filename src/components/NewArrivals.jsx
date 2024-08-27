import React from "react";
import Item from "./Item";
import product from "../assets/db";

function NewArrivals() {
  const slideleft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="mb-10 lg:mx-5 sm:mx-0">
      <div className="my-10">
        <h1 className="font-bold text-3xl capitalize text-center">
          New arrivals
        </h1>
      </div>
      <div className="relative flex items-center">
        <svg
          onClick={slideleft}
          className="opacity-50 cursor-pointer hover:opacity-100 bg-red-400 lg:mx-4 sm:mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
        <div
          id="slider"
          className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {product.map((item, index) => (
            <div
              key={index}
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <img
                src={item.image}
                alt={item.title} // Adding alt for accessibility
              />
              {/* Uncomment if needed */}
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <svg
          onClick={slideRight}
          className="opacity-50 cursor-pointer hover:opacity-100  bg-red-400  lg:mx-4 sm:mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </div>

      <div className="text-center mt-6">
        <button className="btn uppercase bg-rose-500 px-6 py-2 text-white">
          explore more
        </button>
      </div>
    </div>
  );
}

export default NewArrivals;
