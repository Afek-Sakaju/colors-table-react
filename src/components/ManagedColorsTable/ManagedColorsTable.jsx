import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { ColorsTable } from "../../base-components";
import {
  createMatrix,
  areValidIndexes,
  generateNewSquareColor,
  countColorsInMatrix,
} from "../../utils";

export function ManagedColorsTable({
  backgroundColor,
  columns,
  rows,
  allowRepeatedColors,
  tableColorList,
  onChange,
}) {
  const [, setR] = useState(0);
  const [colors, setColors] = useState(tableColorList);

  const statesMatrix = useMemo(
    () =>
      createMatrix({
        rows,
        columns,
        colorsList: colors,
      }),
    [rows, columns, colors]
  );

  const [colorsMatrix, setColorsMatrix] = useState(statesMatrix);
  useEffect(() => {
    setColorsMatrix(statesMatrix);
  }, [statesMatrix]);

  useEffect(() => {
    setInterval(() => {
      setR((r) => {
        if ((r + 1) % 3 === 0) {
          setColors((colors) => colors.slice(1));
        }
        return r + 1;
      });
      console.log("interval run!");
    }, 3000);
  }, []);

  useEffect(() => {
    const colorsState = countColorsInMatrix(statesMatrix);
    onChange?.(colorsState);
  }, []);

  const onClick = (id) => {
    const [i, j] = id.split("~");
    if (!areValidIndexes([i, j])) return;

    setColorsMatrix?.((mat) => {
      const nextColor = generateNewSquareColor({
        prevColor: mat[i][j],
        allowRepeatedColors,
        colorsList: tableColorList,
      });

      if (mat?.[i]?.[j]) mat[i][j] = nextColor;
      const colorsState = countColorsInMatrix(mat);
      onChange?.(colorsState);
      return [...mat];
    });
  };

  return (
    <ColorsTable
      colorsMatrix={colorsMatrix}
      onClick={onClick}
      backgroundColor={backgroundColor}
    />
  );
}

ManagedColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  tableColorList: PropTypes.array,
  onChange: PropTypes.func,
};

ManagedColorsTable.defaultProps = {
  backgroundColor: "white",
  rows: 1,
  columns: 1,
  allowRepeatedColors: true,
  tableColorList: ["black"],
  onChange: undefined,
};
