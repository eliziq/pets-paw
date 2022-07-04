import React, { useEffect } from "react";
import "./home.scss";
import girl from "../../images/girl-and-pet.png";

const Home = () => {
  return (
    <div className="main-section home">
      <div className="main-background"></div>
      <img src={girl} alt="" />
    </div>
  );
};

export default Home;
