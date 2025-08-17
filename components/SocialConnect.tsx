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
      <hr className="mt-8 border-t-2 border-gray-600" />
      <div className="mt-4">
        <h2 className="uppercase font-semibold">Follow Me</h2>
        <ul className="flex gap-4 items-center mt-4">
          <li>
            <Link
              href={""}
              target="_blank"
              rel="nooperner noreferrer"
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
    </>
  );
};

export default SocialConnect;
