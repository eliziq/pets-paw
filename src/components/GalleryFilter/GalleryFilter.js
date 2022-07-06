import "./galleryFilter.scss";

import React from "react";
import update from "../../images/svgs/round-arrow.svg";

const GalleryFilter = () => {
  return (
    <div className="filter-container">
      <div className="column">
        <label className="custom-selector">
          <span>ORDER</span>
          <select name="breeds" className="breeds">
            <option selected>Random</option>
            <option>Breed 1</option>
            <option>Breed 2</option>
          </select>
        </label>
        <label className="custom-selector">
          <span>BREED</span>
          <select name="breeds" className="breeds">
            <option selected>None</option>
            <option>Breed 1</option>
            <option>Breed 2</option>
          </select>
        </label>
      </div>
      <div className="column">
        <label className="custom-selector">
          <span>TYPE</span>
          <select name="breeds" className="breeds">
            <option selected>Static</option>
            <option>Breed 1</option>
            <option>Breed 2</option>
          </select>
        </label>
        <div className="update-limit">
          <label className="custom-selector">
            <span>LIMIT</span>
            <select name="breeds" className="breeds">
              <option selected>5 items per page</option>
              <option>Breed 1</option>
              <option>Breed 2</option>
            </select>
          </label>
          <div className="update-btn">
            <img src={update} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;
