import { useAppDispatch } from "../../../../app/store";
import { FaPlus } from "react-icons/fa6";
import { incrementQty } from "../../../../feature/cart/cartSlice";
import { Button } from "../../../../components/ui/button";

function CartIncrementQtyButton({ ...props }) {
  const { item } = props;

  const dispatch = useAppDispatch();

  const incrementQtyHandler = (product: any) => {
    dispatch(incrementQty(product));
  };

  return (
    <Button className="w-6 h-6 p-1 text-black transition-all duration-300 bg-white border border-black rounded-full cursor-pointer hover:bg-slate-400">
      <FaPlus
        // className="w-6 h-6 p-1 transition-all duration-300 border border-black rounded-full cursor-pointer hover:bg-slate-400"
        onClick={() => {
          incrementQtyHandler(item);
        }}
      />
    </Button>
  );
}

export default CartIncrementQtyButton;
