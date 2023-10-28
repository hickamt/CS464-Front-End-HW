import { useEffect, useState } from "react";
import gotAPI from "../../api/gotAPI";
import Card from "./Card";
import { cleanData, validateInput } from "../../modules/validateAndClean";
import { matchInput } from "../../modules/filterArray";

function SearchField() {
  const [data, setData] = useState([]);
  const [isInputError, setIsInputError] = useState(true);
  const [displayInput, setDisplayInput] = useState([]);
  const character = {
    firstName: "U",
    lastName: "U",
    fullName: "U",
    title: "U",
    family: "U",
    imageUrl: "U",
  };

  useEffect(() => {
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
    };
    getData();
  }, []);

  const handleInputChange = (input) => {
    setIsInputError(false);
    try {
      validateInput(input);
      const matchedCharacters = matchInput(data, input);
      setDisplayInput(matchedCharacters);
    } catch (error) {
      setIsInputError(true);
      console.error(error.message);
    }
  };

  return (
    data && (
      <>
        <div className="search-container d-flex flex-column justify-content-center">
          <input
            type="text"
            className="search-input"
            placeholder="Enter House Name"
            onChange={(e) => handleInputChange(e.target.value)}
          />
          {displayInput && (
            <div className="dropdown-list">
              <ul>
              {displayInput.map((character) => {
                return (
                  <>
                    <p className="name">
                      {character.firstName} {character.lastName}
                    </p>
                  </>
                );
              })}


              </ul>
            </div>
          )}
          {isInputError && (
            <p className="input-error">Please Enter a Valid Character Name</p>
          )}
          {!isInputError && <Card data={character} />}
        </div>
      </>
    )
  );
}

export default SearchField;
