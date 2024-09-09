function ProductCardDescription({ ...props }) {
  return (
    <p className="text-xs font-medium text-center truncate">
      {props.description}
    </p>
  );
}

export default ProductCardDescription;
