import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
 import {RotatingLines} from 'react-loader-spinner'
const SignIn = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center  '>
          <img className='w-32' src='https://static.vecteezy.com/system/resources/previews/019/766/240/original/amazon-logo-amazon-icon-transparent-free-png.png' alt='logo' />
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium  mb-4'>Sign In</h2>
            <div className='flex flex-col gap-3 '>
             <div className='flex flex-col gap-3'>
              <p className='text-sm font-medium  '>Email or Mobile phone Number</p>
              <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='email'/>
              </div> 
              <div className='flex flex-col gap-3'>
              <p className='text-sm font-medium  '>PassWord</p>
              <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password'/>
              </div>
              <button onClick={(e)=>e.preventDefault()} className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Continue</button>
             
            </div>
            <p className='text-xs text-black leading-4 mt-4'>Continuing, you agree to Amazon's <span className='text-blue-400'>Conditions of Use {" "} </span> and <span className='text-blue-400'>Private Notice</span></p>
<p className='text-xs text-gray-600 mt-4 cursor-pointer hover:text-red-500 '><ArrowRightIcon/> <span className='text-blue-400 text-xs cursor-pointer hover:text-red-500 hover:underline underline-offset-1'>Need Help?</span></p>


          </div>
          <p className='w-full text-sm text-gray-600 mt-4 flex items-center'>
<span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
<span className='w-1/3 text-center'>New to Amazon?</span>
<span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          </p>
        <Link className='w-full' to="/registration">
        <button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create Your Amazon account</button></Link>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
            <div className='flex item-center gap-6 '>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Condition of use</p>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Condition of use</p>
            </div>
<p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default SignIn
