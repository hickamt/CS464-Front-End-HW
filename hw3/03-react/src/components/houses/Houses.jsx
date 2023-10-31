import Header from "../Header";
import DonutChart from "./DonutChart";
import SpinAnimation from "../animation/Animation";

// DataProvider Context
import { useData } from "../../dataprovider/DataProvider";

// Styles
import "./styles/house.css";

/**
 * Main Houses Component: Displaying the number of characters in each family as a donut chart
 * @returns a DonutChart component containing the number of characters in each family
 * as different colored segments of the chart
 */
function HousesChart() {
  const data = useData(0);

  return (
    <div className="house-container">
      <div className="header-container mt-3">
        <Header title={"GOT | Houses"} />
      </div>
      {data && data.length > 0 && <SpinAnimation /> ? (
        <DonutChart characterData={data} />
      ) : (
        <SpinAnimation />
      )}
    </div>
  );
}

export default HousesChart;
