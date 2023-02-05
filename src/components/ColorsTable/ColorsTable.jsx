import React, { useState } from "react";
import PropTypes from "prop-types";
import { matrix } from "../../utils/consts";
import { Row } from "../";
import {
  generateRandomColor,
  fillSquareComponentsInMatrix,
} from "../../utils/functions";
import { calcSquareSize, calcRowSize } from "../../utils/calculators";
import "./ColorsTable.scss";

export function ColorsTable({ width, height }) {
  const [colorState, setColorState] = useState(generateRandomColor());

  const rowSize = calcRowSize(height);
  const squareSize = calcSquareSize(height, width);
  fillSquareComponentsInMatrix(matrix, colorState, setColorState, squareSize);

  console.log(squareSize);
  return (
    <div
      className="tableContainer"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {matrix.map((row, i) => (
        <Row key={i} row={row} size={rowSize} />
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

ColorsTable.defaultProps = {};
