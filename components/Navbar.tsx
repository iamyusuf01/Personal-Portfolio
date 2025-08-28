import React from "react";
import Link from "next/link";
import MainNav from "./PageNavList";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-32 pt-8 h-15 bg-zinc-900 text-white">
        <div className="pl-6 font-bold text-2xl group">
          <Link
            href={"/"}
            className="flex items-center gap-2 group-hover:scale-110 transition-all duration-200"
          >
            <FaCode size={22} color="blue" />
            <h1 >Developer X</h1>
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5 cursor-pointer">
            <li>
              <Link href={"/"}>
                <p className="hover:scale-105 transition-all duration-200">Home</p>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <p className="hover:scale-105 transition-all duration-200">About</p>
              </Link>
            </li>
            <li>
              <Link href={"/blog"}>
                <p className="hover:scale-105 transition-all duration-200">Blog</p>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"}>
                <p className="hover:scale-105 transition-all duration-200">Portfolio</p>
              </Link>
            </li>
            <li>
              <MainNav />{" "}
            </li>
            <li>
              <p className="hover:scale-105 transition-all duration-200"> Cart </p>
            </li>
            <li className="hover:scale-110 transition-all duration-200">
              <p>
                {" "}
                <HiOutlineMenuAlt4 size={24} color="white" />{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
