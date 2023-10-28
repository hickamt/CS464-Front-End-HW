import { useEffect, useState } from "react";
import gotAPI from "../../api/gotAPI";
import Card from "./Card";
import { cleanData, validateInput } from "../../modules/validateAndClean";
import { matchInput } from "../../modules/filterArray";

function SearchField() {
  const [data, setData] = useState([]);
  const [isInputError, setIsInputError] = useState(false);
  const [displayInput, setDisplayInput] = useState([]);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await gotAPI();
      setData(cleanData(response));
    };
    getData();
  }, []);

  const handleListSelection = (input) => {
    if (data && input < data.length) {
      setCharacter(data[input]);
    }
  };

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
          {displayInput && displayInput.length > 0 && (
            <div id="list-container" className="dropdown-list">
              <ul>
                {displayInput.map((character, index) => {
                  return (
                    <>
                      <a
                        key={index}
                        className="list-item"
                        onClick={() => {
                          handleListSelection(character.id);
                          setDisplayInput([]);
                        }}>
                        <p className="name">
                          {character.firstName} {character.lastName}
                        </p>
                      </a>
                    </>
                  );
                })}
              </ul>
            </div>
          )}
          {character && <Card data={character} />}
        </div>
      </>
    )
  );
}

export default SearchField;
