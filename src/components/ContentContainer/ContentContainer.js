import React, { useEffect, useState } from "react";
import "./contentContainer.scss";
import back from "../../images/svgs/arrow-left.svg";
import upload from "../../images/svgs/upload.svg";
import BreedsFilter from "../BreedsFilter/BreedsFilter";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  getSelectedBreed,
  fetchAsyncBreedList,
  getBreedList,
} from "../../features/cats/catSlice";
import { useSelector, useDispatch } from "react-redux";

const ContentContainer = ({ title, children }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { id } = useSelector(getSelectedBreed);
  const breeds = useSelector(getBreedList);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openModalHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (!breeds.length) {
      dispatch(fetchAsyncBreedList());
    }
  }, [dispatch]);

  return (
    <div className="content-container">
      <div className="name-row">
        <div className="back-container">
          <button className="btn-back" onClick={() => navigate(-1)}>
            <img src={back} alt="" />
          </button>
          <div
            className={
              pathname === `/breeds/${id}`
                ? "breed-page-name page-name"
                : "page-name"
            }
          >
            {title}
          </div>
          {pathname === `/breeds/${id}` && (
            <div className="breed-id">{id.toUpperCase()}</div>
          )}
        </div>

        {pathname === "/breeds" && <BreedsFilter />}

        {pathname === "/gallery" && (
          <Link to="/gallery/upload">
            <button className="upload-btn" onClick={openModalHandler}>
              <img src={upload} alt="" />
              UPLOAD
            </button>
          </Link> 
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentContainer;
