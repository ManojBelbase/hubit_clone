import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'

const Reviews = () => {
  return (
    <div className='h-screen w-screen border-2'>
        {/* Title part */}
        <div className='flex items-center justify-center flex-col'>
      <p className='text-mainColor font-semibold text-xl my-3'>What Our Students Say About Us</p>
      <p className='text-sm'>Here some testimonials about the experience of our students in HUB IT TRAINING</p>
        </div>
        {/* Buttons */}
        <div className='flex gap-4 ml-6 my-6'>
        <button>Regular</button>
        <button>Facebook</button>
        <button>Google</button>
        </div>

        {/* Rewiews */}
        <div className='flex items-center justify-around '>
            <AiOutlineLeft className='text-mainColor bg-gray-200 rounded-xl border-4 border-gray-200 text-xl font-bold cursor-pointer'/>
            
            <div className='h-28 w-72 bg-red-50'>d</div>
            <div className='h-28 w-72 bg-blue-300'>e</div>
            <AiOutlineRight className='text-mainColor bg-gray-200 rounded-xl border-4 border-gray-200 text-xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default Reviews