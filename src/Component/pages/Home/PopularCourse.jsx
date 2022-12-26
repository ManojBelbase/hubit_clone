import React from 'react'
import {IoSchool} from "react-icons/io5"
import {GrFormNext,GrFormPrevious} from "react-icons/gr"

const PopularCourse = () => {
  return (
    <div className='h-60 bg-white flex'>
      {/* middle section */}
        <div className='text-center m-auto items-center'>
            <p className='mb-2'><IoSchool className='text-3xl ml-24 text-white bg-mainColor border-4 border-mainColor rounded-2xl text-center'/></p>
            <p className='text-2xl font-semibold mb-2'>Our Popular Courses</p>
            <button className='rounded-xl px-4 bg-[#F3F4F6] '>Explore More Courses</button>
        </div>
        {/* arrow section > < */}
        <div className='flex items-center gap-4 pr-20'>
          <p className='bg-mainColor text rounded-xl border-2 border-mainColor cursor-pointer'><GrFormPrevious /></p>
          <p className='bg-mainColor text rounded-xl border-2 border-mainColor cursor-pointer'><GrFormNext/></p>
        </div>
    </div>
  ) 
}

export default PopularCourse