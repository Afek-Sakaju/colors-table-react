import React, { useState } from "react";
import PropTypes from "prop-types";
import { matrix, matrixColumns, matrixRows } from "../../utils/consts";
import { Row } from "../";
import {
  fillSquareComponentsInMatrix,
  generateUniqueId,
  createMatrix,
} from "../../utils/functions";
import "./ColorsTable.scss";

export function ColorsTable({ width, height }) {
  const statesMatrix = createMatrix(matrixColumns, matrixRows);
  const [color, setColor] = useState(statesMatrix);

  fillSquareComponentsInMatrix(matrix, color, setColor);

  return (
    <div className="tableContainer" style={{ width: width, height: height }}>
      {matrix.map((row) => (
        <Row key={generateUniqueId()} row={row} />
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ColorsTable.defaultProps = {
  width: "1200px",
  height: "420px",
};
