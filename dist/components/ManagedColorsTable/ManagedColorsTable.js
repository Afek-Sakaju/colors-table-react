/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ColorsTable } from "../../base-components";
import { createMatrix, pickColor, areInvalidIndexes, getItemsColorsCount, extractIndexesFromId, ID_SEPARATOR } from "../../utils";
function ManagedColorsTable({
  backgroundColor,
  colors,
  rows,
  columns,
  allowRepeatedColors,
  onChange
}) {
  const [dataMatrix, setDataMatrix] = useState(createMatrix({
    rows,
    columns,
    colorsList: colors
  }));
  useEffect(() => {
    const colorsState = getItemsColorsCount(dataMatrix);
    onChange?.(colorsState);
  }, []);
  const onClick = id => {
    const [i, j] = extractIndexesFromId(id, ID_SEPARATOR);
    if (areInvalidIndexes({
      i,
      j,
      mat: dataMatrix
    })) return;
    setDataMatrix?.(mat => {
      console.log("click");
      const nextColor = pickColor({
        prevColor: mat[i][j].color,
        allowRepeatedColors,
        colorsList: colors
      });
      mat[i][j].color = nextColor;
      const colorsState = getItemsColorsCount(mat);
      onChange?.(colorsState);
      return [...mat];
    });
  };
  return /*#__PURE__*/React.createElement(ColorsTable, {
    dataMatrix: dataMatrix,
    onClick: onClick,
    backgroundColor: backgroundColor
  });
}
ManagedColorsTable.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.number,
  columns: PropTypes.number,
  backgroundColor: PropTypes.string,
  allowRepeatedColors: PropTypes.bool,
  onChange: PropTypes.func
};
ManagedColorsTable.defaultProps = {
  colors: ["black"],
  rows: 1,
  columns: 1,
  backgroundColor: undefined,
  allowRepeatedColors: true,
  onChange: undefined
};
export default ManagedColorsTable;