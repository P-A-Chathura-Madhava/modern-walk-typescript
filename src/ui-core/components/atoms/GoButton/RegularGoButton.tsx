import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function RegularGoButton() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
    <FaArrowRight className='text-icon-md' />
</div>
  )
}

export default RegularGoButton