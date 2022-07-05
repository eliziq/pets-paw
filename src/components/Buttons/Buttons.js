import React from "react";
import smile from "../../images/svgs/smile.svg";
import heart from "../../images/svgs/heart-outline.svg";
import sad from "../../images/svgs/sad.svg";
import "./buttons.scss";

const Buttons = () => {
  return (
    <div className="btn-field">
      <button>
        <img src={smile} alt="" />
      </button>
      <button>
        <img src={heart} alt="" />
      </button>
      <button>
        <img src={sad} alt="" />
      </button>
    </div>
  );
};

export default Buttons;
