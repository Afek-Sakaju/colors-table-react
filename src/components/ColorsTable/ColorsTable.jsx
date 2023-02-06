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

  const rowSize = calcRowSize();
  const squareSize = calcSquareSize();
  fillSquareComponentsInMatrix(matrix, colorState, setColorState, squareSize);

  matrix.forEach((row) => {
    row.forEach((e) => {
      console.log(e.key);
    });
  });

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
