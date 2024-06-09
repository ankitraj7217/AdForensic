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
import { GRAPH_COLOR } from "../../../Constants/colors";

{
  /**
  Sample Params Data Format -
  @param chartName -> "Some Name"
  @param data - [
    {
      date: "2016-02-01",
      Syscox: 7000,
      Naparos: 8000, -> can be more too. it is dynamic -> depends on what is passed in yAxis Keys
    }, {}, {}..
    ]
  @param xAxisKey - date
  @param yAxisKeys - ['Syscox', 'Naparos']
*/
}

const CustomLineGraph = ({ chartName, data, xAxisKey, yAxisKeys }) => {
  return (
    <div className="custom-line" role="presentation">
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
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {yAxisKeys.map((yAxisKey, idx) => {
            return (
              <Line
                type="monotone"
                dataKey={yAxisKey}
                stroke={GRAPH_COLOR?.[idx] ?? "#82ca9d"}
                activeDot={{ r: 8 }}
                key={yAxisKey}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineGraph;
