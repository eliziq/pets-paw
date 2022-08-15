import React, { useEffect, useState } from "react";
import "./breedPage.scss";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import loading from "../../images/svgs/loading.svg";

import {
  getSelectedBreed,
  fetchSelectedBreed,
} from "../../features/cats/catSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const BreedPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSelectedBreed(params.id));
  }, [dispatch]);

  const selectedBreed = useSelector(getSelectedBreed);

  const { name, temperament, life_span, description, origin, weight, images } =
    selectedBreed;
  const [slideIndex, setSlideIndex] = useState(1);

  const bredFor = (description) => {
    if (description) {
      const indexOfDot = description.indexOf(".");
      return description.slice(0, indexOfDot + 1);
    }
  };

  const changeSlideHandler = (direction) => {
    if (direction === "next") {
      slideIndex !== images.length
        ? setSlideIndex(slideIndex + 1)
        : setSlideIndex(1);
    } else {
      slideIndex !== 1
        ? setSlideIndex(slideIndex - 1)
        : setSlideIndex(images.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  let renderSlider = "";

  renderSlider = (
    <div className="slider">
      {images ? (
        images.map((image, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={image.id}
            >
              <img src={image.url} alt="" />
            </div>
          );
        })
      ) : (
        <div className="loading">
          <img src={loading} alt="" />
        </div>
      )}
      <div className="dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <span
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            onClick={() => moveDot(index + 1)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={() => changeSlideHandler("prev")}>
        prev
      </button>
      <button className="next" onClick={() => changeSlideHandler("next")}>
        next
      </button>
    </div>
  );

  return (
    <div className="main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="BREEDS">
          {renderSlider}
          <div className="breed-info">
            <h1>{name}</h1>
            <p className="breed-description">{bredFor(description)}</p>
            <div className="breed-parameters">
              <div className="left-parameter">
                <h2>Temperament:</h2>
                <p>{temperament}</p>
              </div>
              <div className="right-parameter">
                <div>
                  <h2>Origin: </h2>
                  <p>{origin}</p>
                </div>
                <div>
                  <h2>Weight: </h2>
                  <p>{weight?.metric} kgs</p>
                </div>
                <div>
                  <h2>Life span: </h2>
                  <p>{life_span} years</p>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default BreedPage;
