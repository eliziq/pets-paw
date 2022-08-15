import "./breedsFilter.scss";
import sortUp from "../../images/svgs/sort-up.svg";
import sortDown from "../../images/svgs/sort-down.svg";
import React  from "react";
import CustomSelector from "../CustomSelector/CustomSelector";
import {
  fetchAsyncBreeds,
  setLimit,
  setBreed,
  setOrder,
  getOrder,
  getBreedList,
} from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BreedsFilter = () => {
  const dispatch = useDispatch();

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
          className={`sort sort-up ${order === 'desc' ? "sort-active" : ""}`}
          onClick={descOrderHandler}
        >
          <img src={sortUp} alt="" />
        </div>
        <div className="sort sort-down" onClick={ascOrderHandler}>
          <img src={sortDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BreedsFilter;
