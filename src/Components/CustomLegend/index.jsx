import React from "react";
import "./CustomLegend.scss";

const CustomLegend = ({ colors, tags }) => {
  return (
    <div className="custom-legend">
      {tags?.map((tag, idx) => (
        <div key={idx} className="custom-legend__item">
          <span
            className="custom-legend__item-color"
            style={{ backgroundColor: colors?.[idx] }}
            aria-label={tag}
          ></span>
          <span className="custom-legend__item-tag">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
