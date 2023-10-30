import { useState, useEffect } from "react";
import gotAPI from "../api/gotAPI";
import { cleanData } from "../modules/validateAndClean";
import Card from "./Card";

const MainBody = function GOTCards() {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const maxDisplay = 3;
  let count = 0;

  useEffect(() => {
    console.log("inside useEffect()");
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
    };
    getData();
  }, []);

  setTimeout(() => {
    if (startIndex < data.length - 3) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  }, 4000); // every 4 seconds

  return (
    <>
      {data && (
        <div className="main-body d-flex flex-wrap justify-content-around">
          {data.map((item, index) => {
            if (index >= startIndex && count < maxDisplay) {
              ++count;
              return <Card key={index} bgColor={"#314659"} data={item} />;
            }
          })}
        </div>
      )}
    </>
  );
};

export default MainBody;
