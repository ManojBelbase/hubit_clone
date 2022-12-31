import React from "react";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
const obj = [
  {
    title: "check Certificate",
  
  },
  {
    title: "carrer",
  },
  {
    title: "Contact us",
  },
  {
    title: "download Brochure",
  },
  {
    title: "hackathons",
  },
  {
    title: "testimonials",
  },
];
export const header = () => {
  return (
    <>
      <div className="flex justify-between text-white px-16 bg-mainColor py-2 items-center lg:flex md:hidden sm:hidden">
        <div className="left flex gap-2 text-xs items-center">
          <p>
            <IoMdCall className="text-base" />
          </p>
          <p>071-532805 </p>
          <div className="border-l-2 border-white h-4"></div>
          <p> 9827494116</p>
          <p>
            <GrMail className="ml-2" />
          </p>
          <p>training@hubit.com.np</p>
        </div>
        <div className="flex gap-3 text-xs items-center capitalize">
          {obj.map((val, i) => {
            return (
              <div key={i}>
                <button className="capitalize hover:scale-105 duration-200 transaction-all">
                  {val.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default header;
