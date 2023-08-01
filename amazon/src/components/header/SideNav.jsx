import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const SideNav = ({title, one, two, three}) => {
  return (
    <div>
       <div><h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>{title}</h3>
        <ul className='text-sm'><li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{one} {" "} <span><ArrowRightIcon/></span></li>
        <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{two}{" "}<span><ArrowRightIcon/></span></li>
        <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{three} {" "} <span><ArrowRightIcon/></span></li>
        </ul>
        </div>
    </div>
  )
}

export default SideNav

