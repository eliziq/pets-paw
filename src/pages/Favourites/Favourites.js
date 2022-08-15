import React from "react";
// import "./favourites.scss";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";
import { useEffect } from "react";
import { fetchAsyncFavourites } from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncFavourites());
  });
  return (
    <div className="main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="FAVOURITES">
          <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Favourites;
