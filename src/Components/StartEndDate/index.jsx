import React from "react";
import CustomDate from "../CustomDate";

const StartEndDate = ({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    disableEndDate,
    setDisableEndDate
}) => {

  const _handleStartDateChange = (value) => {
    setStartDate(value);
    setDisableEndDate(false);
  };

  return (
    <>
      <h3>Start Date</h3>
      <CustomDate
        name="Start Date"
        selectedDate={startDate}
        setSelectedDate={_handleStartDateChange}
      />

      <h3>End Date</h3>
      <CustomDate
        name="End Date"
        selectedDate={endDate}
        setSelectedDate={setEndDate}
        minDate={startDate}
        disabled={disableEndDate}
      />
    </>
  );
};

export default StartEndDate;
