import React from 'react'
import { logo } from '../../assets'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <div className=''>
  <div className='w-full bg-amazon_blue text-white px-4 py-3  flex items-center'>
  <div className='px-2 h-[80%] flex items-cente border border-transparent hover:border-white cursor-pointer duration-100 '>
    <img className='w-24 mt-2' src={logo} alt="" />
  </div>
<div className='px-2 h-[80%] flex items-cente border border-transparent hover:border-white cursor-pointer duration-100'>
  <LocationOnIcon/>
  <p className='text-sm text-lightText font-light flex flex-col'>Deliver to {" "} <span className='text-sm font-semibold -mt-1 text-whiteText'>India</span></p>
</div>
<div className='h-10 rounded-md flex flex-grow  relative '>
  <span>All <span></span><ArrowDropDownIcon/></span>
  <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'  type='text'/>
  <span>
    <SearchIcon/>
  </span>
</div>
  </div>
    </div>
  )
}

export default Header
