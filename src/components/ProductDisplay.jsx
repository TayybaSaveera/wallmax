import React from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets//star_dull_icon.png";
import laminated from "../assets/laminated.png";
import scratch from "../assets/scratch-resist.png";
import adhesive from "../assets/self-adhesive.png";
import water from "../assets/water-resist.png";
function ProductDisplay(props) {
  const { product } = props;
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 my-5 gap-7">
        <div className="  left flex-col mx-5 flex gap-4 px-5 py-10">
          <div>
            <img
              src={product.image}
              className="w-full lg:h-[600px] sm:h-[550px] object-cover"
            />
          </div>
          <div className="list flex flex-row gap-4  ">
            <img src={product.image} className="w-20 h-20" />
            <img src={product.image} className=" w-20 h-20" />
            <img src={product.image} className=" w-20 h-20" />
            <img src={product.image} className=" w-20 h-20" />
          </div>
        </div>
        <div className="right mx-0  flex flex-col px-5 py-10 gap-4">
          <h1 className="font-semibold text-4xl">{product.title}</h1>
          <div className="flex items-center mt-3 gap-1 text-sm">
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_dull_icon} />
          </div>
          <div className="flex  text-xl font-bold">Rs.{product.price}</div>
          <div>
            <button className="btn bg-red-500 text-black uppercase rounded-none w-full">
              Contact for more info
            </button>
          </div>
          <div className="flex gap-6 sm:gap-8 lg:gap-4 items-center py-4 px-4 overflow-x-auto ">
            <img
              src={laminated}
              className="w-16 h-16 sm:w-16 sm:h-16 lg:w-32 lg:h-32"
            />
            <img
              src={scratch}
              className="w-16 h-16 sm:w-16 sm:h-16 lg:w-32 lg:h-32"
            />
            <img
              src={adhesive}
              className="w-16 h-16 sm:w-16 sm:h-16 lg:w-32 lg:h-32"
            />
            <img
              src={water}
              className="w-16 h-16 sm:w-16 sm:h-16 lg:w-32 lg:h-32"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
