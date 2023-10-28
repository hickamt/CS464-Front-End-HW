
/**
 * Function will filter the input data for matches
 * against data[index].firstName || data[index].lastName 
 * @param {array} data 
 * @param {string} input 
 * @returns a new array of matched data
 */
export const matchInput = function matchInputToFirstOrLastName(data, input) {
  if (input === "") return null;
  let matchedCharacters = data.filter((character) => {
    if (
      character.firstName.toLowerCase().includes(input.toLowerCase()) ||
      character.lastName.toLowerCase().includes(input.toLowerCase())
    ) {
      return character;
    }
  });
  return matchedCharacters;
};