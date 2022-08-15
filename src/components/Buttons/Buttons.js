import React from "react";
import smile from "../../images/svgs/smile.svg";
import heart from "../../images/svgs/heart-outline.svg";
import sad from "../../images/svgs/sad.svg";
import "./buttons.scss";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="btn-field">
      <Link to="/likes">
        <button>
          <img src={smile} alt="" />
        </button>
      </Link>
      <Link to="/favourites">
        <button>
          <img src={heart} alt="" />
        </button>
      </Link>
      <Link to="/dislikes">
        <button>
          <img src={sad} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
