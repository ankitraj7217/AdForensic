import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";
import { handleFileUploadGeneric } from "../../Utils/fileUploadUtils";
import "./FileUpload.scss";
import CustomError from "../CustomError";
import { useTranslationContext } from "../../Contexts/Translation.provider";

const FlieUpload = ({ setAdvertiserData, setCountriesData }) => {
  const { t } = useTranslationContext();
  const [disableCountriesUpload, setDisableCountriesUpload] = useState(true);
  const [showError, setShowError] = useState(false);
  const { readString } = usePapaParse();

  const handleFileUploadAdvertiser = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "date", "impressions", "clicks", "ctr"];
    const valueType = ["String", "String", "Number", "Number", "String"];

    try {
      const advertiserData = await handleFileUploadGeneric(
        file,
        readString,
        keys,
        valueType
      );
      setAdvertiserData(advertiserData);
      setDisableCountriesUpload(false);
    } catch (err) {
      setShowError(true);
    }
  };

  const handleFileUploadCountries = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "impressions", "country"];
    const valueType = ["String", "Number", "String"];

    try {
      const countriesData = await handleFileUploadGeneric(
        file,
        readString,
        keys,
        valueType
      );
      setCountriesData(countriesData);
    } catch (e) {
      setShowError(true);
    }
  };

  return (
    <div className="file-upload">
      <CustomError
        message="Please upload file in correct format"
        showError={showError}
        setShowError={setShowError}
        disappearTime={4000}
      />
      <h2 className="file-upload__title">{`${t("UPLOAD")} ${t(
        "ADVERTISER_DATA"
      )}`}</h2>
      <input
        type="file"
        accept=".csv"
        className="file-upload__input"
        onChange={handleFileUploadAdvertiser}
      />

      <h2 className="file-upload__title">{`${t("UPLOAD")} ${t(
        "COUNTRIES_DATA"
      )}`}</h2>
      <input
        type="file"
        accept=".csv"
        className="file-upload__input"
        onChange={handleFileUploadCountries}
        disabled={disableCountriesUpload}
      />
    </div>
  );
};

export default FlieUpload;
