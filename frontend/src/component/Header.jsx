import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import textLogo from "../utils/Instagram-Wordmark-Black-Logo.wine.svg";

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

      <div>
        
      </div>
    </>
  );
};

export default Header;
