import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className=" bg-zinc-900 text-white py-12 px-32">
      <div className="grid grid-cols-2 justify-items-center ">
        {/* Left sides */}
        <div>
          <div className="flex flex-row gap-8 items-center">
            <div className="flex items-center justify-center ">
              <div className="relative w-[125px] h-[125px] rounded-full bg-[#2c3e50] overflow-hidden">
                <Image
                  src={assets.picture}
                  alt="pics"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-3xl">Md Yusuf</h1>
              <p className="font-semibold text-sm">MERN Stack Developer</p>
            </div>
          </div>
          <div className="py-4 px-4 ">
            <ul className="flex flex-row gap-8">
              <li>
                <Link
                  href={""}
                  target="_blank" // opens in new tab
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaFacebook
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="nooperner noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaTwitter
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="nooperner noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaInstagram
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.linkedin.com/in/mdyusufansari/"}
                  target="_blank"
                  rel="nooperner noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaLinkedinIn
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="nooperner noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaYoutube
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  target="_blank"
                  rel="nooperner noreferrer"
                  className="transition-transform duration-300 group-hover:translate-x-4"
                >
                  {" "}
                  <FaGithub
                    size={20}
                    className="cursor-pointer hover:scale-110 transition-all duration-200"
                  />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Sides */}
        <div>
          <div className="cursor-pointer py-2">
            <div className="flex gap-2 max-w-max items-center font-semibold mb-2 group ">
              <p className="font-bold text-5xl">Get in touch</p>
              <Link
                href={"/"}
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                {" "}
                <FaArrowRight size={32} color="blue" />{" "}
              </Link>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <div className="">
              <div className="font-medium py-1">
                <p className="uppercase text-gray-400">Email Me :</p>
              </div>
              <div className="group">
                <div className="flex gap-2 items-center font-semibold mb-2 group ">
                  <p className="font-medium text-sm">contact@gmail.com</p>
                  <Link
                    href={"/"}
                    className="transition-transform duration-300 group-hover:translate-x-4"
                  >
                    {" "}
                    <FaArrowRight />{" "}
                  </Link>
                </div>
                <div className=" h-[0.3px] rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-40"></div>
              </div>
            </div>
            <div>
              <div className="font-medium py-1">
                <p className="uppercase text-gray-400">Contact Me :</p>
              </div>
              <div className="group">
                <div className="flex gap-2 items-center font-semibold mb-2 group ">
                  <p className="text-sm font-medium">+91-8207726209</p>
                  <Link
                    href={"/"}
                    className="transition-transform duration-300 group-hover:translate-x-4"
                  >
                    {" "}
                    <FaArrowRight />{" "}
                  </Link>
                </div>
                <div className=" h-[0.3px] rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-34"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center px-20 pt-10">
        <hr className=" border-t-2 border-gray-600 " />
        {/* <div className="h-20"></div> */}
      </div>

      {/* Footer For Get In Touch */}
      <div className="flex justify-evenly items-center py-4 ">
        <nav>
          <ul className="flex flex-row justify-center text-sm gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center gap-1 text-xs">
          <p>Copyright © Developer X</p>
          <p>|</p>
          <p>Designed by BRIX Templates</p>
          <p>-</p>
          <p>Powered by Md Yusuf</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
