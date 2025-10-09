import React from "react";
import errorPicture from "../../assets/App-Error.png";
import { Link } from "react-router";

const NoApps = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <img src={errorPicture} alt="" />
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-[#001931]">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382] lg:text-[20px] text-[16px]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to={"/apps"}
          className="flex w-[97px] text-white py-3 px-4 cursor-pointer items-center gap-0.5 rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
        >
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NoApps;
