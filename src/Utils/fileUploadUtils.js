export const handleFileUploadGeneric = async (
  file,
  readString,
  keys = [],
  valueType = [],
  setState
) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      if (typeof text === "string") {
        readString(text, {
          complete: (results) => {
            const extractedData = results.data.slice(1).map((data) => {
              const finResult = {};
              if (data?.length !== keys.length)
                rej("Please check uploaded file and its data");
              keys.forEach((key, idx) => {
                let value = data?.[idx];
                if (valueType?.[idx] === "Number")
                  finResult[key] = Number(value);
                else finResult[key] = String(value);
              });

              return finResult;
            });
            setState(extractedData);
            res(extractedData);
          },
        });
      }
    };
    reader.readAsText(file);
  });
};
