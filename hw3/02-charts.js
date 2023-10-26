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
    ${getRandomValue(min, getRandomValue(100, max))},
    ${getRandomValue(min, getRandomValue(100, max))},
    ${getRandomValue(min, getRandomValue(125, max))},
    ${alpha})`;
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
];

/**
 * Renders a doughnut chart for each character house name
 * categorized by the number of house name occurances
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
  uniqueFamilyNames,
  familyNames,
  familyNamesOccurance
) {
  uniqueFamilyNames.map((name) => {
    let count = 0;
    familyNames.map((familyName) => {
      if (name === familyName) {
        count++;
      }
    });
    familyNamesOccurance.push(count);
  });
};

/**
 * Function will combine the family names into a new array
 * creating an array of unique family names
 * @param familyNames is an array of all family names from the data API
 * @returns a unique array of family names
 */
const combineFamilyNames = function combineUniqueFamilyNames(familyNames) {
  let combinedNames = familyNames.filter((name, index) => {
    return familyNames.indexOf(name) === index;
  });
  return combinedNames;
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
 * Function handles misspelled family names or similar spellings
 * and returns the correct spelling
 * @param name is the parsed family name from the API
 * @returns the correct spelling of the family name or returns
 * the original name if no match for known misspellings are found
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
const cleanFamilyName = function filterNamesForEmptyOrMispelled(
  data,
  familyNames
) {
  data.map((character) => {
    const familyName = validateFamilyName(
      filterSimilarNameSpellings(
        character.family.split("House").join("").trim()
      )
    );
    familyNames.push(familyName);
  });
};

/**
 * Clean and seperates the object data by house family name,
 * sorts the array of names alphabetically [a-zA-Z],
 * combines the family names into a new array,
 * and counts the number of times a family name occurs
 * @param data array of charcter objects from API
 * @returns an object containing the unique family names
 * and count of each family name occurance
 */
const getChartData = function setFamilyNameAndLengthOfName(data) {
  const familyNames = [];
  const familyNamesOccurance = [];
  let uniqueFamilyNames = [];

  if (data) {
    // clean and correct spelling of family names
    cleanFamilyName(data, familyNames);
    // sort the array of family names alphabetically [a-zA-Z]
    sortAlpha(familyNames);
    // combine the family names into a new array
    uniqueFamilyNames = combineFamilyNames(familyNames);
    // count the number of times a family name occurs and set to FamilyNamesOccurance array
    countFamilyNameOccurance(
      uniqueFamilyNames,
      familyNames,
      familyNamesOccurance
    );
    // return the object containing the family name and count of name occurance
    return {
      familyName: uniqueFamilyNames,
      count: familyNamesOccurance,
    };
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
    const nameAndCount = getChartData(data);
    renderChart(nameAndCount);
  } catch (error) {
    console.log(error.message);
  }
});
