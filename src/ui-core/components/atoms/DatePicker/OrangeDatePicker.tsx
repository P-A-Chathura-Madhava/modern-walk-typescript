import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function OrangeDatePicker() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-primary-inverse-hover rounded-icon py-icon-y px-icon-x'>
    <FaCalendarAlt className='text-primary-normal text-icon-md' />
</div>
  )
}

export default OrangeDatePicker