import { useAppDispatch } from "../../../../app/store";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../../../feature/cart/cartSlice";

function AddtoCartButton({ ...props }) {
  const { product } = props;

  const dispatch = useAppDispatch();

  // Add to Cart
  const addToCartHandler = () => {
    product.qty = 1;
    dispatch(addToCart(product));
  };

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={addToCartHandler}
    >
      <FaShoppingCart />
    </div>
  );
}

export default AddtoCartButton;
