import { useUser } from "@clerk/clerk-react";
import CartProductCardHeading from "../../atoms/cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/cart/CartProductCardImage";
import AddtoWatchlistButton from "../../atoms/product-card/AddtoWatchlistButton";
import AddtoCartButtonSignIn from "../../atoms/product-card/AddtoCartButtonSignIn";
import AddtoCartButton from "../../atoms/product-card/AddtoCartButton";

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

  return (
    <div className="cardImageDiv font-poppins">
      <div className="overflow-hidden">
        <CartProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col pt-6">
          {isSignedIn && <AddtoWatchlistButton {...{ product: product }} />}
          {isSignedIn === false ? (
            <AddtoCartButtonSignIn />
          ) : (
            <AddtoCartButton {...{ product: product }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCardImage;
