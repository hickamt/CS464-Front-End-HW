/* 
  Bootstrap 5: Typography <mark></mark> to highlight word(s)
*/

const m_error = {
  message: "Invalid input, please enter a word to highlight",
};

/**
 * Validate the user input is of characters a-z, A-Z, '.', or ',' only.
 * @param inputValue is the form field input string
 * @returns the inputValue if input string is valid
 * If the input is invalid: user feedback becomes 'visible' and
 * a new error() message is thrown
 */
const validate = function validateInput(inputValue) {
  if (/[^a-z^A-Z^\/.\^\/,]/gim.test(inputValue)) {
    document.getElementById("input-feedback").style.visibility = "visible";
    throw new Error(m_error.message);
  }
  return inputValue;
};

const pipe =
  (...functions) =>
  (x) =>
    functions.reduce((v, f) => f(v), x);

addEventListener("keydown", (event) => {
  try {
    document.getElementById("input-feedback").style.visibility = "hidden";
    setTimeout(() => {
      const textInput = event.target.value;
      validate(textInput);
    }, 10);
  } catch (error) {
    console.error(error);
  }
});
