import React, { useState } from 'react'
import ListIcon from '@mui/icons-material/List';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderBottom = () => {
    const [show, setShow]= useState(false)
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
    <ul className='flex items-center gap-3'><li onClick={()=>setShow(!show)} className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 gap-1 '>< ListIcon/>All</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100  '>Today's Deal</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '>Customer Service</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '>Gift Card</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '>Registry</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '>Sell</li></ul>
    {
        show &&(
          <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
<div className='w-full h-full relative'>

    <div className='w-[300px] h-full bg-white border border-black'>
        <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
            <AccountCircleIcon/>
<h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign in</h3>
        </div>
        <div><h3 className='text-lg font-titleFont font-semibold mb-1 px-6'> Digital Content & Devices</h3>
        <ul><li className='flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Music {" "} <span><ArrowRightIcon/></span></li>
        <li className='flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Kindle E-reading & Books{" "}<span><ArrowRightIcon/></span></li>
        <li className='flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Appstore {" "} <span><ArrowRightIcon/></span></li>
        </ul>
        </div>
    </div>
</div>
          </div>  
        )
    }
    </div>
  )
}

export default HeaderBottom
