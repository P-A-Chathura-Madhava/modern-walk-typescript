import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let retStringArray = localStorage.getItem("watchlistItems") as string;
let watchArray =
  JSON.parse(retStringArray) !== null ? JSON.parse(retStringArray) : [];

const initialState = {
  watchlistItems: watchArray,
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state: any, action: any) => {
      // Check if the product is already exists
      let existsItemIndex = state.watchlistItems?.findIndex(
        (item: any) => item.id === action.payload?.id
      );

      if (existsItemIndex >= 0) {
        // alert("This product already exists in the wishlist");
        toast.error("This product already exists in the wishlist");
      } else {
        // Add product to watchlist
        let buildItem = { ...action.payload };
        state.watchlistItems?.push(buildItem);
        let stringArray = JSON.stringify(state.watchlistItems);
        localStorage.setItem("watchlistItems", stringArray);
        // alert("Added to Watchlist")
        toast.success("Added to Watchlist");
      }
    },

    removeFromWatchlist: (state: any, action: any) => {
      let filteredItems = state.watchlistItems?.filter(
        (item: any) => item?.id !== action.payload?.id
      );
      state.watchlistItems = filteredItems;
      let stringArray = JSON.stringify(state.watchlistItems);
      localStorage.setItem("watchlistItems", stringArray);
      // alert("Removed from Watchlist")
      toast.success("Removed from Watchlist");
    },

    clearWatchlist: (state: any) => {
      state.watchlistItems = [];
      toast.success("Watchlist Cleared");
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
