import React from "react";
import PropTypes from "prop-types";
import "./Row.scss";

export function Row({ row, size }) {
  return (
    <div className="row" style={size}>
      {row}
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.array,
  size: PropTypes.object,
};

Row.defaultProps = {};
