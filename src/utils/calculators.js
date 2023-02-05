export function calcSquareSize(containerHeight, containerWidth, matrix) {
  const rowsCountInMatrix = matrix.length;
  const squaresCountInRow = matrix[0].length;

  const squareHeight = containerHeight / (rowsCountInMatrix + 0.5);
  const squareWidth = containerWidth / (squaresCountInRow + 1);
  // the "+1" added to make sure the squares will fit inside the row's width

  return { height: `${squareHeight}px`, width: `${squareWidth}px` };
}

export function calcRowSize(containerHeight, matrix) {
  const rowsCountInMatrix = matrix.length;
  const rowHeight = containerHeight / (rowsCountInMatrix + 0.2);

  return { height: `${rowHeight}px`, width: "100%" };
}
