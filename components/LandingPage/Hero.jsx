import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-16">
      <div className="w-[100%] md:w-[50%] items-center md:items-start flex flex-col gap-4">
        <h2 className="text-[32px] md:text-[42px] text-center md:text-start leading-[3rem]   font-bold">
          Book Airport Transfer For Your Trip!
        </h2>
        <p className="text-sm text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum
          tempore error id eveniet saepe! Tenetur dolores porro animi accusamus
          tempore
        </p>
        <Link href={"/book"}>
          <button className="bg-[#2956d3] text-sm text-white rounded-3xl w-[7rem] h-[40px] hover:bg-[#2956d3de] active:bg-[#2956d3d3]">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-[100%] md:w-[50%] flex justify-center md:justify-end">
        <img
          className="w-[75%] object-contain"
          src="business-trip.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
