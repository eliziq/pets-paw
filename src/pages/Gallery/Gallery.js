import React from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GalleryFilter from "../../components/GalleryFilter/GalleryFilter";
import GridPattern from "../../components/GridPattern/GridPattern";


const Gallery = () => {
  return (
    <div className="gallery main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="GALLERY">
        <GalleryFilter />
        <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Gallery;
