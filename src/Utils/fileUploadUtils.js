export const handleFileUploadGeneric = (
  file,
  readString,
  keys = [],
  valueType = [],
  setState
) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target?.result;
    if (typeof text === "string") {
      readString(text, {
        complete: (results) => {
          const extractedData = results.data.slice(1).map((data) => {
            const finResult = {};
            keys.forEach((key, idx) => {
              let value = data?.[idx];
              if (valueType?.[idx] === "Number") finResult[key] = Number(value);
              else finResult[key] = String(value);
            });
            return finResult;
          });
          setState(extractedData);
        },
      });
    }
  };
  reader.readAsText(file);
};
