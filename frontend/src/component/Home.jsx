import React from "react";
import Cards from "./Cards";
import SideNavigation from "./SideNavigation";
import Suggestion from "./Suggestion";

const Home = () => {
  return (
    <div className="flex bg-[#121212]">
      <div className="fixed">
        <SideNavigation/>
      </div>

      <div className="flex m-auto mt-3">
       <div className="">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

        <Cards/>


        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
       </div>
       <div className="hidden tablet:flex">
       <Suggestion/>
       </div>
      </div>
    </div>
  );
};

export default Home;
