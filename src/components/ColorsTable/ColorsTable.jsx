import React, { useState } from "react";
import PropTypes from "prop-types";
import { matrix } from "../../utils/consts";
import { Row } from "../";
import {
  generateRandomColor,
  fillSquareComponentsInMatrix,
  generateUniqueId,
} from "../../utils/functions";
import "./ColorsTable.scss";

export function ColorsTable({ width, height }) {
  const [colorState, setColorState] = useState(generateRandomColor());

  fillSquareComponentsInMatrix(matrix, colorState, setColorState);

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
