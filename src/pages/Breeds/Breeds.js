import React from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";

const Breeds = () => {
  return (
    <div className="breeds main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="BREEDS">

          <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Breeds;
