import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchBigIcon() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-big w-icon-w-big hover:bg-main rounded-icon py-icon-y px-icon-x'>
    <IoSearchSharp className='text-icon-big' />
</div>
  )
}

export default SearchBigIcon