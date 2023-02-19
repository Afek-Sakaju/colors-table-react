import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import {
  createMatrix,
  generateRandomColor,
  getTotalColorsInMatrix,
} from "../../utils";
import { Square } from "../../base-components";

export function ColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
  onChange,
  enemyColors,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorGenerateFunc: generateRandomColor,
    colorsList: tableColorList,
  });
  const [colorsMatrix, setColor] = useState(statesMatrix);

  const onClick = (id) => {
    const [i, j] = id.split("~");
    if (i === undefined || j === undefined) return;

    const prevColor = colorsMatrix[i][j];
    let color,
      shouldRegenerate = !allowRepeatedColors;

    do {
      color = generateRandomColor(tableColorList);
      shouldRegenerate = color === prevColor && shouldRegenerate;
    } while (shouldRegenerate);

    setColor?.((statesMatrix) => {
      statesMatrix[i][j] = color;
      return [...statesMatrix];
    });

    onChange?.({
      remainTotalColors: getTotalColorsInMatrix({ colorsMatrix, enemyColors }),
      currentColor,
      nextColor,
    });
  };

  return (
    <div
      className="tableContainer"
      style={{ backgroundColor: backgroundColor }}
    >
      {statesMatrix.map((_, i) => (
        <div className="row" key={i}>
          {colorsMatrix[i].map((color, j) => {
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
  onChange: PropTypes.func,
  enemyColors: PropTypes.array,
};

ColorsTable.defaultProps = {
  backgroundColor: "white",
  rows: 3,
  columns: 4,
  allowRepeatedColors: true,
  tableColorList: ["red", "green", "blue"],
  onChange: undefined,
  enemyColors: ["red"],
};
