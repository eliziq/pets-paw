import React,  {useEffect} from "react";
// import "./likes.scss";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import GridPattern from "../../components/GridPattern/GridPattern";
import { getLikes, fetchAsyncVotes } from "../../features/cats/catSlice";
import { useDispatch } from "react-redux";

const Likes = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncVotes());
  });
  
  return (
    <div className="main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="LIKES">
          <GridPattern />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Likes;