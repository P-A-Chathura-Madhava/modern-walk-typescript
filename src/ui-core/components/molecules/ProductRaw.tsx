import { ProductProp } from "../types/ProductProp";
import ProductCard from "../atoms/ProductCard";

function ProductRaw({ ...props }) {
  const { productState } = props;

  return (
    <div className="flex justify-between align-middle">
      {productState &&
        productState?.map((item: ProductProp, index: number) => {
          let bgColor;
          item?.category === "men's clothing"
            ? (bgColor = "bg-[#2bd9af]")
            : (bgColor = "bg-[#ff5d84]");
          return (
            <ProductCard
              key={index}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              description={item?.description}
              color={bgColor}
            />
          );
        })}
    </div>
  );
}

export default ProductRaw;
