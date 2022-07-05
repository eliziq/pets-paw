import React from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";

const Breeds = () => {
  return (
    <div className="breeds main-section">
    <div className="main-background">
      <SearchRow/>
      <ContentContainer title='BREEDS'/>
    </div>
  </div>
  );
};

export default Breeds;
