import React from "react";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const InstalledApp = ({ app, setSaveApps }) => {
  const { size, title, image, downloads, ratings, id } = app;

  const handleRemove = (id) => {
    const existingApps = JSON.parse(localStorage.getItem("appsList"));
    let updatedList = existingApps.filter((a) => a.id !== id);
    setSaveApps(updatedList);
    localStorage.setItem("appsList", JSON.stringify(updatedList));

    //  sweet alert

    Swal.fire({
      icon: "error",
      title: "Removed",
      text: "Your app Removed from LocalStorage!",
      footer: '<a href="#">Do I have any quarry?</a>',
    });
  };
  return (
    <div className="lg:mt-2 mt-1 p-4 lg:p-0">
      <div className="lg:flex  justify-between items-center bg-white p-4 lg:p-2 rounded">
        <div className="lg:flex  gap-3">
          <img
            className="lg:h-[80px] w-full lg:w-2/12  rounded"
            src={image}
            alt=""
          />
          <div className="space-y-4">
            <h1 className="text-[20px] mt-4 lg:mt-0 font-semibold">{title}</h1>
            <div>
              <div className="flex gap-5 lg:gap-0 items-center ">
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
          <button
            onClick={() => handleRemove(id)}
            className="bg-[#00D390] rounded w-full mt-2 lg:mt-0 cursor-pointer text-white py-3 px-5 "
          >
            UnInstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
