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
const getRGBA = function getRandomGeneratedRgbaColor(min = 0, max = 255) {
  return `rgba(
    ${getRandomValue(min, getRandomValue(100, max))},
    ${getRandomValue(min, getRandomValue(100, max))},
    ${getRandomValue(min, getRandomValue(125, max))},
    0.8)`;
};

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  getRGBA(),
  "rgba(255, 206, 86, 0.8)",
  getRGBA(),
  "rgba(255, 99, 132, 0.8)",
  getRGBA(),
  "rgba(75, 192, 192, 0.8)",
  getRGBA(),
  "rgba(153, 102, 255, 0.8)",
  getRGBA(),
  "rgba(255, 159, 64, 0.8)",
  getRGBA(),
  "rgba(199, 199, 199, 0.8)",
  getRGBA(),
  "rgba(83, 102, 255, 0.8)",
  getRGBA(),
  "rgba(40, 159, 64, 0.8)",
  getRGBA(),
  "rgba(210, 199, 199, 0.8)",
  getRGBA(),
  "rgba(78, 52, 199, 0.8)",
  getRGBA(),
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  getRGBA(),
  "rgba(255, 206, 86, 1)",
  getRGBA(),
  "rgba(255, 99, 132, 1)",
  getRGBA(),
  "rgba(75, 192, 192, 1)",
  getRGBA(),
  "rgba(153, 102, 255, 1)",
  getRGBA(),
  "rgba(255, 159, 64, 1)",
  getRGBA(),
  "rgba(159, 159, 159, 1)",
  getRGBA(),
  "rgba(83, 102, 255, 1)",
  getRGBA(),
  "rgba(40, 159, 64, 1)",
  getRGBA(),
  "rgba(210, 199, 199, 1)",
  getRGBA(),
  "rgba(78, 52, 199, 1)",
  getRGBA(),
];

/**
 * Renders the chart data 'nameAndcount' as a doughnut chart
 * @param familyNameAndCount contains the family name and length of name
 */
const renderChart = (familyNameAndCount) => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      // labels will be an array of family names
      labels: familyNameAndCount.familyName,
      datasets: [
        {
          label: "Family Name & Length",
          data: familyNameAndCount.count,
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
    },
  });
};

/**
 * function will sort the array of names in alphabetical order
 * from A to Z [a-zA-Z]
 * @param data is an array of names
 * @returns the sorted array of names
 */
const sortAlpha = function sortDataAlphabeticallyAtoZ(data) {
  // given data is an array of names, sort alphabetically
  const sortedData = data.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log(sortedData);
  return sortedData;
};

/**
 * Function handles misspelled family names or similarlly spelled names
 * and returns the correct spelling
 * @param name is the parsed family name from the API
 * @returns the correct spelling of the family name or returns
 * the original name if no match is found
 */
const filterSimilarNameSpellings = function filterSimilarNameSpellings(name) {
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
 * @returns the name if valid or returns null
 */
const validateFamilyName = function validateFamilyName(name) {
  if (name === "" || name === "Unknown" || name === "Unkown" || name === "None")
    return null;
  return name;
};

/**
 * Seperates the family name from data
 * Sets family name and length of name to new data array
 * @param data array of charcter objects
 * @returns nameAndCount object containing familyName array
 * and count of name array
 */
const getChartData = function setFamilyNameAndLengthOfName(data) {
  const uniqueFamilyNames = [];
  const familyNameLength = [];
  let familyNameAndNameLength = {};

  if (data) {
    // sort family names and push unique names to new array
    data.map((character) => {
      const familyName = validateFamilyName(
        filterSimilarNameSpellings(
          character.family.split("House").join("").trim()
        )
      );
      if (familyName && !uniqueFamilyNames.includes(familyName)) {
        uniqueFamilyNames.push(familyName);
      }
    });
    // sort the array of family names alphabetically
    sortAlpha(uniqueFamilyNames);
    // push the length of each family name to new array
    uniqueFamilyNames.map((name) => {
      familyNameLength.push(name.length);
    });
    // join the family name and length of name to new array
    familyNameAndNameLength = {
      familyName: uniqueFamilyNames,
      count: familyNameLength,
    };
  }
  return familyNameAndNameLength;
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
  // url for the Thrones API
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const data = await fetchData(url);
    const nameAndCount = getChartData(data);
    renderChart(nameAndCount);
  } catch (error) {
    console.log(error.message);
  }
});
