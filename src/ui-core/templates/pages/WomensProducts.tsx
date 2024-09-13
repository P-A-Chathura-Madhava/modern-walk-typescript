import WomensProductsSection from "../../layouts/WomensProductsSection";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import useGetWomensProducts from "../../../hooks/products/useGetWomensProducts";

function WomensProducts() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const products = useGetWomensProducts();
  const productState = products.data;

  if (!isSignedIn) {
    navigate("/signin");
  }

  return <WomensProductsSection {...{ productState }} />;
}

export default WomensProducts;
