import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import {
  calculateTotalAmount,
  clearCart,
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../feature/cart/cartSlice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function CartDetails() {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state: any) => state?.cart?.cartItems);

  const cartTotalAmount = useAppSelector(
    (state: any) => state?.cart?.cartTotalAmount
  );

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const removeItemFromCartHandler = (product: any) => {
    dispatch(removeFromCart(product));
  };

  const incrementQtyHandler = (product: any) => {
    dispatch(incrementQty(product));
  };

  const decrementQtyHandler = (product: any) => {
    dispatch(decrementQty(product));
  };

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [productState]);

  return (
    <div className="container mx-auto mt-2 px-60">
      <div className="flex gap-2">
        <div className="w-[80%]">
          <h2 className="text-xl font-bold border border-b-black border-r-transparent border-l-transparent border-t-transparent">
            Cart
          </h2>
          <div className="overflow-scroll h-72">
            <div className="flex">
              <h4 className="w-[60%] font-bold text-md">Product Details</h4>
              <h4 className="w-[20%] font-bold text-md">Quantity</h4>
              <h4 className="w-[20%] font-bold text-md">Price</h4>
            </div>

            {/* Cart Item */}
            {productState.map((item: any, index: number) => {
              return (
                <div className="flex pt-4">
                  {/* Product Details */}
                  <div className="flex gap-6 w-[60%]">
                    {/* Cart Item */}
                    <img
                      src={item.image}
                      alt="cart-item-image"
                      className="w-16 h-16"
                    />
                    <div>
                      <h2 className="text-xs font-bold">
                        {item.title.length < 20
                          ? item.title
                          : item.title.substring(0, 20)}
                      </h2>
                      <p className="mb-1 text-xs font-bold">
                        {item.description.length < 20
                          ? item.description
                          : item.description.substring(0, 20)}
                      </p>
                      <button
                        className="p-1 text-xs font-bold text-red-800 transition-all duration-300 border border-red-800 rounded-lg cursor-pointer hover:bg-red-400"
                        onClick={() => removeItemFromCartHandler(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="w-[20%] flex justify-center items-center gap-2">
                    <label
                      htmlFor=""
                      className="p-2 border rounded-lg border-slate-600"
                    >
                      {item?.qty}
                    </label>
                    <FaPlus
                      className="w-6 h-6 p-1 transition-all duration-300 border border-black rounded-full cursor-pointer hover:bg-slate-400"
                      onClick={() => {
                        incrementQtyHandler(item);
                      }}
                    />
                    <FaMinus
                      className="w-6 h-6 p-1 transition-all duration-300 border border-black rounded-full cursor-pointer hover:bg-slate-400"
                      onClick={() => {
                        decrementQtyHandler(item);
                      }}
                    />
                  </div>

                  <div className="w-[20%]">
                    <label
                      htmlFor="price"
                      className="font-bold text-blue-700 text-md"
                    >
                      {item.price}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <button
              className="p-2 px-8 font-bold text-white transition-all duration-300 bg-red-800 rounded-md text-md hover:text-black hover:bg-red-400"
              onClick={clearCartItems}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="w-[20%]">
          <h4 className="text-xl font-bold border border-b-black border-r-transparent border-l-transparent border-t-transparent">
            Order Summary
          </h4>
          <div className="flex justify-between">
            <h4 className="font-bold text-md">ITEMS</h4>
            <h4 className="font-bold text-red-800 text-md">{productState.length}</h4>
          </div>
          <div className="flex justify-between">
            <h4 className="text-sm font-bold">Total Amount</h4>
            <h4 className="text-sm font-bold text-red-800">
              {cartTotalAmount.toFixed(2)}
            </h4>
          </div>
          <button className="w-full p-2 text-sm font-bold text-white transition-all duration-300 bg-blue-900 rounded-md hover:bg-blue-400 hover:text-black">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
