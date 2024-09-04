import React from 'react'
import { useAppDispatch } from '../../../app/store';
import { removeFromWatchlist } from '../../../feature/watchlist/watchlistSlice';
import { CiBookmarkRemove } from "react-icons/ci";

function WatchlistProductCardImage({...props}) {
    const dispatch = useAppDispatch();
    const {id, title, image, price, description, color} = props;
    const product: any = {
      id, title, image, price, description, color
    }

    const removeItemFromWatchlist = () => {
        dispatch(removeFromWatchlist(product));
      }
  return (
    <div className="cardImageDiv">
    <div className="overflow-hidden">
      <h2 className="text-sm font-bold text-center truncate">
        {props.title.length < 20 ? props.title : props.title.substring(0, 20)}
      </h2>
    </div>
    <div className="flex gap-2">
      <img
        className="h-[100px] w-[100px] my-2"
        src={image}
        alt="mens-cloth-img"
      />
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
  )
}

export default WatchlistProductCardImage