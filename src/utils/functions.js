import { DEFAULT_MATRIX_PROPERTIES } from "./consts";

/* The function getRandomNumber accept min and max number,
then return random number between the min-max limit (integer),
the generated number can also be the min/max provided */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* The function getRandomNumber accept array of colors called list,
then return random color from the list */
export const generateRandomColor = (list) => {
  const defaultList = DEFAULT_MATRIX_PROPERTIES.colorsList;
  list = list.length ? list : defaultList;

  const randomNumber = getRandomNumber(0, list.length - 1);
  return list[randomNumber];
};

/* The function createMatrix accept object of properties such as: 
rows and columns number, and colorsList array, then return matrix 
in the length provided, the matrix content include color properties 
that are generated randomly in each matrix cell, for example: 
{ rows:2, columns:3, colorsList: ['red', 'yellow', 'blue'] }

the result will look like:
[
  [{color: 'blue'},{color: 'red'}],  
  [{color: 'yellow'},{color: 'red'}],
  [{color: 'red'},{color: 'blue'}]
] */
export const createMatrix = ({
  rows = DEFAULT_MATRIX_PROPERTIES.rows,
  columns = DEFAULT_MATRIX_PROPERTIES.columns,
  colorsList = DEFAULT_MATRIX_PROPERTIES.colorsList,
}) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({
      color: generateRandomColor(colorsList),
    }))
  );
};

/* The function getItemsColorsCount accept matrix such as: 
[
  [{color: 'blue'},{color: 'red'}],  
  [{color: 'yellow'},{color: 'red'}],
  [{color: 'red'},{color: 'blue'}]
]
then returns object with the count the colors from all the matrix cells properties
the result will look like: {blue: 2, red:3, yellow:1} */
export function getItemsColorsCount(mat) {
  const colorsState = {};
  mat?.forEach((row) => {
    row?.forEach((itemData) => {
      colorsState[itemData.color] ||= 0;
      colorsState[itemData.color]++;
    });
  });

  return colorsState;
}

/* The function buildIdFromIndexes accepts index numbers i and j, 
and separator string, then returns string build from all of them
in the current order example:

i = 1, j = 5, separator = '~'

the result will be: "1~5" */
export const buildIdFromIndexes = (i, j, separator) => {
  if (i === undefined || j === undefined || separator === undefined) return;

  // eslint-disable-next-line consistent-return
  return [i, j].join(separator);
};

export const extractIndexesFromId = (id, separator) => {
  const [i, j] = id.split(separator);
  return [+i, +j];
};

export const areInvalidIndexes = ({ i, j, mat }) => {
  // To prevent the code from crushing when i/j is not a number
  if (typeof i !== "number" || typeof j !== "number") return true;

  const isUndefind = i === undefined || j === undefined;
  const notInRange = i >= mat?.length || j >= mat[i]?.length;
  return !mat || isUndefind || notInRange;
};

export const pickColor = ({ prevColor, allowRepeatedColors, colorsList }) => {
  let currentColor;
  let shouldRegenerate = !allowRepeatedColors;

  do {
    currentColor = generateRandomColor(colorsList);
    shouldRegenerate = currentColor === prevColor && shouldRegenerate;
  } while (shouldRegenerate);

  return currentColor;
};
