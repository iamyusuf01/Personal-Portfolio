import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import picture from "../public/picture.png"; // Adjust the path as necessary
import Link from "next/link";
import SocialConnect from "@/components/SocialConnect";
const HeroSection = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center gap-4 pt-6 px-12  bg-zinc-900 text-white">
          <Image src={picture} alt="pic" className="mr-12 relative " />
          <div className="grid grid-cols-2 gap-32 justify-items-center absolute">
            {/* Right Side */}
            <div className="realtive mt-10">
              <div className="w-18 h-1 bg-white mb-4"></div>
              <h1 className="text-4xl font-bold leading-tight">
                I'm John, a <br /> Web Developer
              </h1>
              <p className="py-2">lncsno dnco dnf ivndo dji id</p>
              <div className="relative mt-4 w-16 h-16 rounded-full bg-blue-600">
                {" "}
                <Link
                  href={"/about"}
                  className="absolute left-5 top-5 animate-bounce "
                >
                  <FaChevronDown size={24} />{" "}
                </Link>
              </div>
            </div>
            {/* Left Side / About ME */}
            <div className="ml-22">
              <div>
                <h3 className="font-semibold uppercase">About Me</h3>
                <p className="py-2">
                  {" "}
                  lorem ip sdkbn oas c uc0 vgfdhiud9idefve9{" "}
                </p>
              </div>
              <div className="group w-36 cursor-pointer">
                <div className="flex gap-2 items-center font-semibold mb-2 group ">
                  <p>LEARN MORE</p>
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
              <hr className="mt-8 border-t-2 border-gray-600" />
              {/* My Work  */}
              <div className="mt-8">
                <div>
                  <h3 className="font-semibold uppercase">My Work</h3>
                  <p className="py-2">
                    {" "}
                    lorem ip sdkbn oas c uc0 vgfdhiud9idefve9{" "}
                  </p>
                </div>
                <div className="group  w-36 cursor-pointer">
                  <div className="flex gap-2 items-center font-semibold mb-2 group ">
                    <p>BROWERS PORT</p>
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
              {/* Social Connect */}
              <SocialConnect />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
