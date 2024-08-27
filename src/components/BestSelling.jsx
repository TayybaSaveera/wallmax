import React from "react";
import Item from "./Item";
import product from "../assets/db";

function BestSelling() {
  return (
    <div className="mb-10 mx-10">
      <div className="my-10">
        <h1 className="font-bold text-3xl capitalize text-center">
          Best Selling Products
        </h1>
      </div>
      <div className=" gap-3 grid lg:grid-cols-4 sm:grid-cols-2">
        {product.map((item, i) => {
          console.log(item);
          return (
            <Item
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestSelling;
