import React from "react";
import Logo from "../utils/Instagram-Text_logo.png";
import facebookLogo from "../utils/facebook.png";
import { Link } from "react-router-dom";
import microsoft from "../utils/microsoft.png";
import Googleplay from "../utils/Googleplay.png";
const Signup = () => {
  return (
    <div className="w-full flex flex-col items-center mt-4 ">
      <div className="flex flex-col justify-center items-center mt-3">
        <img className="fill-black h-12" src={Logo} alt="" srcset="" />
        <p className="text-[#737373] text-base text-center w-10/12 my-3">
          Sign up to see photos and videos from your friends.
        </p>
        <Link className="w-[300px] h-8 bg-[#0095f6] text-sm font-bold text-white rounded-lg flex items-center justify-center">
          <div className="h-4 flex items-center gap-2 ">
            <img className="h-full" src={facebookLogo} alt="" srcset="" />
            <p className="text-[#ffffff] text-center">Log in with FaceBook</p>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-start w-[300px] my-6">
        <div className="h-[1px] w-3/5  bg-gray-400"></div>
        <div className="text-[#737373] mx-4">OR</div>
        <div className="h-[1px] w-3/5 bg-gray-400"></div>
      </div>
      <div className="w-[300px]">
        <form className="flex flex-col items-center" action="">
          <input
            type="text"
            placeholder="Phone number or email"
            className="w-full h-10 text-sm font-normal mb-1 border-2 rounded-md p-2 text-black placeholder:text-gray-500 bg-gray-50"
          />
          <input
            className="w-full h-10 text-sm font-normal mb-1 border-2 rounded-md p-2 text-black placeholder:text-gray-500 bg-gray-50"
            type="text"
            placeholder="Full Name"
          />

          <input
            className="w-full h-10 text-sm font-normal mb-1 border-2 rounded-md p-2 text-black placeholder:text-gray-500 bg-gray-50"
            type="text"
            placeholder="Username"
          />

          <input
            className="w-full h-10 text-sm font-normal mb-4 border-2 rounded-md p-2 text-black placeholder:text-gray-500 bg-gray-50"
            type="text"
            placeholder="Password"
          />

          <div className="flex flex-col">
            <p className="text-sm font-extralight text-[#737373] mb-2 text-center">
              People who use our service may have uploaded your contact
              information to Instagram.
              <p className="text-indigo-800 cursor-pointer">Learn More</p>
            </p>

            <p className="text-sm font-extralight text-[#737373] mb-4 text-center">
              By signing up, you agree to our
              <span className="text-indigo-800 cursor-pointer">Terms</span> ,
              <p>
                <span className="text-indigo-800 cursor-pointer">
                  Privacy Policy
                </span>
                and
                <span className="text-indigo-800 cursor-pointer">Cookies</span>
              </p>
              Policy .
            </p>
          </div>

          <button className="w-full h-8 bg-[#4CB5F9] text-sm font-bold text-white rounded-lg">
            Log in
          </button>
        </form>
      </div>
      <div className="flex justify-center flex-col ">
        <div className="text-center my-4 text-sm font-normal">Get the app.</div>
        <div className="flex gap-2">
          <img
            className="h-10 cursor-pointer"
            src={Googleplay}
            alt="Googleplay"
          />
          <img
            className="h-10 cursor-pointer"
            src={microsoft}
            alt="microsoft"
          />
        </div>
      </div>

      <div className="font-thin w-10/12 font-opensans text-xs flex flex-col my-20 text-[#00376b]">
        <div className="flex text-center flex-wrap gap-4 justify-center">
          <p className="cursor-pointer">Meta</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Jobs</p>
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">API</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Top Accounts</p>
          <p className="cursor-pointer">Locations</p>
          <p className="cursor-pointer">Instagram Lite</p>
          <p className="cursor-pointer">Contact Uploading & Non-Users</p>
          <p className="cursor-pointer">Meta Verified</p>
        </div>
        <div className="flex justify-center items-center mt-5 gap-5">
          <p className="cursor-pointer">English</p>
          <p>© 2023 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
