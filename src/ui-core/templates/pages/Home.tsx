import HomeSection from "../../layouts/HomeSection";
import useGetMixedProducts from "../../../hooks/products/useGetMixedProducts";

function Home() {
  const products = useGetMixedProducts();
  const productState = products.data;

  return <HomeSection {...{ productState }} />;
}

export default Home;
