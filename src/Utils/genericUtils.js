export const formatDate = (dateString) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const [year, month, day] = dateString.split('-').map(Number)
  const monthName = months[month - 1] // Months are zero-based in JavaScript

  return `${monthName} ${day}`
}

export const sumByKey = (array, keyToGroupBy, keyToSum) => {
  const resultMap = new Map()

  // Iterate over the array to sum values based on the group key
  array.forEach((item) => {
    const groupByKey = item[keyToGroupBy]
    const valueToSum = item[keyToSum]

    // If the group already exists in the map, add the value to it
    if (resultMap.has(groupByKey)) {
      resultMap.set(groupByKey, resultMap.get(groupByKey) + valueToSum)
    } else {
      // Otherwise, initialize it with the value
      resultMap.set(groupByKey, valueToSum)
    }
  })

  // Convert the map to an array of objects
  const resultArray = Array.from(resultMap, ([group, value]) => ({
    [keyToGroupBy]: group,
    [keyToSum]: value,
  }))

  return resultArray
}

export const filterByKey = (array, filterKey, filterValue) => {
  const filteredArray = array.filter((item) => item[filterKey] === filterValue)

  return filteredArray
}
