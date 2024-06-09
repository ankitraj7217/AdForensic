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
