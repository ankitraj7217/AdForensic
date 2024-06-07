import React from "react";
import "./CustomSelect.scss";

const CustomSelect = ({
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
      <select
        value={currOption}
        onChange={_onChangeOption}
        className="custom-select__select"
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
      <div className="custom-select__arrow">&#9660;</div>
    </div>
  );
};

export default CustomSelect;
