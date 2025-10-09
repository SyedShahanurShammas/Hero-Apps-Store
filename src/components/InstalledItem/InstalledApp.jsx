import React from "react";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
const InstalledApp = ({ app }) => {
  const { size, title, image, downloads, ratings } = app;
  return (
    <div className="mt-5">
      <div className="flex  justify-between items-center bg-white p-2 rounded">
        <div className="flex  gap-2">
          <img className="h-[80px] rounded" src={image} alt="" />
          <div className="space-y-4">
            <h1 className="text-[20px] font-semibold">{title}</h1>
            <div>
              <div className="flex gap-5 items-center justify-between">
                <div className="flex items-center  p-2 rounded gap-1">
                  <span>
                    <img className="h-[16px]" src={download} alt="" />
                  </span>
                  <span className="text-[#00D390] ">
                    {downloads / 100000} M
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2.5  p-2   rounded ">
                  <img className="h-[16px]" src={star} alt="" />
                  <span className="text-[#FF8811]">{ratings.length}</span>
                </div>
                <div className="text-gray-500">{size}MB</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#00D390] rounded cursor-pointer text-white py-3 px-5 ">
            UnInstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
