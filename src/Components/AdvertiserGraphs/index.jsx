import React from "react";
import CustomLineGraph from "../ChartsAndGraphs/CustomLineGraph";
import { _generateAdvertiserGraphData } from "../../Utils/advertiserUtils";
import CustomBarGraph from "../ChartsAndGraphs/CustomBarGraph";
import { useTranslationContext } from "../../Contexts/Translation.provider";

const AdvertiserGraphs = ({advertiserData}) => {
  const { t } = useTranslationContext();

  const lineGraphImpressions = _generateAdvertiserGraphData(
    advertiserData,
    `${t("LINE_GRAPH")} - ${t("IMPRESSIONS")}`,
    "impressions"
  );
  const lineGraphClicks = _generateAdvertiserGraphData(
    advertiserData,
    `${t("LINE_GRAPH")} - ${t("CLICKS")}`,
    "clicks"
  );
  const barGraohCtr = _generateAdvertiserGraphData(
    advertiserData,
    `${t("BAR_GRAPH")} - ${t("CTR")}`,
    "ctr"
  );

  return (
    <section className="advertiser">
      <CustomLineGraph {...lineGraphImpressions} />
      <CustomLineGraph {...lineGraphClicks} />
      <CustomBarGraph {...barGraohCtr} />
    </section>
  );
};

export default AdvertiserGraphs;
