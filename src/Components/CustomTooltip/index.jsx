import React from "react";

// if keys is provided -> render only those keys
const CustomTooltip = ({ active, payload, keys = [] }) => {
  if (active && payload && payload.length) {
    const tooltipPayload = payload?.[0]?.["payload"];

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          color: "black",
        }}
      >
        {keys && keys.length > 0
          ? keys.map((key) => {
              const value = tooltipPayload[key];
              return <p key={key}>{`${key}: ${value}`} </p>;
            })
          : Object.keys(tooltipPayload).map((key) => {
              const value = tooltipPayload[key];
              return <p key={key}>{`${key}: ${value}`}</p>;
            })}

        {}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
