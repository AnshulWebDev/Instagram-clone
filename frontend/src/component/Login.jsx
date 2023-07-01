import React from "react";
import Logo from "../utils/Instagram-Text_logo.png";
import facebookLogo from "../utils/facebook.png";
import { Link } from "react-router-dom";
import microsoft from "../utils/microsoft.png";
import Googleplay from "../utils/Googleplay.png";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[398px] h-[350px] flex flex-col items-center py-3">
          <div className="flex justify-center items-center my-8">
            <img className="fill-black h-12" src={Logo} alt="" srcset="" />
          </div>

          <div className="w-64 ">
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

          <div className="flex items-center justify-start w-64 my-6">
            <div className="h-[1px] w-3/5  bg-gray-400"></div>
            <div className="text-[#737373] mx-4">OR</div>
            <div className="h-[1px] w-3/5 bg-gray-400"></div>
          </div>

          <div className="h-4 flex items-center gap-2 mb-6">
            <img className="h-full" src={facebookLogo} alt="" srcset="" />
            <p className="text-[#385185]">Log in with FaceBook</p>
          </div>
          <div>
            <p>
              <Link>
                <p className="text-sm">Forgot password?</p>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-1 mt-12">
          Don't have an account?{" "}
          <p className="text-[#0095f6] font-medium">Sign up</p>
        </div>

        <div className="flex justify-center flex-col ">
          <div>Get the app</div>
          <div className="flex">
            <img className="h-10" src={Googleplay} alt="Googleplay" />
            <img className="h-10" src={microsoft} alt="microsoft" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap font-opensans">
            <p className="text-sm text-[#737373]">Meta</p>
            <p className="text-sm text-[#737373]">About</p>
            <p className="text-sm text-[#737373]">Blog</p>
            <p className="text-sm text-[#737373]">Jobs</p>
            <p className="text-sm text-[#737373]">Help</p>
            <p className="text-sm text-[#737373]">API</p>
            <p className="text-sm text-[#737373]">Privacy</p>
            <p className="text-sm text-[#737373]">Terms</p>
            <p className="text-sm text-[#737373]">Top Accounts</p>
            <p className="text-sm text-[#737373]">Locations</p>
            <p className="text-sm text-[#737373]">Instagram Lite</p>
            <p className="text-sm text-[#737373]">
              Contact Uploading & Non-Users
            </p>
            <p className="text-sm text-[#737373]">Meta Verified</p>
          </div>
          <div>
            <p>English</p>
            <p>© 2023 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
