import SubHeading from "../components/atoms/SubHeading";
import Products from "../components/molecules/Products";

function MensProductsSection({ ...props }) {
  const { productState } = props;

  return (
    <section className="container mx-auto mt-2 px-60">
      <SubHeading {...{ title: "Men's Clothing" }} />
      <Products {...{ productState }} />
    </section>
  );
}

export default MensProductsSection;
