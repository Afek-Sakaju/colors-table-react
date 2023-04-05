/* The function getRandomNumber accept min and max number,
then return random number between the min-max limit (integer),
the generated number can also be the min/max provided */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* The function getRandomNumber accept array of colors called list,
then return random color from the list */
export const generateRandomColor = (list) => {
  const defaultList = ["black"];
  list = list.length ? list : defaultList;

  const randomNumber = getRandomNumber(0, list.length - 1);
  return list[randomNumber];
};

export const createMatrix = ({ rows, columns, colorsList = null }) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({
      color: generateRandomColor(colorsList),
    }))
  );
};

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

export const buildIdFromIndexes = (i, j, separator) => {
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
