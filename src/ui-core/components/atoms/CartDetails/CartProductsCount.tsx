function CartProductsCount({ ...props }) {
  const { productState } = props;

  return (
    <h4 className="font-bold text-red-800 text-md">{productState.length}</h4>
  );
}

export default CartProductsCount;
