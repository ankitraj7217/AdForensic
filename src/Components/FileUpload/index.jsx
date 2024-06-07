import React from "react";
import { usePapaParse } from "react-papaparse";
import { useAdvertiserContext } from "../../Contexts/Advertiser.context";
import { useCountriesContext } from "../../Contexts/Countries.context";
import { handleFileUploadGeneric } from "../../Utils/fileUploadUtils";
import "./FileUpload.scss";

const FlieUpload = () => {
  const { setAdvertiserData } = useAdvertiserContext();
  const { setCountriesData } = useCountriesContext();
  const { readString } = usePapaParse();

  const handleFileUploadAdvertiser = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "date", "impressions", "clicks", "ctr"];
    const valueType = ["String", "String", "Number", "Number", "String"];

    handleFileUploadGeneric(
      file,
      readString,
      keys,
      valueType,
      setAdvertiserData
    );
  };

  const handleFileUploadCountries = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const keys = ["advertiser", "impressions", "country"];
    const valueType = ["String", "Number", "String"];

    handleFileUploadGeneric(
      file,
      readString,
      keys,
      valueType,
      setCountriesData
    );
  };

  return (
    <div className="file-upload">
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
      />
    </div>
  );
};

export default FlieUpload;
