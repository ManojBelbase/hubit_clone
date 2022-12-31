// import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {FiMenu} from "react-icons/fi"
const data = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "about us",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "placements",
    path: "/placements",
  },
  {
    title: "Library",
    path: "/library",
  },
  {
    title: "Co-Operate Training",
    path: "/training",
  },
  {
    title: "notice",
    path: "/notice",
  },
];
const url = "https://hubit.com.np/_next/static/media/hubitLogo.14c101fa.svg";
const Second = ({ShowSideBar}) => {
  const location = useLocation();
  // console.log(location);-
  return (
    
    <div className="flex justify-between h-12 w-screen shadow-2xl border-2 shadow-gray-350 px-24 gap-8 items-center">
      <div className="left flex items-center justify-between">
        <img src={url} alt="logo" className="h-14 md:hidden sm:hidden lg:block" />
        <div className="pl-16">
          <button className="bg-mainColor text-white p-1 text-xs rounded-md hover:scale-110 duration-300 animate-pulse md:hidden sm:hidden lg:block">
            Online Admission
          </button>
        </div>
      </div>
      <div className="right flex gap-3 items-center text-xs capitalize text-gray-500 md:hidden sm:hidden lg:block lg:flex">
        {data.map((val, i) => {
          return (
            <div key={i} className="flex">
              <Link to={{ pathname: val.path }}>
                <p
                  className={`cursor-pointer border-b-2 border-transparent transition-all duration-200 delay-100 hover:border-b-2
            ${
              location.pathname === val.path ? "border-mainColor" : ""
            }`}
                >
                  {val.title}
                </p>
              </Link>
              <p className="pl-2">|</p>
            </div>
          );
        })}
        More
      </div>
      <div className="text-black fixed top-3 left-5 text-3xl lg:hidden" onClick={()=>{ShowSideBar()}}><FiMenu/></div>
      </div>
  );
};

export default Second;
