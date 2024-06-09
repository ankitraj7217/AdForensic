import React from "react";
import "./CustomTooltip.scss";
import { capitalizeFirstLetter } from "../../../Utils/genericUtils";

// if keys is provided -> render only those keys
const CustomTooltip = ({ active, payload, keys = [] }) => {
  if (active && payload && payload.length) {
    const tooltipPayload = payload?.[0]?.["payload"];

    return (
      <ul
        className="custom-tooltip"
      >
        {keys && keys.length > 0
          ? keys.map((key) => {
              const value = tooltipPayload[key];
              return <li key={key}>{`${capitalizeFirstLetter(key)}: ${value}`} </li>;
            })
          : Object.keys(tooltipPayload).map((key) => {
              const value = tooltipPayload[key];
              return <li key={key}>{`${capitalizeFirstLetter(key)}: ${value}`}</li>;
            })}

        {}
      </ul>
    );
  }

  return null;
};

export default CustomTooltip;
