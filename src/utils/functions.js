import { colors } from "./consts";

export const createMatrix = (rows, columns, value = null) => {
  return Array(rows).fill(Array(columns).fill(value));
};

export const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * (colors.length + 1));
  return colors[randomNumber];
};
