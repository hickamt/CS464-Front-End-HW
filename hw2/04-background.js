/**
 * Function to change the background color of the html body
 * using a timer. User input should allow the timer to dynamically
 * change based on input. The input should be interpreted as an
 * interval in seconds.
 * Conversion: 1 second === 1000 milliseconds
 */

const startButton = function timeStartButton() {
  document.getElementById("start-stop-btn-container").innerHTML;
};

const toggleButton = function switchStartStopButton() {};

addEventListener("click", (event) => {
  let defaultTime = 3000; // 3 seconds
  let changeColor = true;
  try {
    while (changeColor) {
      document.getElementById("body").style.backgroundColor = "blue";
      setTimeout(() => {
        document.getElementById("body").style.backgroundColor = "black";
      }, defaultTime);
    }
  } catch (error) {
    console.error(error);
  }
});
