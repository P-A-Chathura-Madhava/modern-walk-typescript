import { useAppDispatch } from "../../../../app/store";
import { FaMinus } from "react-icons/fa6";
import { decrementQty } from "../../../../feature/cart/cartSlice";
import { Button } from "../../../../components/ui/button";

function CartDecrementButton({ ...props }) {
  const { item } = props;

  const dispatch = useAppDispatch();

  const decrementQtyHandler = (product: any) => {
    dispatch(decrementQty(product));
  };

  return (
    <Button className="w-6 h-6 p-1 text-black transition-all duration-300 bg-white border border-black rounded-full cursor-pointer hover:bg-slate-400">
      <FaMinus
        // className="w-6 h-6 p-1 transition-all duration-300 border border-black rounded-full cursor-pointer hover:bg-slate-400"
        onClick={() => {
          decrementQtyHandler(item);
        }}
      />
    </Button>
  );
}

export default CartDecrementButton;
