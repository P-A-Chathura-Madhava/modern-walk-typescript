import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchNormalIcon() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
    <IoSearchSharp className='text-icon-md' />
</div>
  )
}

export default SearchNormalIcon