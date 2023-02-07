import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ color, setColors }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={() => setColors()}
    ></div>
  );
}

Square.propTypes = {
  color: PropTypes.string,
  setColors: PropTypes.func.isRequired,
};

Square.defaultProps = {
  color: "lime",
};
