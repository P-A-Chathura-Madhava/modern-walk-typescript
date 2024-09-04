import ProductCardImage from "./ProductCardImage";
import ProductDetail from "../molecules/ProductDetail";

function ProductCard({ ...props }) {
  const { id, title, image, price, description, color } = props;
  
  
  return (
    <div
      className={`w-[170px] h-[224px] rounded-2xl shadow-black shadow-3xl cursor-pointer hover:shadow-4xl transition-all duration-300 pt-2`}
    >
      <ProductCardImage {...{ id, title, image, price, description, color }} />
      <ProductDetail {...{ price, description, color }} />
    </div>
  );
}

export default ProductCard;
