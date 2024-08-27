import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Your Navbar component
import HomePage from "./pages/Homepage"; // Your HomePage component
import ProductCategory from "./components/ProductCategory";
import CategoryPage from "./pages/Categorypage";
import Product from "./pages/Product";
import Footer from "./components/Footer";
// Another example page

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will always be displayed */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return <Layout />;
}

export default App;
