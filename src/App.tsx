import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui-core/templates/pages/Home";
import MensProducts from "./ui-core/templates/pages/MensProducts";
import WomensProducts from "./ui-core/templates/pages/WomensProducts";
import Header from "./ui-core/components/molecules/Header";
import { SignUp } from "@clerk/clerk-react";
import Login from "./ui-core/templates/pages/Login";
import Watchlist from "./ui-core/templates/pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartDetails from "./ui-core/templates/pages/CartDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/mens-products" element={<MensProducts />} />
          <Route path="/womens-products" element={<WomensProducts />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
