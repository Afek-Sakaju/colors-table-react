import React from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import { Square } from "../";
import { buildIdFromIndexes, ID_SEPARATOR } from "../../utils";

export function ColorsTable({ backgroundColor, dataMatrix, onClick }) {
  return (
    <div
      className="table-container"
      style={{ backgroundColor: backgroundColor }}
    >
      {colorsMatrix?.map((_, i) => (
        <div className="row" key={i}>
          {colorsMatrix[i].map((color, j) => {
            return (
              <Square key={id} id={id} color={item.color} onClick={onClick} />
            );
          })}
        </div>
      ))}
    </div>
  );
}

ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  dataMatrix: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
      })
    )
  ),
  onClick: PropTypes.func,
};

ColorsTable.defaultProps = {
  backgroundColor: undefined,
  dataMatrix: undefined,
  onClick: undefined,
};
