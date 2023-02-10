import React from "react";
import PropTypes from "prop-types";

import "./Square.scss";
import {
  generateRandomColor,
  allowRepeatedColors,
  gameColorList,
} from "../../utils";

export function Square({ colors, setColor, i, j }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: colors[i][j] }}
      onClick={() => {
        setColor((statesMatrix) => {
          // if there is one color and not allowed repeat, the game will be stuck
          if (!allowRepeatedColors && gameColorList.length > 1) {
            let nextColor = generateRandomColor();
            while (statesMatrix[i][j] === nextColor) {
              nextColor = generateRandomColor();
            }
            // problem here: it override itself and this onclick somehow runs twice
            statesMatrix[i][j] = nextColor;
          } else statesMatrix[i][j] = generateRandomColor();

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
