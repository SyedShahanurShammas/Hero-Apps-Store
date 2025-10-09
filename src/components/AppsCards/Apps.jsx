import React from "react";
import AppCard from "../AppCard/AppCard";

const Apps = ({ featureApps }) => {
  // console.log(featureApps);
  return (
    <div>
      <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {featureApps.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
