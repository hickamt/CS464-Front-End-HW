

/**
 * Generate a pseudo random value within a range [min, max]
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns random value based on given [min, max] range
 * @source MDN Math/random
 */
export const getRandomValue = function getRandomValueUsingInclusiveRange(min, max) {
  const ceiling_min = Math.ceil(min);
  const floor_max = Math.floor(max);
  return Math.floor(Math.random() * (floor_max - ceiling_min) + ceiling_min);
};

/**
 * Generates a red,green,blue,alpha() css style color using
 * random value generator
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns rgba(val, val, val, 0.1)
 */
export const getRGBA = function getRandomGeneratedRgbaColor(
  min = 0,
  max = 255,
  alpha = 0.5
) {
  return `rgba(
    ${getRandomValue(min, getRandomValue(10, max))},
    ${getRandomValue(min, getRandomValue(75, max))},
    ${getRandomValue(min, getRandomValue(100, max))},
    ${alpha})`;
};