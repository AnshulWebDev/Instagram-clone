import React from "react";
import Logo from "../utils/Instagram-Text_logo.png";
import facebookLogo from "../utils/facebook.png";
import { Link } from "react-router-dom";
import microsoft from "../utils/microsoft.png";
import Googleplay from "../utils/Googleplay.png";
import phone from "../utils/homephones.png"

const Login = () => {
  return (
    <div className="flex items-center flex-col mt-8">
      <div className="flex justify-center ">

        {/* left part */}
        <div className="w-[460px] h-[600px] laptop:flex hidden"> 
            <img src={phone} alt="" />
        </div>

        {/* right part  */}
        <div className=" flex flex-col items-center">
          <div className="w-[398px] h-[400px] mt-3 flex flex-col items-center pb-3 mobileL:border border-hidden">
            <div className="flex justify-center items-center my-8">
              <img className="fill-black h-12" src={Logo} alt="" srcset="" />
            </div>

            <div className="w-[300px]">
              <form className="flex flex-col items-center" action="">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className="w-full h-10 text-sm font-normal mb-1 border-2 rounded-md p-2 text-gray-700 bg-gray-50"
                />
                <input
                  className="w-full h-10 text-sm font-normal mb-4 border-2 rounded-md p-2 text-gray-700 bg-gray-50"
                  type="text"
                  placeholder="Password"
                />

                <button className="w-full h-8 bg-[#4CB5F9] text-sm font-bold text-white rounded-lg">
                  Log in
                </button>
              </form>
            </div>

            <div className="flex items-center justify-start w-[300px] my-6">
              <div className="h-[1px] w-3/5  bg-gray-400"></div>
              <div className="text-[#737373] mx-4">OR</div>
              <div className="h-[1px] w-3/5 bg-gray-400"></div>
            </div>

            <div className="h-4 flex items-center gap-2 mb-6">
              <img className="h-full" src={facebookLogo} alt="" srcset="" />
              <p className="text-[#385185]">Log in with FaceBook</p>
            </div>
            <div>
              <Link>
                <p className="text-sm font-thin">Forgot password?</p>
              </Link>
            </div>
          </div>

          <div className="w-[398px] h-[62px] flex items-center justify-center gap-1 mt-3 border">
            Don't have an account?{" "}
            <Link><p className="text-[#0095f6] font-medium">Sign up</p></Link>
          </div>

          <div className="flex justify-center flex-col ">
            <div className="text-center my-4 text-sm font-normal">
              Get the app.
            </div>
            <div className="flex gap-2">
              <img className="h-10 cursor-pointer" src={Googleplay} alt="Googleplay" />
              <img className="h-10 cursor-pointer" src={microsoft} alt="microsoft" />
            </div>
          </div>
        </div>
      </div>

      {/* footer section  */}
      <div className="mt-6 font-thin font-opensans text-xs flex flex-col mb-16 text-[#00376b]">
        <div className="flex text-center flex-wrap gap-4">
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
          <p className="cursor-pointer">
            Contact Uploading & Non-Users
          </p>
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

export default Login;
