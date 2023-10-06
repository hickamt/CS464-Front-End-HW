/**
 * Application to verify if the input is a Palindrome
 * (i.e. 123 is not a Palindrome, 12321 is a Palindrome)
 * NOTE: for Firefox, the html element for type of input 'number'
 * will still accept characters as input. This is a known bug.
 * See Warning: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
 * OR, Mozilla Bug Report: https://bugzilla.mozilla.org/show_bug.cgi?id=1398528
 */
const p_success = {
  id: "palindrome",
  color: "success",
  fontSize: "5",
  fontWeight: "bold",
  message: "Yes, this is a Palindrome!",
};

const p_failure = {
  id: "palindrome",
  color: "danger",
  fontSize: "5",
  fontWeight: "bold",
  message: "This is not a Palindrome. Try again.",
};

const p_error = {
  id: "palindrome",
  color: "danger",
  fontSize: "5",
  fontWeight: "bold",
  message: "Not a valid input, enter a positive integer",
};

/**
 * Sets the document element innerHTML to the given parameter value
 * @param innerValue is an HTML Element such as <p>message</p>
 */
const setInnerHTML = function setInnerHTMLValue(innerValue) {
  document.getElementById("palindrome").innerHTML = innerValue;
};

/**
 * Creates a Bootstrap 5.0 customized paragraph element <p>
 * @param color of the text as 'string'
 * @param fontSize size of the text '1' -> '5'
 * @param message output message to screen 'string messages'
 * @returns the bootstrap customized <p class="bootstrap"> element
 */
const createHtmlElement = ({ id, color, fontSize, fontWeight, message }) => {
  return `<p id=${id} class="text-${color} fs-${fontSize} fw-${fontWeight}">${message}</p>`;
};

/**
 * @param boolValue of true or false
 * @returns Yes, you entered a Palindrome if boolValue is true,
 * or No, this is not a Palindrome for boolValue of false.
 */
const getHtmlElement = function GiveAName(boolValue) {
  return boolValue
    ? createHtmlElement(p_success)
    : createHtmlElement(p_failure);
};

/**
 * Spreads input string to array in reverse
 * @param inputValue is the user input value as a 'string'
 * @returns array of separated input in reverse
 * NOTE: why .split("") should not be used
 * https://stackoverflow.com/questions/4547609/how-can-i-get-a-character-array-from-a-string/34717402#34717402
 */
const inputToArrayReversed = (inputValue) => [...inputValue].reverse();

/**
 * Spreads the input string to array
 * @param inputValue is the user input value as a 'string'
 * @returns array of separated input
 * NOTE: why .split("") should not be used
 * https://stackoverflow.com/questions/4547609/how-can-i-get-a-character-array-from-a-string/34717402#34717402
 */
const inputToArray = (inputValue) => [...inputValue];

/**
 * Validate the users input for a Palindrome
 * @param inputValue a 'string' type input of integers
 * @returns a boolean: true | false
 */
const isPalindrome = (inputValue) => {
  const array = inputToArray(inputValue);
  const rev_array = inputToArrayReversed(inputValue);
  return array.every((value, index) => value === rev_array[index]);
};

/**
 * Validation that the input is a number and the number is postive
 * @param inputValue is the users input value as string type
 * @returns the inputValue if the integer is positive or
 * throws a new Error().
 */
const isPositiveInteger = (inputValue) => {
  if (Number(inputValue) < 0) {
    throw new Error(createHtmlElement(p_error));
  }
  return inputValue;
};

/**
 * Processes a stack call of functions applying: Functional, Declarative, Composition
 * @param  {...any} functions one or more functions containing a single argument [iterable function stack]
 * @returns a single object from each function until reaching the end of the call stack.
 * The last function should not return anything but resolve.
 * Source: https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/
 */
const pipe =
  (...functions) =>
  (x) =>
    functions.reduce((v, f) => f(v), x);

/**
 * Event listener on HTML element <input type="number" />
 * Upon user input, the event listener will activate the callback
 * which will validate input for a Palindrome.
 * @param event
 */
document.querySelector("input").addEventListener("input", (event) => {
  try {
    if (event.target.value.length > 0) {
      pipe(
        isPositiveInteger,
        isPalindrome,
        getHtmlElement,
        setInnerHTML
      )(event.target.value);
    } else {
      document.getElementById("palindrome").innerHTML = "";
    }
  } catch (error) {
    setInnerHTML(createHtmlElement(p_error));
  }
});
