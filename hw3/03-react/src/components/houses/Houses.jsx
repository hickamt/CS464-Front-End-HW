import { useEffect, useState } from "react";
import Header from "../Header";
import gotAPI from "../../api/gotAPI";
import { cleanData } from "../../modules/validateAndClean";
import DonutChart from "./DonutChart";
import SpinAnimation from "../animation/Animation";

// Styles
import "./styles/house.css";

/**
 * Main Houses Component: Displaying the number of characters in each family as a donut chart
 * @returns a DonutChart component containing the number of characters in each family
 * as different colored segments of the chart
 */
function HousesChart() {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
      setIsData(true);
    };
    getData();
  }, []);

  return (
    <div className="house-container">
      <div className="header-container mt-3">
        <Header title={"GOT | Houses"} />
      </div>
      {isData && data.length > 0 && <SpinAnimation /> ? (
        <DonutChart characterData={data} />
      ) : (
        <SpinAnimation />
      )}
    </div>
  );
}

export default HousesChart;
