import React from "react";
import Cards from "./Cards";
import SideNavigation from "./SideNavigation";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <SideNavigation/>
      </div>

      <div>

      </div>
        <Cards/>
      <div>

      </div>
    </div>
  );
};

export default Home;
