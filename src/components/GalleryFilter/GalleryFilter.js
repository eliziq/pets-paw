import "./galleryFilter.scss";

import React from "react";
import update from "../../images/svgs/round-arrow.svg";
import CustomSelector from "../CustomSelector/CustomSelector";
import { useSelector } from "react-redux";
import {
  fetchAsyncBreeds,
  getAllBreeds,
  setLimit,
  setBreed,
  setOrder,
  setType,
  setPage,
  getLimit,
  getBreed,
  getOrder,
  getPage,
} from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";

const GalleryFilter = () => {
  const orderOptions = [
    { value: "rand", label: "Random" },
    { value: "desc", label: "Descending" },
    { value: "asc", label: "Ascending" },
  ];

  const breedOptions = useSelector(getAllBreeds).map((breed) => ({
    value: breed.name.toLowerCase(),
    label: breed.name,
  }));

  breedOptions.unshift({ value: "none", label: "None" });

  const limitOptions = [
    { value: "5", label: "5 items per page" },
    { value: "10", label: "10 items per page" },
    { value: "15", label: "15 items per page" },
    { value: "20", label: "20 items per page" },
  ];

  const typeOptions = [
    { value: "all", label: "All" },
    { value: "static", label: "Static" },
    { value: "animated", label: "Animated" },
  ];

  const dispatch = useDispatch();

  const limitHandler = (e) => {
    dispatch(setLimit(e.value));
  };
  const breedsHandler = (e) => {
    dispatch(setBreed(e.value));
  };
  const orderHandler = (e) => {
    dispatch(setOrder(e.value));
  };
  const typeHandler = (e) => {
    dispatch(setType(e.value));
  };
  const updateHandler = (e) => {
    dispatch(fetchAsyncBreeds());
  };

  return (
    <div className="filter-container">
      <div className="column">
        <div className="custom-selector-wrapper">
          <span>ORDER</span>
          <CustomSelector
            onChange={orderHandler}
            options={orderOptions}
            className="breeds"
          />
        </div>
        <div className="custom-selector-wrapper">
          <span>BREED</span>
          {/* Default value not working */}
          <CustomSelector
            onChange={breedsHandler}
            options={breedOptions}
            className="breeds"
          />
        </div>
      </div>
      <div className="column">
        <div className="custom-selector-wrapper">
          <span>TYPE</span>
          <CustomSelector
            onChange={typeHandler}
            options={typeOptions}
            className="breeds"
          />
        </div>
        <div className="update-limit">
          <div className="custom-selector-wrapper">
            <span>LIMIT</span>
            <CustomSelector
              onChange={limitHandler}
              options={limitOptions}
              className="breeds"
            />
          </div>
          <div onClick={updateHandler} className="update-btn">
            <img src={update} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;
