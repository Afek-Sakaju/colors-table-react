import React, { useState } from "react";
import PropTypes from "prop-types";
import { matrix, matrixColumnCount, matrixRowCount } from "../../utils/consts";
import { Row } from "../";
import {
  generateRandomColor,
  fillSquareComponentsInMatrix,
} from "../../utils/functions";
import "./ColorsTable.scss";

export function ColorsTable({ width, height }) {
  const [colorState, setColorState] = useState(generateRandomColor());

  const squareSize = {
    width: `${width / matrixRowCount}px`,
    height: `${height / matrixColumnCount}px`,
  };

  fillSquareComponentsInMatrix(matrix, colorState, setColorState, squareSize);

  console.log(squareSize);
  return (
    <div
      className="tableContainer"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {matrix.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

ColorsTable.defaultProps = {};
