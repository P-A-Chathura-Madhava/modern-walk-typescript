import React from 'react'
import { PiCaretDownBold } from "react-icons/pi";

function DownArrow() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
    <PiCaretDownBold className='text-icon-md' />
</div>
  )
}

export default DownArrow