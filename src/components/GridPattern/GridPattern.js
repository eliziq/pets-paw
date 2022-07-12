import "./gridPattern.scss";
import React, { useEffect } from "react";
import { getAllBreeds } from "../../features/cats/catSlice";
import { useSelector } from "react-redux";
import { fetchAsyncBreeds } from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";
import like from "../../images/svgs/heart-outline.svg";
import loading from "../../images/svgs/loading.svg";

const GridPattern = ({ title }) => {

  const breeds = useSelector(getAllBreeds);
  let renderBreeds = "";

  renderBreeds = breeds.length ? (
    breeds.map((breed, index) => {
      return (
        <div className="grid-el" key={breed.id} data={breed}>
          <img src={breed.image.url} alt={breed.name} />
          <div className="pink-filter"></div>
          {title === "BREEDS" && (
            <span className="breed-name">{breed.name}</span>
          )}
          {title === "GALLERY" && (
            <span className="breed-like">
              <img src={like} alt="" />
            </span>
          )}
        </div>
      );
    })
  ) : (
    <div className="loading">ERROR<img src={loading} alt="" /></div>
  );

  return <div className="grid grid-20">{renderBreeds}</div>;
};

export default GridPattern;
