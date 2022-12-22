// import React, { useState } from "react";
import { Link } from "react-router-dom";
const data=[
  {
    title : "Home",
    path:"/",
  },
  {
    title : "about us",
    path:"/about"
  },
  {
    title : "contact",
    path:"/contact"
  },
  {
    title : "placements",
    path:"/placements",
  },
  {
    title : "Library",
    path:"/library"
  },
  {
    title : "Co-Operate Training",
    path:"/about"
  },
  {
    title : "notice",
    path:"/about"
  },
 


]
const url = "https://hubit.com.np/_next/static/media/hubitLogo.14c101fa.svg";
const second = () => {
  
  return (
    <div className="flex justify-between h-14 border-b-1 border-gray-800 shadow-xl px-24 gap-9">
      <div className="left flex items-center justify-between">
        <img src={url} alt="logo" className="h-14" />
        <div className="pl-16">
          <button className="bg-mainColor text-white p-1 text-xs rounded-md hover:scale-110 duration-300 animate-pulse">Online Admission</button>
        </div>
      </div>
      <div className="right flex gap-3 items-center text-xs capitalize text-gray-500">
        {data.map((val,i)=>{
        return(
          <div key={i} className="flex">
            <Link to={{pathname:val.path}}>
            <p className="cursor-pointer border-b-2 border-transparent transition-all duration-200 delay-100 hover:border-b-2 hover:border-mainColor">{val.title}</p>
            </Link>
            <p className="pl-2">|</p>
          </div>
        )
        })}
        More
      </div>
    </div>
  );
};

export default second;
