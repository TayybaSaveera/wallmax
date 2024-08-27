import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ProductCategory from "../components/ProductCategory.jsx";
import Footer from "../components/Footer.jsx";
import BestSelling from "../components/BestSelling.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import CustomerFeedback from "../components/CustomerFeedback.jsx";
function homePage() {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <BestSelling />
      <NewArrivals />
      <CustomerFeedback />
      <Footer />
    </div>
  );
}

export default homePage;
