import React from 'react'
import { logo } from '../../assets'
const Header = () => {
  return (
    <div className=''>
  <div className='w-full bg-amazon_blue text-white px-4 py-3 '>
  <div className='px-2 h-[80%] flex items-cente border border-transparent hover:border-white cursor-pointer duration-100 '>
    <img className='w-24 mt-2' src={logo} alt="" />
  </div>
  
  </div>
    </div>
  )
}

export default Header
