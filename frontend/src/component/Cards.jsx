import React from "react";
import profile from "../utils/profile.jpg";
import tempPost from "../utils/ptempost.jpg";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Cards = () => {
  return (
    // w-[468px]
    <div className="max-w-[468px] border-slate-800 border-[0.5px] rounded bg-black mb-3">
      
      {/* profile & user name  */}
      <div className="w-full h-14">
        <div className="w-full h-14 flex justify-between items-center py-1 px-2">
          <button className="flex w-10 justify-center items-center bg-black">
            <img
              className="rounded-full flex justify-center items-center border-gray-800"
              src={profile}
              alt=""
            />
          </button>
          <div className="w-full max-h-full pl-1">
            <button className="text-sm text-left text-white font-roboto font-medium hover:text-[#9B9B9B]">
              whatsupanshul
            </button>
          </div>
          <div>
            <button className="flex w-10 h-10 justify-center items-center">
              <div className="bg-white w-[3px] h-[3px] rounded-full mx-[1.5px]"></div>
              <div className="bg-white w-[3px] h-[3px] rounded-full mx-[1.5px]"></div>
              <div className="bg-white w-[3px] h-[3px] rounded-full mx-[1.5px]"></div>
            </button>
          </div>
        </div>
      </div>

      {/* post  */}
      <div className="w-full">
        <div className="p-1">
          <img className="rounded" src={tempPost} alt="" />
        </div>
      </div>

      <div className="px-2 font-opensans">
        {/* like, comment, sare  */}
        <div className="w-full h-12 flex justify-between items-center py-2 ">
          <div className="flex">
            <button className="flex w-10 justify-center items-center">
              <AiOutlineHeart className="w-6 h-6 text-white hover:text-[#9B9B9B]" />
            </button>
            <button className="flex w-10 justify-center items-center">
              <FaRegComment className="w-6 h-6 text-white hover:text-[#9B9B9B]" />
            </button>
            <button className="flex w-10 justify-center items-center">
              <FiShare className="w-6 h-6 text-white hover:text-[#9B9B9B]" />
            </button>
          </div>
          <button className="flex w-10 h-10 justify-center items-center">
            <BsBookmark className="w-6 h-6 text-white hover:text-[#9B9B9B]" />
          </button>
        </div>

        {/* likes count */}
        <div className="w-full h-6 flex justify-between items-center mb-1 py-2 px-2">
          <button className="text-white font-medium text-sm">
            14,379 <span>likes</span>{" "}
          </button>
        </div>

        {/* comment section  */}
        <div className="text-[#9B9B9B] px-2 pb-2 text-sm">
          <button>
            <p>
              View all <span>12</span> comments
            </p>
          </button>
        </div>

        <div className="text-[#9B9B9B] px-2 pb-2 text-xs">
          <p>
            2 DAY <span>AGO</span>
          </p>
        </div>
      </div>

      <div className="h-[0.5px] bg-slate-800 w-full mt-1"></div>

      {/* add comment  */}
        <form
          className="w-full h-12 flex justify-between items-center px-2 pr-3 "
          action=""
        >
          <div className="flex w-10 justify-center items-center cursor-pointer">
            <HiOutlineEmojiHappy className="w-6 h-6 text-white" />
          </div>
          <input
            className="placeholder:text-[#9B9B9B] w-full bg-black outline-none border-none text-white"
            type="text"
            placeholder="Add a comments..."
          />
          <button className="flex w-10 h-10 justify-center items-center text-[#a8a8a8]">
            <p>Post</p>
          </button>
        </form>
    </div>
  );
};

export default Cards;
