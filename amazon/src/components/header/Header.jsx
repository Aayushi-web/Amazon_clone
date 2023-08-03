import React, { useState } from 'react'
import { logo } from '../../assets'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HeaderBottom from './HeaderBottom';
const Header = () => {
 const [showAll, setshowAll]= useState(false)
const allItem =[
  {
    id:1,
    title:"All Departments"
  },
  {
    id:2,
    title:"Cosmatics"
  },
  {
    id:3,
    title:"Music, CDs & Vinyl"
  },
  {
    id:4,
    title:"Pet Supplies"
  },
  {
    id:5,
    title:"Prime Video"
  },
  {
    id:6,
    title:"Software"
  },
  {
    id:7,
    title:"Sports & Outdoors"
  },
  {
    id:8,
    title:"Tools & Home Improvements"
  },
  {
    id:9,
    title:"Video Game"
  },
  {
    id:10,
    title:"Toys & Games"
  },
  {
    id:11,
    title:"Women's Fashion"
  },
  {
    id:12,
    title:"Home & Kitchen"
  }
  ,
  {
    id:13,
    title:"Kindle Store"
  },
  {
    id:14,
    title:"Industrial & Scientific"
  }

]
  return (
    <div className='w-full sticky top-0 z-50 bg-amazon_blue '>
  <div className='max-w-container  text-white px-4    flex items-center gap-4 py-3 bg-amazon_blue'>
  <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '>
    <img className='w-24 mt-2' src={logo} alt="" />
  </div>
<div className='px-2 h-[80%] flex items-cente border border-transparent hover:border-white cursor-pointer duration-100 hidden mdl:inline-flex'>
  <LocationOnIcon/>
  <p className='text-sm text-lightText font-light flex flex-col'>Deliver to {" "} <span className='text-sm font-semibold -mt-1 text-whiteText'>India</span></p>
</div>
<div  className='h-10 rounded-md hidden mdl:flex flex-grow  relative '>
  <span onClick={()=>setshowAll(!showAll)} className='h-full w-14 bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue  font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span><ArrowDropDownIcon/></span>
  {
    showAll &&(
      <div >
<ul className='absolute w-56 h-80 left-0 top-11 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-4 z-50'>
 {
  allItem.map((item)=>(
    <li key={item.id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent  gap-4 hover:border-b-amazon_blue cursor-pointer duration-200 '>{item.title}</li>
  ))
 }
 
 
</ul>

      </div>
    )
  }
  <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 '  type='text'/>
  <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_light cursor-pointer rounded-tr-md rounded-br-md'>
    <SearchIcon/>
  </span>
</div>
<div className='flex flex-col items-start justify-center px-2 h-[80%]  items-cente border border-transparent hover:border-white cursor-pointer duration-100 '><p className='mdl:text-xs text-sm text-white mdl:text-lightText font-light'>Hello, sign in</p>
<p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accounts & List {" "}<span><ArrowDropDownIcon/></span></p>
</div>
<div className='hidden lgl:flex flex-col items-start justify-center px-2 h-[80%]  items-cente border border-transparent hover:border-white cursor-pointer duration-100 '><p className='text-xs text-lightText font-light'>Returns</p>
<p className='text-sm font-semibold -mt-1 text-whiteText'>& Order</p>
</div>
<div className='flex  items-start justify-center px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100 relative
 '>
  <ShoppingCartIcon/>
  <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
</div>

  </div>
  <HeaderBottom/>
    </div>
    
  )
}

export default Header
