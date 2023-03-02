import React from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import { Square } from "../";

export function ColorsTable({ backgroundColor, colorsMatrix, onClick }) {
  return (
    <div
      className="table-container"
      style={{ backgroundColor: backgroundColor }}
    >
      {colorsMatrix?.map((row, i) => (
        <div key={i} className="row">
          {row.map((color, j) => (
            <Square
              index={i * row.length + j + 1}
              key={`${i}~${j}`}
              id={`${i}~${j}`}
              color={color}
              onClick={onClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  colorsMatrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  onClick: PropTypes.func,
};

ColorsTable.defaultProps = {
  backgroundColor: "white",
  colorsMatrix: undefined,
  onClick: undefined,
};
