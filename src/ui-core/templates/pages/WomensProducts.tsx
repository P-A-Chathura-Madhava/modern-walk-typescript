import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { getWomensProducts } from "../../../feature/products/productSlice";
import { ProductType } from "../../../feature/products/types/ProductType";
import WomensProductsSection from "../../layouts/WomensProductsSection";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function WomensProducts() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate("/signin");
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWomensProducts());
  }, []);

  const productState: ProductType[] = useAppSelector(
    (state: any) => state.product.womensProducts
  );

  return <WomensProductsSection {...{ productState }} />;
}

export default WomensProducts;
