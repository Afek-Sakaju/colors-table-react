import React, { useState } from "react";
import PropTypes from "prop-types";
import { matrix, matrixColumnCount, matrixRowCount } from "../../utils/consts";
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

  return (
    <div className="row" style={{ height: `${height}px`, width: `${width}px` }}>
      {matrix}
    </div>
  );
}

ColorsTable.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ColorsTable.defaultProps = {};
