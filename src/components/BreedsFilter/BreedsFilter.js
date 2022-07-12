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
} from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BreedsFilter = () => {
  const limitOptions = [
    { value: "5", label: "Limit: 5" },
    { value: "10", label: "Limit: 10" },
    { value: "15", label: "Limit: 15" },
    { value: "20", label: "Limit: 20" },
  ];

  const breedOptions = useSelector(getAllBreeds).map((breed) => ({
    value: breed.name.toLowerCase(),
    label: breed.name,
  }));

  breedOptions.unshift({ value: "none", label: "All" });

  const order = useSelector(getOrder)

  const dispatch = useDispatch();

  const limitHandler = (e) => {
    dispatch(setLimit(e.value));
  };

  const breedsHandler = (e) => {
    dispatch(setBreed(e.value));
  };

  const descOrderHandler = () => {
    order !== 'desc' ?
    dispatch(setOrder('desc')) :
    dispatch(setOrder('rand'))
    console.log( order !== 'desc');
  };

  const ascOrderHandler = () => {
    order !== 'asc' ?
    dispatch(setOrder('asc')) :
    dispatch(setOrder('rand'))
    console.log('asc');
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
        <div className="sort" onClick={descOrderHandler}>
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
