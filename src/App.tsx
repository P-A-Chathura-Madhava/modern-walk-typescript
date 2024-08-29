import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui-core/templates/pages/Home";
import MensProducts from "./ui-core/templates/pages/MensProducts";
import WomensProducts from "./ui-core/templates/pages/WomensProducts";
import Header from "./ui-core/components/molecules/Header";

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
