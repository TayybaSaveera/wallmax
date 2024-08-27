import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Your Navbar component
import HomePage from "./pages/Homepage"; // Your HomePage component
// Another example page

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will always be displayed */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return <Layout />;
}

export default App;
