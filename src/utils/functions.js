import { colors } from "./consts";

export const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * (colors.length + 1));
  return colors[randomNumber];
};

export function generateUniqueId() {
  return `${Date.now() / Math.random()}-${Math.random()
    .toString(16)
    .substring(1, 9)}`;
}

export const createMatrix = (rows, columns, value = null) => {
  /* todo: make this code prettier using high 
  order function without breaking logic */
  const res = [];

  for (let i = 0; i < rows; i++) {
    res.push(createRow(columns));
  }

  return res;

  function createRow(length) {
    const row = [];
    for (let j = 0; j < length; j++) {
      row.push(typeof value === "function" ? value() : value);
    }
    return row;
  }
};
