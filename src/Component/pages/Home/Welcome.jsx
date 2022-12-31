import React from "react";

const Welcome = () => {
  return (
    <div className="grid grid-cols-2 mt-5 bg-[#F4F4F4] lg:grid-cols-2 sm:grid-cols-1">
      {/* Text section */}
      <div className="m-4">
        <p className="text-2xl font-bold pb-3 text-black">Welcome To Our Portal</p>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores quia
          rerum natus voluptate voluptates odit ducimus consectetur voluptatem
          obcaecati, eligendi itaque quasi delectus at officiis quas porro unde
          aperiam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="text-sm ring-offset-0 ring-1 ring-mainColor text-mainColor rounded-3xl py-2 px-4 hover:scale-110 duration-300 ">
          Learn More
        </button>
      </div>
      {/* Image section */}
      <div className=" grid grid-cols-2 gap-1 items-center ml-8 mt-5 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        <div className="gap-4 sm:mb-2">
           <img src="https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportal.2193f6b1.jpg&w=1920&q=75" className="" alt="" />
        </div>

        <div className="grid grid-rows-2 gap-3 sm:grid-cols-1 sm:place-content-center">
          <div className="">
            <img src="https://hubit.com.np/_next/static/media/Rectangle%2025.35a14a04.svg" alt="" className="h-44 sm:h-96 md:h-80 lg:h-44"/>
          </div>
          <div className="">
                  <img src="https://hubit.com.np/_next/static/media/Rectangle%2026aa.a644820c.svg" alt="" className="h-44 sm:h-96 md:h-80 lg:h-44"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
