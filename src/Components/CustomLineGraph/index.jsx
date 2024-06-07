import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../CustomTooltip";


const CustomLineGraph = ({ chartName, data, xAxisKey, yAxisKeys }) => {
 
  return (
    <>
      <h2>{chartName}</h2>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={`500px`}
        minHeight={`300px`}
      >
        <LineChart
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
          <Tooltip
            content={
              <CustomTooltip />
            }
          />
          <Legend />
          {yAxisKeys.map((yAxisKey) => {
            return (
              <Line
                type="monotone"
                dataKey={yAxisKey}
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                key={yAxisKey}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomLineGraph;