import { createMatrix, generateRandomColor } from "./functions";

export const matrixRows = 3;
export const matrixColumns = 5;
export const allowRepeatedColors = false;

export const gameColorList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "black",
  "gray",
  "brown",
  "gold",
];

export const statesMatrix = createMatrix(
  matrixColumns,
  matrixRows,
  generateRandomColor
);
