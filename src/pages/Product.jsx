import React from "react";
import products from "../assets/db";
import ProductDisplay from "../components/ProductDisplay";
import { useParams } from "react-router-dom";
import SimilarProduct from "../components/SimilarProduct";
function Product() {
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  if (!product) return <p>Product not found!</p>;
  return (
    <div>
      <ProductDisplay product={product} />
      <SimilarProduct />
    </div>
  );
}

export default Product;
