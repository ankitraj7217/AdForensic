import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Legend } from "recharts";
import CustomTooltip from "../CustomTooltip";

const renderCustomLegend = () => (
  <div>
    Ankit Raj
  </div>
);

const CustomPieChart = ({ data, radiusObj=[] }) => {
  console.log(data);
  return (
    <>
      <h3>Pie Chart</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={`500px`}
        minHeight={`300px`}
      >
        <PieChart width={400} height={400}>
          <Tooltip content={<CustomTooltip keys={["country", "impressions"]} />} />
          <Legend content={renderCustomLegend} />
          {
            radiusObj.map((obj) => {
              return <Pie
                data={data?.[obj?.key]}
                dataKey="impressions"
                cx="50%"
                cy="50%"
                innerRadius={obj?.innerRadius}
                outerRadius={obj?.outerRadius}
                fill={obj.color}
            />
            })
          }
          
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomPieChart;
