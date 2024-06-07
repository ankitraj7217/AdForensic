import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Legend } from "recharts";
import CustomTooltip from "../CustomTooltip";
import { GRAPH_COLOR } from "../../Constants/colors";
import CustomLegend from "../CustomLegend";
import { useTranslationContext } from "../../Contexts/Translation.provider";

const renderCustomLegend = (colors) => {
  <div></div>;
};

const CustomPieChart = ({ data, radiusObj = [] }) => {
  const { t } = useTranslationContext();
  
  return (
    <>
      <h3>{t("PIE_CHART")}</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={`600px`}
        minHeight={`400px`}
      >
        <PieChart width={400} height={400}>
          <Tooltip
            content={<CustomTooltip keys={["country", "impressions"]} />}
          />
          <Legend
            content={
              <CustomLegend
                colors={GRAPH_COLOR.slice(0, radiusObj.length)}
                tags={Object.keys(data)}
              />
            }
          />
          {radiusObj.map((obj, idx) => {
            return (
              <Pie
                data={data?.[obj?.key]}
                dataKey="impressions"
                cx="50%"
                cy="50%"
                innerRadius={idx === 0 ? 0 : obj?.innerRadius}
                outerRadius={obj?.outerRadius}
                fill={GRAPH_COLOR?.[idx] ?? obj?.color}
                key={obj?.key}
              />
            );
          })}
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomPieChart;
