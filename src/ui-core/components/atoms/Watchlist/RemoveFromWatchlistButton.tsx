import { useAppDispatch } from "../../../../app/store";
import { CiBookmarkRemove } from "react-icons/ci";
import { removeFromWatchlist } from "../../../../feature/watchlist/watchlistSlice";

function RemoveFromWatchlistButton({ ...props }) {
  const { product } = props;

  const dispatch = useAppDispatch();

  const removeItemFromWatchlist = () => {
    dispatch(removeFromWatchlist(product));
  };

  return (
    <div
      className="flex items-center justify-center w-8 h-8 text-xl font-bold rounded-full hover:bg-slate-400"
      onClick={removeItemFromWatchlist}
    >
      <CiBookmarkRemove />
    </div>
  );
}

export default RemoveFromWatchlistButton;
