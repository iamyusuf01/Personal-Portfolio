import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className=" bg-zinc-800 text-white py-10">
      <div className="grid grid-cols-2 gap-2">
        {/* Left */}
        <div className="px-32">
          <div className="flex items-center ">
            <hr className="w-6 border-t-3 border-blue-600 -rotate-70" />
            <p className="uppercase font-bold text-xm">Blog And Article</p>
          </div>
          <div className="w-[330px]">
            <p className="font-bold text-xl px-8 pt-4">
              Check out my latest articles and tutorials
            </p>
          </div>
          <div className="group mt-6 w-36 pt-8 text-sm">
            <div className="flex gap-2 items-center font-semibold mb-2">
              <p className="font-semibold text-xm">Browse all articles</p>
              <Link
                href={"/contact"}
                className="transition-transform duration-300 group-hover:translate-x-4"
              >
                <FaArrowRight />
              </Link>
            </div>
            <div className="h-0.5 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white w-26"></div>
          </div>
        </div>
        {/* Right */}
        <div>
          <div>
            <div className="flex flex-row">
              <div>
                <p className="text-sm">May 4, 2022</p>
              </div>
              <div className="flex items-center ">
                <hr className="w-6 border-t-3 border-blue-600 -rotate-70" />
                <p className="uppercase font-bold text-xm">Testimonials</p>
              </div>
            </div>
            <div>
              <p>The Best IDE’s and Code Editors for Developers in 2022</p>
            </div>
          </div>

          <hr className="border-t-2 border-gray-600 my-6" />
          <div className="h-20"></div>

          <div>
            <div className="flex flex-row">
              <div>
                <p>May 4, 2022</p>
              </div>
              <div className="flex items-center">
                <hr className="w-6 border-t-3 border-blue-600 -rotate-70" />
                <p className="uppercase font-bold text-xm">Testimonials</p>
              </div>
            </div>
            <div>
              <p>The Best IDE’s and Code Editors for Developers in 2022</p>
            </div>
          </div>

          <hr className="border-t-2 border-gray-600 my-6" />
          <div className="h-20"></div>

          <div>
            <div className="flex flex-row">
              <div>
                <p>May 4, 2022</p>
              </div>
              <div className="flex items-center">
                <hr className="w-6 border-t-3 border-blue-600 -rotate-70" />
                <p className="uppercase font-bold text-xm">Testimonials</p>
              </div>
            </div>
            <div>
              <p>How to Optimize your Website for Better Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
