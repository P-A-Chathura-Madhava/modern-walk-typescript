import React from 'react'
import { MdRadioButtonUnchecked } from "react-icons/md";

function RadioBtn() {
  return (
<div className='flex items-center justify-center cursor-pointer group hover:bg-primary-inverse-hover py-icon-y px-icon-x h-icon-h-normal w-icon-w-normal rounded-icon'>
<input type="radio" className='w-4 h-4 bg-gray-100 border-gray-300 rounded accent-primary-normal group-hover:bg-primary-inverse-hover focus:ring-primary-normal focus:ring-2' />
</div>
  )
}

export default RadioBtn