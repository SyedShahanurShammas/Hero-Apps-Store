import React from "react";
import hero from "../../../assets/hero.png";
import google from "../../../assets/fi_16076057.svg";
import appStore from "../../../assets/fi_5977575.svg";
const Banner = () => {
  return (
    <div>
      <div className=" container mx-auto flex flex-col items-center gap-10   ">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" font-bold text-center text-[40px] lg:text-[72px]">
            We Build <br /> <span className="text-[#9F62F2]"> Productive</span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] mt-4 mb-10 font-normal text-center w-8/12">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="lg:flex block space-y-4 lg:space-y-0 gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/games?hl=en",
                  "_blank"
                )
              }
              className=" border gap-1.5 cursor-pointer border-gray-300 flex items-center rounded   px-6 py-3"
            >
              {" "}
              <span>
                <img className="" src={google} alt="" />
              </span>{" "}
              <span>Google play</span>
            </button>
            <button
              onClick={() =>
                window.open("https://www.apple.com/app-store/", "_blank")
              }
              className="border gap-1.5 cursor-pointer border-gray-300 flex items-center rounded   px-6 py-3"
            >
              <span>
                <img src={appStore} alt="" />
              </span>{" "}
              <span>Apps Store</span>
            </button>
          </div>
        </div>
        <div>
          <img className="w-2xs lg:w-full md:w-2xl" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
