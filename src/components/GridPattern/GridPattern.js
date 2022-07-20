import "./gridPattern.scss";
import React, { useEffect, useRef} from "react";
import {
  getAllBreeds,
  getLimit,
  getAllImages,
  setSelectedBreed,
  getBreedList,
  fetchAsyncBreedList,
} from "../../features/cats/catSlice";
import { useSelector, useDispatch } from "react-redux";
import like from "../../images/svgs/heart-outline.svg";
import loading from "../../images/svgs/loading.svg";
import { useLocation, Link } from "react-router-dom";

const GridPattern = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const breeds = useSelector(getAllBreeds);
  const gallery = useSelector(getAllImages);
  const limit = useSelector(getLimit);

  const containerRef = useRef(null)

  let renderBreeds = "";
  let renderGallery = "";

  const aboutBreedHandler = (breed) => {
    // dispatch(setSelectedBreed(breed));
  };

  renderBreeds = breeds.length ? (
    breeds.map((breed) => {
      return (
        <div
          className="grid-el"
          key={breed.id}
          data={breed}
          onClick={() => aboutBreedHandler(breed)}
        >
          <Link to={`/breeds/${breed.id}`}>
            <img src={breed.image?.url || breed.url} alt={breed.name} />
            <div className="pink-filter"></div>
            <span className="breed-name">{breed.name || "name"}</span>
          </Link>
        </div>
      );
    })
  ) : (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  );

  renderGallery = gallery.length ? (
    gallery.map((image) => {
      return (
        <div className="grid-el" key={image.id} data={image}>
          <img src={image.url} alt="" />
          <div className="pink-filter"></div>
          <span className="breed-like">
            <img src={like} alt="" />
          </span>
        </div>
      );
    })
  ) : (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  );

  return (
    <div ref={containerRef} className={`grid grid-${limit}`}>
      {(pathname === "/breeds" && renderBreeds) ||
        (pathname === "/gallery" && renderGallery)}
    </div>
  );
};

export default GridPattern;
