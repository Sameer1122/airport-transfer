import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0919] py-12">
      <div className="w-[80%] m-auto">
        <div className="flex justify-between items-center pb-8 border-b border-[#201f2e]">
          <p className="text-white font-semibold">Airport Transfer</p>
          <div className="flex items-center gap-2">
            <p className="font-regular cursor-pointer text-sm text-[#9d9a9f]">
              About
            </p>
            <p className="font-regular cursor-pointer text-sm text-[#9d9a9f]">
              Menu
            </p>
            <p className="font-regular cursor-pointer text-sm text-[#9d9a9f]">
              Menu2
            </p>
          </div>
        </div>
        <p className="text-[#9d9a9f] text-center pt-8">
          &copy; All Rights Reserved.DeveloStudio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
