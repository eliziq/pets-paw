import "./gridPattern.scss";
import React, { useRef } from "react";
import {
  getAllBreeds,
  getLimit,
  getAllImages,
  getSearchResult,
  getFavourites,
  getLikes,
  getDislikes,
} from "../../features/cats/catSlice";
import { useSelector, useDispatch } from "react-redux";
import loading from "../../images/svgs/loading.svg";
import { useLocation, Link } from "react-router-dom";
import ImageItem from "../ImageItem/ImageItem";

function GridPattern() {

  const data = {
    breeds:  useSelector(getAllBreeds),
    gallery:  useSelector(getAllImages),
    favourites:  useSelector(getFavourites),
    likes:  useSelector(getLikes),
    dislikes:  useSelector(getDislikes),
    search: useSelector(getSearchResult)
  }

  const limit = useSelector(getLimit);
  //do i need this ref?
  const containerRef = useRef(null);

  let renderSelected = "";
  const url = useLocation().pathname.substring(1);

  renderSelected = (category) =>
    category.length ? (
      category.map((image) => {
        if (category === data.breeds || category === data.search) {
          return <ImageItem breed={image} key={image.id} />;
        } else {
          return <ImageItem image={image} key={image.id} />;
        }
      })
    ) : (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );



  return (
    //render from pathname
    <div className={`grid grid-${limit}`}>
      {renderSelected(data[url])}
    </div>
  );
}

export default GridPattern;
