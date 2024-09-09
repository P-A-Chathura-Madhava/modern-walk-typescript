import ProductCardDescription from "../../atoms/product-card/ProductCardDescription";
import ProductCardPrice from "../../atoms/product-card/ProductCardPrice";

function ProductDetail({ ...props }) {
  const { price, description, color } = props;

  return (
    <div className={`rounded-2xl h-[80px] ${color} px-4`}>
      <ProductCardPrice {...{ price }} />
      <ProductCardDescription {...{ description }} />
    </div>
  );
}

export default ProductDetail;
