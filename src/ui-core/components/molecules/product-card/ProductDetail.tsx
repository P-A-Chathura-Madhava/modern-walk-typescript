import ProductCardDescription from "../../atoms/product-card/ProductCardDescription";
import ProductCardPrice from "../../atoms/product-card/ProductCardPrice";

function ProductDetail({ ...props }) {
  const { price, description, category } = props;    

  return (
    <div className={`rounded-2xl h-[80px] ${category === "women's clothing" ? "bg-[#ff5d84]" : "bg-[#2bd9af]"} px-4`}>
      <ProductCardPrice {...{ price }} />
      <ProductCardDescription {...{ description }} />
    </div>
  );
}

export default ProductDetail;
