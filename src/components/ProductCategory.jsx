import React from "react";
import category from "../assets/category";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
function ProductCategory() {
  return (
    <div className="mb-10 mx-10">
      <div className="my-10">
        <h1 className="font-bold text-3xl text-center">Product Categories</h1>
      </div>
      <div className=" mt-12 gap-3 grid lg:grid-flow-col sm:grid-cols-2">
        {category.map((item, i) => {
          console.log(item);
          return (
            <Link key={i} to={`/category/${item.category}`}>
              <CategoryItem
                id={item.id}
                category={item.category}
                image={item.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCategory;
