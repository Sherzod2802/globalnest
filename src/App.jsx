import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SampleWebsiteDesign from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <SampleWebsiteDesign />
      <Footer />
    </div>
  );
}

export default App;
