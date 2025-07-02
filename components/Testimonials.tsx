import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import MyWorks from "./MyWorks";

const Testimonials = () => {
  return (
    <div>
      {/* Left Part */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="flex justify-between px-32 ">
          <div>
            <div className="flex items-center px-32">
              <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
              <p className="uppercase font-bold text-xm">Testimonials</p>
            </div>
            <div className="w-[330px]">
              <p className="font-bold text-xl pl-34 pt-4">
                What the clients say about my work
              </p>
            </div>
          </div>
          <div className="group mt-6 w-36 pt-8 text-sm">
            <div className="flex group gap-2 items-center font-semibold mb-2 group ">
              <p className="font-semibold text-xm">Get touch</p>
              <Link
                href={"/contact"}
                className="transition-transform duration-300 group-hover:translate-x-4"
              >
                {" "}
                <FaArrowRight />{" "}
              </Link>
            </div>
            <div className="h-0.5 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-26"></div>
          </div>
        </div>
        <div>
          <MyWorks />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
