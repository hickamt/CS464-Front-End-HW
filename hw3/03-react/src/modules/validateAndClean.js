/**
 * Function handles misspelled family names or similar spellings
 * and returns the correct spelling
 * @param name is the parsed family name from the API
 * @returns the correct spelling of the family name or returns
 * the original name if no match for known misspellings are found
 */
export const updateMisspelledNames = function changeSimilarOrMisspelledNames(
  name
) {
  switch (name) {
    case "Lanister":
    case "Lannister":
      return "Lannister";
    case "Lorath":
    case "Lorathi":
      return "Lorath";
    case "Targaryan":
    case "Targaryen":
      return "Targaryen";
    default:
      return name;
  }
};

/**
 * function will validate that the family name is
 * valid (not Unknown, Empty, or None)
 * @param name is the parsed family name from the API
 * @returns the name if valid or returns "Unknown House"
 */
export const updateEmptyOrUnknown = function validateForEmptyOrUnknownNames(
  name
) {
  if (name === "" || name === "Unknown" || name === "Unkown" || name === "None")
    return "Unknown";
  return name;
};

/**
 * Function will correct the spelling of family names and
 * group unknown or empty family house names together
 * @param data is the character data array
 * @param familyNames is a temporary array to hold the family names
 * No return object, the 'familyNames' array is passed by reference
 */
export const cleanData = function splitTrimAndCorrectMisspelledFamilyNames(
  data
) {
  data.map((character) => {
    character.firstName = updateEmptyOrUnknown(character.firstName);
    character.lastName = updateEmptyOrUnknown(character.lastName);
    character.family = updateEmptyOrUnknown(
      updateMisspelledNames(character.family.split("House").join("").trim())
    );
  });
  return data;
};

/**
 * Validate the user input does NOT contain a character
 * in the regex pattern given
 * @regex /[^a-z^A-Z^\/.\^\/,]/gim where:
 * ^a-z is NOT any lowercase letter a to z inclusive =>
 * ^A-Z is NOT any uppercase letter A to Z inclusive =>
 * ^\/.\ is NOT a period =>
 * ^\/,\ is NOT a comma =>
 * /gim is 'global' 'not case sensitive' and 'beginning to end of string'
 * @param textInput is the form field input string.
 * @returns the textInput if input string is valid.
 * If the input is invalid: user feedback becomes 'visible' and
 * a new error() message is thrown
 */
export const validateInput = function validateCharacterInput(textInput) {
  if (/[^a-z^A-Z^/.^/,^/—]/gim.test(textInput)) {
    // document.getElementById("input-feedback").style.visibility = "visible";
    throw new Error("Please enter a valid character name");
  }
  return textInput;
};
