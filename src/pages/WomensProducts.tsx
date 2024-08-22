import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import ProductCard from "../components/ProductCard";
import { getWomensProducts } from "../feature/products/productSlice";

function WomensProducts() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWomensProducts());
  }, []);

  const productState = useAppSelector((state) => state.product.womensProducts)
  console.log(productState);
  

  // const item: {
  //   title: string;
  //   image: string;
  //   price: number;
  //   description: string;
  //   bgColor: string;
  // } = {
  //   title: "Mens Cotton Jacket",
  //   image: "../images/img1.png",
  //   price: 2000,
  //   description:
  //     "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling...",
  //   bgColor: "#2BD9AF",
  // };

  return (
    <section className="container mx-auto mt-2 px-60">
    <h2 className="mb-4 text-xl font-bold">Women's Clothing</h2>
    <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8">
    {productState &&
          productState?.map((item, index) => {
            // console.log(item?.image);
            
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
      {/* <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      />
      <ProductCard
        title={item?.title}
        image={item?.image}
        price={item?.price}
        description={item?.description}
        color="bg-[#2bd9af]"
      /> */}
    </div>
  </section>
  )
}

export default WomensProducts