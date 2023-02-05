import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ value, setValue, style }) {
  Object.assign(
    {
      backgroundColor: value,
      opacity: 0.7,
    },
    style
  );

  return (
    <div className="square" style={style} onClick={() => setValue()}></div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  style: PropTypes.object,
};

Square.defaultProps = {};
