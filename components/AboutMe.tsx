import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className=" bg-zinc-800 text-white ">
      <div className="grid grid-cols-2 justify-items-center grid-rows-1 pt-12 min-h-[480px] justify-between items-center">
        {/* Left Side */}
        <div className="w-[380px]">
          <div className="flex items-center">
            <div className="h-0.5 bg-blue-600 w-6 translate-transform -rotate-65"></div>
            <h3 className="uppercase">About Me</h3>
          </div>
          <div className="py-8 ">
            <p className="text-3xl font-bold">
              I’ve been developing websites since 2010
            </p>
            <p className="pt-6 font-semibold text-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="group">
            <div className="flex gap-2 items-center font-semibold mb-2 group ">
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
        {/* Right Side */}
        <div className="w-[380px] pr-12">
          <div className="flex justify-center items-center gap-7 ">
            <div className=" flex justify-center items-center gap-2 ">
              {" "}
              <span className="text-6xl font-bold">12</span>
              <span className="text-sm font-semibold pt-2">
                Years of experience
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              {" "}
              <span className="text-6xl font-bold">150</span>
              <span className="text-sm font-semibold pt-2">
                Successful projects
              </span>
            </div>
          </div>
          <div className="py-8">
            <p className="font-semibold text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        {/* Line Bar*/}
      </div>
      <hr color="white" className=" mx-32 border-t-2 border-gray-600 my-6"/>
      <div>hell</div>
    </div>
  );
};

export default AboutMe;
