import React from "react";
import { assets, myTools } from "@/assets/assets";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import GetInTouch from "@/components/GetInTouch";
const page = () => {
  return (
    <div className="">
      {/* Nice to Meet You */}
      <div className="grid grid-cols-2 py-18 px-32  bg-zinc-900 text-white  ">
        {/* Left Side */}
        <div>
          <div className="h-1 w-20 bg-white"></div>
          <div className="py-6">
            <h1 className="text-5xl font-bold">
              Nice to meet you, <br /> I’m Md Yusuf
            </h1>
            <p className="py-6 text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fames
              turpis pretium bibendum nisl est sagittis aliquam pretium nunc
              curabitur magna est in nulla id volutpat et venenatis at lacus.
            </p>
          </div>
          <hr className="border-gray-600 " />
          <div className="flex justify-between items-center px-4 py-6">
            <div className="flex justify-center items-center gap-1">
              <p className="text-6xl font-bold">12</p>
              <FaPlus color="blue" size={26} />
              <p className="text-xs font-bold ">
                Years of <br /> exprerince
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-6xl font-bold">150</p>
              <FaPlus color="blue" size={26} />
              <p className="text-xs font-bold ">
                Years of <br /> exprerince
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center ">
          <div className="relative w-[350px] h-[350px] rounded-full bg-[#2c3e50] overflow-hidden">
            <Image
              src={assets.picture}
              alt="pics"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* My Story Sections  */}
      <div className=" grid grid-cols-2 justify-items-center py-12 px-32 bg-zinc-800 text-white">
        {/* left Sides */}
        <div className="w-[320px]">
          <Image src={assets.products} alt="product" className="rounded" />
          <div className="flex items-center pt-6">
            <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
            <h3 className="uppercase font-bold gap-0 text-sm">My Story</h3>
          </div>
          <h1 className="font-bold text-2xl py-4 pr-12">
            My first website design back in 2001
          </h1>
          <p className="text-xs font-medium ">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        {/* Right Sides */}
        <div className="w-[320px]">
          <div className="flex items-center pt-4">
            <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
            <h3 className="uppercase font-bold gap-0 text-sm">My Story</h3>
          </div>
          <h1 className="font-bold text-2xl py-4 pr-16">
            How I started as a web developer
          </h1>
          <p className="text-xs font-medium pb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
          <Image
            src={assets.pcImage}
            alt="product"
            className="w-[340px] h-[400px] rounded"
          />
        </div>
      </div>
      {/* My Tools Sections */}

      <div>
        <div className=" bg-zinc-900 text-white py-20 overflow-hidden">
          <div className="flex items-center px-32">
            <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
            <p className="uppercase font-bold text-xm">My Tools</p>
          </div>

          <div className="flex justify-between items-center px-34 py-8 ">
            <h2 className="text-3xl font-bold">
              Discover what tools <br /> I use for work
            </h2>
            {/* <div className="flex gap-2 items-center ">
            <button className="group cursor-pointer">
              <FaChevronLeft className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
            <button className="group cursor-pointer">
              <FaChevronRight className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
          </div> */}
          </div>

          <div className=" grid grid-cols-5 justify-items-center px-12 w-full">
            {myTools.map((tools, index) => (
              <div
                key={index}
                className="w-[260px] h-[300px] p-2  justify-center items-center group "
              >
                <Link
                  href={tools.link} // 👈 dynamic link from object
                  target="_blank" // opens in new tab
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6 ml-8 cursor-pointer hover:scale-110 transition-all duration-200">
                    <Image
                      src={tools.logo}
                      alt={tools.name}
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{tools.name}</h3>
                    <p className="text-sm text-gray-400">{tools.title}</p>
                    <div className="group">
                      <div className="flex gap-2 items-center font-semibold mb-2 pt-2 ">
                        <p className=" font-light text-xm">Download Now</p>

                        <FaArrowRight />
                      </div>
                      <div className="h-0.5 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-36"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetInTouch/>
    </div>
  );
};

export default page;
