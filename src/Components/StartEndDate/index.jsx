import React, { useState } from "react";
import CustomDate from "../CustomDate";
import { useTranslationContext } from "../../Contexts/Translation.provider";

const StartEndDate = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const { t } = useTranslationContext();
  const [disableEndDate, setDisableEndDate] = useState(true);

  const _handleStartDateChange = (value) => {
    setStartDate(value);
    setDisableEndDate(false);
  };

  return (
    <>
      <h3>{t("START_DATE")}</h3>
      <CustomDate
        name={t("START_DATE")}
        selectedDate={startDate}
        setSelectedDate={_handleStartDateChange}
      />

      <h3>{t("END_DATE")}</h3>
      <CustomDate
        name={t("END_DATE")}
        selectedDate={endDate}
        setSelectedDate={setEndDate}
        minDate={startDate}
        disabled={disableEndDate}
      />
    </>
  );
};

export default StartEndDate;
