import React from "react";
import PropTypes from "prop-types";
import "./ColorsTable.scss";
import { Square } from "../";
import { buildIdFromIndexes, ID_SEPARATOR } from "../../utils";
function ColorsTable({
  backgroundColor,
  dataMatrix,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "table-container",
    style: {
      backgroundColor: backgroundColor
    }
  }, dataMatrix?.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row"
  }, row?.map((item, j) => {
    const id = buildIdFromIndexes(i, j, ID_SEPARATOR);
    return /*#__PURE__*/React.createElement(Square, {
      key: id,
      id: id,
      color: item.color,
      onClick: onClick
    });
  }))));
}
ColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  dataMatrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string
  }))),
  onClick: PropTypes.func
};
ColorsTable.defaultProps = {
  backgroundColor: undefined,
  dataMatrix: undefined,
  onClick: undefined
};
export default ColorsTable;