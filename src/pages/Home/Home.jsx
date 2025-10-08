import React from "react";
import Banner from "./Banner/Banner";
import State from "./state/State";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <State></State>
    </div>
  );
};

export default Home;
