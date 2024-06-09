import React from "react";
import "./CustomLegend.scss";

const CustomLegend = ({ colors, tags }) => {
  return (
    <ul className="custom-legend">
      {tags?.map((tag, idx) => (
        <li key={idx} className="custom-legend__item">
          <span
            className="custom-legend__item-color"
            style={{ backgroundColor: colors?.[idx] }}
            aria-label={tag}
          ></span>
          <span className="custom-legend__item-tag">{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
