import React from "react";
import PropTypes from "prop-types";
import { Square } from "../../base-components";
import { generateUniqueId } from "../../utils";
import "./Row.scss";

export function Row({
  row,
  colors,
  setColor,
  allowRepeatedColors,
  tableColorList,
  i,
}) {
  return (
    <div className="row">
      {row.map((_color, j) => (
        <Square
          colors={colors}
          setColor={setColor}
          allowRepeatedColors={allowRepeatedColors}
          tableColorList={tableColorList}
          j={j}
          i={i}
          key={generateUniqueId()}
        />
      ))}
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
  allowRepeatedColors: PropTypes.bool,
  i: PropTypes.number.isRequired,
  tableColorList: PropTypes.array,
};

Row.defaultProps = {
  allowRepeatedColors: false,
  tableColorList: ["red", "green", "blue"],
};
