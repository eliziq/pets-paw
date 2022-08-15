import React from "react";
import "./prevNextBtns.scss";
import prev from "../../images/svgs/arrow-left-grey.svg";
import next from "../../images/svgs/arrow-right.svg";
import {
  setPage,
  getPage,
  fetchAsyncBreeds,
  fetchAsyncImages,
} from "../../features/cats/catSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const PrevNextBtnx = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;

  const pageHandler = (direction) => {
    dispatch(setPage(direction))
    pathname === "/breeds"
      ? dispatch(fetchAsyncBreeds())
      : pathname === "/gallery"
      ? dispatch(fetchAsyncImages())
      : console.log(`${direction} page`);
  };
  return (
    <div className="prev-next-btns">
      <button className="prev-btn" onClick={() => pageHandler("prev")}>
        <img src={prev} alt="" />
        <span>PREV</span>
      </button>
      <button className="next-btn" onClick={() => pageHandler("next")}>
        <span>NEXT</span>
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default PrevNextBtnx;
