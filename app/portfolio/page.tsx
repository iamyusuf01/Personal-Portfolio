import { myProjects } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" bg-zinc-900 text-white ">
      <div className=" flex flex-col justify-center items-center text-center gap-6 py-16 ">
        <div className="h-1 w-22 bg-white"></div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Portfolio</h1>
          <p className="font-medium text-xs py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis
            pretium bibendum nisl est sagittis aliquam pretium nunc.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center mx-32">
        {myProjects.map((item, index) => (
          <div key={index} className="border rounded-2xl w-[420px] my-4 border-gray-600 bg-gray-800 text-white">
            <div className="">
              {item.title.map((t, i) => (
                <div key={i} className="flex flex-row items-center gap-2 ml-36 pt-4 ">
                  <p className=" w-24 text-center rounded  bg-gray-700  ">{t.text1}</p>
                  <p className=" w-40 text-center rounded   bg-gray-700 ">{t.text2}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col pl-12 py-2">
              {/* <Image src={item.logo} alt="logo" /> */}
              <p>{item.text}</p>
            </div>
            <div className="">
              <h2 className="pl-12 font-bold text-2xl w-[340px] ">{item.name}</h2>
              <Image src={item.image} alt="image" className="min-w-full object-contain"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
