import SubHeading from "../components/atoms/SubHeading";
import ProductRaw from "../components/molecules/ProductRaw";
import CategoriesRaw from "../components/molecules/CategoriesRaw";

function HomeSection({ ...props }) {
  const { productState } = props;

  return (
    <section className="container mx-auto mt-2 px-60">
      <SubHeading {...{ title: "Flash Sale" }} />
      <ProductRaw {...{ productState }} />
      <div className="mt-7"></div>
      <SubHeading {...{ title: "Categories" }} />
      <CategoriesRaw />
    </section>
  );
}

export default HomeSection;
