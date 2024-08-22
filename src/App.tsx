import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MensProducts from "./pages/MensProducts";
import WomensProducts from "./pages/WomensProducts";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens-products" element={<MensProducts />} />
        <Route path="/womens-products" element={<WomensProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
