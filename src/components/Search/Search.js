import React, { useState } from "react";
import "./search.scss";
import search from "../../images/svgs/search.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchAsyncSearch,
  setSearchInput,
  getSearchInput,
  setSearchSubmited,
} from "../../features/cats/catSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(getSearchInput);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    dispatch(setSearchInput(e.target.value));
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncSearch(searchInput));
    dispatch(setSearchSubmited(searchInput))
    navigate("/search");
  };

  return (
    <form className="search-field" onSubmit={submitSearchHandler}>
      <input
        value={searchInput}
        onChange={inputHandler}
        type="text"
        placeholder="Search for breeds by name"
      />
      <button type="submit">
        <img src={search} alt="search" />
      </button>
    </form>
  );
};

export default Search;
