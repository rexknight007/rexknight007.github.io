import React from 'react'
import BackIcon from './BackIcon'

const Header = () => {
  return (
    <div class='flex items-center w-full gap-[117px] '>
    <BackIcon className='hover:opacity-70 cursor-pointer 
    transition-all duration-300 ease-linear'/>
    <span class='text-white text-[26px] font-semibold '>Payment</span>
  </div>
  )
}

export default Header