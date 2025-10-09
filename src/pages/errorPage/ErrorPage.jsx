import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/footer/Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <h1>404 not found</h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
