import { MdRemoveShoppingCart } from "react-icons/md";
import ProductCardHeading from "../../atoms/cart/CartProductCardHeading";
import ProductCardImageOnly from "../../atoms/cart/CartProductCardImage";

function CartProductCardImage({ ...props }) {
  const { id, title, image, price, description, color } = props;
  return (
    <div className="cardImageDiv font-poppins">
      <div className="overflow-hidden">
        <ProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2">
        <ProductCardImageOnly {...{ image }} />
        <div className="flex flex-col pt-6">
          <div className="flex items-center justify-center w-8 h-8 text-xl font-bold rounded-full hover:bg-slate-400">
            <MdRemoveShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCardImage;
