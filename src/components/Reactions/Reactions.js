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
  fetchActionLogFavourite,
  fetchActionLogVotes,
  fetchAsyncFavourites,
  fetchAsyncImages,
} from "../../features/cats/catSlice";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Reactions = () => {
  const dispatch = useDispatch();
  const randomCatId = useSelector(getRandomCat).id;
  const pathname = useLocation().pathname;

  return (
    <div className="reactions">
      <div className="smile" onClick={() => updateVoteHandler(dispatch, randomCatId, 1)}>
        <img src={smile} alt="" />
      </div>
      <div className="like">
        <img
          src={heart}
          alt=""
          onClick={() =>
            updateFavouriteHandler(dispatch, randomCatId, pathname)
          }
        />
      </div>
      <div className="sad">
        <img
          src={sad}
          alt=""
          onClick={() => updateVoteHandler(dispatch, randomCatId, 0)}
        />
      </div>
    </div>
  );
};

export const updateFavouriteHandler = (dispatch, imageId, pathname) => {
  Promise.resolve(
    dispatch(addFavouritePicture({ image_id: imageId, sub_id: "my-user-7390" }))
  ).then(function (response) {
    dispatch(fetchActionLogFavourite());
    // dispatch(fetchAsyncRandom())
    switch (pathname) {
      case "/voting":
        dispatch(fetchAsyncRandom());
        break;
      case "/gallery":
        dispatch(fetchAsyncImages());
        break;
      default:
        return;
    }
  });
};

const updateVoteHandler = (dispatch, imageId, value) => {
  console.log(dispatch)
  Promise.resolve(
    dispatch(
      voteForPicture({ image_id: imageId, value, sub_id: "my-user-7390" })
    )
  ).then(function (response) {
    dispatch(fetchActionLogVotes());
    dispatch(fetchAsyncRandom());
  });
};

export default Reactions;
