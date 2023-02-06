import {
  matrixRows as rowsCountInMatrix,
  matrixColumns as squaresCountInRow,
} from "./consts";

export function calcSquareSize() {
  const squareWidth = `${100 / squaresCountInRow}%`;
  const squareHeight = "80%";

  return {
    height: squareHeight,
    width: squareWidth,
  };
}

export function calcRowSize() {
  const rowHeight = `${100 / rowsCountInMatrix}%`;

  // 99% to avoid the overflow of the row
  const rowWidth = "99%";

  return { height: rowHeight, width: rowWidth };
}
