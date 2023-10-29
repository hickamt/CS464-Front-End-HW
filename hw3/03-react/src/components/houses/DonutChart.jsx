/**
 * Created by: Todd Hickam | CS 464P/564P | Fall 2023
 * The following function will fetch Game of Thrones Characters from an API
 * and display the data in a doughnut chart representing the number of
 * characters in each family.
 * Styles: /hw3/02-charts.css
 */

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import { getRGBA } from "../../modules/randomColors";
import { useState, useRef, useEffect } from "react";
import { getElementAtEvent } from "react-chartjs-2";
import Card from "../search/Card";

const backgroundColors = [
  "rgba(49, 70, 89, 0.9)",
  getRGBA(0.8),
  "#181a1f",
  getRGBA(0.8),
  "#923734",
  getRGBA(0.8),
  "#ffdf8c",
  getRGBA(0.8),
  "#525949",
  getRGBA(0.8),
  "#c72230",
  getRGBA(0.8),
  "#4f5052",
  getRGBA(0.8),
  "#314659",
  getRGBA(0.8),
  "#ffe5a0",
  getRGBA(0.8),
  "#c7c7c7",
  getRGBA(0.8),
  "#181a1f",
  getRGBA(0.8),
  "#de985d",
  getRGBA(0.8),
  "#314659",
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
 * @param chartConfig contains the family name and count of each family name occurance
 */
const chartConfig = (characterData) => {
  return {
    // labels: characterData.map((name) => name.familyName),
    labels: [],
    datasets: [
      {
        label: "Select Area",
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
 * Creates a DonutChart for the number of characters in each family
 * @param data array of charcter objects from API
 * @returns an HTML element containing a DonutChart
 * representing the number of characters in each family
 */
// eslint-disable-next-line react/prop-types
function Chart({ characterData }) {
  const [chartData, setChartData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const chartRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgba(24,26,31, 0.9)");

  const onClick = (event) => {
    let temp = [];
    const chart = getElementAtEvent(chartRef.current, event);
    console.log(chart[0].element.options.backgroundColor);
    const chartIndex = chart[0].index;
    setBgColor(chart[0].element.options.backgroundColor);
    characterData.map((data) => {
      if (data.family === chartData[chartIndex].familyName) {
        temp.push(data);
      }
    });
    setCardData(temp);
  };

  const createDonutChart =
    function createAChartForTheNumberOfCharactersInEachFamily() {
      let familyNames = [];
      let data = [];
      characterData.map((character) => familyNames.push(character.family));
      combineFamilyNames(familyNames, data);
      countFamilyNameOccurance(familyNames, data);
      const sortedData = sortNumericHighLow(data);
      setChartData(sortedData);
    };

  useEffect(() => {
    createDonutChart();
  }, []);

  return (
    <>
      <div className="chart-container">
        <Doughnut
          ref={chartRef}
          data={chartConfig(chartData)}
          onClick={onClick}
        />
      </div>
      {cardData && cardData.length > 0 && (
        <div className="card-container">
          {cardData.map((data, index) => {
            return <Card key={index} data={data} bgColor={bgColor} />;
          })}
        </div>
      )}
    </>
  );
}

export default Chart;
