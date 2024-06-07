import React from "react";
import CustomLineGraph from "../CustomLineGraph";
import { _generateAdvertiserGraphData } from "../../Utils/advertiserUtils";
import CustomBarGraph from "../CustomBarGraph";

const Advertiser = ({advertiserData}) => {

  const lineGraphImpressions = _generateAdvertiserGraphData(
    advertiserData,
    "Line Graph - Impressions",
    "impressions"
  );
  const lineGraphClicks = _generateAdvertiserGraphData(
    advertiserData,
    "Line Graph - Clicks",
    "clicks"
  );
  const barGraohCtr = _generateAdvertiserGraphData(
    advertiserData,
    "Bar Graph - Ctr",
    "ctr"
  );

  return (
    <section className="advertiser">
      Advertiser Data
      <CustomLineGraph {...lineGraphImpressions} />
      <CustomLineGraph {...lineGraphClicks} />
      <CustomBarGraph {...barGraohCtr} />
    </section>
  );
};

export default Advertiser;
