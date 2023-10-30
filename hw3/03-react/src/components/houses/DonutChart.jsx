/* eslint-disable react/prop-types */
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
import { useState, useRef, useEffect } from "react";
import { getElementAtEvent } from "react-chartjs-2";
import Card from "../Card";
import { sortNumericHighLow } from "../../modules/arraySort";
import {
  chartConfig,
  countFamilyNameOccurance,
  combineFamilyNames,
} from "./modules/dataConfig";

/**
 * Creates a DonutChart for the number of characters in each family
 * @param data array of charcter objects from API
 * @returns an HTML element containing a DonutChart
 * representing the number of characters in each family
 */
function Chart({ characterData }) {
  const [chartData, setChartData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const chartRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgba(24,26,31, 0.9)");

  const onClick = (event) => {
    const chart = getElementAtEvent(chartRef.current, event);
    setBgColor(chart[0].element.options.backgroundColor);
    setCardData(
      characterData.filter(
        (data) => data.family === chartData[chart[0].index].familyName
      ) || []
    );
  };

  useEffect(() => {
    const createDonutChart = () => {
      let data = [];
      let familyNames = characterData.map((character) => character.family);
      combineFamilyNames(familyNames, data);
      countFamilyNameOccurance(familyNames, data);
      setChartData(sortNumericHighLow(data));
    };
    createDonutChart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="card-container d-flex flex-wrap justify-content-around">
          {cardData.map((data, index) => {
            return <Card key={index} bgColor={bgColor} data={data} />;
          })}
        </div>
      )}
    </>
  );
}

export default Chart;
