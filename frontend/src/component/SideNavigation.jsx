import React from 'react'
import { BsPlusSquare } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineMessage,
  AiOutlineMenu,
} from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
// import textLogo from "../utils/Instagram-Text_logo.png";
import profileImg from "../utils/profile.jpg";
import textLogoPng from "../utils/instagram.svg";

const SideNavigation = () => {
  return (
    
    <div className="flex justify-center bg-[#121212] flex-col items-center">
      <div className="h-full w-[70px] border-r-gray-800 bg-black hidden desktop:w-60 tablet:flex items-center desktop:items-start desktop:justify-normal px-2 pt-3 pb-2 flex-col text-white border-r-[0.5px] border-slate-700">
          <div className="w-3/4 h-14 desktop:mt-2 items-center justify-center desktop:flex desktop:mb-6 desktop:ml-2  hidden">
            <Link>
              <img className="h-full w-full" src={textLogoPng} />
            </Link>
          </div>

          <div className="w-12 h-14 my-1 desktop:hidden flex items-center justify-center">
            <Link>
              <AiOutlineInstagram className="w-7 h-7" />
            </Link>
          </div>

          <div className="flex flex-col text-roboto transition-all duration-200 ease-in-out">
            {/* Home Button */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <GoHomeFill className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Home</div>
                </div>
              </Link>
            </div>

            {/* search button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <FiSearch className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Search</div>
                </div>
              </Link>
            </div>

            {/* explore button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <FaRegCompass className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Explore</div>
                </div>
              </Link>
            </div>

            {/* message button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <AiOutlineMessage className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Messages</div>
                </div>
              </Link>
            </div>

            {/* likes button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <AiOutlineHeart className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Notifications</div>
                </div>
              </Link>
            </div>

            {/* addpost button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <BsPlusSquare className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">Create</div>
                </div>
              </Link>
            </div>

            {/* profile button  */}
            <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <img className="w-7 h-7" src={profileImg} alt="" />
                  <div className="hidden ml-2 desktop:flex">Profile</div>
                </div>
              </Link>
            </div>
            
          </div>
          {/* more button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-48 desktop:pl-4 items-center justify-center desktop:justify-normal mt-24  hover:bg-[#1b1a1a] hover:cursor-pointer rounded-full">
              <Link>
                <div className="flex items-center justify-center">
                  <AiOutlineMenu className="w-7 h-7 hover:scale-110" />
                  <div className="hidden ml-2 desktop:flex">More</div>
                </div>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default SideNavigation