import { FaRegBookmark } from "react-icons/fa6";
import { useAppDispatch } from "../../../../app/store";
import { addToWatchlist } from "../../../../feature/watchlist/watchlistSlice";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../../../feature/cart/cartSlice";
import { useUser } from "@clerk/clerk-react";
import CartProductCardHeading from "../../atoms/cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/cart/CartProductCardImage";

function ProductCardImage({ ...props }) {
  const { isSignedIn } = useUser();
  const { id, title, image, price, description, color } = props;
  const product: any = {
    id,
    title,
    image,
    price,
    description,
    color,
  };
  const dispatch = useAppDispatch();

  // Add to Watch list
  const addToItemWatchlist = () => {
    dispatch(addToWatchlist(product));
  };

  // Add to Cart
  const addToCartHandler = () => {
    product.qty = 1;
    dispatch(addToCart(product));
  };

  return (
    <div className="cardImageDiv">
      <div className="overflow-hidden">
        <CartProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col pt-6">
          {isSignedIn && (
            <div
              className="flex items-center justify-center w-8 h-8 text-xl rounded-full hover:bg-slate-400"
              onClick={addToItemWatchlist}
            >
              <FaRegBookmark />
            </div>
          )}
          <div
            className="flex items-center justify-center w-8 h-8 text-xl rounded-full hover:bg-slate-400"
            onClick={addToCartHandler}
          >
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardImage;
