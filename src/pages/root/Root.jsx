import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" bg-[#F5F5F5]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
