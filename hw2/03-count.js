/* 
  Function will highlight matching words for a given paragraph
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
 * Function that creates a Regular Expression based on textInput with 'g' global flag
 * @param textInput user input word to find in the paragraph
 * @returns the regular expression function
 */
const regExInput = function findWordUsingRegularExpression(textInput) {
  return new RegExp(textInput, "g");
};

/**
 * @param textInput user input word
 * @returns html element <mark>textInput</mark>
 */
const highlightedWord = function markGivenWordToHighlight(textInput) {
  return `<mark>${textInput}</mark>`;
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
      if (word.toLowerCase() === textInput.toLowerCase()) {
        return word.replace(regExInput(textInput), highlightedWord(textInput));
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
 */
const displayHighlightedParagraph = function setNewParagraphToInnerHTML(
  textInput,
  paragraph
) {
  document.getElementById("paragraph").innerHTML = buildParagraph(
    textInput,
    paragraph.split(/\s+/)
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
  if (/[^a-z^A-Z^\/.\^\/,\^\/-]/gim.test(textInput)) {
    document.getElementById("input-feedback").style.visibility = "visible";
    throw new Error(m_error.message);
  }
  return textInput;
};

/**
 * Upon each 'keydown' event, clear and reset the paragraph
 */
const resetParagraph = function resetHighlightedParagraphToOriginal() {
  document.getElementById("paragraph").innerHTML = originalParagraph;
};

/**
 * Function entry point for highlight of matching words
 * SetTimeout() allows the event.target.value to be captured after 'keydown' event
 */
addEventListener("keydown", (event) => {
  try {
    document.getElementById("input-feedback").style.visibility = "hidden";
    setTimeout(() => {
      const textInput = event.target.value;
      resetParagraph();
      validate(textInput);
      displayHighlightedParagraph(textInput, originalParagraph);
    }, 10);
  } catch (error) {
    console.error(error);
  }
});
