/**
 * Generate a pseudo random value within a range [min, max]
 * @param min value for lower range (inclusive)
 * @param max value for upper range (inclusive)
 * @returns random value based on given [min, max] range
 * @source MDN Math/random
 */
export const getRandomValue = function getRandomValueUsingInclusiveRange(
  min,
  max
) {
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

export const backgroundColors = [
  "rgba(49, 70, 89, 0.9)",
  getRGBA(5, 255, 0.85),
  "#181a1f",
  getRGBA(5, 255, 0.85),
  "#923734",
  getRGBA(5, 255, 0.85),
  "#ffdf8c",
  getRGBA(5, 255, 0.85),
  "#525949",
  getRGBA(5, 255, 0.85),
  "#c72230",
  getRGBA(5, 255, 0.85),
  "#4f5052",
  getRGBA(5, 255, 0.85),
  "#314659",
  getRGBA(5, 255, 0.85),
  "#ffe5a0",
  getRGBA(5, 255, 0.85),
  "#c7c7c7",
  getRGBA(5, 255, 0.85),
  "#181a1f",
  getRGBA(5, 255, 0.85),
  "#de985d",
  getRGBA(5, 255, 0.85),
  "#314659",
];

export const borderColors = [
  "rgba(54, 162, 235, 1)",
  getRGBA(1),
  "rgba(255, 206, 86, 1)",
  getRGBA(1),
  "rgba(255, 99, 132, 1)",
  getRGBA(1),
  "rgba(75, 192, 192, 1)",
  getRGBA(1),
  "rgba(153, 102, 255, 1)",
  getRGBA(1),
  "rgba(255, 159, 64, 1)",
  getRGBA(1),
  "rgba(159, 159, 159, 1)",
  getRGBA(1),
  "rgba(83, 102, 255, 1)",
  getRGBA(1),
  "rgba(40, 159, 64, 1)",
  getRGBA(1),
  "rgba(210, 199, 199, 1)",
  getRGBA(1),
  "rgba(78, 52, 199, 1)",
  getRGBA(1),
  "rgba(55, 192, 192, 1)",
  getRGBA(1),
];
