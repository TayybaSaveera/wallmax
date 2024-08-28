import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  return (
    <div className=" bg-gradient-to-r from-rose-400 to-red-500/80 rounded-lg hover:scale-100 overflow-hidden">
      <img
        src={props.image}
        className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
        onClick={window.scrollTo(0, 0)}
      />

      <p className="px-4 py-4 text-center  text-2xl text-white capitalize">
        {props.category}
      </p>
    </div>
  );
}

export default CategoryItem;
