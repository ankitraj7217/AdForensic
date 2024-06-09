import { filterByDateRange } from "./advertiserUtils";

export const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const filterByAdvertiser = (array, filterValue) => {
  if (!filterValue || filterValue === "All") return array;
  return array?.filter((data) => data?.advertiser === filterValue);
};

export const filterData = (array, filterAdvertiserValue, dateRange) => {
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
