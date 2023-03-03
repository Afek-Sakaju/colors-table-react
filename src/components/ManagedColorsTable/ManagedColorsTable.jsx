import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ColorsTable } from "../../base-components";
import {
  createMatrix,
  areValidIndexes,
  generateNewSquareColor,
} from "../../utils";
import { countColorsInMatrix } from "../../utils";

export function ManagedColorsTable({
  backgroundColor,
  rows,
  columns,
  allowRepeatedColors,
  tableColorList,
  onChange,
}) {
  const statesMatrix = createMatrix({
    rows,
    columns,
    colorsList: tableColorList,
  });

  const [dataMatrix, setDataMatrix] = useState(statesMatrix);

  useEffect(() => {
    const colorsState = countColorsInMatrix(statesMatrix);
    onChange?.(colorsState);
  }, []);

  const onClick = (id) => {
    const [i, j] = id.split("~");
    if (!areValidIndexes([i, j])) return;

    setDataMatrix?.((mat) => {
      const nextColor = generateNewSquareColor({
        prevColor: mat[i][j].color,
        allowRepeatedColors,
        colorsList: tableColorList,
      });

      mat[i][j].color = nextColor;
      const colorsState = countColorsInMatrix(mat);
      onChange?.(colorsState);
      return [...mat];
    });
  };

  return (
    <ColorsTable
      dataMatrix={dataMatrix}
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
  tableColorList: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

ManagedColorsTable.defaultProps = {
  backgroundColor: undefined,
  rows: 1,
  columns: 1,
  allowRepeatedColors: true,
  tableColorList: ["black"],
  onChange: undefined,
};
