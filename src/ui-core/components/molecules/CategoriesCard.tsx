import ClothType from "../atoms/ClothType";

function CategoriesCard({ ...props }) {
  const { clothType, color } = props;

  return (
    <div
      className={`w-[380px] h-[180px] rounded-2xl shadow-black shadow-3xl flex items-center justify-center ${color} hover:shadow-4xl`}
    >
      <ClothType {...{ clothType }} />
    </div>
  );
}

export default CategoriesCard;
