import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {RotatingLines} from 'react-loader-spinner'
const Registration = () => {
  const [clientName,setclientName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setpassword]= useState("")
  const [cPassword,setcPassword]= useState("")
  const handleRegistration=(e)=>{
e.preventDefault()
  }
   const handleName=(e)=>{
setclientName(e.target.value)
   }
  return (
    <div className='w-full'>
  
  <div className='w-full bg-gray-100 pb-10'>
    <form className='w-[370px] mx-auto flex flex-col items-center'>
      <Link to={"/"}>
      <img className='w-32' src='https://static.vecteezy.com/system/resources/previews/019/766/240/original/amazon-logo-amazon-icon-transparent-free-png.png' alt='dark logo'/>
      </Link>
      <div className='w-full border border-zinc-200 p-6'>
        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2'><p className='text-sm font-medium'>Your Name</p>
          <input onChange={handleName} type="text" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
          </div>
          <div className='flex flex-col gap-2'><p className='text-sm font-medium'>Email or phone number</p>
          <input type="email" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
          </div>
          <div className='flex flex-col gap-2'><p className='text-sm font-medium'>PassWord</p>
          <input type="password" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
          </div>
          <div className='flex flex-col gap-2'><p className='text-sm font-medium'>Confirmed Password</p>
          <input type="password" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
          <p className='text-sm font-medium text-gray-500'>password must be atleast 8 characters</p>
          </div>
          <button onClick={handleRegistration} className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Continue</button>
          
          
        </div>
        <p className='text-xs text-black'>By Creating an account, you agree to amazon's {" "} 
        <span className='text-blue-600'>Conditions of Use</span> and {" "}
        <span className='text-blue-600'>Private Notice</span>
        </p>
      </div>
      <Link to={"/signin"}>
      <p className='text-xs  cursor-pointer text-black'>Already Have an account?<span className='text-blue-600'>Sign in<span> <ArrowRightIcon/></span></span></p>
      </Link>
      <p className='text-xs text-black -mt-2'>buying for work?<span className='text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>create A business account</span> </p>
    </form>
    <div>
    <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
            <div className='flex item-center gap-6 '>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Condition of use</p>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
                <p className='text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Condition of use</p>
            </div>
<p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Registration
