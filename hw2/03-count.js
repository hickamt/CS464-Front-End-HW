/* 
  Bootstrap 5: Typography <mark></mark> to highlight word(s)
  Source of R.D. https://www.youtube.com/watch?v=Ixt6k9aatPQ
*/

const validate = function validateInput(inputValue) {
  // /[^a-z^A-Z^\/.\^\/,]/gmi
}

const escapeInput = function escapeInputValue(findInputValue) {
  return findInputValue.replace(/[.*+?^${}()|[/]\\]/g, "\\$&");
};

document.getElementById("form-input").addEventListener("keydown", (event) => {
  try {
    const paragraph = document.getElementById("paragraph");
    const findInputValue = event.target.value;
    const highlight = escapeInput(findInputValue);
    let foundRegEx = new RegExp(`${highlight}`, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(
      foundRegEx,
      (text) => `<mark>${text}</mark>`
    );
  } catch (error) {}
});
