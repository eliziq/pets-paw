import React from "react";
import "./actionLog.scss";
import smile from "../../images/svgs/smile-green.svg";
import heart from "../../images/svgs/heart-outline.svg";
import sad from "../../images/svgs/sad-yellow.svg";

const ActionLog = () => {
  const someText = "added to favourites";
  return (
    <div className="action-log">
      <div className="time">22:35</div>
      <p>
        Image ID: <span>someID</span> was {someText}
      </p>
      <img src={smile} alt="" />
    </div>
  );
};

export default ActionLog;
