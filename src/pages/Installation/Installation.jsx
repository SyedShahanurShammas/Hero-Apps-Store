import React, { useState } from "react";
import InstalledApp from "../../components/InstalledItem/InstalledApp";
import { loadAppsList } from "../../utilities/localStorage";

const Installation = () => {
  const [saveApps, setSaveApps] = useState(() => loadAppsList());
  const [sortOrder, setSortOrder] = useState("none");

  const handleSort = (() => {
    if (sortOrder === "download-asc") {
      return [...saveApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...saveApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return saveApps;
    }
  })();

  return (
    <div className="container mx-auto">
      <div className="text-center flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="font-normal text-center lg:text-[20px] text-[16px] w-8/12 mt-3 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="">
        <div className="flex  gap-12 mt-5 lg:mt-0  lg:justify-between items-center">
          <h1 className="lg:ml-0 ml-5 text-2xl font-semibold">
            {saveApps.length} Apps Found
          </h1>
          <label className="form-control w-2/12 max-w-xs" htmlFor="">
            <select
              className="select select-bordered flex-1 min-w-[160px]"
              name=""
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              id=""
            >
              <option className="w-full" value="None">
                Sort by Downloads
              </option>
              <option value="download-asc">Low-High</option>
              <option value="download-desc">High-Low</option>
            </select>
          </label>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 mb-5 gap-1">
        {handleSort.map((app, index) => (
          <InstalledApp
            setSaveApps={setSaveApps}
            app={app}
            key={index}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
