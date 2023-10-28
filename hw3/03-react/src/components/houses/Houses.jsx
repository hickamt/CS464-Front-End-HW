import { useEffect, useState } from "react";
import Header from "../Header";
import gotAPI from "../../api/gotAPI";

function ComponentThree() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("inside useEffect()");
    const getData = async () => {
      const response = await gotAPI();
      setData(response);
    };
    getData();
  }, []);

  return (
    <>
      <div className="component-three text-center mt-3">
        <Header title={"GOT | Houses"} />
      </div>
    </>
  );
}

export default ComponentThree;
