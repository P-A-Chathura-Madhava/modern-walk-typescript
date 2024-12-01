import { Label } from "../../../../components/ui/label";

function CartItemQty({ ...props }) {
  const { item } = props;

  return (
    <Label className="p-2 border rounded-lg border-slate-600">
      {item?.qty}
    </Label>
  );
}

export default CartItemQty;
