import "./breedsFilter.scss";
import sortUp from "../../images/svgs/sort-up.svg";
import sortDown from "../../images/svgs/sort-down.svg";
import select from "../../images/svgs/select-arrow.svg";

import React from "react";

const BreedsFilter = () => {
  return (
    <div className="breeds-filter">
      <select name="breeds" className="breeds">
        <option selected>All Breeds</option>
        <option>Breed 1</option>
        <option>Breed 2</option>
        <option>Breed 3</option>
        <option>Breed 4</option>
        <option>Breed 5</option>
        <option>Breed 6</option>
      </select>
      <div className="filter-right">
        <select name="limit" className="limit">
          <option value="5" selected>
            Limit: 5
          </option>
          <option value="10">Limit: 10</option>
          <option value="15">Limit: 15</option>
          <option value="20">Limit: 20</option>
        </select>
        <div className="sort">
          <img src={sortUp} alt="" />
        </div>
        <div className="sort">
          <img src={sortDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BreedsFilter;
