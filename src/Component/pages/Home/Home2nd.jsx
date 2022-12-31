import React from "react";
import { TbCertificate } from "react-icons/tb";

const data = [
  {
    image: TbCertificate,
    title: "Top Courses",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity ",
  },
  {
    image: TbCertificate,
    title: "Certified Instructor",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including lorem Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including lorem ",
  },
  {
    image: TbCertificate,
    title: "Book and Libraries",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity lore Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Har",
  },
];

const Home2nd = () => {
  return (
    <div className="pt-5 bg-white w-screen">
      <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
        {data.map((val, i) => {
          return (
            <div key={i} className=" border-b-4 border-b-transparent border-r-2 px-6 pb-3 hover:border-b-4 hover:border-b-mainColor delay-100 duration-700 transition-all lg:border-r-2 lg:border-b-4 lg:border-b-transparent sm:border-r-0 sm:border-b-2 sm:b sm:border-gray-500 sm:mb-2 ">
                <div className="flex items-center gap-2 font-semibold text-lg pb-4 ">
                    <val.image className="text-mainColor font-bold text-3xl" />
                  <p>{val.title}</p>
                </div>
                <p className="text-sm text-gray-600 h-48  overflow-scroll info">{val.info}</p>
              </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home2nd;
