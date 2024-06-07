import React from "react";
import "./CustomDate.scss";

const CustomDate = ({
  name = "Date",
  disabled = false,
  selectedDate = "1971-01-01",
  setSelectedDate = (date) => {},
  minDate = "1971-01-01",
}) => {
  const _onDateChange = (e) => {
    setSelectedDate(e?.target?.value);
  };

  return (
    <input
      type="date"
      name={name}
      className="custom-date"
      disabled={disabled}
      value={selectedDate}
      onChange={_onDateChange}
      min={minDate}
    />
  );
};

export default CustomDate;
