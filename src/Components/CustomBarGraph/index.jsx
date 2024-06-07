import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../CustomTooltip";
import { GRAPH_COLOR } from "../../Constants/colors";

const CustomBarGraph = ({ chartName, data, xAxisKey, yAxisKeys }) => {
  return (
    <>
      <h2>{chartName}</h2>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={`500px`}
        minHeight={`300px`}
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey={xAxisKey}
            tick={{
              fontSize: 12,
              fill: "#666",
              textAnchor: "middle",
              dy: 10,
              width: 10,
            }}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {yAxisKeys.map((yAxisKey, idx) => {
            return (
              <Bar
                dataKey={yAxisKey}
                fill={GRAPH_COLOR?.[idx] ?? "#8884d8"}
                activeBar={<Rectangle fill="pink" stroke="blue" />}
                key={yAxisKey}
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomBarGraph;
