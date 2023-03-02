import React from "react";
import PropTypes from "prop-types";
import "./Square.scss";

export function Square({ index, id, color, onClick }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onClick={() => onClick?.(id)}
      // onContextMenuCapture={() => console.log("Hi Afek")}
    >
      {index}
    </div>
  );
}

Square.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

Square.defaultProps = {
  color: "black",
  onClick: undefined,
  id: "undefined~undefined",
};
