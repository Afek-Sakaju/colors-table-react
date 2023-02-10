import React from "react";
import PropTypes from "prop-types";
import { Square } from "../../base-components";
import { generateUniqueId } from "../../utils/functions";
import "./Row.scss";

export function Row({ row, colors, setColor, i }) {
  return (
    <div className="row">
      {row.map((_color, j) => (
        <Square
          colors={colors}
          setColor={setColor}
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
  i: PropTypes.number.isRequired,
};

Row.defaultProps = {};
