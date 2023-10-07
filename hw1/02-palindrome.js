/**
 * Application to verify if the input is a Palindrome
 * (i.e. 123 is not a Palindrome, 12321 is a Palindrome)
 * NOTE: for Firefox, the html element for type of input 'number'
 * will still accept characters as input. This is a known bug.
 * See Warning: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
 * OR, Mozilla Bug Report: https://bugzilla.mozilla.org/show_bug.cgi?id=1398528
 */
const m_success = {
  color: "text-success",
  message: "Yes, this is a Palindrome!",
};

const m_failure = {
  color: "text-danger",
  message: "This is not a Palindrome. Try again.",
};

const m_error = {
  color: "text-danger",
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
const createHtmlElement = ({
  id = "output-message",
  color = "text-dark",
  fontSize = "fs-5",
  fontWeight = "fw-bold",
  message = "Please enter a positive integer",
}) => {
  return `<p id=${id} class="${color} ${fontSize} ${fontWeight}">${message}</p>`;
};

/**
 * @param boolValue of true or false
 * @returns Yes, you entered a Palindrome if boolValue is true,
 * or No, this is not a Palindrome for boolValue of false.
 */
const getHtmlElement = function GiveAName(boolValue) {
  return boolValue
    ? createHtmlElement(m_success)
    : createHtmlElement(m_failure);
};

/**
 * Validate the users input for a Palindrome
 * @param inputValue a 'string' type input of integers
 * @returns a boolean: true | false
 */
const isPalindrome = (inputValue) => {
  const array = [...inputValue];
  const rev_array = [...inputValue].reverse();
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
    throw new Error(createHtmlElement(m_error));
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
    setInnerHTML(createHtmlElement(m_error));
  }
});
