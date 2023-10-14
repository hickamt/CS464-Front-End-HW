/**
 * Function to change the background color of the html body
 * using a timer. User input should allow the timer to dynamically
 * change based on input. The input should be interpreted as an
 * interval in seconds.
 * Conversion: 1 second === 1000 milliseconds
 */

/**
 * The React Library useState() method
 * Source: https://stackoverflow.com/questions/64744252/how-to-replicate-usestate-with-vanilla-js
 */
const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (updateValue) => (value = updateValue);
  return [getValue, setValue];
};

/**
 * timeInterval is the time in milliseconds, devault = 3 seconds
 * setTimeInterval is used to change the state of the time
 */
const [timeInterval, setTimeInterval] = useState(3000);

/**
 * @param intervalID is the id returned from setInterval() JS library method
 * This ID is used to clear the state for an onClick() document event
 * @param setIntervalID is used to capture the returned ID from setInterval()
 */
const [intervalID, setIntervalID] = useState(null);

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
const changeBgColor = function changeBodyBackgroundColor() {
  document.getElementById("body").style.backgroundColor = getRGBA(0, 175);
};

// Begins the background color change and sets the time interval id state
const startColorChange = function startBackgroundColorChange() {
  setIntervalID(
    setInterval(() => {
      changeBgColor();
    }, timeInterval())
  );
};

/**
 * Changes the button className using Bootstrap 5 styling
 * @param btnEventValue is either "Start" or "Stop"
 * @returns the bootstrap 5 class name
 */
const setBtnClassName = function setButtonClassName(btnEventValue) {
  return btnEventValue === "Start"
    ? "btn btn-primary bg-primary mt-3 d-flex border-0 bg-primary btn-md"
    : "btn btn-danger bg-danger mt-3 d-flex border-0 bg-primary btn-md";
};

/**
 * NOTE: toggle function expects that you are passing
 * the parameter value you want to set all button properties to:
 * i.e. if you want a stop button, pass "Stop"
 * @param btnEventValue string value to change button to
 */
const toggleButton = function changeBetweenStartAndStopButtons(
  btnEventValue = "Start"
) {
  const btnElement = document.getElementById("interval-button");
  btnElement.setAttribute("value", btnEventValue);
  btnElement.innerHTML = btnEventValue;
  btnElement.className = setBtnClassName(btnEventValue);
};

/**
 * Convert positive integer in seconds (greater than zero) to milliseconds
 * @returns the conversion interval if greater than or equal to 1000 ms
 * if not greater than or equal to 1000, default return is 3000 ms
 */
const convertInputTime = function convertInputInSecondsToMilliseconds() {
  const ms_interval = document.getElementById("input-seconds").value * 1000;
  if (ms_interval >= 1000) return ms_interval;
  throw new Error("Enter a postive integer greater than or equal to (1)");
};

/**
 * Function will clear the input field after selecting "Start" | "Stop"
 */
const clearInputValue = function clearUserInputValueOnError() {
  document.getElementById("input-seconds").value = "";
};

/**
 * Create the inner html user error message
 * @param error is the message thrown
 */
const outError = function showErrorMessage(error) {
  document.getElementById("input-error").innerHTML = error;
};

/**
 * Clear the new throw error message by setting the innerHTML to {empty}
 */
const clearError = function clearMessageError() {
  document.getElementById("input-error").innerHTML = "";
};

// Window Load Event Listener activates the timed background color change
window.addEventListener("load", startColorChange);

// NOTE: Changing document.addEventListner() to document.getElementById('body')
// stopped the onClick event from firing for all mouse events outside of the form.
document.getElementById("body").addEventListener("click", (event) => {
  clearError();
  if (event.target.value === "Start") {
    try {
      setTimeInterval(convertInputTime());
      clearInputValue();
      clearInterval(intervalID());
      startColorChange();
      toggleButton("Stop");
    } catch (error) {
      clearInputValue();
      outError(error);
      console.error(error);
    }
  } else {
    clearInterval(intervalID());
    toggleButton("Start");
  }
});
