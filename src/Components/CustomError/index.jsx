import React, { useEffect } from "react";
import "./CustomError.scss";

const CustomError = ({ message, showError, setShowError, disappearTime }) => {
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, disappearTime);

      return () => clearTimeout(timer);
    }
  }, [showError, setShowError]);

  return (
    <div className={`custom-error ${showError ? "show" : "hide"}`}>
      <p>{message}</p>
    </div>
  );
};

export default CustomError;
