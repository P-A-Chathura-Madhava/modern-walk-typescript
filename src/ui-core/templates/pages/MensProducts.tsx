import MensProductsSection from "../../layouts/MensProductsSection";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import useGetMensProducts from "../../../hooks/products/useGetMensProducts";

function MensProducts() {
  const products = useGetMensProducts();
  const productState = products.data;

  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate("/signin");
  }

  return <MensProductsSection {...{ productState }} />;
}

export default MensProducts;
