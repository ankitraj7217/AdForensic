import React from "react";
import "./CustomSelect.scss";

const CustomSelect = ({
  heading = "",
  options = [],
  rootOptionsMessage = "Select an option",
  currOption = "",
  setOption = (value) => {},
}) => {
  const _onChangeOption = (e) => {
    const currentValue = e.target.value;
    setOption(currentValue);
  };

  return (
    <div className="custom-select">
      <h3>{heading}</h3>
      <div className="custom-select-drawer">
        <select
          value={currOption}
          onChange={_onChangeOption}
          className="custom-select-drawer__select"
        >
          <option value="" hidden>
            {rootOptionsMessage}
          </option>
          {options.map((value, idx) => (
            <option value={value} key={idx}>
              {value}
            </option>
          ))}
        </select>
        <div className="custom-select-drawer__arrow">&#9660;</div>
      </div>
    </div>
  );
};

export default CustomSelect;
