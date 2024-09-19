import React from 'react'

function InputField() {
  return (
    <div className='flex flex-col gap-[4px]'>
        <label htmlFor="" className='text-input-label font-input-label'>Email Address</label>
        <input type="text" className='transition-all duration-300 border outline-none h-input-field w-input-field rounded-input-field border-main pt-input-t pb-input-t pl-input-l focus:border-primary-hover hover:bg-background-elephant-grey' placeholder='elon@tesla.com' />
        <p className='text-danger-red text-input-field-msg font-input-field-msg'>Please enter a valid email address</p>
    </div>
  )
}

export default InputField