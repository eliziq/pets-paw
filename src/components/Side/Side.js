import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import search from "../../images/images-search.png";
import breeds from "../../images/pet-breeds.png";
import vote from "../../images/vote-table.png";
import logo from "../../images/svgs/logo.svg";
import "./side.scss";

const Side = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="upper-text">
          <h2>Hi intern!</h2>
          <p>Welcome to MI 2022 Front-end test</p>
        </div>
        <div className="bottom-content">
          <h3>Lets start using The Cat API</h3>
          <div className="cards-wrapper">
            <div className="card-container">
              <div className="card card-vote">
                <img src={vote} alt="vote" />
              </div>
              <Link to={`/voting`}>
                <button>VOTING</button>
              </Link>
            </div>
            <div className="card-container">
              <div className="card card-breeds">
                <img src={breeds} alt="breeds" />
              </div>
              <Link to={`/breeds`}>
                <button>BREEDS</button>
              </Link>
            </div>
            <div className="card-container">
              <div className="card card-gallery">
                <img src={search} alt="gallery" />
              </div>
              <Link to={`/gallery`}>
                <button>GALLERY</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
