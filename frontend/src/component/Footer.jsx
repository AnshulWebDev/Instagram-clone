import React from "react";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import profileImg from "../utils/profile.jpg";
const Footer = () => {
  return (
    <div className="h-14 w-full bg-black text-white p-4 flex justify-between items-center tablet:hidden bottom-0 sticky">
      <Link>
        <GoHomeFill className="h-9 w-9 p-1 " />
      </Link>
      <Link>
        <FaRegCompass className="h-9 w-9 p-1"/>
      </Link>
      <Link>
        <FiSearch className="h-9 w-9 p-1"/>
      </Link>
      <Link>
        <AiOutlineMessage className="h-9 w-9 p-1"/>
      </Link>
      <Link>
      <img className="w-9 h-9 p-1" src={profileImg} alt="" />
      </Link>
    </div>
  );
};

export default Footer;
