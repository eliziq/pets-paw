import React from "react";
// import "./dislikes.scss";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";

const Dislikes = () => {
  return (
    <div className="main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="DISLIKES">
          <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Dislikes;
