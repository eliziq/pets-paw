import React from "react";
import "./contentContainer.scss";
import back from "../../images/svgs/arrow-left.svg";
import upload from "../../images/svgs/upload.svg";
import BreedsFilter from "../BreedsFilter/BreedsFilter";

const ContentContainer = ({ title, children }) => {
  return (
    <div className="content-container">
      <div className="name-row">
        <div className="back-container">
          <button className="btn-back">
            <img src={back} alt="" />
          </button>
          <div className="page-name">{title}</div>
        </div>

        {title === "BREEDS" && <BreedsFilter />}
        {title === "GALLERY" && (
          <button className="upload-btn">
            <img src={upload} alt="" />
            UPLOAD
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentContainer;
