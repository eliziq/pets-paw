import React from "react";
import "./searchPage.scss";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";
import { getSearchSubmited } from "../../features/cats/catSlice";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const searchSubmited = useSelector(getSearchSubmited);
  return (
    <div className="main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="SEARCH">
          <p>
            Search results for: <span>{searchSubmited}</span>
          </p>
          <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default SearchPage;
