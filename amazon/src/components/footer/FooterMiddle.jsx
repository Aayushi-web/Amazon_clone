import React from 'react'
import { flag, logo } from '../../assets'

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light  text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
<div className='max-w-5xl mx-auto text-gray-300 '>
<div>
    <div className='w-full grid grid-cols-1 md:grid-2 lgl:grid-cols-4 md:items-start md:place-items-center gap-6 '>
    <div>
    <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to know Us</h3>
    <ul className='flex flex-col gap-3 font-bodyFont'><li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Carrer</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Blog</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>About Amazon</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Investor Relations</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Devices</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Science</li>
    </ul>
</div>
<div>
    <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Make Money With Us</h3>
    <ul className='flex flex-col gap-3 font-bodyFont'><li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Sell product on Amazon</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Sell on Amazon Business</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Sell app on Amazon</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Become an Affiliate</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Sell 
    products with us</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Host an Amazon Hub </li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>See More Make Money with us
     </li>
    </ul>
</div>
<div>
    <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to know Us</h3>
    <ul className='flex flex-col gap-3 font-bodyFont'><li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Carrer</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Blog</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>About Amazon</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Investor Relations</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Devices</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Science</li>
    </ul>
</div>
<div>
    <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to know Us</h3>
    <ul className='flex flex-col gap-3 font-bodyFont'><li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Carrer</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Blog</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>About Amazon</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Investor Relations</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Devices</li>
    <li className='text-sm font-titleFont tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150 '>Amazon Science</li>
    </ul>
</div>
    </div>
</div>
</div>

      </div>
      <div className='w-full flex gap-6 items-center justify-center py-6
      '>
        <div>
            <img  className="w-20 pt-3"src={logo} alt="" srcset="" />
        </div>
        <div className='flex gap-2'>
            <p className='flex gap-1  items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
        </div>
        <div className='flex gap-1  items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
            <img className='w-6' src={flag} alt="" />
            <p>India</p>
        </div>
      </div>
    </div>
  )
}

export default FooterMiddle
