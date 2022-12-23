import React from "react";
import { TfiWrite } from "react-icons/tfi";

const data = [
  {
    image: TfiWrite,
    title: "Top Courses",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity ",
  },
  {
    image: TfiWrite,
    title: "Certified Instructor",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including lorem Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including lorem ",
  },
  {
    image: TfiWrite,
    title: "Book and Libraries",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity lore Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Har",
  },
];

const Home2nd = () => {
  return (
    <div className="h-80 pt-5 bg-white">
      <div className="grid grid-cols-3">
        {data.map((val, i) => {
          return (
            <div key={i} className=" border-b-4 border-b-transparent border-r-2 px-6 pb-3 hover:border-b-4   hover:border-b-mainColor delay-100 duration-700 transition-all">
                <div className="flex items-center gap-2 font-semibold text-lg pb-2 ">
                    <val.image className="text-mainColor font-bold" />
                  <p>{val.title}</p>
                </div>
                <p className="text-sm text-gray-600 h-60  overflow-scroll info">{val.info}</p>
              </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home2nd;
