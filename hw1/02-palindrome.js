/**
 * Sets the document element innerHTML to the given parameter value
 * @param innerValue boolean: true | false
 */
function writeInnerHTML(innerValue) {
  document.getElementById("palindrome").innerHTML = innerValue;
}

/**
 * Validate the users input for a Palindrome
 * @param array array of the input as char separated values ["1", "2", ...]
 * @param rev_array array of the input in reverse order as char separated values [..., "2", "1"]
 * @returns a boolean: true | false if both input arrays exists, otherwise this returns
 * "No Value Entered" showing that there is currently no input
 */
const isPalindrome = (array, rev_array) => {
  return array.length === rev_array.length && array.length > 0
    ? array.every((value, index) => value === rev_array[index])
    : "Please Enter A Valid Positive Number";
};

/**
 * Splits the user input string into comma separated values
 * and then reverses the values
 * @param inputValue is the user input value as a 'string'
 * @returns an array of the user input as comma separated values
 * in the reverse order given
 */
const inputToArrayReversed = (inputValue) => inputValue.split("").reverse();

/**
 * Splits the user input string into comma separated values
 * @param inputValue is the user input value as a 'string'
 * @returns an array of the user input as comma separated values
 */
const inputToArray = (inputValue) => inputValue.split("");

/**
 * Validates the user input is of string type
 * @param inputValue is the user input
 * @returns the inputValue if the input is of string type or
 * throws an error message if the type is not of string type
 */
const isString = (inputValue) => {
  if (typeof inputValue !== "string") {
    throw new Error("Not a valid input, expected a string");
  }
  return inputValue;
};

/**
 * Event listener on HTML page element <input />
 * On user input, the event listener will activate the callback
 * which will validate input for a Palindrome.
 * @param event contains the querySelector('input') element
 */
document.querySelector("input").addEventListener("input", (event) => {
  try {
    writeInnerHTML(
      isPalindrome(
        inputToArray(isString(event.target.value)),
        inputToArrayReversed(isString(event.target.value))
      )
    );
  } catch (error) {
    writeInnerHTML(error.message);
  }
});
