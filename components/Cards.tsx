import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { skills } from "@/app/assets/assets";
import Image from "next/image";
const Cards = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <div className=" bg-zinc-900 text-white py-20">
        <div className="flex items-center px-32">
          <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
          <p className="uppercase font-bold text-xm">My Skills</p>
        </div>

        <div className="flex justify-between items-center px-34 py-4 ">
          <h2 className="text-3xl font-bold">My extensive list of skills</h2>
          <div className="flex gap-2 items-center ">
            <button className="group cursor-pointer">
              <FaChevronLeft className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
            <button className="group cursor-pointer">
              <FaChevronRight className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
          </div>
        </div>

        <div id="scroll" className="flex gap-4 px-32 py-4 scroll-smooth" ref={scrollRef}>
          {skills.map((items) => (
            <div key={items.name} className="h-[260px] w-[300px] bg-zinc-700 rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div>
            <Image src={items.logo} alt="logo" width={56} height={56} className="w-14 pt-4" />
            <h1 className="pt-6 text-xl font-bold">{items.name}</h1>
            <p className="py-4 text-xm font-semibold">{items.title}</p>
            <hr className="border-t-4 bg-white w-12 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
