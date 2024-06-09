import React, { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATION_DATA } from "../Data/sampleTranslation";

const TranslationContext = createContext();

const TranslationContextProvider = ({ children }) => {
  const [translation, setTranslation] = useState(TRANSLATION_DATA);

  const t = (key) => {
    if (key in translation) return translation[key];

    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  useEffect(() => {
    // can use to call API and update it.
    // setTranslation to be used here
  }, []);

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;

export const useTranslationContext = () => useContext(TranslationContext);
