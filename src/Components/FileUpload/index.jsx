import React from "react";
import { usePapaParse } from "react-papaparse";
import { useAdvertiserContext } from "../../Contexts/Advertiser.context";
import { useCountriesContext } from "../../Contexts/Countries.context";
import { handleFileUploadGeneric } from "../../Utils/fileUploadUtils";

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

    // reader.onload = (e) => {
    //   const text = e.target?.result;
    //   if (typeof text === "string") {
    //     readString(text, {
    //       complete: (results) => {
    //         const extractedData = results.data
    //           .slice(1)
    //           .map((advertiserData) => ({
    //             advertiser: String(advertiserData[0]),
    //             impressions: Number(advertiserData[1]),
    //             country: String(advertiserData[2]),
    //           }));
    //         setCountriesData(extractedData);
    //       },
    //     });
    //   }
    // };
    // reader.readAsText(file);
  };

  return (
    <div>
      <h2>Advertiser Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUploadAdvertiser} />

      <h2>Countries Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUploadCountries} />
    </div>
  );
};

export default FlieUpload;
