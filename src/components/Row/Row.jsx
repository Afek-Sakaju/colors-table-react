import React from "react";
import PropTypes from "prop-types";
import { Square } from "../../base-components";
import { generateUniqueId } from "../../utils";
import "./Row.scss";

// todo : consider to remove this file
export function Row({  children}) {
  
  return (
      <div className="row">
        {children}
      </div>
  );
}

Row.propTypes = {
  colors: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  i: PropTypes.number.isRequired,
};

Row.defaultProps = {
  onClick: undefined,
};
