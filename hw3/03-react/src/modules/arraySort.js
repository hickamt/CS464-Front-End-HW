/**
 * function will sort the array of names in alphabetical order
 * from A to Z [a-zA-Z]
 * @param data is an array of names
 * @returns the sorted array of names
 */
export const sortAlpha = function sortDataAlphabeticallyAtoZ(chartData) {
  // given data is an array of names, sort alphabetically
  const sortedData = chartData.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};

/**
 * Function will sort the chartData array by family count from low to high
 * @param chartData array of objects containing family name and count
 * @returns an array sorted in ascending order by count
 */
export const sortNumericLowHigh = function sortArrayByCountInFamilyNameLowToHigh(
  chartData
) {
  const sortedData = chartData.sort((a, b) => a.count - b.count);
  return sortedData;
};

/**
 * Function will sort the chartData array by family count from high to low
 * @param chartData array of objects containing family name and count
 * @returns an array sorted in descending order by count
 */
export const sortNumericHighLow = function sortArrayByCountInFamilyNameHighToLow(
  chartData
) {
  const sortedData = chartData.sort((a, b) => b.count - a.count);
  return sortedData;
};
