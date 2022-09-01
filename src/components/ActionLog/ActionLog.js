import React from "react";
import "./actionLog.scss";
import smile from "../../images/svgs/smile-green.svg";
import heart from "../../images/svgs/heart-outline.svg";
import sad from "../../images/svgs/sad-yellow.svg";

const ActionLog = ({ createdAt, imageId, value }) => {
  const time = new Date(createdAt).toLocaleTimeString().slice(0, -3);

  const actionText =
    value === 0
      ? "added to dislikes"
      : value === 1
      ? "added to likes"
      : value === 2
      ? "added to favourites"
      : value === 12
      ? "removed from favourites"
      :'';

  return (
    <div className="action-log">
      <div className="time">{time}</div>
      <p>
        Image ID: <span>{imageId}</span> was {actionText}
      </p>
      <img src={value === 0 ? sad : value === 1 ? smile : heart} alt="" />
    </div>
  );
};

export default ActionLog;
