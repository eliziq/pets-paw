import React from "react";
import "./prevNextBtns.scss";
import prev from "../../images/svgs/arrow-left-grey.svg";
import next from "../../images/svgs/arrow-right.svg";

const PrevNextBtnx = () => {
  return (
    <div className="prev-next-btns">
      <button className="prev-btn">
        <img src={prev} alt="" />
        <span>PREV</span>
      </button>
      <button className="next-btn">
        <span>NEXT</span>
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default PrevNextBtnx;
