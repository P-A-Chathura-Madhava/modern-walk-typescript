import { useAppSelector } from "../../../app/store";
import WishlistProducts from "../../components/molecules/watch-list/WatchlistProducts";
import ClearWatchlistButton from "../../components/atoms/Watchlist/ClearWatchlistButton";

function Watchlist() {
  const productState = useAppSelector(
    (state: any) => state.watchList.watchlistItems
  );

  return (
    <div className="container mx-auto mt-2 px-60 font-poppins">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Watch List</h2>
        {productState && <ClearWatchlistButton />}
      </div>
      <WishlistProducts {...{ productState }} />
    </div>
  );
}

export default Watchlist;
