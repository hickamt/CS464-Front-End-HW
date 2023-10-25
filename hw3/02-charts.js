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
 * Seperates the family name from data
 * Sets family name and length of name to new data array
 * @param data array of charcter objects
 * @returns nameAndCount array with family name and length of name
 */
const getChartData = function setFamilyNameAndLengthOfName(data) {
  const names = [];
  const nameCount = [];
  let familyNameAndCount = {};

  if (data) {
    data.map((character) => {
      // push only unique family names to names array
      const familyName = character.family.split("House").join("").trim();
      if (!names.includes(familyName)) {
        names.push(familyName);
      }
    });
    // loop through names array and count the length of each name
    names.map((name) => {
      nameCount.push(name.length);
    })
    familyNameAndCount = {
      familyName: names,
      count: nameCount
    }
  }
  return familyNameAndCount
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
