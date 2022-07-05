import React from "react";
import "./contentContainer.scss";
import back from "../../images/svgs/arrow-left.svg";

const ContentContainer = ({ title, children }) => {
  return (
    <div className="content-container">
      <div className="name-row">
        <button className="btn-back">
          <img src={back} alt="" />
        </button>
        <div className="page-name">{title}</div>
      </div>
      {children}
    </div>
  );
};

export default ContentContainer;
