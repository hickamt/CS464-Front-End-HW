const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
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

const filterSimilarNameSpellings = function filterSimilarNameSpellings(name) {
  switch (name) {
    case "Lanister":
    case "Lannister":
      return "Lannister";
    case 'Lorath':
    case 'Lorathi':
      return 'Lorath';
    case 'Targaryan':
    case 'Targaryen':
      return 'Targaryen';
    default:
      return name;
  }
};

/**
 * Seperates the family name from data
 * Sets family name and length of name to new data array
 * @param data array of charcter objects
 * @returns nameAndCount array with family name and length of name
 */
const getChartData = function setFamilyNameAndLengthOfName(data) {
  const uniqueFamilyNames = [];
  const familyNameLength = [];
  let familyNameAndNameLength = {};

  if (data) {
    data.map((character) => {
      // push only unique family uniequeFamilyNames to names array
      const familyName = filterSimilarNameSpellings(
        character.family.split("House").join("").trim()
      );
      if (
        familyName === "" ||
        familyName === "Unknown" ||
        familyName === "Unkown" ||
        familyName === "None"
      )
        return;

      if (!uniqueFamilyNames.includes(familyName)) {
        uniqueFamilyNames.push(familyName);
      }
    });
    // loop through names array and count the length of each name
    uniqueFamilyNames.map((name) => {
      familyNameLength.push(name.length);
    });
    familyNameAndNameLength = {
      familyName: sortAlpha(uniqueFamilyNames),
      count: familyNameLength,
    };
  }
  return familyNameAndNameLength;
};

/**
 * Fetches data from the API
 * @param url the url path required to fetch the data
 * @returns the response data
 */
const fetchData = async function fetchCharactersAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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
