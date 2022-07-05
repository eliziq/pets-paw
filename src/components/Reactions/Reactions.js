import React, { createContext } from "react";
import "./reactions.scss";
import smile from "../../images/svgs/smile-white.svg";
import heart from "../../images/svgs/heart-outline-white.svg";
import sad from "../../images/svgs/sad-white.svg";

const Reactions = () => {
  return (
    <div className="reactions">
      <div className="smile"><img src={smile}alt="" /></div>
      <div className="like"><img src={heart} alt="" /></div>
      <div className="sad"><img src={sad} alt="" /></div>
    </div>
  );
};

export default Reactions;
