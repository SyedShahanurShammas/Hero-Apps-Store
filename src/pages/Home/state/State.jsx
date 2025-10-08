import React from "react";

const State = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] md:p-10 lg:p-20 p-6">
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
    </div>
  );
};

export default State;
