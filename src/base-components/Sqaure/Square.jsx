import React from "react";
import PropTypes from "prop-types";

import "./Square.scss";
import { generateRandomColor } from "../../utils/functions";

export function Square({ colors, setColor, i, j }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: colors[i][j] }}
      onClick={() => {
        setColor((statesMatrix) => {
          statesMatrix[i][j] = generateRandomColor();
          return [...statesMatrix];
        });
      }}
    ></div>
  );
}

Square.propTypes = {
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
};

Square.defaultProps = {};
