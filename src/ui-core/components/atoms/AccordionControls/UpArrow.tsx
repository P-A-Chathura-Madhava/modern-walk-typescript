import React from 'react'
import { PiCaretUpBold } from "react-icons/pi";

function UpArrow() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
        <PiCaretUpBold className='text-icon-md' />
    </div>
  )
}

export default UpArrow