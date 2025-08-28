import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { skills } from "@/assets/assets";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Cards = () => {
  // const scrollRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <div className=" bg-zinc-900 text-white py-20">
        <div className="flex items-center px-32">
          <hr className=" w-6 border-t-3 border-blue-600 -rotate-70" />
          <p className="uppercase font-bold text-xm">My Skills</p>
        </div>

        <div className="flex justify-between items-center px-34 py-8 ">
          <h2 className="text-3xl font-bold">My extensive list of skills</h2>
          {/* <div className="flex gap-2 items-center ">
            <button className="group cursor-pointer">
              <FaChevronLeft className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
            <button className="group cursor-pointer">
              <FaChevronRight className=" w-15 h-15 py-4 rounded-full bg-gray-700 hover:bg-blue-800 group-hover:scale-90 transition-all duration-200" />
            </button>
          </div> */}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="w-full">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="w-[260px] h-[300px] p-4 basis-1/3 justify-center items-center"
              >
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-6 ml-8">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Cards;
