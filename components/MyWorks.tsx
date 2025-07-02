"use client";
import React from "react";
import { aboutMyWorks } from "@/assets/assets";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const MyWorks = () => {
  return (
    <>
      <div className="px-22 py-12 relative ">
        {aboutMyWorks.map((item) => (
          <div key={item.name} className="px-44">
            <div className=" flex justify-center gap-10">
              <div>
                <Image src={item.image} alt="image" className=" rounded-2xl" />
              </div>
              <div>
                <div className="py-8 px-2">
                  <Image src={item.logo} alt="logo" className="w-24" />
                  <p className="pt-10 font-semibold text-md">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <div className="flex items-center px-2">
                    <hr className=" w-5 border-t-3 border-blue-600 -rotate-70" />
                    <p className="uppercase font-semibold text-xs">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <FaChevronLeft className=" w-10 h-10 bg-gray-600 hover:bg-blue-600 hover:scale-110 transition-all duration-200 p-2 rounded-full" />
                    <FaChevronRight className="w-10 h-10 bg-gray-600 hover:bg-blue-600 hover:scale-110 transition-all duration-200 p-2 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyWorks;
