/* 
  Bootstrap 5: Typography <mark></mark> to highlight word(s)
*/

const validateInput = function validateInputValue(inputValue) {
  const regex = /[^a-z,^A-Z,^\.,^\,^\ \,]/gm;
  const invalidArray = inputValue.matchAll(regex);
  if (invalidArray) {
    console.log(invalidArray)
    // alert("Not a valid input, plase enter a word to highlight");
  }
};

document.getElementById('form-input').addEventListener("keydown", (event) => {
  const inputValue = "";
  if (event.target.value.checkValidity()) {
    inputValue = event.target.value;
  }
  else {
    alert("Not a Valid Input")
  }
  // validateInput(inputValue)
});
