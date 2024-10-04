import CheckoutButton from "../components/atoms/CartFooter/CheckoutButton";
import ClearCartButton from "../components/atoms/CartFooter/ClearCartButton";

function CartFooter() {
  return (
    <div className="h-[225px] bg-slate-500 mt-2 font-poppins">
      <div className="container flex justify-between px-20 py-10 mx-auto">
        <ClearCartButton />
        <CheckoutButton />
      </div>
    </div>
  );
}

export default CartFooter;
