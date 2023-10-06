// Linh224

// Get the input element with id 'number'
let numberInput = document.querySelector("#number");

// Check if the element with id 'number' was found
if (!numberInput) {
  console.error("Element with id 'number' not found!");
}

/**
 * Function to reset the result element
 * @param {Event} event - The event object
 */
const resetResult = (event) => {
  let resetdiv = document.getElementById("result");
  if (resetdiv) {
    resetdiv.remove();
  }
};

/**
 * Function to check if a number is a palindrome
 */
const palindrome = () => {
  // Reset the result element
  resetResult();

  let value = numberInput.value;
  let len = value.length;

  // Check if the input is empty
  if (value === "") {
    let app = document.querySelector(".result-div");
    if (app) {
      const reset = document.createElement("div");
      reset.innerHTML = `Please enter a number`;
      reset.style.color = "red";
      reset.setAttribute("id", "result");
      app.appendChild(reset);
      return;
    }
  }
  // Additional check for non-numeric input
  if (!/^\d+$/.test(value)) {
    const app = document.querySelector(".result-div");
    if (app) {
      const reset = document.createElement("div");
      reset.innerHTML = `Invalid input. Please enter a number`;
      reset.style.color = "red";
      reset.setAttribute("id", "result");
      app.appendChild(reset);
      return;
    }
  }
  // Check if the number is a palindrome
  for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
      let app = document.querySelector(".result-div");
      if (app) {
        const reset = document.createElement("div");
        reset.innerHTML = `No. Try again`;
        reset.style.color = "red";
        reset.setAttribute("id", "result");
        app.appendChild(reset);
      }

      return;
    }
  }
  // Display result for palindrome number
  let app = document.querySelector(".result-div");
  const reset = document.createElement("div");
  reset.innerHTML = `Yes. This is a palindrome!`;
  reset.style.color = "green";
  reset.setAttribute("id", "result");
  app.appendChild(reset);
  return;
};

/**
 * Function to handle key up event
 * @param {Event} e - The event object
 */
// const handleKeyUp = (e) => {
//   e.preventDefault();
//   if (e.keyCode === 13) {
//     palindrome();
//   }
// };

// Add an event listener for key up events on numberInput
// Only if numberInput is found
// if (numberInput) {
// numberInput.addEventListener("keyup", handleKeyUp);
numberInput.addEventListener("keyup", (event) => {
  if (event.target.value && event.keyCode === 13) {
    palindrome();
  }
});
// }
