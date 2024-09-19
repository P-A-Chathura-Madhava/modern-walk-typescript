import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function OrangeGoButtonBig() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-big w-icon-w-big hover:bg-primary-inverse-hover rounded-icon py-icon-y px-icon-x'>
    <FaArrowRight className='text-icon-big text-primary-normal' />
</div>
  )
}

export default OrangeGoButtonBig