import React, { useEffect } from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";
import PrevNextBtnx from "../../components/PrevNextBtns/PrevNextBtnx";
import { useDispatch } from "react-redux";
import { fetchAsyncBreeds, getLimit  } from "../../features/cats/catSlice";
import { useSelector } from "react-redux";

const Breeds = () => {
  console.log("render");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncBreeds());
  });

  return (
    <div className="breeds main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="BREEDS">
          <GridPattern title="BREEDS" />
          <PrevNextBtnx />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Breeds;
