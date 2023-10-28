import { useState, useEffect } from "react";
import gotAPI from "../api/gotAPI";

const Cards = function GOTCards() {
  const [data, setData] = useState([])
  const [startIndex, setStartIndex] = useState(0);
  const maxDisplay = 3;
  let count = 0;

  useEffect(() => {
    console.log("inside useEffect()");
    const getData = async () => {
      const response = await gotAPI();
      setData(response);
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
      {data &&
        data.map((item, index) => {
          if (index >= startIndex && count < maxDisplay) {
            ++count;
            return (
              <div className="card" key={index}>
                <div className="row g-0">
                  <div className="col">
                    <img
                      src={item.imageUrl}
                      alt={item.fullName}
                      className="card-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title fs-4">{item.fullName}</h2>
                      <p className="card-text">
                        {item.title} {item.family}
                      </p>
                      {/* <a href="https://thronesapi.com/" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default Cards;
