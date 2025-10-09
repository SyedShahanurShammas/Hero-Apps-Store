import React, { useEffect, useState } from "react";
import InstalledApp from "../../components/InstalledItem/InstalledApp";

const Installation = () => {
  const [saveApps, setSaveApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  // get from local storage
  useEffect(() => {
    const saveInstalledApp = JSON.parse(localStorage.getItem("appsList"));
    if (saveInstalledApp) {
      setSaveApps(saveInstalledApp);
    }
  }, []);

  const handleSort = () => {
    if (sortOrder === "download-asc") {
      return [...saveApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...saveApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return saveApps;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mt-20">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="font-normal text-[20px] text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1>1 Apps Found</h1>
          <label className="form-control w-2/12 max-w-xs" htmlFor="">
            <select
              className="select select-bordered "
              name=""
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              id=""
            >
              <option value="None">Sort by Downloads</option>
              <option value="download-asc">Low-High</option>
              <option value="download-desc">High-Low</option>
            </select>
          </label>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 mb-5 gap-5">
        {handleSort().map((app, index) => (
          <InstalledApp app={app} key={index}></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
