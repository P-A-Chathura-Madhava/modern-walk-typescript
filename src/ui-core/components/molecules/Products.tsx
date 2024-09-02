import { ProductProp } from "../types/ProductProp";
import ProductCard from "../atoms/ProductCard";

function Products({ ...props }) {
  const { productState } = props;

  return (
    <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8">
      {productState &&
        productState?.map((item: ProductProp, index: number) => {
          return (
            <ProductCard
              key={index}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              description={item?.description}
              color="bg-[#2bd9af]"
            />
          );
        })}
    </div>
  );
}

export default Products;
