import React from "react";
import Banner from "./Banner/Banner";
import State from "./state/State";
import { Link } from "react-router";
import Apps from "../../components/AppsCards/Apps";
import useLoaderApps from "../../Hooks/useLoaderApps";

const Home = () => {
  const { allApps } = useLoaderApps();
  const featureApps = allApps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <State></State>
      <div className="container mx-auto w-full ">
        <div className="text-center mb-10">
          <h1 className="text-[48px] font-bold">Trending Apps</h1>
          <p className="text-[20px] text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <Apps featureApps={featureApps}></Apps>
        <div className="flex justify-center mt-5 lg:my-10">
          <Link
            to={"/apps"}
            className="flex w-[97px] text-white py-3 px-4 cursor-pointer items-center gap-0.5 rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
          >
            {" "}
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
