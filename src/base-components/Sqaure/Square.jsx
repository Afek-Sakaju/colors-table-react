import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ color, setColor, style }) {
  const newStyle = { backgroundColor: color, ...style };

  return (
    <div className="square" style={newStyle} onClick={() => setColor()}></div>
  );
}

Square.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func,
  style: PropTypes.shape({
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};

Square.defaultProps = {
  color: "rgba(0,0,0,0.5)",
  setColor: undefined,
  style: { height: "50px", width: "50px" },
};
