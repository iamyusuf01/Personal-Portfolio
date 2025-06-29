import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const PageNavList = () => {
  const pageList = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog Post", href: "/blogpost" },
    { name: "Portfolio Single", href: "/" },
    { name: "Hire Me", href: "/hireme" },
    { name: "Start Here", href: "/starthere" },
    { name: "Styleguide", href: "/style" },
    { name: "Password Protected", href: "/password" },
    { name: "404 Not Found", href: "/" },
    { name: "Licenses", href: "/licenses" },
    { name: "Changeblog", href: "/change" },
    { name: "Brower More Templates", href: "/" },
  ];
  return (
    <>
      <div className="group relative z-40">
        <div className="flex group justify-center items-center gap-2  ">
          <p className="">Pages</p>
          <FaChevronDown className="group-hover:-rotate-180 transition-all" />
        </div>
        <div className="grid absolute justify-items-center bg-gray-700 rounded-2xl hidden group-hover:block translate -right-30 ">
          <div className="grid grid-cols-2 px-7 text-xl font-medium py-6 text-white w-[360px]">
            <p>Pages</p>
            <p>Utility Pages</p>
          </div>
          <div className="grid grid-cols-2 pb-6">
            <div className="pl-4">
              {pageList.slice(0, 8).map((lists) => (
                <ul key={lists.name} className="list-none">
                  <li className="text-white pt-3">
                    <Link
                      href={lists.href}
                      className="text-white hover:underline"
                    >
                      {lists.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="">
              {pageList.slice(8, 14).map((lists) => (
                <ul key={lists.name} className="list-none pt-3">
                  <li>
                    <Link
                      href={lists.href}
                      className="text-white hover:underline"
                    >
                      {lists.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNavList;
