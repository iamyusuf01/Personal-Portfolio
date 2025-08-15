import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { testimonials } from "@/assets/assets";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleChange = (direction) => {
    // Start fade out
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      // Fade in after content change
      setFade(true);
    }, 300); // match transition duration
  };

  const { img, company, text, name } = testimonials[index];

  return (
    <div className="bg-zinc-900 text-white py-16">
      {/* Header */}
      <div className="flex justify-between px-32">
        <div>
          <div className="flex items-center px-32">
            <hr className="w-6 border-t-3 border-blue-600 -rotate-70" />
            <p className="uppercase font-bold text-xm">Testimonials</p>
          </div>
          <div className="w-[330px]">
            <p className="font-bold text-xl pl-34 pt-4">
              What the clients say about my work
            </p>
          </div>
        </div>
        <div className="group mt-6 w-36 pt-8 text-sm">
          <div className="flex gap-2 items-center font-semibold mb-2">
            <p className="font-semibold text-xm">Get touch</p>
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

      {/* Testimonial Card */}
      <div className="flex justify-center mt-10 px-10 gap-10 items-center">
        {/* Left Arrow */}
        <button
          onClick={() => handleChange("prev")}
          className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Card with smooth transition */}
        <div
          className={`flex flex-col md:flex-row items-center gap-8 bg-zinc-800 p-6 rounded-2xl max-w-4xl transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            className="rounded-2xl object-cover"
          />
          <div>
            <h3 className="text-gray-300 text-2xl font-semibold">{company}</h3>
            <p className="text-lg italic mt-4">“{text}”</p>
            <p className="font-bold text-blue-400 mt-4">
              / {name.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleChange("next")}
          className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
