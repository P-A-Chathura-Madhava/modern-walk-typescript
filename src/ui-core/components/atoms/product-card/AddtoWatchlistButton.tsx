import { useAppDispatch } from "../../../../app/store";
import { FaRegBookmark } from "react-icons/fa6";
import { addToWatchlist } from "../../../../feature/watchlist/watchlistSlice";

function AddtoWatchlistButton({ ...props }) {
  const { product } = props;

  const dispatch = useAppDispatch();

  // Add to Watch list
  const addToItemWatchlist = () => {
    dispatch(addToWatchlist(product));
  };

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={addToItemWatchlist}
    >
      <FaRegBookmark />
    </div>
  );
}

export default AddtoWatchlistButton;
