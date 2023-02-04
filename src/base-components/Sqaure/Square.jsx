import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ value, setValue, height, width }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: value, opacity: 0.7, height, width }}
      onClick={() => setValue()}
    ></div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
};

Square.defaultProps = {
  height: "10%",
  width: "10%",
};
