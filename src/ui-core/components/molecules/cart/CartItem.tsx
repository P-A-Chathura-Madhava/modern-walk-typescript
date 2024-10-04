import ItemImage from "../../atoms/cart/ItemImage";
import CartItemTitle from "../../atoms/cart/CartItemTitle";
import CartItemDescription from "../../atoms/cart/CartItemDescription";
import CartRemoveItemButton from "../../atoms/cart/CartRemoveItemButton";
import CartItemQty from "../../atoms/cart/CartItemQty";
import CartIncrementQtyButton from "../../atoms/cart/CartIncrementQtyButton";
import CartDecrementButton from "../../atoms/cart/CartDecrementButton";
import CartItemPrice from "../../atoms/cart/CartItemPrice";

function CartItem({ ...props }) {
  const { item } = props;

  return (
    <div className="flex pt-4">
      {/* Product Details */}
      <div className="flex gap-6 w-[60%]">
        {/* Cart Item */}
        <ItemImage {...{ image: item.image }} />
        <div>
          <CartItemTitle {...{ title: item.title }} />
          <CartItemDescription {...{ description: item.description }} />
          <CartRemoveItemButton {...{ item: item }} />
        </div>
      </div>

      {/* Quantity */}
      <div className="w-[20%] flex justify-center items-center gap-2">
        <CartItemQty {...{ item: item }} />
        <CartIncrementQtyButton {...{ item: item }} />
        <CartDecrementButton {...{ item: item }} />
      </div>

      <div className="w-[20%]">
        <CartItemPrice {...{ price: item.price }} />
      </div>
    </div>
  );
}

export default CartItem;
