import React, { useMemo, useState } from "react";
import CustomSelect from "../../Components/CustomSelect";
import { filterAdvertiserData, getAdvertiserNames } from "../../Utils/genericUtils";
import FlieUpload from "../../Components/FileUpload";
import StartEndDate from "../../Components/StartEndDate";
import { organizeCountriesDataByAdvertiser } from "../../Utils/countriesUtils";

import "./GraphOrchestrator.scss";
import { ADVERTISERS_DATA, COUNTRIES_DATA } from "../../Data/sampleData";
import { useTranslationContext } from "../../Contexts/Translation.provider";
import CountriesCharts from "../../Components/CountriesCharts";
import AdvertiserGraphs from "../../Components/AdvertiserGraphs";

const GraphOrchestrator = () => {
  const { t } = useTranslationContext();
  const [advertiserData, setAdvertiserData] = useState(ADVERTISERS_DATA);
  const [countriesData, setCountriesData] = useState(COUNTRIES_DATA);

  const [advertiserName, setAdvertiserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disableEndDate, setDisableEndDate] = useState(true);

  const filteredAdvertiserData = filterAdvertiserData(advertiserData, advertiserName, [
    startDate,
    endDate,
  ]);
  const filteredCountriesData = useMemo(() => {
    return organizeCountriesDataByAdvertiser(countriesData, advertiserName);
  }, [countriesData, advertiserName]);
  const options = getAdvertiserNames(advertiserData);

  return (
    <main className="graph-orchestrator">
      <section className="graph-orchestrator-input">
        <CustomSelect
          heading={t("SELECT_ADVERTISER")}
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
        <FlieUpload
          setAdvertiserData={setAdvertiserData}
          setCountriesData={setCountriesData}
        />
      </section>
      <section className="graph-orchestrator-display">
        <AdvertiserGraphs advertiserData={filteredAdvertiserData} />
        <CountriesCharts countriesData={filteredCountriesData} />
      </section>
    </main>
  );
};

export default GraphOrchestrator;
