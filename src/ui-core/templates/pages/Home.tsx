import { useAppDispatch, useAppSelector } from "../../../app/store";
import { useEffect } from "react";
import { getMixedProducts } from "../../../feature/products/productSlice";
import { ProductType } from "../../../feature/products/types/ProductType";
import HomeSection from "../../layouts/HomeSection";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const {isSignedIn} = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate("/signin");
  }
  

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMixedProducts());
  }, []);

  const productState: ProductType[] = useAppSelector(
    (state) => state.product.products
  );
  

  return <HomeSection {...{ productState }} />;
}

export default Home;
