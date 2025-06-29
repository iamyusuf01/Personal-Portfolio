import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialConnect = () => {
  return (
    <>
      <hr className="mt-8" />
      <div className="mt-4">
        <h2 className="uppercase font-semibold">Follow Me</h2>
        <ul className="flex gap-4 items-center mt-4">
          <li>
            <Link href={""}>
              {" "}
              <FaFacebook
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaTwitter
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaInstagram
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/mdyusufansari/"} 
            className="">
              {" "}
              <FaLinkedinIn
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaYoutube
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaGithub
                size={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200"
              />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialConnect;
