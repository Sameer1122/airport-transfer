"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const navigate = useRouter();
  return (
    <nav className="flex items-center justify-between pt-8 bg-[#fffcf9]">
      <img
        src="logo.png"
        className=" w-[102px] md:w-fit cursor-pointer"
        onClick={() => navigate.push("/")}
      />

      <div className="flex items-center gap-4">
        <p className="cursor-pointer text-[12px] md:text-sm font-semibold hover:text-[#2956d3]">
          About
        </p>
        <p className="cursor-pointer text-[12px]  md:text-sm font-semibold hover:text-[#2956d3]">
          Login
        </p>
        <button className="bg-[#2956D3] text-[12px] md:text-sm text-white rounded-[24px] h-[32px] md:h-[40px] w-[4rem] md:w-[6rem] hover:bg-[#2956d3de] active:bg-[#2956d3d3]">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
