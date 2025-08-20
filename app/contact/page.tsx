'use client'
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const page = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('submit successfully')
    }

  return (
    <div className=" bg-zinc-900 text-white px-32 py-16">
      <div className="flex flex-col">
        <div className="h-1 bg-white w-32"></div>
        <h1 className="text-6xl font-bold py-6">Let’s work together</h1>
      </div>
      <div className="grid grid-cols-[420px_minmax(600px,_1fr)_0px]  justify-items-center">
        {/* left side */}
        <div className=" pr-12">
          <div className="">
            <h2 className="text-3xl font-bold">Get in touch with me</h2>
            <p className="text-sm py-2 font-medium text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisci elit donec
              faucibus adipiscing mauris.
            </p>
          </div>
          <div>
            <ul className="flex flex-row gap-8 py-6">
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
        {/* right sides */}
        <div className=" bg-gray-600/40 rounded-2xl">
          <form onSubmit={handleSubmit} className="py-4">
            <div className="group px-6 py-4  w-[420px]">
              <div className="py-2 w-full ">
                <input
                  type="text"
                  placeholder=" Enter your name"
                  required
                  className="outline-none text-gray-200 text-xl w-full"
                />
              </div>
              <div className="h-[0.5px] my-2 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-full"></div>
            </div>
            <div className="group px-6 py-4  w-[420px]">
              <div className="py-2 w-full ">
                <input
                  type="email"
                  placeholder=" Enter your email"
                  required
                  className="outline-none text-gray-200 text-xl w-full"
                />
              </div>
              <div className="h-[0.5px] my-2 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-full"></div>
            </div>
            <div className="group px-6 py-4  w-[420px]">
              <div className="py-2 w-full ">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="outline-none text-gray-200 text-xl w-full"
                />
              </div>
              <div className="h-[0.5px] my-2 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-full"></div>
            </div>
            <div className="group px-6 py-4  w-[420px]">
              <div className="py-2 w-full ">
                <textarea
                  placeholder="Write me a message"
                  required
                  className="outline-none text-gray-200 text-xl w-full"
                />
              </div>
              <div className="h-[0.5px] my-2 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-full"></div>
            </div>
            <button
              type="submit"
              className="group w-1/2  px-6 py-2 cursor-pointer"
            >
              <div className="flex gap-2 items-center font-semibold mb-2 group ">
                <p>Contact me</p>
                <FaArrowRight />{" "}
              </div>
              <div className="h-0.5 rounded-2xl bg-gray-400 transition-colors duration-300 group-hover:bg-white  w-28"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
