import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/footer/Footer";
import img from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1 bg-[#F5F5F5]">
        <div className="flex flex-col mt-20  mb-10 justify-center items-center gap-4">
          <img className="h-[220px]" src={img} alt="" />
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-[#001931]">
            Oops, page not found!
          </h1>
          <p className="text-[#627382] lg:text-[20px] text-[16px]">
            The page you are looking for is not available.
          </p>
          <div>
            <Link
              to={"/"}
              className="flex w-[97px] text-white py-3 px-4 cursor-pointer items-center gap-0.5 rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
            >
              {" "}
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
