import React from "react";

const Book = () => {
  return (
    <div className="flex flex-col items-center w-[75%] md:w-[50%] gap-4 mx-auto text-center py-16">
      <h2 className=" text-[20px] md:text-[24px] font-semibold">
        Book Airport Transfer For Your Trip!
      </h2>
      <p className="text-[12px] md:text-[14px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis possimus,
        quam ex rem numquam cum! Mollitia illum labore quae
      </p>
      <button className="bg-[#2956d3] text-sm text-white rounded-3xl w-[7rem] h-[40px] hover:bg-[#2956d3de] active:bg-[#2956d3d3]">
        Get Started
      </button>
    </div>
  );
};

export default Book;
