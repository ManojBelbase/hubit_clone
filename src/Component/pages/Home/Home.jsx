import React from "react";
import { MdFacebook } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillPlayCircle,
} from "react-icons/ai";
const img =
  "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteacher.f0c1ea44.png&w=1920&q=75";
const Home = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-2">
      {/* content section */}
      <div className="m-auto pl-20">
        <p className="flex gap-3 pb-3 text-xl">
          <MdFacebook className="text-mainColor ring-offset-2 ring-1 ring-mainColor rounded-xl " />
          <IoLogoWhatsapp className="text-mainColor ring-offset-2 ring-1 ring-mainColor rounded-xl" />
          <AiFillTwitterCircle className="text-mainColor ring-offset-2 ring-1 ring-mainColor rounded-xl" />
          <AiFillInstagram className="text-mainColor ring-offset-2 ring-1 ring-mainColor rounded-xl" />
        </p>
        <p className="text-mainColor text-lg font-bold pb-1">
          IT Training Institute in Nepal
        </p>
        <p className="text-sm text-gray-600 pb-6">
          HUB IT is recognized as one of Nepal’s best global skill development
          and IT training centers. The journey of HUB IT started in 2017 with a
          big dream to bring applied education to the mass population at an
          affordable cost. The main purpose of HUB IT is to facilitate, with the
          best IT-related skills.
        </p>

        <div className="flex gap-4 text-mainColor ">
          <button className="text-sm ring-offset-0 ring-1 ring-mainColor rounded-3xl px-3 hover:scale-110 duration-300 ">
            Explore More...
          </button>
          <button className="">
            <div className="flex items-center rounded-2xl p-1 hover:scale-110 duration-300">
              <p>
                <AiFillPlayCircle className="text-4xl"/>
              </p>
              <div>Watch now</div>
            </div>
          </button>
        </div>
      </div>

      {/* image section */}
      <div className="flex items-center relative">
        <img src={img} alt="imag" className=" m-auto" />
          {/* <span className="absolute h-16 w-56 border-gray-900 border-1 shadow-xl bg-gray-100 left-32 top-64 pl-6 pt-2"> */}
          {/* <p className="text-xs text-mainColor">Featured Courses</p> */}
          {/* <p className="text-xs font-normal">Became a Full Stack Developer with MERN Stack</p>  */}
          {/* </span> */}
          {/* <p className="absolute h-8 w-8 rounded-full bg-[#CA8A04] bottom-48 left-28 shadow-zinc-800"></p> */}
        </div>
      </div>
  );
};

export default Home;
