import React from "react";
import { updateFavouriteHandler } from "../Reactions/Reactions";
import like from "../../images/svgs/heart-outline.svg";
import likePink from "../../images/svgs/heart.svg";
import smile from "../../images/svgs/smile-white.svg";
import smilePink from "../../images/svgs/smile.svg";
import sad from "../../images/svgs/sad-white.svg";
import sadPink from "../../images/svgs/sad.svg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import {
  deleteFavourite,
  getFavourites,
  getLikes,
  getDislikes,
  fetchAsyncFavourites,
  fetchAsyncVotes,
  deleteVote,
} from "../../features/cats/catSlice";

const ImageItem = (item) => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const favourites = useSelector(getFavourites);
  const likes = useSelector(getLikes);
  const dislikes = useSelector(getDislikes);

  let removeBtn = "";
  let hoverClass =''
  let inactiveBtn = "";
  let deleteFunc = ''

  let renderBreedItem = "";
  let renderLikedItem = "";
  let renderDislikedItem = "";
  let renderFavouriteItem = "";

  const onDeleteFav = (imageId) => {
    Promise.resolve(dispatch(deleteFavourite(imageId))).then(function () {
      dispatch(fetchAsyncFavourites());
    });
  };

  const onDeleteVote = (imageId) => {
    Promise.resolve(dispatch(deleteVote(imageId))).then(function () {
      dispatch(fetchAsyncVotes());
    });
  };

  const onDelete = (imageId) => {
    Promise.resolve(dispatch(onDeleteVote(imageId))).then(function () {
      dispatch(fetchAsyncFavourites());
    });
  };

  // const onAddFav = (imageId) => {
  //   Promise.resolve(dispatch(deleteFavourite(imageId))).then(function () {
  //     dispatch(fetchAsyncFavourites());
  //   });
  // };

  const toggleFavHandler = (isFav, imageId) => {
    isFav
      ? onDeleteFav(imageId)
      : updateFavouriteHandler(dispatch, imageId, pathname);
  };

  renderFavouriteItem = (image) => {
    const isFav = !!favourites.find((el) => el.image.id === image.image_id);

    return (
      <div className="grid-el" key={image.id}>
        <img src={image.image?.url || image.url} alt="" />
        <div className="pink-filter"></div>
        <span
          className="breed-toggle fav-hover"
          onClick={() => toggleFavHandler(isFav, image.id)}
        >
          <img src={isFav ? likePink : like} alt="" />
        </span>
      </div>
    );
  };

  renderLikedItem = (image) => {
    return (
      <div className="grid-el" key={image.id}>
        <img src={image.image?.url || image.url} alt="" />
        <div className="pink-filter"></div>
        <span className={`breed-toggle ${hoverClass}`} onClick={() => onDeleteVote( image.id)}>
          <img src={removeBtn} alt="" />
        </span>
      </div>
    );
  };

  renderBreedItem = (breed) => {
    return (
      <div className="grid-el" key={breed.id}>
        <Link to={`/breeds/${breed.id}`}>
          <img src={breed.imageUrl || breed.image?.url} alt={breed.name} />
          <div className="pink-filter"></div>
          <span className="breed-name">{breed.name || "name"}</span>
        </Link>
      </div>
    );
  };

  switch (pathname) {
    case "/likes":
      removeBtn = smilePink;
      hoverClass = 'like-hover'
      return renderLikedItem(item.image);
    case "/dislikes":
      hoverClass = 'dislike-hover'
      removeBtn = sadPink;
      return renderLikedItem(item.image);
    case "/gallery":
    case "/favourites":
      return renderFavouriteItem(item.image);
    case "/breeds":
    case "/search":
      return renderBreedItem(item.breed);
    default:
      return;
  }
};

export default ImageItem;
