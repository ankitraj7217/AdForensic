import React, { useState } from "react";
import { useTranslationContext } from "../../Contexts/Translation.provider";
import MoonSVG from "../../assets/moon.svg";
import SunSVG from "../../assets/sun.svg";
import "./Header.scss";
import { addClassName, getDOMElement, preferredTheme, removeClassName } from "../../Utils/domUtils";

const Header = () => {
  const { t } = useTranslationContext();
  const [isDarkMode, setIsDarkMode] = useState(preferredTheme());

  const toggleDarkMode = () => {
    const rootElement = getDOMElement("html");
    if (isDarkMode) {
      removeClassName(rootElement, "dark-mode");
      addClassName(rootElement, "light-mode");
    } else {
      removeClassName(rootElement, "light-mode");
      addClassName(rootElement, "dark-mode");
    }

    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <h1 className="header-title">{t("AD_FORENSICS")}</h1>
      <picture className="header-theme" onClick={toggleDarkMode}>
        <img src={isDarkMode ? SunSVG : MoonSVG} alt={isDarkMode ? "light-mode" : "dark-mode"} />
      </picture>
    </header>
  );
};

export default Header;
