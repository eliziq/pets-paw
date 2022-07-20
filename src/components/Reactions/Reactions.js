import React, { createContext } from "react";
import "./reactions.scss";
import smile from "../../images/svgs/smile-white.svg";
import heart from "../../images/svgs/heart-outline-white.svg";
import sad from "../../images/svgs/sad-white.svg";
import { useDispatch } from "react-redux";
import {
  fetchAsyncRandom,
  voteForPicture,
  addFavouritePicture,
  getRandomCat,
} from "../../features/cats/catSlice";
import { useSelector } from "react-redux";

const Reactions = () => {
  const dispatch = useDispatch();
  const randomCatId = useSelector(getRandomCat).id;

  const updateVoteHandler = (value) => {
    dispatch(voteForPicture({ image_id: randomCatId, value }));
    dispatch(fetchAsyncRandom());
  };

  const updateFavouriteHandler = () => {
    dispatch(addFavouritePicture({ image_id: randomCatId }));
    dispatch(fetchAsyncRandom());
  };

  return (
    <div className="reactions">
      <div className="smile" onClick={() => updateVoteHandler(1)}>
        <img src={smile} alt="" />
      </div>
      <div className="like">
        <img src={heart} alt="" onClick={updateFavouriteHandler} />
      </div>
      <div className="sad">
        <img src={sad} alt="" onClick={() => updateVoteHandler(0)} />
      </div>
    </div>
  );
};

export default Reactions;
