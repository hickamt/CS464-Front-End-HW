import { useState } from "react";
import Card from "../Card";
import { validateInput } from "../../modules/validateAndClean";
import { matchInput } from "../../modules/filterArray";
import DropDown from "./DropDown";

// DataProvider Context
import { useData } from "../../dataprovider/DataProvider";

function SearchField() {
  const data = useData(0);
  const [isInputError, setIsInputError] = useState(false);
  const [displayInput, setDisplayInput] = useState([]);
  const [character, setCharacter] = useState(null);

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
          <label htmlFor="search-character" className="search-label">Search input for GOT Characters</label>
          <input
          id="search-character"
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
        </div>
          {character && <Card index={0} data={character} bgColor={"#314659"}  />}
      </>
    )
  );
}

export default SearchField;
