import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/products/productSlice";
import watchListReducer from "../feature/watchlist/watchlistSlice";
import cartReducer from "../feature/cart/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    product: productReducer,
    watchList: watchListReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
