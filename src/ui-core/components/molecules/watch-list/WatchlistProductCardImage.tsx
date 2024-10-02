import { useAppDispatch } from "../../../../app/store";
import { removeFromWatchlist } from "../../../../feature/watchlist/watchlistSlice";
import { CiBookmarkRemove } from "react-icons/ci";
import CartProductCardHeading from "../../atoms/cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/cart/CartProductCardImage";

function WatchlistProductCardImage({ ...props }) {
  const dispatch = useAppDispatch();
  const { id, title, image, price, description, color } = props;
  const product: any = {
    id,
    title,
    image,
    price,
    description,
    color,
  };

  const removeItemFromWatchlist = () => {
    dispatch(removeFromWatchlist(product));
  };
  return (
    <div className="cardImageDiv font-poppins">
      <div className="overflow-hidden">
        <CartProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col pt-6">
          <div
            className="flex items-center justify-center w-8 h-8 text-xl font-bold rounded-full hover:bg-slate-400"
            onClick={removeItemFromWatchlist}
          >
            <CiBookmarkRemove />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchlistProductCardImage;
