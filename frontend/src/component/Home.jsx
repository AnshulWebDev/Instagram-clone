import React from "react";
import Cards from "./Cards";
import SideNavigation from "./SideNavigation";
import Storynav from "./Storynav";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="fixed">
        <SideNavigation />
      </div>

      <div className="mx-auto  flex flex-col justify-center items-center">
        <Header />
        <Storynav />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
