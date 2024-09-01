import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] lg:px-[9vw]">
        <Navbar />
        <Search/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
