import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const CustomTooltip = ({ active, payload, label, xAxisLabel, yAxisLabel }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          padding: '10px',
          color: 'black',
        }}
      >
        {/* Display x-axis value */}
        <p>{`${xAxisLabel}: ${payload[0]['payload'][xAxisLabel]}`}</p>
        {/* Display y-axis value */}
        <p>{`${yAxisLabel}: ${payload[0]['payload'][yAxisLabel]}`}</p>
      </div>
    )
  }

  return null
}

const LineGraph = ({
  chartName,
  data,
  xAxisKey,
  yAxisKey,
  strokes,
  rowWidth,
  columnHeight,
  xAxisLabel,
  yAxisLabel,
}) => {
  console.log(data)
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
              fill: '#666',
              textAnchor: 'middle',
              dy: 10,
              width: 10,
            }}
          />
          <YAxis />
          <Tooltip
            content={
              <CustomTooltip xAxisLabel={xAxisKey} yAxisLabel={yAxisKey} />
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={yAxisKey}
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default LineGraph
