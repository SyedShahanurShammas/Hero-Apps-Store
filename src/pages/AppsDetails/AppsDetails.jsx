import React from "react";
import { useParams } from "react-router";
import useLoaderApps from "../../Hooks/useLoaderApps";
import download from "../../assets/icon-downloads.png";
import download1 from "../../assets/icon-ratings.png";
import download2 from "../../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();
  const { allApps, loading } = useLoaderApps();
  const detailApp = allApps.find((app) => parseInt(id) === app.id);
  if (loading) return <h1>Loading...</h1>;

  console.log(detailApp);

  const {
    title,
    companyName,
    description,
    downloads,
    image,
    reviews,
    ratings,
    size,
    ratingAvg,
  } = detailApp || {};

  return (
    <div className="container mx-auto lg:px-0 px-4 ">
      {/* card */}
      <div className="lg:mt-20 lg:flex gap-10 mt-10 lg:mb-3 ">
        <div className="">
          <img className="h-[300px]" src={image} alt="" />
        </div>
        <div className="flex-1 mb-10">
          <div className="lg:mb-10 mb-4 space-y-1.5">
            <h1 className="lg:text-4xl text-2xl font-semibold"> {title}</h1>
            <p className="">
              <span className="text-gray-400">Developed By:</span>{" "}
              <span className="text-[#632EE3] font-bold">{companyName}</span>{" "}
            </p>
          </div>

          <div className="border-t-2 flex pt-5 gap-4 mb-3 lg:gap-8 border-gray-300 flex-1">
            <div className="flex flex-col items-center">
              <img className="h-[40px]" src={download} alt="" />
              <p className="text-[#001931]">Downloads</p>
              <h1 className="font-bold text-2xl lg:text-[40px]">
                {downloads / 100000} M
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-[40px]" src={download1} alt="" />
              <p className="text-[#001931]">Average Ratings</p>
              <h1 className="font-bold text-2xl lg:text-[40px]">
                {ratingAvg}{" "}
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-[40px]" src={download2} alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <h1 className="font-bold text-2xl lg:text-[40px]">{reviews}</h1>
            </div>
          </div>
          <button className="bg-[#00D390] rounded cursor-pointer text-white py-3 px-5">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <hr class=" border-2 border-t border-gray-300 mb-6 "></hr>
      <h1>Ratings</h1>
      <p>Description</p>
    </div>
  );
};

export default AppsDetails;
