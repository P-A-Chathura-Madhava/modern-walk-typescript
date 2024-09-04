import { useAppDispatch, useAppSelector } from "../../../app/store";
import { clearWatchlist } from "../../../feature/watchlist/watchlistSlice";
import SubHeading from "../../components/atoms/SubHeading";
import { MdOutlineDeleteOutline } from "react-icons/md";
import WishlistProducts from "../../components/molecules/WatchlistProducts";

function Watchlist() {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state: any)=>state.watchList.watchlistItems);

  const clearWatchlistItems = () => {
    dispatch(clearWatchlist());
  }

  return (
      <div className="container mx-auto mt-2 px-60">
        <div className="flex justify-between">
        <h2 className="text-xl font-bold">Watch List</h2>
        {
          productState &&
          <div className="flex items-center justify-center gap-2 px-2 transition-all duration-300 rounded-md cursor-pointer hover:bg-slate-400" onClick={clearWatchlistItems}>
            <h4 className="font-bold text-red-700">Clear Wishlist</h4>
            <MdOutlineDeleteOutline className="text-xl text-red-700" />
          </div>
        }
        </div>
        <WishlistProducts {...{ productState }} />
      </div>
  );
}

export default Watchlist