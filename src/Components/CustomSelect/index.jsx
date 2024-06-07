import React, { useState } from "react";

const CustomSelect = ({
  options = [],
  rootOptionsMessage = "Select an option",
  currOption = "",
  setOption = (value) => {},
  customStyle = {},
}) => {

  const _onChangeOption = (e) => {
    const currentValue = e.target.value;
    setOption(currentValue);
  };

  return (
    <select
      value={currOption}
      onChange={_onChangeOption}
      style={{ ...customStyle }}
    >
      <option value="" hidden>
        {rootOptionsMessage}
      </option>
      {options.map((value, idx) => {
        return (
          <option value={value} key={idx}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default CustomSelect;
