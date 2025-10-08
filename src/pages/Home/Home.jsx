import React from "react";
import hero from "../../assets/hero.png";
import google from "../../assets/fi_16076057.svg";
import appStore from "../../assets/fi_5977575.svg";

const Home = () => {
  return (
    <>
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
          <div>
            <button className="btn">
              {" "}
              <span>
                <img src={google} alt="" />
              </span>{" "}
              <span>Google play</span>
            </button>
            <button className="btn">
              <span>
                <img src={appStore} alt="" />
              </span>{" "}
              <span>Apps Store</span>
            </button>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
      <div class="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] md:p-10 lg:p-20 p-6">
        <h1 className="text-center text-white mb-10 text-[30px] lg:text-[48px] font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="lg:flex block text-center justify-center lg:gap-40">
          <div>
            <p className="text-white">Total Downloads</p>
            <h1 className="lg:text-[64px] text-[44px] font-extrabold my-4 text-[#ffff]">
              29.6M
            </h1>
            <p className="text-white">21% more than last month</p>
          </div>
          <div>
            <p className="text-white">Total review</p>
            <h1 className="lg:text-[64px] text-[44px] font-extrabold my-4 text-[#ffff]">
              906K
            </h1>
            <p className="text-white">46% more than last month</p>
          </div>
          <div>
            <p className="text-white">Total Apps</p>
            <h1 className="lg:text-[64px] text-[44px] font-extrabold my-4 text-[#ffff]">
              132+
            </h1>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
