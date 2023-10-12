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

addEventListener("load", (event) => {
  let defaultInterval = 3000; // 3 seconds

  setInterval(() => {
    changeColor(); 
  }, defaultInterval);

});
