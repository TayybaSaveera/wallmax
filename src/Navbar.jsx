import React, { useState } from "react";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const search = () => {
    setIsVisible(true);
  };
  return (
    <div className="flex justify-between mt-2 py-3 lg:px-6 sm:px-2 shadow-lg items-center w-full">
      <Link to="/">
        <div>
          <img src={logo} alt="Logo" className="max-w-28 max-h-28" />
        </div>
      </Link>

      <div className="search lg:mr-5  sm:mr-2  ">
        {/* <div >
          <input
            type="text"
            placeholder="serach... "
            className="mt-1 outline-none"
          />
        </div> */}
        <button onClick={search}>
          {isVisible && (
            <div className="search mr-5  flex rounded-full border-gray-500 border  px-2 py-2 gap-2 items-center">
              <input
                type="text"
                placeholder="search... "
                className="mt-1 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
          )}
          {!isVisible && (
            <div className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
