import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ProductCategory from "../components/ProductCategory.jsx";
import Footer from "../components/Footer.jsx";
import BestSelling from "../components/BestSelling.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import Feedback from "../components/Feedback.jsx";

function homePage() {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <BestSelling />
      <NewArrivals />
      <Feedback />
    </div>
  );
}

export default homePage;
