import SubHeading from "../components/atoms/page/SubHeading";
import Products from "../components/molecules/Products";

function WomensProductsSection({ ...props }) {
  const { productState } = props;

  return (
    <section className="container mx-auto mt-2 px-60">
      <SubHeading {...{ title: "Women's Clothing" }} />
      <Products {...{ productState }} />
    </section>
  );
}

export default WomensProductsSection;
