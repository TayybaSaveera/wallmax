import React from "react";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <div className="text-white my-4 bg-red-400/80 backdrop-blur-sm   rounded-lg shadow-black shadow-sm   hover:scale-100  overflow-hidden ">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <div className="px-4 py-4 text-centertext-black">
        <p className="text-xl"> {props.title}</p>
        <p className="">Rs {props.price}</p>
      </div>
    </div>
  );
}

export default Item;
