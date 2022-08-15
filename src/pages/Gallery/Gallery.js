import React, { useEffect } from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GalleryFilter from "../../components/GalleryFilter/GalleryFilter";
import GridPattern from "../../components/GridPattern/GridPattern";
import PrevNextBtns from "../../components/PrevNextBtns/PrevNextBtnx";
import { useDispatch } from "react-redux";
import { fetchAsyncImages } from "../../features/cats/catSlice";

const Gallery = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncImages());
  }, [dispatch]);

  return (
    <div className="gallery main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="GALLERY">
          <GalleryFilter  />
          <GridPattern/>
          <PrevNextBtns />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Gallery;
