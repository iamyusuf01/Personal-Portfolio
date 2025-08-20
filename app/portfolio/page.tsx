import { myProjects } from "@/assets/assets";
import GetInTouch from "@/components/GetInTouch";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" bg-zinc-900 text-white pb-16">
        <div className=" flex flex-col justify-center items-center text-center gap-6 py-16  ">
          <div className="h-1 w-22 bg-white"></div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Portfolio</h1>
            <p className="font-medium text-xs py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fames
              turpis pretium bibendum nisl est sagittis aliquam pretium nunc.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center mx-44 ">
          {myProjects.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl w-[340px] my-6 border-gray-600 bg-gray-800 text-white hover:scale-110 duration-200 transition-all group z-10"
            >
              <div className="">
                {item.title.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-row gap-2  item center ml-16 pt-6 "
                  >
                    <p className=" w-24 text-center rounded  bg-gray-700  ">
                      {t.text1}
                    </p>
                    <p className=" w-40 text-center rounded   bg-gray-700 ">
                      {t.text2}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col pl-12 py-2">
                {/* <Image src={item.logo} alt="logo" /> */}
                <p>{item.text}</p>
              </div>
              <div className="relative overflow-hidden">
                <h2 className="pl-10 font-bold text-2xl ">{item.name}</h2>
                <Image
                  src={item.image}
                  alt="image"
                  className="w-full object-cover rounded-2xl group-hover:scale-110 duration-200 transition-all z-1 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default page;
