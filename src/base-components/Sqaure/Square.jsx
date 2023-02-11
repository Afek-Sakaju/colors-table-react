import React from "react";
import PropTypes from "prop-types";

import "./Square.scss";
import { generateRandomColor } from "../../utils";

export function Square({
  colors,
  setColor,
  allowRepeatedColors,
  tableColorList,
  i,
  j,
}) {
  return (
    <div
      className="square"
      style={{ backgroundColor: colors[i][j] }}
      onClick={() => {
        setColor((statesMatrix) => {
          // if there is one color and not allowed repeat, the game will be stuck
          if (!allowRepeatedColors && tableColorList.length > 1) {
            let nextColor = generateRandomColor(tableColorList);
            while (statesMatrix[i][j] === nextColor) {
              nextColor = generateRandomColor(tableColorList);
            }
            statesMatrix[i][j] = nextColor;
          } else statesMatrix[i][j] = generateRandomColor(tableColorList);

          return [...statesMatrix];
        });
      }}
    ></div>
  );
}

Square.propTypes = {
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
};

Square.defaultProps = {
  allowRepeatedColors: false,
  tableColorList: ["red", "green", "blue"],
};
