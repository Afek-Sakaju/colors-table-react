import { colors } from "./consts";
import { Square } from "../base-components/Sqaure/Square";

export const createMatrix = (rows, columns, value = null) => {
  return Array(rows).fill(Array(columns).fill(value));
};

export const fillSquareComponentsInMatrix = (
  matrix,
  value,
  setValue,
  squareSize
) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = (
        <Square
          value={value}
          setValue={() => setValue(generateRandomColor())}
          key={`${i}-${j}`}
          style={squareSize}
        />
      );
    }
  }
};

export const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * (colors.length + 1));
  return colors[randomNumber];
};

export const generateRandomKey = () => {
  const randomNumber1 = Math.floor(Math.random() * (100000 + 1));
  const randomNumber2 = Math.floor(Math.random() * (100000 + 1));
  return `${randomNumber1}-${randomNumber2}`;
};
