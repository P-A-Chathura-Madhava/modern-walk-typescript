import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function RegularDatePicker() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
    <FaCalendarAlt className='text-icon-md' />
</div>
  )
}

export default RegularDatePicker