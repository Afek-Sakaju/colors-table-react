import React, { useState } from "react";
import PropTypes from "prop-types";
import { statesMatrix } from "../../utils/consts";
import { Row } from "../";
import { generateUniqueId } from "../../utils/functions";
import "./ColorsTable.scss";

export function ColorsTable({ width, height }) {
  const [colors, setColor] = useState(statesMatrix);

  return (
    <div className="tableContainer" style={{ width: width, height: height }}>
      {statesMatrix.map((row, i) => (
        <Row
          row={row}
          colors={colors}
          setColor={setColor}
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
};

ColorsTable.defaultProps = {
  width: "1200px",
  height: "420px",
};
