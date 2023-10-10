/* 
  Bootstrap 5: Typography <mark></mark> to highlight word(s)
*/

const originalParagraph = `It was the best of times, it was the worst of times, it was the age of
        wisdom, it was the age of foolishness, it was the epoch of belief, it
        was the epoch of incredulity, it was the season of Light, it was the
        season of Darkness, it was the spring of hope, it was the winter of
        despair, we had everything before us, we had nothing before us, we were
        all going direct to Heaven, we were all going direct the other way—in
        short, the period was so far like the present period, that some of its
        noisiest authorities insisted on its being received, for good or for
        evil, in the superlative degree of comparison only.`;

const m_error = {
  message: "Invalid input, please enter a word to highlight",
};

/**
 * Validate the user input does NOT contain a character
 * in the regex pattern give.
 * @regex /[^a-z^A-Z^\/.\^\/,]/gim where:
 * ^a-z is NOT any lowercase letter a to z inclusive
 * ^A-Z is NOT any uppercase letter A to Z inclusive
 * ^\/.\ is NOT a period
 * ^\/,\ is NOT a comma
 * /gim is 'global' 'not case sensitive' and 'beginning to end of string'
 * @param textInput is the form field input string
 * @returns the textInput if input string is valid
 * If the input is invalid: user feedback becomes 'visible' and
 * a new error() message is thrown
 */
const validate = function validateInput(textInput) {
  if (/[^a-z^A-Z^\/.\^\/,]/gim.test(textInput)) {
    document.getElementById("input-feedback").style.visibility = "visible";
    throw new Error(m_error.message);
  }
  return textInput;
};

const pipe =
  (...functions) =>
  (x) =>
    functions.reduce((v, f) => f(v), x);

const matchInput = function matchEachWordInParagraph(textInput) {
  let found = false;
  const paragraphArray = document
    .getElementById("paragraph")
    .innerHTML.split(/\s+/);
  const regex = new RegExp(textInput, "g");
  const newWord = `<mark>${textInput}</mark>`;

  let newParagraph = paragraphArray.map((word) => {
    if (word.toLowerCase() === textInput.toLowerCase()) {
      found = true;
      return word.replace(regex, newWord);
    } else {
      return word;
    }
  });

  if (found) {
    document.getElementById("paragraph").innerHTML = newParagraph.join(" ");
  }
};

const clearInput = function clearInputOnBackspace() {
  document.getElementById("paragraph").innerHTML = originalParagraph;
};

addEventListener("keydown", (event) => {
  try {
    document.getElementById("input-feedback").style.visibility = "hidden";
    setTimeout(() => {
      const textInput = event.target.value;
      validate(textInput);
      clearInput();
      matchInput(textInput);
    }, 10);
  } catch (error) {
    console.error(error);
  }
});
