import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import search from "../../images/images-search.png";
import breeds from "../../images/pet-breeds.png";
import vote from "../../images/vote-table.png";
import logo from "../../images/svgs/logo.svg";
import { useLocation } from "react-router";
import "./side.scss";

const Side = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <div className="logo">
          <Link to={`/`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="upper-text">
          <h2>Hi intern!</h2>
          <p>Welcome to MI 2022 Front-end test</p>
        </div>
        <div className="bottom-content">
          <h3>Lets start using The Cat API</h3>
          <div className="cards-wrapper">
            <Link to={`/voting`}>
              <div className="card-container">
                <div
                  className={`card card-vote ${
                    pathname === "/voting" ? "card-active" : ""
                  }`}
                >
                  <img src={vote} alt="vote" />
                </div>
                <button
                  className={pathname === "/voting" ? "button-active" : ""}
                >
                  VOTING
                </button>
              </div>
            </Link>
            <Link to={`/breeds`}>
              <div className="card-container">
                <div
                  className={`card card-breeds ${
                    // || "/breeds/selected" doesnt work
                    pathname === "/breeds" 
                      ? "card-active"
                      : ""
                  }`}
                >
                  <img src={breeds} alt="breeds" />
                </div>
                <button
                  className={pathname === "/breeds" ? "button-active" : ""}
                >
                  BREEDS
                </button>
              </div>
            </Link>
            <Link to={`/gallery`}>
              <div className="card-container">
                <div
                  className={`card card-gallery ${
                    pathname === "/gallery" ? "card-active" : ""
                  }`}
                >
                  <img src={search} alt="gallery" />
                </div>
                <button
                  className={pathname === "/gallery" ? "button-active" : ""}
                >
                  GALLERY
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
