import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import { createMatrix, generateRandomColor } from "../../utils";
import { Square } from "../../base-components";

export function ColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
  onChange,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorGenerateFunc: generateRandomColor,
    colorsList: tableColorList,
  });
  const [colors, setColor] = useState(statesMatrix);

  const onClick = (id) => {
    const [i, j] = id.split("~");

    if (i === undefined || j === undefined) return;

    const prevColor = colors[i][j];
    let color,
      shouldRegenerate = false;

    do {
      color = generateRandomColor();
      shouldRegenerate = color === prevColor && shouldRegenerate;
    } while (shouldRegenerate);

    setColor?.((statesMatrix) => {
      /*
      let generatedColor = generateRandomColor(tableColorList);
      const shouldRegenerate =
          !allowRepeatedColors && tableColorList?.length > 1;

      // if there is one color and not allowed repeat, the game will be stuck
      if (shouldRegenerate) {
        while (statesMatrix[i][j] === generatedColor) {
          generatedColor = generateRandomColor(tableColorList);
        }
      }

      statesMatrix[i][j] = generatedColor;
      */

      statesMatrix[i][j] = color;
      return [...statesMatrix];
    });

    //onChange({ remainTotalColors: getTotalColorsInMatrix(matrixColors, colors), currentColor, nextColor });
  };

  return (
    <div
      className="tableContainer"
      style={{ backgroundColor: backgroundColor }}
    >
      {statesMatrix.map((_row, i) => (
        <div className="row">
          {colors[i].map((color, j) => {
            return (
              <Square
                id={`${i}~${j}`}
                color={color}
                onClick={onClick}
                key={`${i}~${j}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
};

ColorsTable.defaultProps = {
  backgroundColor: "white",
  rows: 3,
  columns: 4,
  allowRepeatedColors: true,
  tableColorList: ["red", "green", "blue"],
};
