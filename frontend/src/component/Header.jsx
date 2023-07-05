import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import {
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import textLogoPng from "../utils/instagram.svg";

const Header = () => {
  return (
    <>
      {/* top Header for mobile */}
      <div className="h-14 w-full bg-black p-4 flex justify-between items-center tablet:hidden top-0 sticky">
        <div className="w-32">
          <Link>
            <img className="" src={textLogoPng} />
          </Link>
        </div>

        <div className="flex gap-1.5">
          <Link>
            <BsPlusSquare className="text-white h-9 w-9 p-1" />
          </Link>

          <Link>
            <AiOutlineHeart className="text-white h-9 w-9 p-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
