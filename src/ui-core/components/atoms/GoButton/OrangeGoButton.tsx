import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function OrangeGoButton() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-primary-inverse-hover rounded-icon py-icon-y px-icon-x'>
    <FaArrowRight className='text-primary-normal text-icon-md' />
</div>
  )
}

export default OrangeGoButton