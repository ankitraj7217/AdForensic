import { generateRandomHexColor } from "./genericUtils";

export const organizeCountriesDataByAdvertiser = (array, filterAdvertiserName) => {
  const organizedData = {};

  array.forEach((entry) => {
    const { advertiser, impressions, country } = entry;

    if (!organizedData.hasOwnProperty(advertiser)) {
      organizedData[advertiser] = [];
    }

    organizedData[advertiser].push({ impressions, country });
  });

  if (!filterAdvertiserName || filterAdvertiserName === "All")
    return organizedData;

  return { [filterAdvertiserName]: organizedData?.[filterAdvertiserName] };
};

export const generateRandomRadiusForPieChart = (array) => {
  const MIN_RADIUS = 60;
  const RADIUS_RANGE = 50;
  const OUTER_INNER_DIFF = 20;
  const CONCENTRIC_CIRCLE_RADIUS_DIFF = 20;
  const RANDOM_VALUE = Math.random();

  let incrementalRadius = Math.floor(RANDOM_VALUE * RADIUS_RANGE) + MIN_RADIUS;

  const radiusData = Object.keys(array).map((key) => {
    const innerRadius = incrementalRadius;
    incrementalRadius = incrementalRadius + OUTER_INNER_DIFF;

    const outerRadius = incrementalRadius;
    incrementalRadius = incrementalRadius + CONCENTRIC_CIRCLE_RADIUS_DIFF;

    return {
      key: key,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      color: generateRandomHexColor(),
    };
  });

  return radiusData;
};
