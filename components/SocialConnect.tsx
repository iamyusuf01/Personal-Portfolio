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
              <FaFacebook />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaTwitter />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaInstagram />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaYoutube />{" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
              {" "}
              <FaGithub />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialConnect;
