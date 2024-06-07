export const formatDate = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [_, month, day] = dateString.split("-").map(Number);
  const monthName = months[month - 1]; // Months are zero-based in JavaScript

  return `${monthName} ${day}`;
};

export const transformDataByMetric = (array, metric) => {
  const transformedData = new Map();

  array?.forEach((item) => {
    const { date, advertiser } = item;
    const value = item[metric];

    if (transformedData.has(date)) {
      transformedData.get(date)[advertiser] = value;
    } else {
      transformedData.set(date, { date, [advertiser]: value });
    }
  });

  return Array.from(transformedData.values());
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
  console.log(startDate, endDate);
  const filteredArray = array.filter((item) => {
    const itemDate = new Date(item[filterKey]);
    if (isNaN(itemDate.getTime())) throw new Error("Pass Date Params");
    return itemDate >= startDate && itemDate <= endDate;
  });

  return filteredArray;
};

export const getAllAdvertisers = (array) => {
  const advertiserSet = new Set();

  // Iterate over the array and collect all unique advertiser names
  array.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (key !== "date") {
        advertiserSet.add(key);
      }
    });
  });

  // Convert the Set to an array and return it
  return Array.from(advertiserSet);
};

export const _generateAdvertiserGraphData = (
  advertiserData,
  chartName,
  filterKey
) => {
  const modifiedData = transformDataByMetric(advertiserData, filterKey);

  return {
    chartName: chartName,
    data: modifiedData,
    xAxisKey: "date",
    yAxisKeys: getAllAdvertisers(modifiedData),
  };
};
