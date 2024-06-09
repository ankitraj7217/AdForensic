export const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const filterByAdvertiser = (array, filterValue) => {
  if (!filterValue || filterValue === "All") return array;
  return array?.filter((data) => data?.advertiser === filterValue);
};

// filterKey must be a date params
export const filterByDateRange = (array, filterKey, filterRange) => {
  if (!filterRange || filterRange.length <= 0) return array;
  const [startDate, endDate] = filterRange.map(
    (dateString) => new Date(dateString)
  );
  if (
    isNaN(startDate.getTime()) ||
    isNaN(endDate.getTime()) ||
    endDate < startDate
  )
    return array;
  const filteredArray = array.filter((item) => {
    const itemDate = new Date(item[filterKey]);
    if (isNaN(itemDate.getTime())) throw new Error("Pass Date Params");
    return itemDate >= startDate && itemDate <= endDate;
  });

  return filteredArray;
};

export const filterAdvertiserData = (array, filterAdvertiserValue, dateRange) => {
  return filterByDateRange(
    filterByAdvertiser(array, filterAdvertiserValue),
    "date",
    dateRange
  );
};

export const getAdvertiserNames = (array) => {
  return ["All", ...Array.from(new Set(array?.map((ele) => ele.advertiser)))];
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
