export const preferredTheme = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

export const getDOMElement = (type) => {
  if (type && typeof type === "string") {
    return document.querySelector(type);
  } else {
    console.error("Invalid or missing type parameter.");
    return null;
  }
};

export const addClassName = (ele, className) => {
  if (ele && className) {
    ele.classList.add(className);
  } else {
    console.error("Both element and className parameters are required.");
  }
};

export const removeClassName = (ele, className) => {
  if (ele && className) {
    ele.classList.remove(className);
  } else {
    console.error("Both element and className parameters are required.");
  }
};
