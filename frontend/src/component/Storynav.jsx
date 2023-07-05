import React from "react";
import profile from "../utils/profile.jpg";
import { Link } from "react-router-dom";

const Storynav = () => {
  return (
    <div className="max-w-[468px]  space-x-3 carousel-container pl-3 items-center rounded-lg h-28 bg-black tablet:my-6">

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">You</p>
      </Link>

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">adsad</p>
      </Link>

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">adsad</p>
      </Link>

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">adsad</p>
      </Link>

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">adsad</p>
      </Link>

      <Link className=" w-20 h-24  flex flex-col justify-center space-y-2 items-center" href="">
        <div className=" bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
          <div className="w-16 h-16 p-0.5 bg-white rounded-full flex items-center justify-center">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </div>
        <p className="text-white text-xs font-normal w-full text-center">adsad</p>
      </Link>

      

    </div>
  );
};

export default Storynav;
