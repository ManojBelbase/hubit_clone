import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Sidebardata } from "./Sidebardata";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ Show, ShowSideBar }) => {
  const location = useLocation();
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-50 bg-backdrop ${
        Show ? "translate-x-0" : "-translate-x-full"
      } ease-in-out  duration-700 delay-75 transition-all`}
    >
      {Sidebardata.map((val, i) => {
        return (
          <div key={i} className="bg-[#34495e] w-44 p-4 pt-7 capitalize">
            <Link to={{ pathname: val.path }}>
              <p className={`cursor-pointer ${ location.pathname === val.path ? "bg-white text-black rounded-lg p-2" : ""}`} >
                {val.title}
              </p>
            </Link>
          </div>
        );
      })}
      <div className="fixed top-4 left-52 text-3xl">
        <ImCross onClick={() => ShowSideBar()}  className="text-white rounded-2xl border-white border-2 p-1"  />
      </div>
    </div>
  );
};

export default Sidebar;
