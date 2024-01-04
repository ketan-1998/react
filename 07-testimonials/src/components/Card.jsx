import React from 'react'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";
const Card = ({name,job,image,text}) => {
  return (
    <div className='relative space-y-3'>
        <div className='absolute -top-[120px]'>
            <img src={image} alt={name} className='w-[140px] h-[140px] rounded-full z-[100] relative'/>
            <div className='w-[140px] h-[140px] rounded-full bg-violet-800 absolute left-[15px] -top-3 z-[10]'></div>
        </div>
        <div className='text-center'>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-[12px] opacity-50'>{job}</p>
        </div>
        <div className='text-center gap-3 flex flex-col items-center'>
            <FaQuoteLeft className='text-red-500'/>
            <p className='opacity-60'>{text}</p>
            <FaQuoteRight className='text-red-500'/>
        </div>
    </div>
  )
}

export default Card