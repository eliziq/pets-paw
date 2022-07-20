import "./breedsFilter.scss";
import sortUp from "../../images/svgs/sort-up.svg";
import sortDown from "../../images/svgs/sort-down.svg";
import select from "../../images/svgs/select-arrow.svg";
import React, { useEffect } from "react";
import CustomSelector from "../CustomSelector/CustomSelector";
import {
  fetchAsyncBreeds,
  getAllBreeds,
  setLimit,
  setBreed,
  setOrder,
  setPage,
  getLimit,
  getBreed,
  getOrder,
  getPage,
  fetchAsyncBreedList,
  getBreedList,
} from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BreedsFilter = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncBreedList());
  // }, [dispatch]);

  const limitOptions = [
    { value: "5", label: "Limit: 5" },
    { value: "10", label: "Limit: 10" },
    { value: "15", label: "Limit: 15" },
    { value: "20", label: "Limit: 20" },
  ];

  const breedOptions = useSelector(getBreedList).map((breed) => ({
    value: breed.id,
    label: breed.name,
  }));

  breedOptions.unshift({ value: "", label: "All" });

  const order = useSelector(getOrder);

  const limitHandler = (e) => {
    dispatch(setLimit(e.value));
    dispatch(fetchAsyncBreeds());
  };

  const breedsHandler = (e) => {
    dispatch(setBreed(e.value));
    dispatch(fetchAsyncBreeds());
  };

  const descOrderHandler = () => {
    order !== "desc" ? dispatch(setOrder("desc")) : dispatch(setOrder("rand"));
    dispatch(fetchAsyncBreeds());
  };

  const ascOrderHandler = () => {
    order !== "asc" ? dispatch(setOrder("asc")) : dispatch(setOrder("rand"));
    dispatch(fetchAsyncBreeds());
  };

  return (
    <div className="breeds-filter">
      <CustomSelector
        onChange={breedsHandler}
        options={breedOptions}
        className="breeds"
      />
      <div className="filter-right">
        <CustomSelector
          onChange={limitHandler}
          options={limitOptions}
          className="limit"
        />
        <div
          className={`sort ${order === 'desc' ? "sort-active" : ""}`}
          onClick={descOrderHandler}
        >
          <img src={sortUp} alt="" />
        </div>
        <div className="sort" onClick={ascOrderHandler}>
          <img src={sortDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BreedsFilter;
