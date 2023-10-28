/* eslint-disable react/prop-types */

/**
 * Bilds a dropdown container list of characters with partial match
 * to the user input. Each list item is clickable and will display
 * the character's information.
 * @param displayInput user input 'string'
 * @param handleListSelection callback function
 * @param setDisplayInput callback function
 * @returns a dropdown list container with a list of characters
 */
function DropDown({ displayInput, handleListSelection, setDisplayInput }) {
  if (!displayInput) {
    return null;
  }

  return (
    displayInput.length > 0 && (
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
    )
  );
}

export default DropDown;
