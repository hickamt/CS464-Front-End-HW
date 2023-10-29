import { useEffect, useState } from "react";
import Header from "../Header";
import gotAPI from "../../api/gotAPI";
import { cleanData } from "../../modules/validateAndClean"
import DonutChart from "./DonutChart";
import SpinAnimation from "../animation/Animation"

// Styles
import "./styles/house.css"

function ComponentThree() {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);  


  useEffect(() => {
    console.log("inside useEffect()");
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
      console.log("Response: ", response)
      setIsData(true)
    };
    getData();
  }, []);

  return (
    <>
      <div className="component-three text-center mt-3">
        <Header title={"GOT | Houses"} />
        {isData && data.length > 0 && <SpinAnimation /> ? <DonutChart characterData={data} /> : <SpinAnimation />}
      </div>
    </>
  );
}

export default ComponentThree;
