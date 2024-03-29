import React from "react";
import PropTypes from "prop-types";

import "./ColorsTable.scss";
import Square from "../Sqaure/Square";
import { buildIdFromIndexes, ID_SEPARATOR } from "../../utils";

export default function ColorsTable({ backgroundColor, dataMatrix, onClick }) {
  return (
    <div className="table-container" style={{ backgroundColor }}>
      {dataMatrix?.map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="row">
          {row?.map((item, j) => {
            const id = buildIdFromIndexes(i, j, ID_SEPARATOR);
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
