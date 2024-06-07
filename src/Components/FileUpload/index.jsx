import React, { useState } from "react";
import { usePapaParse } from "react-papaparse";
import { handleFileUploadGeneric } from "../../Utils/fileUploadUtils";
import "./FileUpload.scss";
import CustomError from "../CustomError";

const FlieUpload = ({setAdvertiserData, setCountriesData}) => {
  const [disableCountriesUpload, setDisableCountriesUpload] = useState(true);
  const [showError, setShowError] = useState(false);
  const { readString } = usePapaParse();

  const handleFileUploadAdvertiser = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "date", "impressions", "clicks", "ctr"];
    const valueType = ["String", "String", "Number", "Number", "String"];

    try {
      await handleFileUploadGeneric(
        file,
        readString,
        keys,
        valueType,
        setAdvertiserData
      );
    } catch (err) {
      setShowError(true);
    }

    setDisableCountriesUpload(false);
  };

  const handleFileUploadCountries = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "impressions", "country"];
    const valueType = ["String", "Number", "String"];

    try {
      await handleFileUploadGeneric(
        file,
        readString,
        keys,
        valueType,
        setCountriesData
      );
    } catch(e) {
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
      <h2 className="file-upload__title">Advertiser Data</h2>
      <input
        type="file"
        accept=".csv"
        className="file-upload__input"
        onChange={handleFileUploadAdvertiser}
      />

      <h2 className="file-upload__title">Countries Data</h2>
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
