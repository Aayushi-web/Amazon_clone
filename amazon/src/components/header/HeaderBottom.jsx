import React, { useEffect, useRef, useState } from 'react'
import ListIcon from '@mui/icons-material/List';

import { motion } from "framer-motion"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNav from './SideNav';
const HeaderBottom = () => {
    const ref = useRef()
    const [show, setShow]= useState(false)
    useEffect(()=>{
document.body.addEventListener("click",(e)=>{
 if(e.target.contains(ref.current)){
    setShow(false)
 }
})
    },[ref,show])
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

    <motion.div ref={ref} initial={{x:-500, opacity:0, }} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[300px] h-full bg-white border border-black'>
        <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
            <AccountCircleIcon/>
<h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign in</h3>
        </div>
       <SideNav title="Digital Content & Device" one="Amazon Music" two="Kindle E-reader" three="Amazon AppStore" />
       <SideNav title="Digital Content & Device" one="Amazon Music" two="Kindle E-reader" three="Amazon AppStore" />
       <SideNav title="Digital Content & Device" one="Amazon Music" two="Kindle E-reader" three="Amazon AppStore" />
       <SideNav title="Digital Content & Device" one="Amazon Music" two="Kindle E-reader" three="Amazon AppStore" />
       <span onClick={()=> setShow(false)} className='cursor-pointer absolute top-0 left-[310px] w-10 h-10 text-black flex items-center justify-center border bg-gray-300 hover:bg-red-500 hover:text-white duration-300'><CloseOutlinedIcon/></span>
    </motion.div>
  x
</div>
          </div>  
        )
    }
    </div>
  )
}

export default HeaderBottom
