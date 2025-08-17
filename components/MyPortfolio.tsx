"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import articals from "@/assets/articals.png";
import investor from "@/assets/investor.png";
import investment from "@/assets/investment.png";
import Image from "next/image";

const MyPortfolio = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center bg-zinc-800 text-white py-10">
      <div className="items-center ml-32">
        {/* Left Side */}
        <div className="flex items-center">
          <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
          <p className="uppercase font-bold text-xm">My Portfolio</p>
        </div>
        <div className=" my-4">
          <p className="font-bold text-3xl">
            Take a look at the latest projects I’ve done
          </p>
          <div className="group mt-6 w-36">
            <div className="flex group gap-2 items-center font-semibold mb-2 group ">
              <p className="font-semibold text-xm">More about me</p>
              <Link
                href={"/about"}
                className="transition-transform duration-300 group-hover:translate-x-4"
              >
                {" "}
                <FaArrowRight />{" "}
              </Link>
            </div>
            <div className="h-0.5 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-36"></div>
          </div>
        </div>
        <div className=" shadow-lg items-center border-gray-600 rounded-lg bg-gray-700 text-white flex flex-col hover:scale-110 transition-all duration-200 gap-4 w-[350px] my-8 pb-0">
          <div className="flex gap-2 ml-30 font-semibold pt-6">
            <p className="bg-gray-500 p-2 px-4 text-[12px] rounded-md">
              React JS
            </p>
            <p className="bg-gray-500  p-2 px-4 text-[12px] rounded-md ">
              Web Development
            </p>
          </div>
          <div className="flex items-center pt-4 mx-4">
            <div className="flex">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
            <p>Dev X</p>
          </div>
          <div>
            <h2 className="text-xl font-bold  mx-4">
              Agency Website <br /> Development for Dev X
            </h2>
            <Image src={articals} alt="logo" className="w-full" />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="py-14">
        <div>
          <div className=" shadow-lg border-gray-600 rounded-lg bg-gray-700 text-white flex flex-col hover:scale-110 transition-all duration-200 gap-4 w-[350px] my-8 pb-0">
            <div className="flex gap-2 ml-30 font-semibold pt-6">
              <p className="bg-gray-500 p-2 px-4 text-[12px] rounded-md">
                React JS
              </p>
              <p className="bg-gray-500  p-2 px-4 text-[12px] rounded-md ">
                Web Development
              </p>
            </div>
            <div className="flex items-center pt-4 mx-4">
              <div className="flex">
                <FaChevronLeft />
                <FaChevronRight />
              </div>
              <p>DeFi X</p>
            </div>
            <div>
              <h2 className="text-xl font-bold  mx-4">
                Crypto Website <br /> Development for DeFi X
              </h2>
              <Image src={investment} alt="logo" className="w-full" />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" shadow-lg border-gray-600 rounded-lg bg-gray-700 text-white hover:scale-110 transition-all duration-200 flex flex-col gap-4 w-[350px] my-8 ">
            <div className="flex gap-2 pl-30 font-semibold pt-6">
              <p className="bg-gray-500 p-2 px-4 text-[12px] rounded-md">
                Webflow
              </p>
              <p className="bg-gray-500  p-2 px-4 text-[12px] rounded-md ">
                Web Development
              </p>
            </div>
            <div className="flex items-center pt-4 mx-4">
              <div className="flex">
                <FaChevronLeft />
                <FaChevronRight />
              </div>
              <p>Derk X</p>
            </div>
            <div className="">
              <h2 className="text-xl font-bold  mx-4">
                Trading Website <br /> Development for Dev X
              </h2>
              <div className="">
                <Image
                  src={investor}
                  alt="logo"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
