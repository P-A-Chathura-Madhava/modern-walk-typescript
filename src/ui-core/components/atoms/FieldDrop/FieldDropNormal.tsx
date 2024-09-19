import React from 'react'
import { FaCaretDown } from "react-icons/fa";

function FieldDropNormal() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-main rounded-icon py-icon-y px-icon-x'>
        <FaCaretDown className='text-icon-md' />
    </div>
  )
}

export default FieldDropNormal