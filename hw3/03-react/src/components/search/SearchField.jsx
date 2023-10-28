import { useEffect, useState } from "react";
import gotAPI from "../../api/gotAPI";
import Card from "./Card";
import { cleanData, validateInput } from "../../modules/validateAndClean";
import { matchInput } from "../../modules/filterArray";
import DropDown from "./DropDown";

function SearchField() {
  const [data, setData] = useState([]);
  const [isInputError, setIsInputError] = useState(false);
  const [displayInput, setDisplayInput] = useState([]);
  const [character, setCharacter] = useState(null);

  // fetch character data
  useEffect(() => {
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
    };
    getData();
  }, []);

  // handle user selection from dropdown list
  const handleListSelection = (input) => {
    if (data && input < data.length) {
      setCharacter(data[input]);
    }
  };

  // handle user input
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
        {isInputError && (
          <p className="input-error">Please Enter a Valid Character Name</p>
        )}
        <div className="search-container d-flex flex-column justify-content-center">
          <input
            type="text"
            className="search-input"
            placeholder="Enter House Name"
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <DropDown
            displayInput={displayInput}
            handleListSelection={handleListSelection}
            setDisplayInput={setDisplayInput}
          />
          {character && <Card data={character} />}
        </div>
      </>
    )
  );
}

export default SearchField;
