import React from 'react'
import { FaCaretUp } from "react-icons/fa";

function FieldDropOrange() {
  return (
    <div className='flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-primary-inverse-hover hover:text-primary-hover rounded-icon'>
    <FaCaretUp className='text-primary-normal text-icon-md' />
</div>
  )
}

export default FieldDropOrange