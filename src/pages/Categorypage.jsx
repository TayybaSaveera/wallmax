import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/db"; // Assume this is your product data

function Categorypage() {
  const { categoryName } = useParams(); // Accessing the category from the URL

  // Filter products that match the selected category
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="mb-10 mx-10">
      <div className="my-10">
        <h1 className="font-bold text-3xl text-center capitalize">
          {categoryName}
        </h1>
      </div>
      <div className="mt-12 gap-3 grid lg:grid-cols-4 sm:grid-cols-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card bg-gray-100 p-5 rounded-lg">
              <img src={product.image} alt={product.title} />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-600">Rs {product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Categorypage;
