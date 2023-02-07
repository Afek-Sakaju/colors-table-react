import { colors } from "./consts";
import { Square } from "../base-components/Sqaure/Square";

export const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * (colors.length + 1));
  return colors[randomNumber];
};

export function generateUniqueId() {
  return `${Date.now() / Math.random()}-${Math.random()
    .toString(16)
    .substring(1, 9)}`;
}

export const createMatrix = (rows, columns) => {
  return Array(rows).fill(Array(columns).fill(null));
};

export const fillSquareComponentsInMatrix = (
  matrix,
  colors,
  setColors,
  style = {}
) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = (
        <Square
          color={colors[i][j]}
          setColors={() =>
            setColors((children) => {
              children[i][j] = generateRandomColor();
              return [...children];
            })
          }
          key={`${generateUniqueId()}`}
          style={style}
        />
      );
    }
  }
};
