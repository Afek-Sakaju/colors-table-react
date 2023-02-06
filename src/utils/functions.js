import { colors } from "./consts";
import { Square } from "../base-components/Sqaure/Square";

export const createMatrix = (rows, columns) => {
  return Array(rows).fill(Array(columns).fill(null));
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
