import React from 'react'

function SecondaryBtn() {
  return (
    <button className='border bg-background-white rounded-btn pt-btn-t pb-btn-b px-btn-x text-btn font-btn h-btn-normal w-btn-normal disabled:border-primary-inverse-hover selection:border-primary-selected selection:text-primary-selected selection:bg-primary-inverse-hover-click disabled:text-primary-inverse-hover text-primary-normal border-primary-normal hover:border-primary-hover hover:text-primary-hover hover:bg-primary-inverse-hover'>Cancel</button>
  )
}

export default SecondaryBtn