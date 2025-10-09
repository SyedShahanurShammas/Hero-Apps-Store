import React from "react";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
const AppCard = ({ app }) => {
  const { image, downloads, title, ratings } = app;
  return (
    <div>
      <div className=" rounded p-2.5 bg-base-100 hover:scale-103 transition ease-in-out  shadow-sm">
        <figure className="h-[200px]">
          <img className="rounded" src={image} />
        </figure>
        <div className="">
          <h2 className="card-title mb-2.5">{title}</h2>

          <div className="flex justify-between">
            <div className="flex items-center bg-[#F1F5E8] p-1 rounded gap-1.5">
              <span>
                <img className="h-[16px]" src={download} alt="" />
              </span>
              <span className="text-[#00D390]">{downloads}</span>
            </div>
            <div className="flex items-center gap-2 px-2.5 bg-orange-100 p-1 rounded ">
              <img className="h-[16px]" src={star} alt="" />
              <span className="text-[#FF8811]">{ratings.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
