import { useEffect, useState } from "react";
import Header from "../Header";
import gotAPI from "../../api/gotAPI";
import { cleanData } from "../../modules/validateAndClean";
import DonutChart from "./DonutChart";
import SpinAnimation from "../animation/Animation";

// Styles
import "./styles/house.css";
// import { getElementAtEvent } from "react-chartjs-2";

function ComponentThree() {
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
    <>
      <div className="component-three mt-3">
        <Header title={"GOT | Houses"} />
      </div>
      {isData && data.length > 0 && <SpinAnimation /> ? (
        <DonutChart characterData={data} />
      ) : (
        <SpinAnimation />
      )}
    </>
  );
}

export default ComponentThree;
