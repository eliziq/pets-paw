import "./customSelector.scss";

import React from "react";
import Select from "react-select";
import "../../common/colors.scss";

const CustomSelector = ({ options, onChange }) => {
  return (
    <Select
      defaultValue={options[0]}
      className="select-container"
      classNamePrefix="select"
      options={options}
      onChange={onChange}
    />
  );
};

export default CustomSelector;
