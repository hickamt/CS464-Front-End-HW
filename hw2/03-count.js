/* 
  Program to highlight matching words for the given paragraph below.
  This paragraph would be part of a server api call but is statically
  typed here for front end testing of the functions
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

// Standard message error
const m_error = {
  message: "Invalid input, please enter a word to highlight",
};

/**
 * @param textInput user input word
 * @returns html element <mark>textInput</mark>
 */
const highlightedWord = function markGivenWordToHighlight(textInput) {
  return `<mark>${textInput}</mark>`;
};

/**
 * split and match on individual word that may
 * contain em dash, comma, or period.
 * @param word is a single word from mapped array
 * @param inputText is the user word to search for
 * @returns boolean true for exact equality or false
 * for word that does not match input explicitly
 */
const matchWord = function matchWordEquality(word, inputText) {
  let matchedWord = false;
  word.split(/[.,—]/).map((w) => {
    if (w === inputText) {
      matchedWord = true;
    }
  });
  return matchedWord;
};

/**
 * Builds a new paragraph with each matching word highlighted using
 * html element <mark>textInput</mark>
 * @param textInput user input word to match
 * @param paragraphArray is the paragraph as array
 * @returns new paragraph with highlighted inputValue words
 */
const buildParagraph = function mapAndBuildNewParagraph(
  textInput,
  paragraphArray
) {
  return paragraphArray
    .map((word) => {
      if (matchWord(word, textInput)) {
        return word.replace(textInput, highlightedWord(textInput));
      } else {
        return word;
      }
    })
    .join(" ");
};

/**
 * Builds a new paragraph with highlighted words based on textinput
 * @param textInput user input
 * @param paragraph DOM paragraph to be searched/modified
 * @split (/\s+/) for one or more spaces
 */
const displayHighlightedParagraph = function setNewParagraphToInnerHTML(
  textInput,
  splitParagraph
) {
  document.getElementById("paragraph").innerHTML = buildParagraph(
    textInput,
    splitParagraph
  );
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
const validate = function validateInput(textInput) {
  if (/[^a-z^A-Z^\/.\^\/,\^\/—]/gim.test(textInput)) {
    document.getElementById("input-feedback").style.visibility = "visible";
    throw new Error(m_error.message);
  }
  return textInput;
};

/**
 * Function entry point for highlight of matching words
 * SetTimeout() allows the event.target.value to be captured after 'keydown' event
 */
addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    document.getElementById("paragraph").innerHTML = originalParagraph;
  } else {
    try {
      setTimeout(() => {
        document.getElementById("input-feedback").style.visibility = "hidden";
        const textInput = event.target.value;
        validate(textInput);
        displayHighlightedParagraph(textInput, originalParagraph.split(/\s+/));
      }, 10);
    } catch (error) {
      console.error(error);
    }
  }
});
