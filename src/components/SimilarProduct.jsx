import React from "react";
import { Link } from "react-router-dom";
import product from "../assets/db"; // Make sure this path is correct

function SimilarProduct() {
  const slideLeft = () => {
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
          Similar products
        </h1>
      </div>
      <div className="relative flex items-center">
        <svg
          onClick={slideLeft}
          className="opacity-50 cursor-pointer hover:opacity-100 bg-red-400 lg:mx-4 sm:mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>

        <div
          id="slider"
          className="flex w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {product.map((item, index) => (
            <Link key={index} to={`/product/${item.id}`}>
              <div className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => window.scrollTo(0, 0)}
                  className="w-full h-auto"
                />
                <p className="truncate text-wrap font-semibold">{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <svg
          onClick={slideRight}
          className="opacity-50 cursor-pointer hover:opacity-100 bg-red-400 lg:mx-4 sm:mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
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

export default SimilarProduct;
