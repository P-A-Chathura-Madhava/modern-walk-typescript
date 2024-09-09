import { useAppDispatch, useAppSelector } from "../../../app/store";
import { getMensProducts } from "../../../feature/products/productSlice";
import { ProductType } from "../../../feature/products/types/ProductType";
import { useEffect } from "react";
import MensProductsSection from "../../layouts/MensProductsSection";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function MensProducts() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate("/signin");
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMensProducts());
  }, []);

  const productState: ProductType[] = useAppSelector(
    (state: any) => state.product.mensProducts
  );

  return <MensProductsSection {...{ productState }} />;
}

export default MensProducts;
