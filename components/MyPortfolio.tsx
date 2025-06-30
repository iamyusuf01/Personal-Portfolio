import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const MyPortfolio = () => {
  return (
    <>
      <div>
        {/* Left Side */}
        <div className="flex items-center px-32">
          <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
          <p className="uppercase font-bold text-xm">My Skills</p>
        </div>
        <div>
          <p>Take a look at the latest projects I’ve done</p>
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
        
      </div>
      {/* Right Side */}
      <div></div>
    </>
  );
};

export default MyPortfolio;
