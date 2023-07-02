import React from "react";
import profile from "../utils/profile.jpg";

const Suggestion = () => {
  return (
    <div className="text-white hidden tablet:flex ml-2">
      <div className="w-[319px] h-[66px]">
        <div className="h-14">
            <img
              className="h-full w-14 rounded-full flex justify-center items-center"
              src={profile}
              alt=""
            />
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
