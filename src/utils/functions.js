export const generateRandomColor = (list) => {
  list ||= ["black"];
  const randomNumber = Math.floor(Math.random() * list.length);

  return list[randomNumber];
};

export const createMatrix = ({ rows, columns, colorsList = null }) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({
      color: generateRandomColor(colorsList),
    }))
  );
};

export function countColorsInMatrix(mat) {
  const colorsState = {};
  mat.forEach((row) => {
    row.forEach((itemData) => {
      colorsState[itemData.color] ||= 0;
      colorsState[itemData.color]++;
    });
  });

  return colorsState;
}

export const areValidIndexes = (indexArray) => {
  const isValid = !indexArray.some((i) => i === undefined);
  return isValid;
};

export const generateNewSquareColor = ({
  prevColor,
  allowRepeatedColors,
  colorsList,
}) => {
  let currentColor,
    shouldRegenerate = !allowRepeatedColors;

  do {
    currentColor = generateRandomColor(colorsList);
    shouldRegenerate = currentColor === prevColor && shouldRegenerate;
  } while (shouldRegenerate);

  return currentColor;
};
