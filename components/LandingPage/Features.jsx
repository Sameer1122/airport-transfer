import React from "react";

const Features = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 py-12 px-8 md:px-16">
      <h1 className="text-center font-semibold text-[24px] mb-8">
        Our Features
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 ">
        <div className="flex items-center gap-2 flex-col">
          <img className="rounded-2xl" src="1.png" alt="" /> <p>lorem ipsum</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <img className="rounded-2xl" src="2.png" alt="" /> <p>lorem ipsum</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <img className="rounded-2xl" src="3.png" alt="" /> <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
