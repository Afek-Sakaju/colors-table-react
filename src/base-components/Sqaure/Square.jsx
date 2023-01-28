import React from "react";
import PropTypes from "prop-types";

export function Square({ value, setValue }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: value }}
      onClick={setValue()}
    ></div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

Square.defaultProps = {};
