import React, { useState } from "react";
import profile from "../utils/profile.jpg";
import { Link } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
import { LiaLessThanSolid } from "react-icons/lia";


const Storynav = () => {
  
  const [currentIndex, setCurrentIndex]=useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? carouselItems.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const carouselItems = [
    // Add your carousel items here
  ];

  return (
    <div className="w-[468px] relative pt-3 flex justify-center items-center rounded-lg h-28 bg-black tablet:my-6">

      <button className="text-black font-bold  w-6 h-6 flex justify-center items-center text-2xl text-center z-10 absolute left-1">
        <LiaLessThanSolid className=" w-full h-full p-1 rounded-full bg-white" 
        onClick={handlePrevious} />
      </button>

      <div className="px-1 flex overflow-auto space-x-2 transform relative w-full ">

      {carouselItems.map((item, index) => (
        <Link
          key={index}
          className={`w-20 h-24  flex flex-col justify-center space-y-2 items-center ${index === currentIndex ? 'active' : ''}`}
          href=""
        >
          <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
            <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
              <img className="rounded-full" src={profile} alt="" />
            </div>
          </div>
          <p className="text-white text-xs font-normal w-full text-center">
            You
          </p>
        </Link>
        ))} 
      </div>

      <button  className="text-black font-bold  w-6 h-6  text-2xl text-center z-10 absolute right-1">
        <TbMathGreater className="w-full h-full p-1 rounded-full bg-white" 
        onClick={handleNext}/>
      </button>
    </div>
  );
};

export default Storynav;
