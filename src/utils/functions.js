import { DEFAULT_MATRIX_PROPERTIES } from "./consts";

/**
 *
 * Generates a random integer between a given range, if range isn't provided
 * generates from 0 - 10000
 * @function
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - A random integer between the min-max range (inclusive).
 */
export const getRandomNumber = (min = 0, max = 10000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *
 * Generates a random color from given colors list.
 * @function
 * @param {number} list - Array of strings representing colors.
 * @returns {string} - A random color from given colors list.
 */
export const generateRandomColor = (list) => {
  const defaultList = DEFAULT_MATRIX_PROPERTIES.colorsList;
  list = list.length ? list : defaultList;

  const randomNumber = getRandomNumber(0, list.length - 1);
  return list[randomNumber];
};

/**
 * Generates a matrix of a given size and randomly assigns a color to each cell.
 *
 * @function
 * @param {Object} matrixProperties - An object containing properties for the matrix.
 * @param {number} [matrixProperties.rows] - The number of rows in the matrix.
 * @param {number} [matrixProperties.columns] - The number of columns in the matrix.
 * @param {string[]} [matrixProperties.colorsList] - An array of strings representing
 * the possible colors to be assigned to the cells.
 * @returns {Object[][]} - A matrix with randomly assigned colors in each cell.
 */
export const createMatrix = ({ rows, columns, colorsList }) => {
  rows ||= DEFAULT_MATRIX_PROPERTIES.rows;
  columns ||= DEFAULT_MATRIX_PROPERTIES.columns;
  colorsList ||= DEFAULT_MATRIX_PROPERTIES.colorsList;

  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({
      color: generateRandomColor(colorsList),
    }))
  );
};

/**
 * Counts the occurrence of each color in a matrix of items.
 *
 * @function
 * @param {Object[][]} matrix - The matrix of items to count the colors of.
 * @returns {Object} - An object containing the count of each color in the matrix.
 * The keys of the object are the colors found in the matrix, and the values are the number
 * of items in the matrix with that color.
 */
export function getItemsColorsCount(matrix) {
  const colorsState = {};
  matrix?.forEach((row) => {
    row?.forEach((itemData) => {
      colorsState[itemData.color] ||= 0;
      colorsState[itemData.color]++;
    });
  });

  return colorsState;
}

/**
 * Builds an ID string from two index numbers and a separator.
 *
 * @function
 * @param {number} i - The first index number to include in the ID string.
 * @param {number} j - The second index number to include in the ID string.
 * @param {string} separator - The string to use as a separator between the index numbers.
 * @returns {string} - A string containing the index numbers separated by the specified separator.
 */
export const buildIdFromIndexes = (i, j, separator) => {
  if (i === undefined || j === undefined || separator === undefined) return;

  return [i, j].join(separator);
};

/**
 * Extracts indexes from an ID string built from two numbers separated by a separator string.
 *
 * @function
 * @param {string} id - The ID string.
 * @param {string} separator - The separator used to split the ID's indexes.
 * @returns {number[]} An array containing the two extracted index numbers.
 */
export const extractIndexesFromId = (id, separator) => {
  if (!id || !separator) return;

  const [i, j] = id.split(separator);
  return [+i, +j];
};

/**
 * Checks if the provided indexes are invalid for the given matrix.
 * @function
 * @param {Object} params - An object containing the parameters.
 * @param {number} params.i - The row index.
 * @param {number} params.j - The column index.
 * @param {Array[]} params.mat - The matrix.
 * @returns {boolean} - Whether the provided indexes are invalid for the given matrix.
 */
export const areInvalidIndexes = ({ i, j, mat }) => {
  // To prevent the code from crushing when i/j is not a number
  if (typeof i !== "number" || typeof j !== "number") return true;

  const isUndefined = i === undefined || j === undefined;
  const notInRange = i >= mat?.length || j >= mat[i]?.length;
  return !mat || isUndefined || notInRange;
};

/**
 * Picks a color from a provided list of colors, possibly excluding the previously chosen color.
 * @param {Object} options - An object containing options for picking the color.
 * @param {string} options.prevColor - The previously chosen color, which can be excluded from the list of possible colors.
 * @param {boolean} options.allowRepeatedColors - A flag indicating whether or not repeated colors are allowed to be chosen.
 * @param {string[]} options.colorsList - An array of strings representing the possible colors to choose from.
 * @returns {string} - The color chosen from the provided list.
 */
export const pickColor = ({ prevColor, allowRepeatedColors, colorsList }) => {
  let currentColor;
  let shouldRegenerate = !allowRepeatedColors;

  do {
    currentColor = generateRandomColor(colorsList);
    shouldRegenerate = currentColor === prevColor && shouldRegenerate;
  } while (shouldRegenerate);

  return currentColor;
};

/**
 * Returns an array of randomly selected colors from a given list of colors.
 *
 * @function
 * @param {string[]} colorsList - An array of strings representing the list of colors to choose from.
 * @param {number} colorsCount - The number of colors to select from the list.
 * @returns {string[]} - An array of randomly selected colors.
 */
export function randomizeColorsFromList(colorsList, colorsCount) {
  colorsCount ||= 0;
  if (colorsCount >= colorsList.length) return colorsList;

  let tempColorList = colorsList;
  const res = [];

  while (colorsCount--) {
    const generatedColor = generateRandomColor(tempColorList);
    res.push(generatedColor);
    tempColorList = tempColorList.filter((color) => color !== generatedColor);
  }
  return res;
}
