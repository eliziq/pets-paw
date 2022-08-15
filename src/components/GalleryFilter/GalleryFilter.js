import "./galleryFilter.scss";
import React, { useEffect } from "react";
import update from "../../images/svgs/round-arrow.svg";
import CustomSelector from "../CustomSelector/CustomSelector";
import { useSelector } from "react-redux";
import {
  fetchAsyncImages,
  fetchAsyncBreedList,
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
  getBreedList,
} from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";

const GalleryFilter = () => {
  const dispatch = useDispatch();
  const limit = useSelector(getLimit);


  // useEffect(() => {
  //   dispatch(fetchAsyncBreedList());
  // }, [dispatch]);

  const orderOptions = [
    { value: "rand", label: "Random" },
    { value: "desc", label: "Descending" },
    { value: "asc", label: "Ascending" },
  ];

  const breedOptions = useSelector(getBreedList).map((breed) => ({
    value: breed.id,
    label: breed.name,
  }));


  breedOptions.unshift({ value: "", label: "None" });

  const limitOptions = [
    { value: "5", label: "5 items per page" },
    { value: "10", label: "10 items per page" },
    { value: "15", label: "15 items per page" },
    { value: "20", label: "20 items per page" },
  ];

  const typeOptions = [
    { value: "gif,jpg,png", label: "All" },
    { value: "jpg,png", label: "Static" },
    { value: "gif", label: "Animated" },
  ];

  const limitHandler = (e) => {
    dispatch(setLimit(e.value));
    dispatch(fetchAsyncImages());
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
  const updateHandler = () => {
    dispatch(fetchAsyncImages());
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
