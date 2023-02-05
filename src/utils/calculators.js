import {
  matrixRows as rowsCountInMatrix,
  matrixColumns as squaresCountInRow,
} from "./consts";

export function calcSquareSize(containerHeight, containerWidth) {
  /* this calculation allow to adjust the square's sizes in the best way 
  regardless of the row's height/width and the squares count in a row*/
  const minHeight = containerHeight / rowsCountInMatrix - 25;
  const midHeight = "10vh";
  const maxHeight = containerHeight / rowsCountInMatrix - 90;
  const squareWidth = containerWidth / (squaresCountInRow + 5);

  return {
    height: `clamp(${minHeight}px,${midHeight},${maxHeight}px)`,
    width: `${squareWidth}px`,
  };
}

export function calcRowSize(containerHeight) {
  /* this calculation allow to adjust the row's height in the
  best way regardless of the mainContainer's height and the rows count*/
  const rowHeight =
    containerHeight / (rowsCountInMatrix + rowsCountInMatrix * 0.1) -
    rowsCountInMatrix / (1 * (rowsCountInMatrix / 5));

  return { height: `${rowHeight}px`, width: "100%" };
}
