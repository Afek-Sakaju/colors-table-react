import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ value, setValue, style }) {
  const newStyle = { backgroundColor: value, ...style };

  return (
    <div className="square" style={newStyle} onClick={() => setValue()}></div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  style: PropTypes.object,
};

Square.defaultProps = {};
