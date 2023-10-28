/**
 * Created by: Todd Hickam | CS 464P/564P | Fall 2023
 * The following function will fetch Game of Thrones Characters from an API
 * and display the data in a doughnut chart representing the number of
 * characters in each family.
 * Styles: /hw3/02-charts.css
 */

/**
 * Generate a pseudo random value within a range [min, max]
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns random value based on given [min, max] range
 * @source MDN Math/random
 */
const getRandomValue = function getRandomValueUsingInclusiveRange(min, max) {
  ceiling_min = Math.ceil(min);
  floor_max = Math.floor(max);
  return Math.floor(Math.random() * (floor_max - ceiling_min) + ceiling_min);
};

/**
 * Generates a red,green,blue,alpha() css style color using
 * random value generator
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns rgba(val, val, val, 0.1)
 */
const getRGBA = function getRandomGeneratedRgbaColor(
  min = 0,
  max = 255,
  alpha = 0.5
) {
  return `rgba(
    ${getRandomValue(min, getRandomValue(10, max))},
    ${getRandomValue(min, getRandomValue(75, max))},
    ${getRandomValue(min, getRandomValue(100, max))},
    ${alpha})`;
};

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  getRGBA(0.5),
  "rgba(111, 207, 86, 0.8)",
  getRGBA(0.5),
  "rgba(255, 99, 132, 0.8)",
  getRGBA(0.5),
  "rgba(75, 192, 192, 0.8)",
  getRGBA(0.5),
  "rgba(153, 102, 255, 0.8)",
  getRGBA(0.5),
  "rgba(255, 159, 64, 0.8)",
  getRGBA(0.5),
  "rgba(199, 199, 199, 0.8)",
  getRGBA(0.5),
  "rgba(83, 102, 255, 0.8)",
  getRGBA(0.5),
  "rgba(40, 159, 64, 0.8)",
  getRGBA(0.5),
  "rgba(210, 199, 199, 0.8)",
  getRGBA(0.5),
  "rgba(78, 52, 199, 0.8)",
  getRGBA(0.5),
  "rgba(83, 13, 255, 0.8)",
  getRGBA(0.5),
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  getRGBA(1),
  "rgba(255, 206, 86, 1)",
  getRGBA(1),
  "rgba(255, 99, 132, 1)",
  getRGBA(1),
  "rgba(75, 192, 192, 1)",
  getRGBA(1),
  "rgba(153, 102, 255, 1)",
  getRGBA(1),
  "rgba(255, 159, 64, 1)",
  getRGBA(1),
  "rgba(159, 159, 159, 1)",
  getRGBA(1),
  "rgba(83, 102, 255, 1)",
  getRGBA(1),
  "rgba(40, 159, 64, 1)",
  getRGBA(1),
  "rgba(210, 199, 199, 1)",
  getRGBA(1),
  "rgba(78, 52, 199, 1)",
  getRGBA(1),
  "rgba(55, 192, 192, 1)",
  getRGBA(1),
];

/**
 * Renders a doughnut chart for each character house name
 * categorized by the number of house name occurances
 * @param chartData contains the family name and count of each family name occurance
 */
const renderChart = (chartData) => {
  const donutChart = document.querySelector(".donut-chart");
  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: chartData.map((name) => name.familyName),
      datasets: [
        {
          label: "Family Name & Length",
          data: chartData.map((name) => name.count),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Game of Thrones | Number of Characters in Each Family",
        fontSize: 24,
        fontWeight: "bold",
      },
    },
  });
};

/**
 * Function will count the number of times a family name occurs
 * @param uniqueFamilyNames is an array of unique family names
 * @param familyNamesOccurance is an array to set the count of each family name occurance
 * Sets the count of each family name occurance to the familyNamesOccurance array
 */
const countFamilyNameOccurance = function setTheCountOfFamilyNameOccurances(
  familyNames,
  chartData
) {
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
const combineFamilyNames = function combineUniqueFamilyNames(
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

/**
 * function will sort the array of names in alphabetical order
 * from A to Z [a-zA-Z]
 * @param data is an array of names
 * @returns the sorted array of names
 */
const sortAlpha = function sortDataAlphabeticallyAtoZ(chartData) {
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
const sortNumericLowHigh = function sortArrayByCountInFamilyNameLowToHigh(
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
const sortNumericHighLow = function sortArrayByCountInFamilyNameHighToLow(
  chartData
) {
  const sortedData = chartData.sort((a, b) => b.count - a.count);
  return sortedData;
};

/**
 * Function handles misspelled family names or similar spellings
 * and returns the correct spelling
 * @param name is the parsed family name from the API
 * @returns the correct spelling of the family name or returns
 * the original name if no match for known misspellings are found
 */
const updateMisspelledNames = function changeSimilarOrMisspelledNames(name) {
  switch (name) {
    case "Lanister":
    case "Lannister":
      return "Lannister";
    case "Lorath":
    case "Lorathi":
      return "Lorath";
    case "Targaryan":
    case "Targaryen":
      return "Targaryen";
    default:
      return name;
  }
};

/**
 * function will validate that the family name is
 * valid (not Unknown, Empty, or None)
 * @param name is the parsed family name from the API
 * @returns the name if valid or returns "Unknown House"
 */
const validateFamilyName = function validateFamilyName(name) {
  if (name === "" || name === "Unknown" || name === "Unkown" || name === "None")
    return "Unknown House";
  return name;
};

/**
 * Function will correct the spelling of family names and
 * group unknown or empty family house names together
 * @param data is the character data array
 * @param familyNames is a temporary array to hold the family names
 * No return object, the 'familyNames' array is passed by reference
 */
const cleanData = function splitTrimAndCorrectMisspelledFamilyNames(
  data,
  familyNames
) {
  data.map((character) => {
    const familyName = validateFamilyName(
      updateMisspelledNames(character.family.split("House").join("").trim())
    );
    familyNames.push(familyName);
  });
};

/**
 * Clean and seperates the object data by house family name,
 * sorts the array of names by count in family name from high to low
 * @param data array of charcter objects from API
 * @returns an object containing the unique family names
 * and count of each family name occurance sorted by count high to low
 */
const getChartData = function setFamilyNameAndLengthOfName(data) {
  const familyNames = [];
  const chartData = [];

  if (data) {
    cleanData(data, familyNames);
    combineFamilyNames(familyNames, chartData);
    countFamilyNameOccurance(familyNames, chartData);
    return sortNumericHighLow(chartData);
  }
};

/**
 * Fetches data from the API
 * @param url the url path required to fetch the data
 * @returns the response data as a .json() object
 */
const fetchData = async function fetchCharactersAPI(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

/**
 * Event listener for the window on load event
 * calling:
 * fetchData()
 * getChartData()
 * renderChart()
 */
window.addEventListener("load", async () => {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const data = await fetchData(url);
    renderChart(getChartData(data));
  } catch (error) {
    console.log(error.message);
  }
});
