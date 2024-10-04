import { useAppDispatch } from "../../../../app/store";
import { clearWatchlist } from "../../../../feature/watchlist/watchlistSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from "../../../../components/ui/button";

function ClearWatchlistButton() {
  const dispatch = useAppDispatch();

  const clearWatchlistItems = () => {
    dispatch(clearWatchlist());
  };

  return (
    <Button
      className="flex items-center justify-center gap-2 px-2 transition-all duration-300 bg-white rounded-md cursor-pointer hover:bg-slate-400"
      onClick={clearWatchlistItems}
    >
      <h4 className="font-bold text-red-700">Clear Wishlist</h4>
      <MdOutlineDeleteOutline className="text-xl text-red-700" />
    </Button>
  );
}

export default ClearWatchlistButton;
