import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import {
  generateUniqueId,
  createMatrix,
  generateRandomColor,
} from "../../utils";
import { Row } from "../";

export function ColorsTable({
  width,
  height,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
}) {
  const statesMatrix = createMatrix(
    rows,
    columns,
    generateRandomColor,
    tableColorList
  );
  const [colors, setColor] = useState(statesMatrix);

  return (
    <div className="tableContainer" style={{ width: width, height: height }}>
      {statesMatrix.map((row, i) => (
        <Row
          row={row}
          colors={colors}
          setColor={setColor}
          allowRepeatedColors={allowRepeatedColors}
          i={i}
          key={generateUniqueId()}
        />
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
};

ColorsTable.defaultProps = {
  width: "1200px",
  height: "420px",
  rows: 3,
  columns: 4,
  allowRepeatedColors: false,
  tableColorList: ["red", "green", "blue"],
};
