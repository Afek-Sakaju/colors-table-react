import React from "react";
import PropTypes from "prop-types";
import "./Row.scss";

export function Row({ row }) {
  return <div className="row">{row}</div>;
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
};

Row.defaultProps = {};
