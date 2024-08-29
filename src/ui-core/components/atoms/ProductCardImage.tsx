function ProductCardImage({ ...props }) {
  return (
    <div className="cardImageDiv">
      <div className="overflow-hidden">
        <h2 className="text-sm font-bold text-center truncate">
          {props.title.length < 20 ? props.title : props.title.substring(0, 20)}
        </h2>
      </div>
      <img
        className="h-[100px] w-[100px] my-2"
        src={props.image}
        alt="mens-cloth-img"
      />
    </div>
  );
}

export default ProductCardImage;
