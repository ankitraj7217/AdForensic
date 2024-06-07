import React, { useMemo, useState } from "react";
import CustomSelect from "../../Components/CustomSelect";
import Advertiser from "../../Components/Advertiser";
import { filterData, getAdvertiserNames } from "../../Utils/genericUtils";
import FlieUpload from "../../Components/FileUpload";
import Countries from "../../Components/Countries";
import StartEndDate from "../../Components/StartEndDate";
import { organizeDataByAdvertiser } from "../../Utils/countriesUtils";

import "./GraphOrchestrator.scss";
import { ADVERTISERS_DATA, COUNTRIES_DATA } from "../../Data/sampleData";

const GraphOrchestrator = () => {
  const [advertiserData, setAdvertiserData] = useState(ADVERTISERS_DATA);
  const [countriesData, setCountriesData] = useState(COUNTRIES_DATA);

  const [advertiserName, setAdvertiserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disableEndDate, setDisableEndDate] = useState(true);

  const filteredAdvertiserData = filterData(advertiserData, advertiserName, [
    startDate,
    endDate,
  ]);
  const filteredCountriesData = useMemo(() => {
    return organizeDataByAdvertiser(countriesData, advertiserName);
  }, [countriesData, advertiserName]);
  const options = getAdvertiserNames(advertiserData);

  return (
    <main className="graph-orchestrator">
      <section className="graph-orchestrator-input">
        <CustomSelect
          options={options}
          rootOptionsMessage="Select AdvertiserName"
          currOption={advertiserName}
          setOption={setAdvertiserName}
        />
        <StartEndDate
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          disableEndDate={disableEndDate}
          setDisableEndDate={setDisableEndDate}
        />
        <FlieUpload setAdvertiserData={setAdvertiserData} setCountriesData={setCountriesData} />
      </section>
      <section className="graph-orchestrator-display">
        <Advertiser advertiserData={filteredAdvertiserData} />
        <Countries countriesData={filteredCountriesData} />
      </section>
    </main>
  );
};

export default GraphOrchestrator;
