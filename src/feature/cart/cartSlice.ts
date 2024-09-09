import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let retStringArray = localStorage.getItem('cartItems') as string;
let cartArray = JSON.parse(retStringArray) !== null ? JSON.parse(retStringArray) : [];

const initialState = {
  cartItems: cartArray,
  cartTotalAmount: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state: any, action: any) => {
      // console.log(action.payload);
      let existsItemIndex = state.cartItems?.findIndex((item: any)=>item.id ===action.payload?.id);

      if (existsItemIndex >= 0) {
        state.cartItems[existsItemIndex].qty += 1;        
      } else {
      // Add product to Cart      
      let buildItem = {...action.payload};
      // console.log(buildItem);            
      state.cartItems?.push(buildItem);
      }

      // set it to local storage
      let stringArray = JSON.stringify(state.cartItems);      
      localStorage.setItem('cartItems', stringArray);
      toast.success("Added to Cart")
    },

    // Clear items in the cart
    clearCart: (state: any) => {
      state.cartItems = [];
    },

    // Remove item from cart
    removeFromCart: (state: any, action: any) => {
      let filteredItems = state.cartItems?.filter((item: any)=>item?.id !== action.payload?.id );
      state.cartItems = filteredItems;
      let stringArray = JSON.stringify(state.cartItems); 
      localStorage.setItem('cartItems', stringArray);
      // alert("Removed from Watchlist")
      toast.success("Removed from Cart")
    },

    // Calculate Amount
    calculateTotalAmount: (state: any) => {
      const subTotal = state.cartItems?.reduce((acc: any, item: any)=> acc+(item?.price * item.qty), 0);
      // console.log("sub : ", subTotal);
      
      state.cartTotalAmount = Number(subTotal);
    },

    // Increment quantity
    incrementQty: (state: any, action: any) => {
      
      let existsItemIndex = state.cartItems?.findIndex((item: any)=>item.id ===action.payload?.id);
      
      if (existsItemIndex >= 0) {
        state.cartItems[existsItemIndex].qty += 1;
        let stringArray = JSON.stringify(state.cartItems);      
        localStorage.setItem('cartItems', stringArray);
      }
    },

    // Decrement quantity
    decrementQty: (state: any, action: any) => {
      let existsItemIndex = state.cartItems?.findIndex((item: any)=>item.id ===action.payload?.id);
      if (existsItemIndex >= 0) {
        state.cartItems[existsItemIndex].qty -= 1;
        let stringArray = JSON.stringify(state.cartItems);      
        localStorage.setItem('cartItems', stringArray);
      }

      if (state.cartItems[existsItemIndex].qty === 0) {
        state.cartItems.splice(existsItemIndex, 1);
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQty, decrementQty, clearCart, calculateTotalAmount} = cartSlice.actions;

export default cartSlice.reducer;
