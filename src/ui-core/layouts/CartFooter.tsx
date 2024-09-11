import React from 'react'
import { useAppDispatch } from '../../app/store';
import { clearCart } from '../../feature/cart/cartSlice';

function CartFooter() {
  const dispatch = useAppDispatch();
  
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className='h-[225px] bg-slate-500 mt-2'>
      <div className='container flex justify-between px-20 py-10 mx-auto'>
            <button
              className="p-2 px-20 font-bold text-white transition-all duration-300 bg-red-800 rounded-md text-md hover:text-black hover:bg-red-400"
              onClick={clearCartItems}
            >
              Clear Cart
            </button>
            <button className="p-2 px-20 font-bold text-white transition-all duration-300 bg-blue-900 rounded-md hover:bg-blue-400 hover:text-black">
            CHECKOUT
          </button>
        </div>
    </div>
  )
}

export default CartFooter