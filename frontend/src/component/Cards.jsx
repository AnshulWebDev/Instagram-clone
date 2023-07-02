import React from "react";
import profile from "../utils/profile.jpg";
import tempPost from "../utils/ptempost.jpg";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="w-[468px] border">
      {/* profile & user name  */}
      <div className="w-full h-14">
        <div className="w-full border h-14 flex justify-between items-center py-2 px-2">
          <div className="flex w-10 justify-center items-center">
            <img
              className="rounded-full flex justify-center items-center border"
              src={profile}
              alt=""
            />
          </div>
          <div className="w-full h-full flex items-center pl-1">
            <p className="text-sm ">djasldkhjadiowedhjweoidwio</p>
          </div>
          <div>
            <button className="flex w-10 h-10 justify-center items-center">
              <div className="bg-black w-1 h-1 rounded-full mx-[1px]"></div>
              <div className="bg-black w-1 h-1 rounded-full mx-[1px]"></div>
              <div className="bg-black w-1 h-1 rounded-full mx-[1px]"></div>
            </button>
          </div>
        </div>
      </div>

      {/* post  */}
      <div className="w-full h-[585px]">
        <div className="p-1">
          <img src={tempPost} alt="" />
        </div>
      </div>

      <div>
        {/* like, comment, sare  */}
        <div className="w-full h-12 border flex justify-between items-center py-2 px-2">
          <div className="flex">
            <div className="flex w-10 justify-center items-center">
              <AiOutlineHeart className="w-6 h-6" />
            </div>
            <div className="flex w-10 justify-center items-center">
              <FaRegComment className="w-6 h-6" />
            </div>
            <div className="flex w-10 justify-center items-center">
              <FiShare className="w-6 h-6" />
            </div>
            <div></div>
          </div>
          <button className="flex w-10 h-10 justify-center items-center">
            <BsBookmark className="w-6 h-6" />
          </button>
        </div>

        {/* likes */}
        <div className="w-full h-6 flex justify-between items-center py-2 px-2">
          <p>14,379 <span>likes</span> </p>
        </div>

        
      </div>
    </div>
  );
};

export default Cards;
