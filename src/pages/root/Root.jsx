import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className=" flex-1 bg-[#F5F5F5] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
