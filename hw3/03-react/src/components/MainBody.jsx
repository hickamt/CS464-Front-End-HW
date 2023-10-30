import { useState } from "react";
import Card from "./Card";
import SpinAnimation from "../components/animation/Animation";

// DataProvider Context
import { useData } from "../dataprovider/DataProvider";

/**
 * MainBody Card Component for LandingPage
 * Generates 3 cards at a time from the data fetched from API
 */
const MainBody = function GOTCards() {
  // data consumed from DataProvider Context
  console.log("Use Data Called Again")
  const data = useData(0)
  const [startIndex, setStartIndex] = useState(0);
  const maxDisplay = 3;
  let count = 0;

  setTimeout(() => {
    if (startIndex < data.length - maxDisplay) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  }, 4000); // every 4 seconds

  return (
    <>
      {data ? (
        data && (
          <div className="main-body d-flex flex-wrap justify-content-around">
            {data.map((item, index) => {
              if (index >= startIndex && count < maxDisplay) {
                ++count;
                return <Card key={index} bgColor={"#314659"} data={item} />;
              }
            })}
          </div>
        )
      ) : (
        <SpinAnimation />
      )}
    </>
  );
};

export default MainBody;
