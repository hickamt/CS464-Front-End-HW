/**
 * Function to change the background color of the html body
 * using a timer. User input should allow the timer to dynamically
 * change based on input. The input should be interpreted as an
 * interval in seconds.
 * Conversion: 1 second === 1000 milliseconds
 */

/**
 * Generate a pseudo random value within a range [min, max]
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns random value based on given [min, max] range
 * @source MDN Math/random
 */
const getRandomValue = function getRandomValueUsingInclusiveRange(min, max) {
  ceiling_min = Math.ceil(min);
  floor_max = Math.floor(max);
  return Math.floor(Math.random() * (floor_max - ceiling_min) + ceiling_min);
};

/**
 * Generates a red,green,blue,alpha() css style color using
 * random value generator
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns rgba(val, val, val, 0.1)
 */
const getRGBA = function getRandomGeneratedRgbaColor(min = 0, max = 175) {
  return `rgba(
    ${getRandomValue(min, max)},
    ${getRandomValue(min, max)},
    ${getRandomValue(min, max)},
    0.8)`;
};

/**
 * Get random rgba() color and set to 'body' background color
 */
const changeColor = function changeBodyBackgroundColor() {
  document.getElementById("body").style.backgroundColor = getRGBA(0, 175);
};

// Window Load Event Listener activates the timed background color change
addEventListener("load", (event) => {
  let defaultInterval = 1000000; // 3 seconds

  setInterval(() => {
    changeColor();
  }, defaultInterval);
});

/**
 * Modifies the interval button between 'Stop' and 'Start'
 * @param btnEventValue string value to change button to
 */
const toggleButton = function changeBetweenStartAndStopButtons(
  btnEventValue = "Start"
) {
  const btnElement = document.getElementById("interval-button");
  btnElement.setAttribute("value", btnEventValue);
  btnElement.innerHTML = btnEventValue;
  btnElement.className =
    btnEventValue === "Start"
      ? "btn btn-primary bg-primary mt-3 d-flex border-0 bg-primary btn-md"
      : "btn btn-danger bg-danger mt-3 d-flex border-0 bg-primary btn-md";
};

/**
 * Event listener for interval button
 */
addEventListener("click", (event) => {
  try {
    toggleButton(event.target.value === "Start" ? "Stop" : "Start");
  } catch (error) {
    console.error(error);
  }
});
