import React from "react";
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
import textLogo from "../utils/Instagram-Wordmark-Black-Logo.wine.svg";
import profileImg from "../utils/profile.jpg";

const Header = () => {
  return (
    <>
      <div className="h-11 w-full bg-[#121212] p-4 flex justify-between items-center tablet:hidden">
        <div className="h-[29px]">
          <Link>
            <img src={textLogo} />
          </Link>
        </div>

        <div className="flex gap-1.5">
          <Link>
            <BsPlusSquare className="text-white h-6 w-6 p-1" />
          </Link>

          <Link>
            <AiOutlineHeart className="text-white h-6 w-6 p-0.5" />
          </Link>
        </div>
      </div>

      <div className="h-screen w-[70px] border-r-gray-600 bg-black mobileS:hidden desktop:w-60 tablet:flex justify-between items-center desktop:items-start desktop:justify-normal px-2 pt-3 pb-2 flex-col text-white">
        <div className="w-3/4 h-14 my-1 items-center justify-center desktop:flex desktop:mb-2 desktop:ml-2  hidden">
          <Link>
            <img className="h-full w-full" src={textLogo} />
          </Link>
        </div>

        <div className="w-12 h-14 my-1 desktop:hidden flex items-center justify-center">
          <Link>
            <AiOutlineInstagram className="w-7 h-7" />
          </Link>
        </div>

        <div className="flex flex-col justify-evenly text-roboto">
          {/* Home Button */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <GoHomeFill className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Home</div>
              </div>
            </Link>
          </div>

          {/* search button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <FiSearch className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Search</div>
              </div>
            </Link>
          </div>

          {/* explore button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <FaRegCompass className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Explore</div>
              </div>
            </Link>
          </div>

          {/* message button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <AiOutlineMessage className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Messages</div>
              </div>
            </Link>
          </div>

          {/* likes button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <AiOutlineHeart className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Notifications</div>
              </div>
            </Link>
          </div>

          {/* addpost button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <BsPlusSquare className="w-7 h-7 first-letter:" />
                <div className="hidden ml-2 desktop:flex">Create</div>
              </div>
            </Link>
          </div>

          {/* profile button  */}
          <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 ">
            <Link>
              <div className="flex items-center justify-center">
                <img className="w-7 h-7" src={profileImg} alt="" />
                <div className="hidden ml-2 desktop:flex">Profile</div>
              </div>
            </Link>
          </div>
        </div>

        {/* more button  */}
        <div className="w-12 h-14 my-1 flex desktop:w-32 desktop:pl-4 items-center justify-center bottom-0 desktop:fixed">
          <Link>
            <div className="flex items-center justify-center">
              <AiOutlineMenu className="w-7 h-7 first-letter:" />
              <div className="hidden ml-2 desktop:flex">More</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
