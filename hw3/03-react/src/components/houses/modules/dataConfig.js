import { backgroundColors, borderColors } from "../../../modules/randomColors";
/**
 * Renders a doughnut chart for each character house name
 * categorized by the number of house name occurances
 * @param chartConfig contains the family name and count of each family name occurance
 */
export const chartConfig = (characterData) => {
  return {
    type: "doughnut",
    labels: characterData.map((name) => name.familyName),
    datasets: [
      {
        label: "Count",
        data: characterData.map((name) => name.count),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
};

/**
 * Function will count the number of times a family name occurs
 * @param uniqueFamilyNames is an array of unique family names
 * @param familyNamesOccurance is an array to set the count of each family name occurance
 * Sets the count of each family name occurance to the familyNamesOccurance array
 */
export const countFamilyNameOccurance =
  function setTheCountOfFamilyNameOccurances(familyNames, chartData) {
    // for each name in chartData,
    // search familyNames array for matching names
    // if match, increment count
    // set count to chartData.count
    chartData.map((data) => {
      let count = 0;
      familyNames.map((familyName) => {
        if (data.familyName === familyName) {
          ++count;
        }
      });
      data.count = count;
    });
  };

/**
 * function will combine unique family names into a single array of objects
 * conaining the family name and count of each family name occurance,
 * where count is initially set to 0
 * @param familyNames is an array of all family names from the API
 * @param chartData is an an empty array
 * Sets chartData to an array of objects containing the family name and count
 */
export const combineFamilyNames = function combineUniqueFamilyNames(
  familyNames,
  chartData
) {
  let temp = familyNames.filter((name, index) => {
    return familyNames.indexOf(name) === index;
  });
  temp.map((name) => {
    chartData.push({
      familyName: name,
      count: 0,
    });
  });
};
