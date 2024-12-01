import { useAppDispatch } from "../../../../app/store";
import { Button } from "../../../../components/ui/button";
import { removeFromCart } from "../../../../feature/cart/cartSlice";

function CartRemoveItemButton({ ...props }) {
  const { item } = props;

  const dispatch = useAppDispatch();

  const removeItemFromCartHandler = (product: any) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Button
      className="p-1 text-xs font-bold text-red-800 transition-all duration-300 bg-white border border-red-800 rounded-lg cursor-pointer hover:bg-red-400 h-[24px]"
      onClick={() => removeItemFromCartHandler(item)}
    >
      Remove
    </Button>
  );
}

export default CartRemoveItemButton;
