import React from "react";
import { GiTeacher } from "react-icons/gi";

const data = [
  {
    image: GiTeacher,
    title: "Well-Equipped Lab",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "Highly experience instructor",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "Well-Equipped Lab",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "Well-Equipped Lab",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "Well-Equipped Lab",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "Well-Equipped Lab",
    desc: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
];
const Choose = () => {
  return (
    <div className="mt-10 mb-6 w-screen grid grid-cols-3 text-black lg:grid-cols-3 sm:grid-cols-1 sm:m-10">
      {/* left side */}
      <div className="flex justify-center items-center flex-col">
        <p className="font-bold text-xl">Why Choose</p>
        <p className="text-mainColor font-bold ">HUBIT</p>
      </div>
{/* right side  */}
      <div className="m-7 grid col-span-2 grid-cols-3 items-center gap-3 lg:grid-cols-3 sm:grid-cols-1 sm:ml-7 md:ml-6">
        {data.map((val ,i)=>{
              return(
                <div key={i} className="">
                      <div className="flex items-center justify-center m-3">
                    <val.image className="border-2 rounded-full p-1 text-4xl border-black"/>
                    </div>
                  <p className="text-sm font-bold">{val.title}</p>
                  <p className="text-sm text-gray-600">{val.desc}</p>
                </div>
              )
        })}
        </div>
      </div>

  );
};

export default Choose;
