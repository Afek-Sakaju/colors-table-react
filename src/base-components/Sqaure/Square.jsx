import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ color, setColor }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={() => setColor()}
    ></div>
  );
}

Square.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func,
};

Square.defaultProps = {
  color: "rgba(0,0,0,0.5)",
  setColor: undefined,
};
