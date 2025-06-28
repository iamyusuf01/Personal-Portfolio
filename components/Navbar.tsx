"use client"
import React from "react";
import Link from "next/link";
import MainNav from "./PageNavList";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-8">
        <div className="flex items-center gap-2">
          <FaCode size={22} color="blue"/>
          <h1>Developer X</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
              <li>
                <Link href={'/'}>
                  <p>Home</p>
               </Link>
              </li>
              <li>
                <Link href={'/about'}>
                  <p>About</p>
               </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <p>Blog</p>
               </Link>
              </li>
              <li>
                <Link href={'/portfolio'}>
                  <p>Portfolio</p>
               </Link>
              </li>
              <li>
                <p> <MainNav /> </p>
              </li>
              <li>
                <p> Cart </p>
              </li>
              <li className="hover:scale-110 transition-all duration-200">
                <p> <HiOutlineMenuAlt4 size={24} color="white"/> </p>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
